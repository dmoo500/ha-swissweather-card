import assert from 'node:assert/strict';
import test from 'node:test';
import { getOrderedForecastTemperatures } from '../src/utils/forecast-temperature.ts';

test('daily temperatures default to high on the left and low on the right', () => {
  assert.deepEqual(getOrderedForecastTemperatures(18, 7), [
    { kind: 'high', value: 18 },
    { kind: 'low', value: 7 },
  ]);
});

test('daily temperatures can put low on the left without losing their meaning', () => {
  assert.deepEqual(getOrderedForecastTemperatures(18, 0, 'low_high'), [
    { kind: 'low', value: 0 },
    { kind: 'high', value: 18 },
  ]);
});
