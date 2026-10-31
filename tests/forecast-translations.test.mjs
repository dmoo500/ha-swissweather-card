import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

const source = (await readFile(new URL('../src/translations/index.ts', import.meta.url), 'utf8'))
  .replace(/import (\w+) from '(.+\.json)';/g, (_, name, path) =>
    `const ${name} = ${readFileSync(new URL(`../src/translations/${path}`, import.meta.url), 'utf8')};`
  );
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const { getTranslations, getEnglishTranslation, translations } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`
);

test('missing or not-yet-loaded translations fall back to English text', () => {
  assert.equal(getEnglishTranslation('cloudy'), 'Cloudy');
  assert.equal(getEnglishTranslation('hourly_charts.retry_forecast'), 'Retry');
  assert.equal(getEnglishTranslation('hourly_charts.temperature_hours'), translations.en.hourly_charts.temperature_hours);
});

test('production lit-translate fallback registration interpolates unloaded and missing entries', async () => {
  const dataUrl = text => `data:text/javascript;base64,${Buffer.from(text).toString('base64')}`;
  const directory = new URL('../node_modules/lit-translate/', import.meta.url);
  const helpers = dataUrl(await readFile(new URL('helpers.js', directory), 'utf8'));
  const config = dataUrl(await readFile(new URL('config.js', directory), 'utf8'));
  const util = (await readFile(new URL('util.js', directory), 'utf8'))
    .replace('"./helpers"', JSON.stringify(helpers))
    .replace('"./config"', JSON.stringify(config));
  const { registerTranslateConfig, get } = await import(dataUrl(util));
  const entry = await readFile(new URL('../src/index.ts', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('index.ts', entry, ts.ScriptTarget.Latest, true);
  const registration = parsed.statements.find(node =>
    ts.isExpressionStatement(node) && ts.isCallExpression(node.expression) &&
    node.expression.expression.getText(parsed) === 'registerTranslateConfig'
  );
  assert.ok(registration, 'production fallback registration must exist');
  new Function('registerTranslateConfig', 'getEnglishTranslation', registration.getText(parsed))(
    registerTranslateConfig, getEnglishTranslation
  );
  assert.equal(get('hourly_charts.temperature_hours', { hours: 12 }), 'Temperature (next 12h)');
  registerTranslateConfig({ strings: { hourly_charts: {} }, translationCache: {} });
  assert.equal(get('hourly_charts.temperature_hours', { hours: 12 }), 'Temperature (next 12h)');
  registerTranslateConfig({
    strings: { hourly_charts: { temperature_hours: 'Température ({{hours}} prochaines heures)' } },
    translationCache: {},
  });
  assert.equal(get('hourly_charts.temperature_hours', { hours: 12 }), 'Température (12 prochaines heures)');
});

test('unknown translation keys report the missing English entry', t => {
  const warning = t.mock.method(console, 'warn', () => {});
  assert.equal(getEnglishTranslation('missing.message'), '[missing.message]');
  assert.equal(warning.mock.calls.length, 1);
});

test('all supported languages provide forecast status and retry messages', async () => {
  for (const lang of Object.keys(translations)) {
    const { hourly_charts: messages } = JSON.parse(
      await readFile(new URL(`../src/translations/${lang}.json`, import.meta.url), 'utf8')
    );
    for (const key of ['forecast_loading', 'forecast_request_failed', 'no_forecast_data', 'retry_forecast', 'precipitation', 'precipitation_probability']) {
      assert.equal(typeof messages[key], 'string', `${lang}: ${key}`);
      assert.ok(messages[key].length > 0, `${lang}: ${key} must not be empty`);
    }
  }
});

test('French covers every English translation key and preserves interpolation variables', () => {
  const flatten = (value, prefix = '') => Object.entries(value).flatMap(([key, text]) =>
    typeof text === 'string' ? [[`${prefix}${key}`, text]] : flatten(text, `${prefix}${key}.`)
  );
  const english = Object.fromEntries(flatten(translations.en));
  const french = Object.fromEntries(flatten(translations.fr));
  assert.deepEqual(Object.keys(french).sort(), Object.keys(english).sort());
  for (const [key, text] of Object.entries(french)) {
    assert.ok(text.trim().length > 0, `${key} must not be empty`);
    assert.deepEqual(
      [...text.matchAll(/\{\{\w+\}\}/g)].map(match => match[0]).sort(),
      [...english[key].matchAll(/\{\{\w+\}\}/g)].map(match => match[0]).sort(),
      `${key}: interpolation variables`
    );
  }
});

test('French regional locales resolve to French and unsupported languages fall back to English', () => {
  for (const lang of ['fr', 'fr-CH', 'fr_CH', 'FR-fr']) {
    assert.equal(getTranslations(lang), translations.fr, lang);
    assert.equal(getTranslations(lang).cloudy, 'Nuageux');
    assert.equal(getTranslations(lang).hourly_charts.retry_forecast, 'Réessayer');
  }
  for (const lang of ['es', 'rm-CH', '', undefined, null]) {
    assert.equal(getTranslations(lang), translations.en);
  }
  for (const lang of ['de', 'en', 'it']) {
    assert.equal(getTranslations(lang), translations[lang]);
  }
});
