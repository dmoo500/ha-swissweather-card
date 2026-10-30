import assert from 'node:assert/strict';
import test from 'node:test';
import { getPrecipitationValues } from '../src/charts/precipitation-values.ts';

test('distinguishes absent precipitation metrics from explicit zero readings', () => {
  assert.deepEqual(getPrecipitationValues({}), { amount: undefined, probability: undefined });
  assert.deepEqual(getPrecipitationValues({ precipitation: 0, precipitation_probability: 0 }),
    { amount: 0, probability: 0 });
  assert.deepEqual(getPrecipitationValues({ precipitation: 1.2 }),
    { amount: 1.2, probability: undefined });
  assert.deepEqual(getPrecipitationValues({ precipitation_probability: 40 }),
    { amount: undefined, probability: 40 });
});

test('retains precipitation fallback fields and normalizes probability', () => {
  assert.deepEqual(getPrecipitationValues({ rain: 2, pop: 0.4 }),
    { amount: 2, probability: 40 });
  assert.equal(getPrecipitationValues({ probability_of_precipitation: 60 }).probability, 60);
  assert.equal(getPrecipitationValues({ pop: 70 }).probability, 70);
  assert.equal(getPrecipitationValues({ precipitation_probability: 140 }).probability, 100);
  assert.equal(getPrecipitationValues({ precipitation_probability: -1 }).probability, 0);
  assert.deepEqual(getPrecipitationValues({
    precipitation: NaN, rain: 3, precipitation_probability: Infinity, pop: 0,
  }), { amount: 3, probability: 0 });
  assert.deepEqual(getPrecipitationValues({
    precipitation: null, precipitation_probability: '40',
  }), { amount: undefined, probability: undefined });
});
