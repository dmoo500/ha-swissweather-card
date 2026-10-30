import { LitElement, html, type PropertyValues, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { HomeAssistant, WeatherForecast } from '../../types/home-assistant';
import { fetchWeatherForecast } from '../../utils/weather-forecast';
import type { HourlyChartCardConfig } from './const';
import { get as _t } from 'lit-translate';

/** Shared forecast lifecycle and status rendering for standalone hourly charts. */
export abstract class HourlyForecastBaseCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: HourlyChartCardConfig;

  @state() protected _hourlyForecast: WeatherForecast[] = [];
  @state() protected _forecastLoading = false;
  @state() protected _forecastLoaded = false;
  @state() protected _forecastError = false;
  private _requestedEntityId?: string;
  private _forecastRequestId = 0;

  protected async _loadForecast(entityId: string): Promise<void> {
    if (!this.hass || !entityId) return;

    const requestId = ++this._forecastRequestId;
    this._forecastLoading = true;
    this._forecastLoaded = false;
    this._forecastError = false;
    try {
      const forecast = await fetchWeatherForecast(this.hass, entityId, 'hourly');
      if (requestId === this._forecastRequestId) this._hourlyForecast = forecast;
    } catch (e) {
      console.error(`[SwissWeather] Forecast load failed for ${entityId}:`, e);
      if (requestId === this._forecastRequestId) {
        this._forecastError = true;
        this._hourlyForecast = [];
      }
    } finally {
      if (requestId === this._forecastRequestId) {
        this._forecastLoading = false;
        this._forecastLoaded = true;
      }
    }
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (!this.hass || !this.config?.entity) return;

    if (this._requestedEntityId !== this.config.entity) {
      this._requestedEntityId = this.config.entity;
      this._hourlyForecast = [];
      this._forecastLoaded = false;
      void this._loadForecast(this.config.entity);
    }
  }

  protected setBaseConfig(config: HourlyChartCardConfig): void {
    this.config = config;
    if (this._requestedEntityId !== config.entity) {
      this._requestedEntityId = undefined;
      this._hourlyForecast = [];
      this._forecastLoaded = false;
    }
  }

  protected _renderForecastStatus(): TemplateResult {
    const message =
      this._forecastLoading || !this._forecastLoaded
        ? _t('hourly_charts.forecast_loading')
        : this._forecastError
          ? _t('hourly_charts.forecast_request_failed')
          : _t('hourly_charts.no_forecast_data');
    return html`<div class="card-content">${message}</div>`;
  }

  protected getDefaultRows(): number {
    return 3;
  }

  protected setCardGridRows(): void {
    // Set CSS variable for card height calculation – same as forecast-diagram-card.ts does in render()
    const rows = this.config?.grid_options?.rows ?? this.getDefaultRows();
    this.style.setProperty('--card-grid-rows', rows.toString());
  }
}
