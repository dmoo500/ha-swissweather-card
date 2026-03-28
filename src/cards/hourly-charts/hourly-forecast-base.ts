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
    console.log(`[SwissWeather] _loadForecast called`, {
      hasHass: !!this.hass,
      entity: this.config?.entity,
      loading: this._forecastLoading,
    });
    if (!this.hass || !this.config?.entity || this._forecastLoading) {
      console.warn(`[SwissWeather] _loadForecast guard blocked`, {
        hasHass: !!this.hass,
        entity: this.config?.entity,
        loading: this._forecastLoading,
      });
      return;
    }
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
      console.log(`[SwissWeather] WS response:`, data);
      if (data && data[this.config.entity]) {
        this._hourlyForecast = data[this.config.entity].forecast || [];
        (this as LitElement).requestUpdate('_hourlyForecast');
        console.log(`[SwissWeather] Forecast loaded: ${this._hourlyForecast.length} entries`);
      } else {
        console.warn(`[SwissWeather] No forecast data in response for ${this.config.entity}`);
        this._hourlyForecast = [];
      }
    } catch (e) {
      console.error(`[SwissWeather] Forecast load failed for ${this.config.entity}:`, e);
      this._hourlyForecast = [];
    } finally {
      this._forecastLoading = false;
    }
  }

  // Intentionally empty – same as forecast-diagram-card.ts
  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);
  }

  protected setBaseConfig(config: HourlyChartCardConfig): void {
    this.config = config;
    console.log(
      `[SwissWeather] setBaseConfig called, entity=${config.entity}, scheduling load in 1000ms`
    );
    // Same pattern as forecast-diagram-card.ts
    setTimeout(() => {
      console.log(`[SwissWeather] setTimeout fired, calling _loadForecast`);
      this._loadForecast();
    }, 1000);
  }
}
