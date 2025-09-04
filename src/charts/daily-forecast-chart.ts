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
  @property({ type: Function }) isDay!: () => boolean;
  @property({ type: Function }) formatDate!: (dateStr: string) => string;

  static styles = css`
    .forecast-section {
      margin-top: 20px;
    }

    .section-title {
      font-size: 18px;
      font-weight: bold;
      color: var(--primary-text-color, #fff);
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 8px;
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

    .forecast-day {
      background: var(--card-background-color, rgba(255, 255, 255, 0.6));
      border-radius: 10px;
      padding: 12px 8px;
      text-align: center;
      border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
    }

    .forecast-date {
      font-size: 12px;
      color: var(--secondary-text-color, #7f8c8d);
      margin-bottom: 8px;
    }

    .forecast-icon {
      font-size: 24px;
      margin: 8px 0;
    }

    .forecast-temps {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
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
  `;

  render() {
    return this.config.show_forecast !== false
      ? this.forecastLoading && this.forecast.length === 0
        ? html`
            <div class="forecast-section">
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
        : this.forecast.length > 0
          ? html`
              <div class="forecast-section">
                <div class="section-title">
                  <ha-icon icon="mdi:calendar"></ha-icon>
                  ${this.forecast.length === 7
                    ? this._t('7d_forecast')
                    : this._t('xd_forecast', { days: this.forecast.length })}
                  <small
                    style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                  >
                    (${this.forecast.length} ${this._t('days_available')})
                  </small>
                </div>
                ${this.forecast.length < 7
                  ? html`
                      <div
                        style="text-align: center; color: var(--warning-color, #b8860b); font-size: 13px; margin-bottom: 8px;"
                      >
                        ${this._t('forecast_days_hint', { count: this.forecast.length })}
                      </div>
                    `
                  : ''}
                <div class="forecast-grid">
                  ${this.forecast.slice(0, 7).map(
                    (day: WeatherForecast) => html`
                      <div class="forecast-day">
                        <div class="forecast-date">${this.formatDate(day.datetime)}</div>
                        <div class="forecast-icon">
                          ${this.getWeatherIcon(
                            day.condition,
                            this.config.enable_animate_weather_icons ? 'animated' : 'mdi',
                            '24px',
                            this.isDay()
                          )}
                        </div>
                        <div class="forecast-temps">
                          <span class="temp-high">${Math.round(day.temperature)}°</span>
                          <span class="temp-low"
                            >${Math.round(day.templow || day.temperature - 5)}°</span
                          >
                        </div>
                      </div>
                    `
                  )}
                </div>
              </div>
            `
          : html`
              <div class="forecast-section">
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
