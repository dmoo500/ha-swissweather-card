import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { getEntityState } from '../../utils';
import {
  type CardConfig,
  FORECAST_DIAGRAM_CARD_EDITOR_NAME,
  FORECAST_DIAGRAM_CARD_NAME,
  schema,
} from './const';
import { property, state, customElement } from 'lit/decorators.js';
import { WeatherEntity, WeatherForecast, type HomeAssistant } from '../../types/home-assistant';
import { getWeatherIcon } from '../../icons';
import { translate as _t, registerTranslateConfig } from 'lit-translate';
import { translations } from '../../translations';

registerTranslateConfig({
  // Loads the language by returning a JSON structure for a given language
  loader: lang => {
    return translations[lang];
  },
});

@customElement(FORECAST_DIAGRAM_CARD_NAME)
export class ForecastDiagramCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: CardConfig;
  @state() private _forecast: WeatherForecast[] = [];
  @state() private _hourlyForecast: WeatherForecast[] = [];
  @state() private _forecastLoading = false;

  constructor() {
    super();
    // Debug: SwissweatherCard (BG) constructor
    // console.log('🔧 SwissweatherCard (BG) constructor called');
    // console.log('🔧 LitElement base:', LitElement);
    // console.log('🔧 customElement decorator applied');
  }

  connectedCallback() {
    super.connectedCallback();
    // Debug: SwissweatherCard (BG) connected to DOM
    // console.log('🔌 SwissweatherCard (BG) connected to DOM');
    // console.log('🔌 Custom element defined:', customElements.get('swissweather-bg-card'));
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
  }

  static get styles() {
    return css`
      :host {
        display: block;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        border-radius: 16px;
        box-shadow: var(
          --ha-card-box-shadow,
          0 4px 20px var(--box-shadow-color, rgba(0, 0, 0, 0.1))
        );
        font-family: var(
          --primary-font-family,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          sans-serif
        );
        color: var(--primary-text-color, #fff);

        /* Calculate height according to HA docs: rows * 56px + (rows-1) * 8px gap */
        /* Simplified: height = rows * 64px - 8px */
        height: calc(var(--card-grid-rows, 3) * 64px - 8px);
        min-height: calc(var(--card-grid-rows, 3) * 64px - 8px);
      }

      .chart {
        background: var(--card-background-color, #fff);
        border-radius: 12px;
        padding: 15px;
        border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
      }
    `;
  }
  private async _loadForecast(): Promise<void> {
    if (!this.hass || !this.config?.entity || this._forecastLoading) {
      return;
    }
    this._forecastLoading = true;

    try {
      // Load both forecasts in parallel
      const [wsDaily, wsHourly] = await Promise.all([
        (this.hass as any).callWS({
          type: 'call_service',
          domain: 'weather',
          service: 'get_forecasts',
          service_data: {
            entity_id: this.config.entity,
            type: 'daily',
          },
          return_response: true,
        }),
        (this.hass as any).callWS({
          type: 'call_service',
          domain: 'weather',
          service: 'get_forecasts',
          service_data: {
            entity_id: this.config.entity,
            type: 'hourly',
          },
          return_response: true,
        }),
      ]);
      // DAILY
      const forecastData = (wsDaily as any)?.response;
      if (forecastData && forecastData[this.config.entity]) {
        this._forecast = forecastData[this.config.entity].forecast || [];
        (this as LitElement).requestUpdate('_forecast');
      } else {
        this._forecast = [];
      }
      // HOURLY
      const hourlyData = (wsHourly as any)?.response;
      if (hourlyData && hourlyData[this.config.entity]) {
        this._hourlyForecast = hourlyData[this.config.entity].forecast || [];
        (this as LitElement).requestUpdate('_hourlyForecast');
      } else {
        this._hourlyForecast = [];
      }
      // Debug-Ausgaben
      console.log('🟢 Forecast geladen:', {
        forecast: this._forecast,
        hourlyForecast: this._hourlyForecast,
      });
    } catch (wsError) {
      console.warn('⚠️ Forecast loading failed:', wsError);
      this._forecast = [];
      this._hourlyForecast = [];
    } finally {
      this._forecastLoading = false;
    }
  }

  public setConfig(config: CardConfig): void {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this.config = config;

    // Load forecast when config changes (with delay to ensure HA is ready)
    setTimeout(() => {
      this._loadForecast();
    }, 1000);
  }

  public static getStubConfig() {
    return {
      type: `custom:${FORECAST_DIAGRAM_CARD_NAME}`,
      entity: '',
    };
  }

  public static getConfigElement() {
    // Return the inline editor element
    return document.createElement(FORECAST_DIAGRAM_CARD_EDITOR_NAME);
  }

  // Schema for the visual editor
  public static getConfigSchema() {
    return schema;
  }
  public getCardSize(): number {
    return this.config?.grid_options?.rows ?? 3;
  }
  // The rules for sizing your card in the grid in sections view
  public getGridOptions() {
    return {
      rows: this.config?.grid_options?.rows ?? 3,
      columns: this.config?.grid_options?.columns ?? 12,
      min_columns: 12,
      max_columns: 48,
      min_rows: 3,
      max_rows: 8,
    };
  }

  public render(): TemplateResult {
    const weatherEntity = getEntityState(this.hass, this.config.entity) as WeatherEntity;
    const gridRows = this.config?.grid_options?.rows ?? 3;

    // Set CSS variable for card height calculation
    this.style.setProperty('--card-grid-rows', gridRows.toString());

    if (!weatherEntity) {
      return html`<div>Entity not found: ${this.config.entity}</div>`;
    }
    if (!this._forecast || this._forecast.length === 0) {
      return html`<div>Loading forecast...</div>`;
    }
    if (!this._hourlyForecast || this._hourlyForecast.length === 0) {
      return html`<div>Loading hourly forecast...</div>`;
    }
    // @property({ type: Array }) forecast: WeatherForecast[] = [];
    // @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
    // @property({ type: Object }) config: any;
    // @property({ type: Function }) getWeatherIcon!: (...args: any[]) => TemplateResult;
    return this._forecast.length > 0 && this._hourlyForecast.length > 0
      ? html`<daily-forecast-diagram
          .config=${{ ...this.config, enable_animate_weather_icons: true }}
          .forecast=${[...(this._forecast?.slice(0, 7) ?? [])]}
          .hourlyForecast=${[...this._hourlyForecast]}
          ._t=${_t}
          .getWeatherIcon=${getWeatherIcon}
          .standalone=${true}
        ></daily-forecast-diagram>`
      : html``;
  }
}
