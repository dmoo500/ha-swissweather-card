import { LitElement, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { HomeAssistant, WeatherForecast } from '../../types/home-assistant';
import type { HourlyChartCardConfig } from './const';

/**
 * Shared base class for all standalone hourly-chart cards.
 *
 * Uses the exact same loading pattern as forecast-diagram-card.ts:
 * - setTimeout(1000) in setBaseConfig defers the WS call until HA is ready
 * - updated() reloads when the entity changes
 * - No _loadAttempted flag – render just checks _hourlyForecast.length
 */
export abstract class HourlyForecastBaseCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: HourlyChartCardConfig;

  @state() protected _hourlyForecast: WeatherForecast[] = [];
  @state() protected _forecastLoading = false;

  private _loadEntityId: string | undefined;
  private _loadTimer: ReturnType<typeof setTimeout> | undefined;

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
    }
  }

  // ─── Lit lifecycle ───────────────────────────────────────────────────────

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    // Reload when the entity changes after initial setup.
    if (this.hass && this.config?.entity && this._loadEntityId !== this.config.entity) {
      this._loadEntityId = this.config.entity;
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

  protected setBaseConfig(config: HourlyChartCardConfig): void {
    this.config = config;
    // Same 1000 ms delay as forecast-diagram-card.ts – gives HA time to set hass.
    this._scheduleLoad();
  }

  private _scheduleLoad(): void {
    if (this._loadTimer) clearTimeout(this._loadTimer);
    this._loadTimer = setTimeout(() => {
      this._loadForecast();
    }, 1000);
  }
}
