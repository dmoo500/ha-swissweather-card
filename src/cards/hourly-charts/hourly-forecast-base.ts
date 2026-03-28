import { LitElement, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { HomeAssistant, WeatherForecast } from '../../types/home-assistant';
import type { HourlyChartCardConfig } from './const';

/**
 * Shared base class for all standalone hourly-chart cards.
 *
 * Handles the forecast-loading lifecycle in the same proven way as
 * forecast-diagram-card.ts: a short setTimeout in setConfig defers the WS
 * call until HA has fully initialised hass (including callWS). The
 * updated() hook handles entity changes after initial load.
 */
export abstract class HourlyForecastBaseCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: HourlyChartCardConfig;

  @state() protected _hourlyForecast: WeatherForecast[] = [];
  @state() protected _forecastLoading = false;
  @state() protected _loadAttempted = false;

  private _loadEntityId: string | undefined;
  private _loadTimer: ReturnType<typeof setTimeout> | undefined;

  // ─── Forecast loading ────────────────────────────────────────────────────

  protected async _loadForecast(): Promise<void> {
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
      console.error(`[SwissWeather] Forecast load failed for ${this.config.entity}:`, e);
      this._hourlyForecast = [];
    } finally {
      this._forecastLoading = false;
      this._loadAttempted = true;
    }
  }

  /** Schedule a load with a delay so HA has time to fully initialise (same as forecast-diagram-card: 1000 ms). */
  private _scheduleLoad(): void {
    if (this._loadTimer) clearTimeout(this._loadTimer);
    this._loadTimer = setTimeout(() => {
      this._loadForecast();
    }, 1000);
  }

  // ─── Lit lifecycle ───────────────────────────────────────────────────────

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    // Only reload when the entity itself changes after initial setup.
    // The initial load is handled by setBaseConfig() via _scheduleLoad().
    if (
      changedProperties.has('config') &&
      this.hass &&
      this.config?.entity &&
      this._loadEntityId !== this.config.entity
    ) {
      this._loadEntityId = this.config.entity;
      this._loadAttempted = false;
      this._hourlyForecast = [];
      this._scheduleLoad();
    }
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._loadTimer) clearTimeout(this._loadTimer);
    this._loadTimer = undefined;
  }

  // ─── Config ──────────────────────────────────────────────────────────────

  /**
   * Call super.setBaseConfig(config) from each card's setConfig() to
   * schedule the initial forecast load exactly like forecast-diagram-card.ts.
   */
  protected setBaseConfig(config: HourlyChartCardConfig): void {
    this.config = config;
    this._loadEntityId = config.entity;
    this._loadAttempted = false;
    this._hourlyForecast = [];
    // Defer until HA has finished setting up hass – same 1000 ms as forecast-diagram-card.ts.
    this._scheduleLoad();
  }
}
