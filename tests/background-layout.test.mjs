import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
import { backgroundLayoutStyles } from '../src/cards/animated-background/styles/layout.ts';
import { backgroundForecastStyles } from '../src/cards/animated-background/styles/forecast.ts';
import { photoBaseStyles } from '../src/cards/animated-background/styles/photo/base.ts';

test('background content reserves separate flow rows instead of overlapping absolute positions', () => {
  const layout = backgroundLayoutStyles.cssText;
  const forecast = backgroundForecastStyles.cssText;
  assert.match(layout, /:host\s*\{[^}]*height:\s*var\(--bg-card-height, auto\);/s);
  assert.match(layout, /\.weather-content\s*\{[^}]*overflow-y:\s*auto;/s);
  assert.match(layout, /\.weather-content\s*\{[^}]*display:\s*grid;/s);
  assert.match(layout, /\.temperature\s*\{[^}]*grid-area:\s*1\s*\/\s*1;/s);
  assert.match(forecast, /\.condition\s*\{[^}]*grid-area:\s*1\s*\/\s*2;/s);
  assert.match(forecast, /\.weather-details\s*\{[^}]*grid-area:\s*2\s*\/\s*1\s*\/\s*3\s*\/\s*-1;/s);
  assert.match(forecast, /\.weather-details\s*\{[^}]*flex-wrap:\s*wrap;/s);
  assert.match(forecast, /\.forecast-mini\s*\{[^}]*grid-area:\s*3\s*\/\s*1\s*\/\s*4\s*\/\s*-1;/s);
  assert.doesNotMatch(forecast, /position:\s*absolute/);
});

test('Sections uses content height by default and preserves explicit row allocations', async () => {
  const source = await readFile(new URL('../src/cards/animated-background/swissweather-bg-card.ts', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('background.ts', source, ts.ScriptTarget.Latest, true);
  const card = parsed.statements.find(ts.isClassDeclaration);
  const method = card.members.find(member => member.name?.getText(parsed) === 'getGridOptions');
  const { outputText } = ts.transpileModule(`class Probe { ${method.getText(parsed)} }`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  });
  const probe = new Function(`${outputText}; return new Probe();`)();
  assert.equal(probe.getGridOptions().rows, 'auto');
  probe.config = { grid_options: { rows: 3, columns: 6 } };
  assert.equal(probe.getGridOptions().rows, 3);
  assert.equal(probe.getGridOptions().columns, 6);
});

test('narrow cards stack content and cap temperature text using their own width', () => {
  assert.match(backgroundLayoutStyles.cssText, /container-type:\s*inline-size/);
  assert.match(backgroundLayoutStyles.cssText, /font-size:\s*min\(var\(--bg-temp-font-size, 36px\), 22cqi\)/);
  assert.match(backgroundForecastStyles.cssText, /@container \(max-width: 320px\)/);
  assert.match(backgroundForecastStyles.cssText, /\.condition\s*\{\s*grid-area:\s*2\s*\/\s*1/);
});

test('photo and SVG scenes stay behind content without a fixed minimum overflowing the card', () => {
  assert.match(backgroundLayoutStyles.cssText, /\.img-svg,\s*\.img-photo\s*\{[^}]*z-index:\s*0;/s);
  assert.match(backgroundLayoutStyles.cssText, /\.img-svg\s*\{[^}]*min-height:\s*0;/s);
  assert.match(photoBaseStyles.cssText, /\.img-photo\s*\{[^}]*min-height:\s*0;/s);
  assert.match(backgroundForecastStyles.cssText, /\.condition,[^{]*\{[^}]*z-index:\s*1;/s);
});
