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

  /** Schedule a load with a short delay so HA has time to fully initialise. */
  private _scheduleLoad(): void {
    if (this._loadTimer) clearTimeout(this._loadTimer);
    this._loadTimer = setTimeout(() => {
      this._loadForecast();
    }, 100);
  }

  // ─── Lit lifecycle ───────────────────────────────────────────────────────

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (this.hass && this.config?.entity) {
      if (this._loadEntityId !== this.config.entity) {
        // Entity changed (or first load after setConfig) – reset and reload.
        this._loadEntityId = this.config.entity;
        this._loadAttempted = false;
        this._hourlyForecast = [];
        this._scheduleLoad();
      } else if (changedProperties.has('hass') && !this._loadAttempted && !this._forecastLoading) {
        // hass updated but we still have no data – retry.
        this._scheduleLoad();
      }
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
    // Defer until HA has finished setting up hass (same pattern as forecast-diagram-card).
    this._scheduleLoad();
  }
}
