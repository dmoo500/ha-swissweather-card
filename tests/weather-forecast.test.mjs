import assert from 'node:assert/strict';
import test from 'node:test';
import {
  fetchWeatherForecast,
  fetchWeatherForecastsIndependently,
} from '../src/utils/weather-forecast.ts';

test('requests the selected forecast type and returns its entity forecast', async () => {
  let request;
  const forecasts = [{ datetime: '2026-10-30T12:00:00', temperature: 12 }];
  const hass = {
    async callWS(message) {
      request = message;
      return { response: { 'weather.home': { forecast: forecasts } } };
    },
  };

  assert.deepEqual(await fetchWeatherForecast(hass, 'weather.home', 'hourly'), forecasts);
  assert.deepEqual(request, {
    type: 'call_service',
    domain: 'weather',
    service: 'get_forecasts',
    service_data: { entity_id: 'weather.home', type: 'hourly' },
    return_response: true,
  });
});

test('returns an empty list when the response has no forecast for the entity', async () => {
  const hass = {
    async callWS() {
      return { response: {} };
    },
  };

  assert.deepEqual(await fetchWeatherForecast(hass, 'weather.home', 'daily'), []);
});

test('propagates Home Assistant request failures', async () => {
  const error = new Error('WebSocket unavailable');
  const hass = {
    async callWS() {
      throw error;
    },
  };

  await assert.rejects(fetchWeatherForecast(hass, 'weather.home', 'daily'), error);
});

test('keeps hourly data when the daily forecast request fails', async () => {
  const hourlyForecast = [{ datetime: '2026-10-30T12:00:00', temperature: 12 }];
  const hass = {
    async callWS(message) {
      if (message.service_data.type === 'daily') throw new Error('Daily forecast unavailable');
      return { response: { 'weather.home': { forecast: hourlyForecast } } };
    },
  };

  const result = await fetchWeatherForecastsIndependently(hass, 'weather.home');

  assert.deepEqual(result.daily.forecast, []);
  assert.match(result.daily.error.message, /Daily forecast unavailable/);
  assert.deepEqual(result.hourly.forecast, hourlyForecast);
});

test('keeps daily data when the hourly forecast request fails', async () => {
  const dailyForecast = [{ datetime: '2026-10-30T00:00:00', temperature: 12 }];
  const hass = {
    async callWS(message) {
      if (message.service_data.type === 'hourly') throw new Error('Hourly forecast unavailable');
      return { response: { 'weather.home': { forecast: dailyForecast } } };
    },
  };

  const result = await fetchWeatherForecastsIndependently(hass, 'weather.home');

  assert.deepEqual(result.hourly.forecast, []);
  assert.match(result.hourly.error.message, /Hourly forecast unavailable/);
  assert.deepEqual(result.daily.forecast, dailyForecast);
});
