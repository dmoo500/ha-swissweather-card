import assert from 'node:assert/strict';
import test from 'node:test';
import { stableRandom } from '../src/cards/animated-background/background/stable-random.ts';

test('returns the same scene variation for the same index and salt', () => {
  assert.equal(stableRandom(12, 3), stableRandom(12, 3));
});

test('returns different deterministic variations for different salts', () => {
  assert.notEqual(stableRandom(12, 3), stableRandom(12, 4));
});

test('keeps scene variations in the zero-to-one range', () => {
  for (let index = 0; index < 100; index++) {
    const value = stableRandom(index, 7);
    assert.ok(value >= 0 && value < 1);
  }
});
