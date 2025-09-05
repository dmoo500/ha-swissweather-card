import { LitElement, html, svg, css, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { WeatherForecast } from '../types/home-assistant.js';

@customElement('forecast-temperature-chart')
export class ForecastTemperatureChart extends LitElement {
  @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  @property({ type: Number }) forecastHours = 12;
  @property({ type: Boolean }) show_temperature = true;
  @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  @property({ type: Function }) showHoursChartLabel!: (hours: number) => TemplateResult;

  static styles = css`
    .section-title {
      font-size: 18px;
      font-weight: bold;
      color: var(--primary-text-color, #fff);
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

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

    .chart-labels {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: var(--secondary-text-color, #000);
    }
  `;

  render(): TemplateResult {
    if (this.show_temperature === false) return html``;
    return html`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:thermometer"></ha-icon>
          ${this._t('temperature_hours', { hours: this.forecastHours })}
        </div>
        <div class="chart-line" style="position:relative;">
          ${this.hourlyForecast.slice(0, this.forecastHours).map((hour: WeatherForecast) => {
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
            const tempsRaw = this.hourlyForecast
              .slice(0, this.forecastHours)
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
            const svgWidth = this.forecastHours === 6 ? '84%' : this.forecastHours - 6 + 84 + '%'; //84% base + 3% for each additional 6 hours
            const svgPadding =
              this.forecastHours === 6 ? '8%' : (18 - this.forecastHours) * 0.5 + 2 + '%';
            return svg`<svg width="${svgWidth}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="display:block;padding-left:${svgPadding};">
                <polyline points="${points}" fill="none" stroke="#db4a34" stroke-width="3" />
                ${tempsRaw.map((t, i) => (t !== null ? svg`<circle r="3" fill="#db4a34" cx="${i * step}" cy="${h - ((t - min) / range) * h}" />` : null))}
                </svg>`;
          })()}
        </div>
        ${this.showHoursChartLabel(this.forecastHours)}
      </div>
    `;
  }
}
