export interface ChartOrderOptions {
  chartOrder?: string[];
  showTemperature?: boolean;
  showPrecipitation?: boolean;
  showSunshine?: boolean;
  showWind?: boolean;
  showForecast?: boolean;
}

export interface OrderedChart {
  chart: string;
  showHourlyTitle: boolean;
}

const DEFAULT_CHART_ORDER = ['temperature', 'precipitation', 'sunshine', 'wind', 'forecast'];

export function getOrderedCharts(options: ChartOrderOptions): OrderedChart[] {
  const charts = Array.isArray(options.chartOrder)
    ? [...options.chartOrder]
    : [...DEFAULT_CHART_ORDER];

  if (options.showForecast !== false && !charts.includes('forecast')) {
    charts.push('forecast');
  }

  const hourlyCharts = new Set<string>();
  if (options.showTemperature !== false) hourlyCharts.add('temperature');
  if (options.showPrecipitation !== false) hourlyCharts.add('precipitation');
  if (options.showSunshine !== false) hourlyCharts.add('sunshine');
  if (options.showWind !== false) hourlyCharts.add('wind');

  let hourlyTitleRendered = false;
  return charts.map(chart => {
    const showHourlyTitle = hourlyCharts.has(chart) && !hourlyTitleRendered;
    if (showHourlyTitle) hourlyTitleRendered = true;

    return { chart, showHourlyTitle };
  });
}
