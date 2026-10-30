import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('fog bands reference defined SVG gradients and keep separate animation phases', async () => {
  const source = await readFile(
    new URL('../src/cards/animated-background/background/clouds.ts', import.meta.url), 'utf8'
  );
  const fog = source.slice(source.indexOf('export const fogBG'));
  const ids = new Set([...fog.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
  for (const [, reference] of fog.matchAll(/url\(#([^)]+)\)/g)) {
    assert.ok(ids.has(reference), `Missing SVG paint definition: ${reference}`);
  }
  assert.equal([...fog.matchAll(/stroke="url\(#fogLine1\)"/g)].length, 2);
  assert.match(fog, /begin="0s"/);
  assert.match(fog, /begin="-4s"/);
});
