import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export function validateBadges(readme, manifest) {
  const repository = manifest.repository.url.replace(/^git\+/, '').replace(/\.git$/, '');
  const slug = new URL(repository).pathname.slice(1);
  const major = manifest.devDependencies.typescript.match(/^\^?(\d+)\./)?.[1];
  assert.ok(major, 'Cannot determine the TypeScript major version from package.json');
  const badges = [
    ['badge/HACS-Custom-orange.svg', 'https://github.com/hacs/integration'],
    [`github/v/release/${slug}`, `${repository}/releases`],
    [`github/license/${slug}`, 'LICENSE'],
    [`github/issues-raw/${slug}`, `${repository}/issues`],
    [`github/stars/${slug}`, `${repository}/stargazers`],
    [`github/watchers/${slug}`, `${repository}/watchers`],
    [`github/last-commit/${slug}`, `${repository}/commits/main`],
    ['badge/Maintained%3F-yes-green.svg', repository],
    [
      `badge/TypeScript-${major}-blue?logo=typescript&logoColor=white`,
      'https://www.typescriptlang.org/',
    ],
  ];
  const matches = [...readme.matchAll(/\[!\[[^\]]*\]\(([^)]+)\)\]\(([^)]+)\)/g)];
  for (const [image, link] of badges) {
    assert.ok(
      matches.some(
        ([, source, target]) => source === `https://img.shields.io/${image}` && target === link
      ),
      `Missing or outdated README badge: ${image} -> ${link}`
    );
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
  const manifest = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
  validateBadges(readme, manifest);
  console.log('README badges match the repository and TypeScript major version.');
}
