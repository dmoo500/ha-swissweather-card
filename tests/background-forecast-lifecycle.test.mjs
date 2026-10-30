import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

const source = await readFile(new URL('../src/cards/animated-background/swissweather-bg-card.ts', import.meta.url), 'utf8');
const parsed = ts.createSourceFile('background.ts', source, ts.ScriptTarget.Latest, true);
const cardClass = parsed.statements.find(node => ts.isClassDeclaration(node));
const methods = cardClass.members.filter(member =>
  ['updated', '_loadDailyForecast', '_loadHourlyForecast'].includes(member.name?.getText(parsed))
).map(member => member.getText(parsed)).join('\n');
const { outputText } = ts.transpileModule(`
  class Base { updated() {} }
  class Probe extends Base {
    _syncSvgAnimations() {}
    ${methods}
  }
`, { compilerOptions: { target: ts.ScriptTarget.ES2022 } });
const createProbe = new Function('fetchWeatherForecast', `${outputText}; return new Probe();`);

function probe(fetch) {
  return Object.assign(createProbe(fetch), {
    hass: {},
    config: { entity: 'weather.a' },
    _forecast: [], _hourly: [],
    _dailyRequestId: 0, _hourlyRequestId: 0,
  });
}

async function settle(card) {
  await Promise.resolve();
  await Promise.resolve();
  card.updated(new Map());
}

test('background empty and failed forecasts do not trigger continuous requests', async t => {
  t.mock.method(console, 'warn', () => {});
  for (const fail of [false, true]) {
    let calls = 0;
    const card = probe(async () => {
      calls++;
      if (fail) throw new Error('unavailable');
      return [];
    });
    card.updated(new Map());
    for (let i = 0; i < 10; i++) await settle(card);
    assert.equal(calls, 1);
    assert.equal(card._forecastLoading, false);
  }
});

test('background mode changes load missing types once and day temperatures still load daily data', async () => {
  const calls = [];
  const card = probe(async (_hass, entity, type) => { calls.push([entity, type]); return []; });
  card.config = { entity: 'weather.a', forecast_mode: 'none', show_day_temps: false };
  card.updated(new Map());
  assert.deepEqual(calls, []);
  card.config = { ...card.config, forecast_mode: 'hourly' };
  await settle(card);
  card.config = { ...card.config, show_day_temps: true };
  await settle(card);
  await settle(card);
  card.config = { ...card.config, forecast_mode: 'daily' };
  await settle(card);
  assert.deepEqual(calls, [['weather.a', 'hourly'], ['weather.a', 'daily']]);
});

test('background entity switches ignore stale responses including switching back to the original entity', async () => {
  const pending = [];
  const card = probe((_hass, entity) => new Promise(resolve => pending.push({ entity, resolve })));
  card.updated(new Map());
  card.config = { entity: 'weather.b' };
  card.updated(new Map());
  card.config = { entity: 'weather.a' };
  card.updated(new Map());
  pending[0].resolve([{ temperature: 1 }]);
  pending[1].resolve([{ temperature: 2 }]);
  await settle(card);
  assert.deepEqual(card._forecast, []);
  assert.equal(card._forecastLoading, true);
  pending[2].resolve([{ temperature: 3 }]);
  await settle(card);
  assert.deepEqual(card._forecast, [{ temperature: 3 }]);
  assert.equal(card._forecastLoading, false);
  assert.equal(pending.length, 3);
});
