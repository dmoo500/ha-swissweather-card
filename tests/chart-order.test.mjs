import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
import { getChartOrder, getOrderedCharts } from '../src/cards/full-card/chart-order.ts';

test('UV keeps its previous leading position for configurations without a UV order entry', () => {
  assert.deepEqual(
    getOrderedCharts({ chartOrder: ['wind', 'forecast'], showUV: true }).map(item => item.chart),
    ['uv', 'wind', 'forecast']
  );
  assert.deepEqual(getChartOrder(['wind', 'forecast']), ['uv', 'wind', 'forecast']);
});

test('UV follows its configured position without adding an hourly title', () => {
  assert.deepEqual(getOrderedCharts({ chartOrder: ['forecast', 'uv', 'wind'], showUV: true }), [
    { chart: 'forecast', showHourlyTitle: false },
    { chart: 'uv', showHourlyTitle: false },
    { chart: 'wind', showHourlyTitle: true },
  ]);
  const order = ['wind', 'uv', 'forecast'];
  assert.deepEqual(getChartOrder(order), order);
  assert.notEqual(getChartOrder(order), order);
});

test('puts the hourly forecast title before the first hourly chart in configured order', () => {
  const charts = getOrderedCharts({
    chartOrder: ['forecast', 'wind', 'temperature'],
  });

  assert.deepEqual(
    charts.map(({ chart, showHourlyTitle }) => [chart, showHourlyTitle]),
    [
      ['forecast', false],
      ['wind', true],
      ['temperature', false],
    ]
  );
});

test('does not add an hourly title when every hourly chart is disabled', () => {
  const charts = getOrderedCharts({
    chartOrder: ['forecast', 'temperature'],
    showTemperature: false,
    showPrecipitation: false,
    showSunshine: false,
    showWind: false,
  });

  assert.equal(
    charts.some(chart => chart.showHourlyTitle),
    false
  );
});

test('adds the daily forecast when enabled but omitted from the configured order', () => {
  const charts = getOrderedCharts({
    chartOrder: ['temperature'],
    showForecast: true,
  });

  assert.deepEqual(
    charts.map(({ chart }) => chart),
    ['temperature', 'forecast']
  );
});

test('editor moves newly added UV entries and persists their actual displayed index', async () => {
  const source = await readFile(
    new URL('../src/cards/full-card/swissweather-card-editor.ts', import.meta.url),
    'utf8'
  );
  const parsed = ts.createSourceFile('editor.ts', source, ts.ScriptTarget.Latest, true);
  const editor = parsed.statements.find(ts.isClassDeclaration);
  const method = editor.members.find(member => member.name?.getText(parsed) === '_moveChart');
  const { outputText } = ts.transpileModule(`class Probe { ${method.getText(parsed)} }`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  });
  let emitted;
  const probe = new Function('getChartOrder', 'fireEvent', `${outputText}; return new Probe();`)(
    getChartOrder,
    (_host, _event, detail) => {
      emitted = detail.config;
    }
  );
  probe.requestUpdate = () => {};
  probe._config = { chart_order: ['wind', 'forecast'], uv_entity: 'sensor.uv' };
  probe._moveChart(0, 1);
  assert.deepEqual(emitted.chart_order, ['wind', 'uv', 'forecast']);
  assert.equal(emitted.uv_entity, 'sensor.uv');
  probe._moveChart(1, 1);
  assert.deepEqual(emitted.chart_order, ['wind', 'forecast', 'uv']);
  assert.match(source, /key: 'uv', label: _t\('uv.title'\)/);
});
