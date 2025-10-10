import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { WeatherForecast } from '../types/home-assistant';

@customElement('daily-forecast-chart')
export class DailyForecastChart extends LitElement {
  @property({ type: Array }) forecast: WeatherForecast[] = [];
  @property({ type: Boolean }) forecastLoading = false;
  @property({ type: Boolean }) show_forecast = true;
  @property({ type: Object }) config: any = {};
  @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  @property({ type: Function }) getWeatherIcon!: (...args: any[]) => TemplateResult;
  @property({ type: Function }) formatDate!: (dateStr: string) => string;
  // New props for BG card embedding
  @property({ type: Boolean }) compact: boolean = false;
  @property({ type: Boolean }) startTomorrow: boolean = false;
  @property({ type: Number }) maxDays: number = 7;
  @property({ type: Boolean }) alignRight: boolean = false;

  static styles = css`
    .wrapper {
      display: block;
      width: 100%;
    }
    .wrapper.align-right {
      display: flex;
      justify-content: flex-end;
    }

    .forecast-section {
      margin-top: 20px;
    }
    .forecast-section.compact {
      margin-top: 8px;
    }

    .section-title {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 10px;
      color: var(--primary-text-color, #fff);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-title ha-icon {
      color: var(--primary-text-color, #fff);
      font-size: 20px;
    }

    .forecast-7days {
      background: var(--code-editor-background-color, #f8f8f8);
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      margin-bottom: 8px;
    }

    .forecast-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 10px;
    }
    .forecast-grid.compact {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;
      align-items: stretch;
      gap: 8px;
      overflow: hidden; /* keep within BG card */
    }

    .forecast-day {
      background: var(--card-background-color, rgba(255, 255, 255, 0.6));
      border-radius: 10px;
      padding: 12px 8px;
      text-align: center;
      border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
    }
    .forecast-day.compact {
      border-radius: 8px;
      padding: 8px 6px;
      width: 64px;
      min-width: 64px;
      box-sizing: border-box;
    }

    .forecast-date {
      font-size: 12px;
      color: var(--secondary-text-color, #7f8c8d);
      margin-bottom: 8px;
    }
    .forecast-date.compact {
      font-size: 10px;
      margin-bottom: 4px;
    }

    .forecast-icon {
      font-size: 24px;
      margin: 8px 0;
    }
    .forecast-icon.compact {
      font-size: 18px;
      margin: 4px 0;
    }

    .forecast-temps {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .forecast-temps.compact {
      font-size: 11px;
    }

    .temp-high {
      font-weight: bold;
      color: var(--material-error-text-color, #e74c3c);
    }

    .temp-low {
      color: var(--secondary-text-color, #00aaff);
    }
    @media (max-width: 768px) {
      .forecast-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* Extra compact on very small screens to keep margins */
    @media (max-width: 400px) {
      .forecast-grid.compact {
        gap: 6px;
      }
      .forecast-day.compact {
        width: 56px;
        min-width: 56px;
      }
      .forecast-icon.compact {
        font-size: 16px;
      }
      .forecast-temps.compact {
        font-size: 10px;
      }
    }
  `;

  render() {
    // Prepare data set
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let items = Array.isArray(this.forecast) ? [...this.forecast] : [];
    // Optionally start from tomorrow
    if (this.startTomorrow && items.length > 0) {
      items = items.filter(d => {
        try {
          const dt = new Date((d as any).datetime ?? (d as any).date ?? '');
          if (isNaN(dt.getTime())) return true; // keep if unknown
          dt.setHours(0, 0, 0, 0);
          return dt.getTime() > today.getTime();
        } catch {
          return true;
        }
      });
    }
    if (typeof this.maxDays === 'number' && this.maxDays > 0) {
      items = items.slice(0, this.maxDays);
    }

    const sectionClass = ['forecast-section', this.compact ? 'compact' : '']
      .filter(Boolean)
      .join(' ');
    const gridClass = ['forecast-grid', this.compact ? 'compact' : ''].filter(Boolean).join(' ');

    return this.config.show_forecast !== false
      ? this.forecastLoading && this.forecast.length === 0
        ? html`
            <div class="${sectionClass}">
              <div class="section-title">
                <ha-icon icon="mdi:calendar"></ha-icon>
                ${this._t('7d_forecast')}
                <small
                  style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                  >${this._t('loading')}</small
                >
              </div>
              <div
                style="text-align: center; padding: 20px; color: var(--secondary-text-color, #666); font-style: italic;"
              >
                ⏳ ${this._t('loading_forecast')}<br />
                <small>Service: weather.get_forecasts</small>
              </div>
            </div>
          `
        : items.length > 0
          ? html`
              <div class="wrapper ${this.alignRight ? 'align-right' : ''}">
                <div class="${sectionClass}">
                  ${this.compact
                    ? html``
                    : html`
                        <div class="section-title">
                          <ha-icon icon="mdi:calendar"></ha-icon>
                          ${items.length === 7
                            ? this._t('7d_forecast')
                            : this._t('xd_forecast', { days: items.length })}
                          <small
                            style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                          >
                            (${items.length} ${this._t('days_available')})
                          </small>
                        </div>
                      `}
                  <div class="${gridClass}">
                    ${items.map(
                      (day: WeatherForecast) => html`
                        <div class="forecast-day ${this.compact ? 'compact' : ''}">
                          <div class="forecast-date ${this.compact ? 'compact' : ''}">
                            ${this.formatDate((day as any).datetime ?? (day as any).date)}
                          </div>
                          <div class="forecast-icon ${this.compact ? 'compact' : ''}">
                            ${this.getWeatherIcon(
                              (day as any).condition,
                              this.config.enable_animate_weather_icons ? 'animated' : 'mdi',
                              this.compact ? '20px' : '24px',
                              true
                            )}
                          </div>
                          <div class="forecast-temps ${this.compact ? 'compact' : ''}">
                            <span class="temp-high">${Math.round((day as any).temperature)}°</span>
                            <span class="temp-low"
                              >${Math.round(
                                (day as any).templow ?? (day as any).temperature - 5
                              )}°</span
                            >
                          </div>
                        </div>
                      `
                    )}
                  </div>
                </div>
              </div>
            `
          : html`
              <div class="${sectionClass}">
                <div class="section-title">
                  <ha-icon icon="mdi:calendar"></ha-icon>
                  ${this._t('7d_forecast')}
                  <small style="font-size: 12px; color: #666; margin-left: 10px;">
                    (0 ${this._t('days_available')})
                  </small>
                </div>
                <div style="text-align: center; padding: 20px; color: #666; font-style: italic;">
                  ⚠️ ${this._t('no_forecast_data')}<br />
                  <small>Entity: ${this.config.entity}</small><br />
                  <small>${this._t('check_devtools')}</small><br />
                  <small style="color: #999;">${this._t('try_other_entity')}</small>
                </div>
              </div>
            `
      : html``;
  }
}
