import { html, TemplateResult, svg } from 'lit';
import type { WeatherForecast } from '../types/home-assistant.js';

export function renderForecastWind(
  hourlyForecast: WeatherForecast[],
  forecastHours: number,
  show_wind: boolean,
  _t: (key: string, vars?: Record<string, any>) => string,
  showHoursChartLabel: (hours: number) => TemplateResult
): TemplateResult {
  return show_wind !== false
    ? hourlyForecast.length > 0 &&
      hourlyForecast
        .slice(0, forecastHours)
        .some(h => typeof h.wind_speed === 'number' && !isNaN(h.wind_speed))
      ? html`
          <div class="chart">
            <div class="section-title">
              <ha-icon icon="mdi:weather-windy"></ha-icon>
              ${_t('wind_hours', { hours: forecastHours })}
            </div>
            <div class="chart-line-wind" style="position:relative;">
              ${hourlyForecast.slice(0, forecastHours).map((hour: WeatherForecast) => {
                const value =
                  typeof hour.wind_speed === 'number' && !isNaN(hour.wind_speed)
                    ? hour.wind_speed
                    : null;
                return html`
                  <div
                    style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
                  >
                    <span
                      style="font-size:11px; color:#44739e; writing-mode:vertical-rl; transform:rotate(180deg); min-height:16px; font-variant-numeric:tabular-nums;"
                    >
                      ${value !== null ? value.toFixed(1) + ' km/h' : ''}
                    </span>
                  </div>
                `;
              })}
            </div>
            <div class="chart-line-wind" style="position:relative;">
              ${hourlyForecast.slice(0, forecastHours).map((hour: WeatherForecast) => {
                const value =
                  typeof hour.wind_bearing === 'number' && !isNaN(hour.wind_bearing)
                    ? hour.wind_bearing
                    : null;
                const windDirection = value !== null ? value : 0; // Fallback to 0 if no value is present
                return html`
                  <div
                    style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center;"
                  >
                    <div class="wind-compass" style="width: 12px; height: 12px; margin: 0 auto;">
                      <div
                        class="wind-arrow"
                        style="transform: translate(-50%, -100%) rotate(${windDirection}deg);"
                      ></div>
                    </div>
                  </div>
                `;
              })}
            </div>
            <div style="width:100%;height:90px;overflow-x:auto;">
              ${(() => {
                const windRaw = hourlyForecast
                  .slice(0, forecastHours)
                  .map(h =>
                    typeof h.wind_speed === 'number' && !isNaN(h.wind_speed) ? h.wind_speed : null
                  );
                const winds: number[] = windRaw.filter((t): t is number => t !== null);
                if (winds.length < 2) return '';
                const min = Math.min(...winds);
                const max = Math.max(...winds);
                const range = max - min || 1;
                const n = windRaw.length;
                const w = Math.max(360, Math.min(1600, n * 250));
                const h = 50;
                const step = w / (n - 1);
                const points = windRaw
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
                <polyline points="${points}" fill="none" stroke="#44739e" stroke-width="3" />
                ${windRaw.map((t, i) => (t !== null ? svg`<circle r="3" fill="#44739e" cx="${i * step}" cy="${h - ((t - min) / range) * h}" />` : null))}
              </svg>`;
              })()}
            </div>
            ${showHoursChartLabel(forecastHours)}
          </div>
        `
      : html``
    : html``;
}
