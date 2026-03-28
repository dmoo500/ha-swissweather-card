import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { get as _t, registerTranslateConfig } from 'lit-translate';
import { translations } from '../../translations';
import { getEntityState } from '../../utils';
import type { HomeAssistant, WeatherEntity, WeatherForecast } from '../../types/home-assistant';
import { PrecipitationChart } from '../../charts/precipitation-chart';
import {
  PRECIPITATION_CARD_NAME,
  PRECIPITATION_CARD_EDITOR_NAME,
  baseSchema,
  type HourlyChartCardConfig,
} from './const';

void PrecipitationChart;

registerTranslateConfig({ loader: lang => translations[lang] });

@customElement(PRECIPITATION_CARD_NAME)
export class PrecipitationCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: HourlyChartCardConfig;
  @state() private _hourlyForecast: WeatherForecast[] = [];
  @state() private _forecastLoading = false;
  @state() private _loadAttempted = false;
  private _lastEntity: string | undefined;

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

  private async _loadForecast(): Promise<void> {
    if (!this.hass || !this.config?.entity || this._forecastLoading) return;
    this._forecastLoading = true;
    try {
      const ws = await (this.hass as any).callWS({
        type: 'call_service',
        domain: 'weather',
        service: 'get_forecasts',
        service_data: { entity_id: this.config.entity, type: 'hourly' },
        return_response: true,
      });
      this._hourlyForecast = (ws as any)?.response?.[this.config.entity]?.forecast ?? [];
    } catch (e) {
      console.error('[SwissWeather PrecipitationCard] Forecast load failed:', e);
      this._hourlyForecast = [];
    } finally {
      this._forecastLoading = false;
      this._loadAttempted = true;
    }
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (this.hass && this.config?.entity) {
      if (this._lastEntity !== this.config.entity) {
        this._lastEntity = this.config.entity;
        this._loadAttempted = false;
        this._loadForecast();
      } else if (changedProperties.has('hass') && !this._loadAttempted && !this._forecastLoading) {
        this._loadForecast();
      }
    }
  }

  public setConfig(config: HourlyChartCardConfig): void {
    if (!config.entity) throw new Error('You need to define an entity');
    this.config = config;
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
