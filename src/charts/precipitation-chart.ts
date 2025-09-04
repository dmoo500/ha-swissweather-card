import { LitElement, html, css, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { WeatherForecast } from '../types/home-assistant.js';

@customElement('precipitation-chart')
export class PrecipitationChart extends LitElement {
  @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  @property({ type: Number }) forecastHours = 12;
  @property({ type: Boolean }) show_precipitation = true;
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

      .chart-bar-precipitation {
        width: 18px;
        background: linear-gradient(to top, #3498db, #85c5e5);
        border-radius: 2px 2px 0 0;
        min-height: 2px;
      }
      .chart-bar-precipitation-prob {
        width: 18px;
        background: #87898eff;
        border-radius: 2px 2px 0 0;
        min-height: 2px;
        opacity: 0.6;
      }

      .chart-labels {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: var(--secondary-text-color, #000);
      }

    `;

  render(): TemplateResult {
    if (this.show_precipitation === false) return html``;
    if (
      this.hourlyForecast.length === 0 ||
      !this.hourlyForecast
        .slice(0, this.forecastHours)
        .some(h => typeof h.precipitation === 'number' && !isNaN(h.precipitation))
    ) {
      return html`
        <div class="chart">
          <div class="section-title">
            <ha-icon icon="mdi:weather-pouring"></ha-icon>
            ${this._t('precipitation_hours', { hours: this.forecastHours })}
          </div>
          <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
            ${this._t('no_precipitation_data')}
          </div>
        </div>
      `;
    }
    return html`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:weather-pouring"></ha-icon>
          ${this._t('precipitation_hours', { hours: this.forecastHours })}
        </div>
        <div class="chart-bars">
          ${this.hourlyForecast.slice(0, this.forecastHours).map((hour: WeatherForecast) => {
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
                <div
                  style="height:32px; display:flex; align-items:flex-end; justify-content:center;"
                >
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
        ${this.showHoursChartLabel(this.forecastHours)}
      </div>
    `;
  }
}
