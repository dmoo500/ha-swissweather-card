import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { validateBadges } from '../scripts/validate-badges.mjs';

const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
const manifest = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('README badges match project metadata', () => {
  assert.doesNotThrow(() => validateBadges(readme, manifest));
});

test('badge checks reject outdated TypeScript versions and incorrect repository links', () => {
  const nextVersion = structuredClone(manifest);
  nextVersion.devDependencies.typescript = '^7.0.0';
  assert.throws(
    () => validateBadges(readme, nextVersion),
    /Missing or outdated README badge: badge\/TypeScript-7/
  );
  assert.throws(
    () => validateBadges(readme.replace('/stargazers)', '/issues)'), manifest),
    /Missing or outdated README badge: github\/stars/
  );
  assert.throws(
    () => validateBadges(readme.replace('[![HACS]', '[HACS]'), manifest),
    /Missing or outdated README badge: badge\/HACS/
  );
});
