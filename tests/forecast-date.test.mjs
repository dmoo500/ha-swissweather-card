import assert from 'node:assert/strict';
import test from 'node:test';
import {
  filterForecastToDateKeys,
  getLocalForecastDateKey,
} from '../src/charts/forecast-date.ts';

test('gets the local calendar date from a forecast datetime', () => {
  assert.equal(getLocalForecastDateKey('2026-11-06T07:00:00'), '2026-11-06');
});

test('returns undefined for an invalid forecast datetime', () => {
  assert.equal(getLocalForecastDateKey('not-a-date'), undefined);
});

test('excludes hourly entries that fall beyond the supplied daily forecast dates', () => {
  const forecast = [
    { datetime: '2026-11-05T23:00:00', temperature: 7 },
    { datetime: '2026-11-06T07:00:00', temperature: 8 },
  ];

  assert.deepEqual(filterForecastToDateKeys(forecast, ['2026-11-05']), [forecast[0]]);
});
