import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { get as _t, registerTranslateConfig } from 'lit-translate';
import { translations } from '../../translations';
import type { HomeAssistant, WeatherForecast } from '../../types/home-assistant';
import { WindChart } from '../../charts/wind-chart';
import {
  WIND_CARD_NAME,
  WIND_CARD_EDITOR_NAME,
  windSchema,
  type HourlyChartCardConfig,
} from './const';

void WindChart;

registerTranslateConfig({ loader: lang => translations[lang] });

@customElement(WIND_CARD_NAME)
export class WindCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: HourlyChartCardConfig;
  @state() private _hourlyForecast: WeatherForecast[] = [];
  @state() private _forecastLoading = false;
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
    } catch {
      this._hourlyForecast = [];
    } finally {
      this._forecastLoading = false;
    }
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (this.hass && this.config?.entity && this._lastEntity !== this.config.entity) {
      this._lastEntity = this.config.entity;
      this._loadForecast();
    }
  }

  public setConfig(config: HourlyChartCardConfig): void {
    if (!config.entity) throw new Error('You need to define an entity');
    this.config = config;
  }

  public static getStubConfig() {
    return { type: `custom:${WIND_CARD_NAME}`, entity: '' };
  }

  public static getConfigElement() {
    return document.createElement(WIND_CARD_EDITOR_NAME);
  }

  public static getConfigSchema() {
    return windSchema;
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
    if (!this.hass || !this.config) return html``;
    const forecastHours = this.config.forecast_hours ?? 12;

    if (this._hourlyForecast.length === 0) return html`<div class="card-content">Loading...</div>`;

    return html`
      <div class="card-content">
        <wind-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${forecastHours}
          .show_wind=${true}
          ._t=${_t}
        ></wind-chart>
      </div>
    `;
  }
}
