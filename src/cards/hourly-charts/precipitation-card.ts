import { css, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { get as _t, registerTranslateConfig } from 'lit-translate';
import { translations } from '../../translations';
import { getEntityState } from '../../utils';
import type { WeatherEntity } from '../../types/home-assistant';
import { PrecipitationChart } from '../../charts/precipitation-chart';
import {
  PRECIPITATION_CARD_NAME,
  PRECIPITATION_CARD_EDITOR_NAME,
  baseSchema,
  type HourlyChartCardConfig,
} from './const';
import { HourlyForecastBaseCard } from './hourly-forecast-base';

void PrecipitationChart;

registerTranslateConfig({ loader: lang => translations[lang] });

@customElement(PRECIPITATION_CARD_NAME)
export class PrecipitationCard extends HourlyForecastBaseCard {
  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;
        box-sizing: border-box;
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
        min-height: calc(var(--card-grid-rows, 3) * 64px - 8px);
        --chart-inner-border: none;
        --chart-padding: 8px 8px 4px;
        --chart-margin-top: 0;
        --chart-margin-bottom: 0;
      }
      .card-content {
        padding: 0;
        height: 100%;
        display: flex;
      }

      precipitation-chart {
        display: block;
        flex: 1;
        min-height: 0;
      }
    `;
  }

  public setConfig(config: HourlyChartCardConfig): void {
    if (!config.entity) throw new Error('You need to define an entity');
    this.setBaseConfig(config);
  }

  public static getStubConfig() {
    return { type: `custom:${PRECIPITATION_CARD_NAME}`, entity: '' };
  }

  public static getConfigElement() {
    return document.createElement(PRECIPITATION_CARD_EDITOR_NAME);
  }

  public static getConfigSchema() {
    return baseSchema;
  }

  public getCardSize(): number {
    return this.config?.grid_options?.rows ?? 3;
  }

  public getGridOptions() {
    return {
      rows: this.config?.grid_options?.rows ?? 3,
      columns: this.config?.grid_options?.columns ?? 12,
      min_columns: 6,
      max_columns: 48,
      min_rows: 3,
      max_rows: 6,
    };
  }

  protected getDefaultRows(): number {
    return 3;
  }

  public render(): TemplateResult {
    if (!this.hass || !this.config) return html``;
    this.setCardGridRows();
    const weatherEntity = getEntityState(this.hass, this.config.entity) as WeatherEntity;
    if (!weatherEntity)
      return html`<div class="card-content">Entity not found: ${this.config.entity}</div>`;
    if (this._hourlyForecast.length === 0) return html`<div class="card-content">Loading...</div>`;

    const forecastHours = this.config.forecast_hours ?? 12;
    return html`
      <div class="card-content">
        <precipitation-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${forecastHours}
          .show_precipitation=${true}
          ._t=${_t}
        ></precipitation-chart>
      </div>
    `;
  }
}
