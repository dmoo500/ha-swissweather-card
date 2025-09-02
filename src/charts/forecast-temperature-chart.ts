import { html, svg, TemplateResult } from 'lit';
import type { WeatherForecast } from '../types/home-assistant.js';

export function renderForecastTemperature(
  hourlyForecast: WeatherForecast[],
  forecastHours: number,
  show_temperature: boolean,
  _t: (key: string, vars?: Record<string, any>) => string,
  showHoursChartLabel: (hours: number) => TemplateResult
): TemplateResult {
  if (show_temperature === false) return html``;
  if (
    hourlyForecast.length === 0 ||
    !hourlyForecast
      .slice(0, forecastHours)
      .some(h => typeof h.temperature === 'number' && !isNaN(h.temperature))
  ) {
    return html`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:thermometer"></ha-icon>
          ${_t('temperature_hours', { hours: forecastHours })}
        </div>
        <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
          ${_t('no_temperature_data')}
        </div>
      </div>
    `;
  }
  // ...existing code for SVG and chart rendering from swissweather-card.ts...
  return html`
    <div class="chart">
      <div class="section-title">
        <ha-icon icon="mdi:thermometer"></ha-icon>
        ${_t('temperature_hours', { hours: forecastHours })}
      </div>
      <div class="chart-line" style="position:relative;">
        ${hourlyForecast.slice(0, forecastHours).map((hour: WeatherForecast) => {
          const value =
            typeof hour.temperature === 'number' && !isNaN(hour.temperature)
              ? hour.temperature
              : null;
          return html`
            <div
              style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;margin-bottom:10px;"
            >
              <span
                style="font-size:11px; color:#db4a34; writing-mode:vertical-rl; transform:rotate(180deg); min-height:30px; font-variant-numeric:tabular-nums;"
              >
                ${value !== null ? value.toFixed(1) + ' °C' : ''}
              </span>
            </div>
          `;
        })}
      </div>
      <div style="width:100%;height:90px;overflow-x:auto;">
        ${(() => {
          const tempsRaw = hourlyForecast
            .slice(0, forecastHours)
            .map(h =>
              typeof h.temperature === 'number' && !isNaN(h.temperature) ? h.temperature : null
            );
          const temps: number[] = tempsRaw.filter((t): t is number => t !== null);
          if (temps.length < 2) return '';
          const min = Math.min(...temps);
          const max = Math.max(...temps);
          const range = max - min || 1;
          const n = tempsRaw.length;
          const w = Math.max(360, Math.min(1600, n * 250));
          const h = 50;
          const step = w / (n - 1);
          const points = tempsRaw
            .map((t, i) => (t !== null ? `${i * step},${h - ((t - min) / range) * h}` : ''))
            .filter(Boolean)
            .join(' ');
          const svgWidth =
            forecastHours === 6
              ? '84%'
              : forecastHours === 12
                ? '90%'
                : forecastHours === 18
                  ? '96%'
                  : '100%';
          const svgPadding =
            forecastHours === 6
              ? '8%'
              : forecastHours === 12
                ? '5%'
                : forecastHours === 18
                  ? '2%'
                  : '0%';
          return svg`<svg width="${svgWidth}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="display:block;padding-left:${svgPadding};">
                <polyline points="${points}" fill="none" stroke="#db4a34" stroke-width="3" />
                ${tempsRaw.map((t, i) => (t !== null ? svg`<circle r="3" fill="#db4a34" cx="${i * step}" cy="${h - ((t - min) / range) * h}" />` : null))}
                </svg>`;
        })()}
      </div>
      ${showHoursChartLabel(forecastHours)}
    </div>
  `;
}
