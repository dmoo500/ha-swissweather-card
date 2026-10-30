import assert from 'node:assert/strict';
import test from 'node:test';
import {
  renderDrizzleParticles,
  renderHailParticles,
  renderLightningBolts,
  renderLightningFlashes,
  renderRainParticles,
  renderSnowParticles,
} from '../src/cards/animated-background/effects/weather-particles.ts';

test('renders requested weather particle counts with the expected classes', () => {
  const cases = [
    [renderRainParticles(4, false), 'rain-drop'],
    [renderSnowParticles(3, false), 'snow-flake'],
    [renderDrizzleParticles(2, false), 'rain-drizzle'],
    [renderHailParticles(5, false), 'hail-stone'],
    [renderLightningFlashes(), 'photo-lightning'],
    [renderLightningBolts(), 'photo-lightning-bolt'],
  ];

  for (const [particles, className] of cases) {
    assert.ok(particles.every(particle => particle.strings.join('').includes(className)));
  }

  assert.deepEqual(
    cases.map(([particles]) => particles.length),
    [4, 3, 2, 5, 2, 2]
  );
});
