import { LitElement, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { HomeAssistant, WeatherForecast } from '../../types/home-assistant';
import type { HourlyChartCardConfig } from './const';

/**
 * Shared base class for all standalone hourly-chart cards.
 *
 * Mirrors forecast-diagram-card.ts exactly:
 * - setBaseConfig() schedules load with setTimeout(1000)
 * - updated() does nothing (same as forecast-diagram-card)
 * - render just checks _hourlyForecast.length === 0
 */
export abstract class HourlyForecastBaseCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: HourlyChartCardConfig;

  @state() protected _hourlyForecast: WeatherForecast[] = [];
  @state() protected _forecastLoading = false;

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
      const data = (ws as any)?.response;
      if (data && data[this.config.entity]) {
        this._hourlyForecast = data[this.config.entity].forecast || [];
        (this as LitElement).requestUpdate('_hourlyForecast');
      } else {
        this._hourlyForecast = [];
      }
    } catch (e) {
      console.error(`[SwissWeather] Forecast load failed for ${this.config.entity}:`, e);
      this._hourlyForecast = [];
    } finally {
      this._forecastLoading = false;
    }
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    const hassChanged = changedProperties.has('hass');
    const configChanged = changedProperties.has('config');
    if (
      (hassChanged || configChanged) &&
      this._hourlyForecast.length === 0 &&
      !this._forecastLoading
    ) {
      void this._loadForecast();
    }
  }

  protected setBaseConfig(config: HourlyChartCardConfig): void {
    this.config = config;
    // Same pattern as forecast-diagram-card.ts
    setTimeout(() => {
      this._loadForecast();
    }, 1000);
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
