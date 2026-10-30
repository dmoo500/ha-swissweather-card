import assert from 'node:assert/strict';
import test from 'node:test';
import { backgroundLayoutStyles } from '../src/cards/animated-background/styles/layout.ts';
import { backgroundForecastStyles } from '../src/cards/animated-background/styles/forecast.ts';
import { photoBaseStyles } from '../src/cards/animated-background/styles/photo/base.ts';

test('background content reserves separate flow rows instead of overlapping absolute positions', () => {
  const layout = backgroundLayoutStyles.cssText;
  const forecast = backgroundForecastStyles.cssText;
  assert.match(layout, /:host\s*\{[^}]*height:\s*auto;/s);
  assert.match(layout, /\.weather-content\s*\{[^}]*display:\s*grid;/s);
  assert.match(layout, /\.temperature\s*\{[^}]*grid-area:\s*1\s*\/\s*1;/s);
  assert.match(forecast, /\.condition\s*\{[^}]*grid-area:\s*1\s*\/\s*2;/s);
  assert.match(forecast, /\.weather-details\s*\{[^}]*grid-area:\s*2\s*\/\s*1\s*\/\s*3\s*\/\s*-1;/s);
  assert.match(forecast, /\.weather-details\s*\{[^}]*flex-wrap:\s*wrap;/s);
  assert.match(forecast, /\.forecast-mini\s*\{[^}]*grid-area:\s*3\s*\/\s*1\s*\/\s*4\s*\/\s*-1;/s);
  assert.doesNotMatch(forecast, /position:\s*absolute/);
});

test('photo and SVG scenes stay behind content without a fixed minimum overflowing the card', () => {
  assert.match(backgroundLayoutStyles.cssText, /\.img-svg,\s*\.img-photo\s*\{[^}]*z-index:\s*0;/s);
  assert.match(backgroundLayoutStyles.cssText, /\.img-svg\s*\{[^}]*min-height:\s*0;/s);
  assert.match(photoBaseStyles.cssText, /\.img-photo\s*\{[^}]*min-height:\s*0;/s);
  assert.match(backgroundForecastStyles.cssText, /\.condition,[^{]*\{[^}]*z-index:\s*1;/s);
});
