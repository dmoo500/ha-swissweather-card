import { LitElement, html, css, svg, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { WeatherForecast } from '../types/home-assistant.js';

@customElement('wind-chart')
export class WindChart extends LitElement {
  @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  @property({ type: Number }) forecastHours = 12;
  @property({ type: Boolean }) show_wind = true;
  @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  @property({ type: Function }) showHoursChartLabel!: (hours: number) => TemplateResult;

  static styles = css`
    .chart {
      background: var(--card-background-color, #fff);
      border-radius: 12px;
      padding: 15px;
      margin-top: 15px;
      border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
    }

    .chart-bars {
      display: flex;
      justify-content: space-between;
      height: 120px;
      margin-bottom: 10px;
    }

    .chart-line {
      display: flex;
      justify-content: space-between;
      height: 60px;
      margin-bottom: 10px;
    }
    .chart-line-wind {
      display: flex;
      justify-content: space-between;
      height: 50px;
    }

    .chart-labels {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: var(--secondary-text-color, #000);
    }

    .wind-compass {
      width: 24px;
      height: 24px;
      border: 2px solid var(--state-icon-color, #dc143c);
      border-radius: 50%;
      position: relative;
      margin: 0 auto 10px;
    }

    .wind-arrow {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2px;
      height: 8px;
      background: var(--state-icon-color, #dc143c);
      transform-origin: bottom center;
      transform: translate(-50%, -100%);
    }

    .wind-arrow::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 8px solid var(--state-icon-color, #dc143c);
      transform: translateX(-50%);
    }
    .section-title {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 10px;
      color: var(--primary-text-color, #000);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-title ha-icon {
      color: var(--primary-color, #dc143c);
      font-size: 20px;
    }
    @media (max-width: 768px) {
      :host {
        padding: 15px;
      }

      .metrics-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .forecast-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  `;

  render(): TemplateResult {
    return this.show_wind !== false
      ? this.hourlyForecast.length > 0 &&
        this.hourlyForecast
          .slice(0, this.forecastHours)
          .some(h => typeof h.wind_speed === 'number' && !isNaN(h.wind_speed))
        ? html`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:weather-windy"></ha-icon>
                ${this._t('wind_hours', { hours: this.forecastHours })}
              </div>
              <div class="chart-line-wind" style="position:relative;">
                ${this.hourlyForecast.slice(0, this.forecastHours).map((hour: WeatherForecast) => {
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
                ${this.hourlyForecast.slice(0, this.forecastHours).map((hour: WeatherForecast) => {
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
                  const windRaw = this.hourlyForecast
                    .slice(0, this.forecastHours)
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
                    this.forecastHours === 6 ? '84%' : this.forecastHours - 6 + 84 + '%'; //84% base + 3% for each additional 6 hours
                  const svgPadding =
                    this.forecastHours === 6 ? '8%' : (18 - this.forecastHours) * 0.5 + 2 + '%';
                  return svg`<svg width="${svgWidth}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="display:block;padding-left:${svgPadding};">
                <polyline points="${points}" fill="none" stroke="#44739e" stroke-width="3" />
                ${windRaw.map((t, i) => (t !== null ? svg`<circle r="3" fill="#44739e" cx="${i * step}" cy="${h - ((t - min) / range) * h}" />` : null))}
              </svg>`;
                })()}
              </div>
              ${this.showHoursChartLabel(this.forecastHours)}
            </div>
          `
        : html``
      : html``;
  }
}
