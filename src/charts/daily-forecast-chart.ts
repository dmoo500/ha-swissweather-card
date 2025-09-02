import { html, TemplateResult } from 'lit';
import type { WeatherForecast } from '../types/home-assistant.js';

export function renderDailyForecast(
  forecast: WeatherForecast[],
  forecastLoading: boolean,
  show_forecast: boolean,
  config: any,
  _t: (key: string, vars?: Record<string, any>) => string,
  getWeatherIcon: (...args: any[]) => TemplateResult,
  isDay: () => boolean,
  formatDate: (dateStr: string) => string
): TemplateResult {
  if (show_forecast === false) return html``;
  if (forecastLoading && forecast.length === 0) {
    return html`<div class="forecast-section">Loading...</div>`;
  }
  if (forecast.length === 0) {
    return html`<div class="forecast-section">No forecast data</div>`;
  }

  return config.show_forecast !== false
    ? forecastLoading && forecast.length === 0
      ? html`
          <div class="forecast-section">
            <div class="section-title">
              <ha-icon icon="mdi:calendar"></ha-icon>
              ${_t('7d_forecast')}
              <small
                style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                >${_t('loading')}</small
              >
            </div>
            <div
              style="text-align: center; padding: 20px; color: var(--secondary-text-color, #666); font-style: italic;"
            >
              ⏳ ${_t('loading_forecast')}<br />
              <small>Service: weather.get_forecasts</small>
            </div>
          </div>
        `
      : forecast.length > 0
        ? html`
            <div class="forecast-section">
              <div class="section-title">
                <ha-icon icon="mdi:calendar"></ha-icon>
                ${forecast.length === 7
                  ? _t('7d_forecast')
                  : _t('xd_forecast', { days: forecast.length })}
                <small
                  style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                >
                  (${forecast.length} ${_t('days_available')})
                </small>
              </div>
              ${forecast.length < 7
                ? html`
                    <div
                      style="text-align: center; color: var(--warning-color, #b8860b); font-size: 13px; margin-bottom: 8px;"
                    >
                      ${_t('forecast_days_hint', { count: forecast.length })}
                    </div>
                  `
                : ''}
              <div class="forecast-grid">
                ${forecast.slice(0, 7).map(
                  (day: WeatherForecast) => html`
                    <div class="forecast-day">
                      <div class="forecast-date">${formatDate(day.datetime)}</div>
                      <div class="forecast-icon">
                        ${getWeatherIcon(
                          day.condition,
                          config.enable_animate_weather_icons ? 'animated' : 'mdi',
                          '24px',
                          isDay()
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
                ${_t('7d_forecast')}
                <small style="font-size: 12px; color: #666; margin-left: 10px;">
                  (0 ${_t('days_available')})
                </small>
              </div>
              <div style="text-align: center; padding: 20px; color: #666; font-style: italic;">
                ⚠️ ${_t('no_forecast_data')}<br />
                <small>Entity: ${config.entity}</small><br />
                <small>${_t('check_devtools')}</small><br />
                <small style="color: #999;">${_t('try_other_entity')}</small>
              </div>
            </div>
          `
    : html``;
}
