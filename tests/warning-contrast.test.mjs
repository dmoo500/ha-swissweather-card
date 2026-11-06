import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { warningSeverityStyles } from '../src/utils/warnings/styles.ts';

function luminance(rgb) {
  const channels = rgb.map(value => {
    const channel = value / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

function rgb(hex) {
  return hex.match(/[a-f\d]{2}/gi).map(value => Number.parseInt(value, 16));
}

test('warning text exceeds 4.5:1 contrast throughout both severity gradients', () => {
  const css = warningSeverityStyles.cssText;
  const text = rgb(css.match(/--primary-text-color:\s*(#[a-f\d]{6})/i)[1]);
  const gradients = [...css.matchAll(/linear-gradient\(90deg, (#[a-f\d]{6}) 0%, (#[a-f\d]{6}) 100%\)/gi)];
  assert.equal(gradients.length, 2);
  for (const [, start, end] of gradients) {
    const from = rgb(start);
    const to = rgb(end);
    for (let step = 0; step <= 100; step++) {
      const background = from.map((value, index) => value + (to[index] - value) * step / 100);
      // Expanded descriptions and severity labels render with reduced opacity.
      for (const opacity of [1, 0.85, 0.8, 0.75]) {
        const foreground = text.map((value, index) =>
          value * opacity + background[index] * (1 - opacity)
        );
        const contrast = (luminance(background) + 0.05) / (luminance(foreground) + 0.05);
        assert.ok(contrast >= 4.5, `${start} to ${end}: ${contrast} at ${step}%, opacity ${opacity}`);
      }
    }
  }
  assert.match(css, /color: var\(--primary-text-color\)/);
});

test('standalone warnings and Full Card share the same severity contrast styles', async () => {
  for (const path of [
    '../src/cards/warnings/warning-card.ts',
    '../src/cards/full-card/swissweather-card.styles.ts',
  ]) {
    const source = await readFile(new URL(path, import.meta.url), 'utf8');
    assert.match(source, /import \{ warningSeverityStyles \} from/);
    assert.ok(source.includes('${warningSeverityStyles}'));
  }
});
