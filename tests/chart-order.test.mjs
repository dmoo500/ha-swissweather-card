import assert from 'node:assert/strict';
import test from 'node:test';
import { getOrderedCharts } from '../src/cards/full-card/chart-order.ts';

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
