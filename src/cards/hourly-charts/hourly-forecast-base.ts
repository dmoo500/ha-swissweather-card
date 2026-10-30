import { LitElement, html, type PropertyValues, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { HomeAssistant, WeatherForecast } from '../../types/home-assistant';
import { fetchWeatherForecast, forecastDebug } from '../../utils/weather-forecast';
import type { HourlyChartCardConfig } from './const';
import { get as _t, use } from 'lit-translate';

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
  private _loadedLang?: string;

  protected _retryForecast(): void {
    if (this._forecastLoading || !this.config?.entity) return;
    void this._loadForecast(this.config.entity);
  }

  protected async _loadForecast(entityId: string): Promise<void> {
    if (!this.hass || !entityId) return;

    const requestId = ++this._forecastRequestId;
    this._forecastLoading = true;
    this._forecastLoaded = false;
    this._forecastError = false;
    forecastDebug('card loading', { card: this.localName, entityId, requestId });
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
        forecastDebug('card settled', {
          card: this.localName,
          entityId,
          requestId,
          count: this._hourlyForecast.length,
          error: this._forecastError,
        });
      }
    }
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (this.hass) {
      const lang = this.hass.selectedLanguage || this.hass.language || 'en';
      if (lang !== this._loadedLang) {
        this._loadedLang = lang;
        void use(lang)
          .then(() => this.requestUpdate())
          .catch(error => {
            console.error(`[SwissWeather] Failed to load language ${lang}:`, error);
          });
      }
    }
    if (changedProperties.has('_hourlyForecast') || changedProperties.has('_forecastLoaded')) {
      forecastDebug('card rendered', {
        card: this.localName,
        entityId: this.config?.entity,
        count: this._hourlyForecast.length,
        loading: this._forecastLoading,
        loaded: this._forecastLoaded,
      });
    }

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
    return html`<div class="card-content">
      ${message}
      ${
        this._forecastLoaded && !this._forecastLoading
          ? html`<button type="button" @click=${this._retryForecast}>
              ${_t('hourly_charts.retry_forecast')}
            </button>`
          : ''
      }
    </div>`;
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
