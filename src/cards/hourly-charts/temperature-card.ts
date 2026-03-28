import { css, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { get as _t, registerTranslateConfig } from 'lit-translate';
import { translations } from '../../translations';
import { getEntityState } from '../../utils';
import type { WeatherEntity } from '../../types/home-assistant';
import { ForecastTemperatureChart } from '../../charts/forecast-temperature-chart';
import {
  TEMPERATURE_CARD_NAME,
  TEMPERATURE_CARD_EDITOR_NAME,
  baseSchema,
  type HourlyChartCardConfig,
} from './const';
import { HourlyForecastBaseCard } from './hourly-forecast-base';

// Ensure chart custom element is registered
void ForecastTemperatureChart;

registerTranslateConfig({
  loader: lang => translations[lang],
});

@customElement(TEMPERATURE_CARD_NAME)
export class TemperatureCard extends HourlyForecastBaseCard {
  static get styles() {
    return css`
      :host {
        display: block;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        border-radius: 16px;
        box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.1));
        font-family: var(
          --primary-font-family,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          sans-serif
        );
        color: var(--primary-text-color, #fff);
      }
      .card-content {
        padding: 12px;
      }
    `;
  }

  public setConfig(config: HourlyChartCardConfig): void {
    if (!config.entity) throw new Error('You need to define an entity');
    this.setBaseConfig(config);
  }

  public static getStubConfig() {
    return { type: `custom:${TEMPERATURE_CARD_NAME}`, entity: '' };
  }

  public static getConfigElement() {
    return document.createElement(TEMPERATURE_CARD_EDITOR_NAME);
  }

  public static getConfigSchema() {
    return baseSchema;
  }

  public getCardSize(): number {
    return this.config?.grid_options?.rows ?? 2;
  }

  public getGridOptions() {
    return {
      rows: this.config?.grid_options?.rows ?? 2,
      columns: this.config?.grid_options?.columns ?? 12,
      min_columns: 6,
      max_columns: 48,
      min_rows: 2,
      max_rows: 6,
    };
  }

  public render(): TemplateResult {
    const weatherEntity = getEntityState(this.hass, this.config.entity) as WeatherEntity;
    if (!weatherEntity)
      return html`<div class="card-content">Entity not found: ${this.config.entity}</div>`;
    if (!this._loadAttempted || this._forecastLoading)
      return html`<div class="card-content">Loading...</div>`;
    if (this._hourlyForecast.length === 0)
      return html`<div class="card-content">No hourly forecast data available.</div>`;

    const forecastHours = this.config.forecast_hours ?? 12;
    return html`
      <div class="card-content">
        <forecast-temperature-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${forecastHours}
          .show_temperature=${true}
          ._t=${_t}
        ></forecast-temperature-chart>
      </div>
    `;
  }
}
