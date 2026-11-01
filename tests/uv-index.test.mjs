import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
import { html } from 'lit';
import { parseUVIndex, uvLevel, uvStatus, UV_LEVELS } from '../src/cards/uv-index/uv-data.ts';

test('UV parsing distinguishes zero and fractional indices from missing or invalid data', () => {
  for (const [state, value] of [
    ['0', 0],
    ['2.99', 2.99],
    ['11.5', 11.5],
    [' 6.2 ', 6.2],
    ['.5', 0.5],
    ['1e-2', 0.01],
  ]) {
    assert.equal(parseUVIndex(state), value);
  }
  for (const state of [
    '',
    ' ',
    'unknown',
    'unavailable',
    '-1',
    'NaN',
    'Infinity',
    '4 UV',
    '4,2',
    null,
    undefined,
  ]) {
    assert.equal(parseUVIndex(state), undefined, String(state));
  }
  assert.equal(uvStatus(undefined), 'missing');
  assert.equal(uvStatus({ state: 'unknown' }), 'unavailable');
  assert.equal(uvStatus({ state: 'unavailable' }), 'unavailable');
  assert.equal(uvStatus({ state: 'invalid' }), 'invalid');
  assert.equal(uvStatus({ state: '0' }), 'available');
});

test('UV intensity categories cover every threshold without clipping extreme values', () => {
  for (const [value, level] of [
    [0, 'low'],
    [2.99, 'low'],
    [3, 'moderate'],
    [5.99, 'moderate'],
    [6, 'high'],
    [7.99, 'high'],
    [8, 'very_high'],
    [10.99, 'very_high'],
    [11, 'extreme'],
    [20, 'extreme'],
  ]) {
    assert.equal(uvLevel(value).level, level, String(value));
  }
  assert.equal(UV_LEVELS.length, 5);
  for (const value of [-1, Infinity, NaN]) assert.throws(() => uvLevel(value), /Invalid UV index/);
});

test('UV card validates entity configuration and defaults to content-height Sections sizing', async () => {
  const source = await readFile(
    new URL('../src/cards/uv-index/uv-index-card.ts', import.meta.url),
    'utf8'
  );
  const parsed = ts.createSourceFile('card.ts', source, ts.ScriptTarget.Latest, true);
  const card = parsed.statements.find(ts.isClassDeclaration);
  const methods = card.members.filter(member =>
    ['setConfig', 'getGridOptions'].includes(member.name?.getText(parsed))
  );
  const { outputText } = ts.transpileModule(
    `class Probe { ${methods.map(method => method.getText(parsed)).join('\n')} }`,
    {
      compilerOptions: { target: ts.ScriptTarget.ES2022 },
    }
  );
  const probe = new Function(`${outputText}; return new Probe();`)();
  for (const config of [
    {},
    { entity: 'weather.home' },
    { entity: 'sensor.uv', max_entity: 'sun.sun' },
    { entity: 'sensor.uv', reading_type: 'hourly' },
  ]) {
    assert.throws(() => probe.setConfig(config));
  }
  probe.setConfig({ entity: 'sensor.uv', max_entity: 'sensor.uv_max', reading_type: 'current' });
  assert.equal(probe.getGridOptions().rows, 'auto');
  assert.equal(probe.config.entity, 'sensor.uv');
});

test('UV translations and interpolation are complete in all supported languages', async () => {
  const dictionaries = await Promise.all(
    ['en', 'de', 'fr', 'it'].map(
      async language =>
        JSON.parse(
          await readFile(new URL(`../src/translations/${language}.json`, import.meta.url), 'utf8')
        ).uv
    )
  );
  const flatten = value =>
    Object.entries(value).flatMap(([key, text]) =>
      typeof text === 'string'
        ? [[key, text]]
        : flatten(text).map(([child, text]) => [`${key}.${child}`, text])
    );
  const english = Object.fromEntries(flatten(dictionaries[0]));
  for (const dictionary of dictionaries) {
    const entries = Object.fromEntries(flatten(dictionary));
    assert.deepEqual(Object.keys(entries), Object.keys(english));
    for (const [key, text] of Object.entries(entries)) {
      assert.ok(text.trim(), key);
      assert.deepEqual(
        [...text.matchAll(/\{\{\w+\}\}/g)].map(match => match[0]),
        [...english[key].matchAll(/\{\{\w+\}\}/g)].map(match => match[0])
      );
    }
  }
});

test('Full Card UV section is opt-in and shares the same panel in compact and regular modes', async () => {
  const source = await readFile(
    new URL('../src/cards/full-card/swissweather-card.ts', import.meta.url),
    'utf8'
  );
  const parsed = ts.createSourceFile('full.ts', source, ts.ScriptTarget.Latest, true);
  const card = parsed.statements.find(ts.isClassDeclaration);
  const render = card.members.find(member => member.name?.getText(parsed) === 'render');
  const { outputText } = ts.transpileModule(`class Probe { ${render.getText(parsed)} }`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  });
  const probe = new Function(
    'html',
    'use',
    '_t',
    'getOrderedCharts',
    'getWeatherIcon',
    'isDay',
    `${outputText}; return new Probe();`
  )(
    html,
    () => Promise.resolve(),
    key => key,
    () => [],
    () => html``,
    () => true
  );
  probe.hass = { language: 'en' };
  probe._loadedLang = 'en';
  probe._getEntityState = () => ({ state: 'sunny', attributes: { temperature: 15 } });
  probe._renderCurrentWeatherSection = () => html``;
  const panels = template => {
    if (!template || typeof template !== 'object') return [];
    return [
      ...(template.strings?.join('').includes('<swissweather-uv-index') ? [template] : []),
      ...(template.values || []).flatMap(value =>
        Array.isArray(value) ? value.flatMap(panels) : panels(value)
      ),
    ];
  };
  for (const compact_mode of [false, true]) {
    probe.config = { entity: 'weather.home', compact_mode };
    assert.equal(panels(probe.render()).length, 0, 'existing configs do not acquire a UV section');
    probe.config = {
      ...probe.config,
      show_uv: true,
      uv_entity: 'sensor.uv',
      uv_max_entity: 'sensor.max',
      uv_reading_type: 'daily_max',
    };
    const panel = panels(probe.render());
    assert.equal(panel.length, 1);
    assert.ok(panel[0].values.includes('sensor.uv'));
    assert.ok(panel[0].values.includes('sensor.max'));
    assert.ok(panel[0].values.includes('daily_max'));
    probe.config.show_uv = false;
    assert.equal(panels(probe.render()).length, 0);
  }
});
