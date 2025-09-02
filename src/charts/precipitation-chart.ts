import { html, TemplateResult } from 'lit';
import type { WeatherForecast } from '../types/home-assistant.js';

export function renderForecastPrecipitation(
  hourlyForecast: WeatherForecast[],
  forecastHours: number,
  show_precipitation: boolean,
  _t: (key: string, vars?: Record<string, any>) => string,
  showHoursChartLabel: (hours: number) => TemplateResult
): TemplateResult {
  if (show_precipitation === false) return html``;
  if (
    hourlyForecast.length === 0 ||
    !hourlyForecast
      .slice(0, forecastHours)
      .some(h => typeof h.precipitation === 'number' && !isNaN(h.precipitation))
  ) {
    return html`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:weather-pouring"></ha-icon>
          ${_t('precipitation_hours', { hours: forecastHours })}
        </div>
        <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
          ${_t('no_precipitation_data')}
        </div>
      </div>
    `;
  }
  return html`
    <div class="chart">
      <div class="section-title">
        <ha-icon icon="mdi:weather-pouring"></ha-icon>
        ${_t('precipitation_hours', { hours: forecastHours })}
      </div>
      <div class="chart-bars">
        ${hourlyForecast.slice(0, forecastHours).map((hour: WeatherForecast) => {
          const precValue =
            typeof hour.precipitation === 'number' && !isNaN(hour.precipitation)
              ? hour.precipitation
              : null;
          const precBarHeight = precValue !== null ? Math.round(precValue) : 2;
          const precProbValue =
            typeof hour.precipitation_probability === 'number' &&
            !isNaN(hour.precipitation_probability)
              ? hour.precipitation_probability
              : null;
          const precProbBarHeight = precProbValue !== null ? Math.round(precProbValue % 10) : 2;
          return html`
            <div
              style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end; position:relative;"
            >
              <div style="height:32px; display:flex; align-items:flex-end; justify-content:center;">
                <span
                  style="font-size:11px; color:#3498db; margin-bottom:2px; min-height:16px; font-variant-numeric:tabular-nums;"
                >
                  ${precValue !== null ? precValue.toFixed(1) + ' mm' : ''}
                </span>
              </div>
              <div
                class="chart-bar-precipitation-prob"
                style="height: ${precProbBarHeight}px; position:absolute; bottom:0; left:50%; transform:translateX(-50%); z-index:0; width:18px;"
              ></div>
              <div
                class="chart-bar-precipitation"
                style="height: ${precBarHeight}px; position:relative; z-index:1; width:18px;"
              ></div>
            </div>
          `;
        })}
      </div>
      ${showHoursChartLabel(forecastHours)}
    </div>
  `;
}
