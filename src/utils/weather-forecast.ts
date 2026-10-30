import type { HomeAssistant, WeatherForecast } from '../types/home-assistant';

type ForecastType = 'daily' | 'hourly';

interface WeatherForecastResponse {
  response?: Record<string, { forecast?: WeatherForecast[] } | undefined>;
}

export interface WeatherForecastResult {
  forecast: WeatherForecast[];
  error?: unknown;
}

export async function fetchWeatherForecast(
  hass: Pick<HomeAssistant, 'callWS'>,
  entityId: string,
  forecastType: ForecastType
): Promise<WeatherForecast[]> {
  const request = {
    type: 'call_service',
    domain: 'weather',
    service: 'get_forecasts',
    service_data: { entity_id: entityId, type: forecastType },
    return_response: true,
  };
  const result = await hass.callWS<WeatherForecastResponse>(request);
  const forecast = result?.response?.[entityId]?.forecast;
  return Array.isArray(forecast) ? forecast : [];
}

export async function fetchWeatherForecastsIndependently(
  hass: Pick<HomeAssistant, 'callWS'>,
  entityId: string
): Promise<{ daily: WeatherForecastResult; hourly: WeatherForecastResult }> {
  const [daily, hourly] = await Promise.allSettled([
    fetchWeatherForecast(hass, entityId, 'daily'),
    fetchWeatherForecast(hass, entityId, 'hourly'),
  ]);

  return {
    daily:
      daily.status === 'fulfilled'
        ? { forecast: daily.value }
        : { forecast: [], error: daily.reason },
    hourly:
      hourly.status === 'fulfilled'
        ? { forecast: hourly.value }
        : { forecast: [], error: hourly.reason },
  };
}
