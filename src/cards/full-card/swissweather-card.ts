import { getTranslations } from '../../translations';
import { formatDateToWeekDay, showHoursChartLabel } from '../../charts/index';
import { LitElement, html, css, PropertyValues, TemplateResult } from 'lit';
import { use, translate as _t, registerTranslateConfig } from 'lit-translate';
import { customElement, property, state } from 'lit/decorators.js';
import type {
  HomeAssistant,
  HassEntity,
  WeatherEntity,
  WeatherForecast,
  WeatherCondition,
} from '../../types/home-assistant';
import { getWeatherIcon } from '../../icons';
import { type CardConfig, FULL_CARD_EDITOR_NAME, FULL_CARD_NAME, schema } from './const';
import { isDay } from '../../utils';
import { renderWarningSection } from '../../utils/warning-renderer';

registerTranslateConfig({
  // Loads the language by returning a JSON structure for a given language
  loader: lang => {
    return getTranslations(lang);
  },
});

// Debug: Log before decorator application
console.log('🎯 About to apply @customElement decorator to SwissweatherCard');
console.log('🎯 customElements registry available:', !!customElements);

@customElement(FULL_CARD_NAME)
export class SwissWeatherCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: CardConfig;
  @state() private _forecast: WeatherForecast[] = [];
  @state() private _hourlyForecast: WeatherForecast[] = [];
  @state() private _forecastLoading = false;
  @state() private _openWarnings: Record<string, boolean> = {};
  private _loadedLang: string | undefined;

  private _toggleWarning = (id: string) => {
    this._openWarnings = { ...this._openWarnings, [id]: !this._openWarnings[id] };
    this.requestUpdate();
  };

  private _formatForecastDate = (date: string): string =>
    formatDateToWeekDay(date, this.hass?.selectedLanguage || this.hass?.language || 'en');

  constructor() {
    super();
    // Debug: SwissweatherCard constructor
    // console.log('🔧 SwissweatherCard constructor called');
    // console.log('🔧 LitElement base:', LitElement);
    // console.log('🔧 customElement decorator applied');
  }

  connectedCallback() {
    super.connectedCallback();
    // Debug: SwissweatherCard connected to DOM
    // console.log('🔌 SwissweatherCard connected to DOM');
    // console.log('🔌 Custom element defined:', customElements.get('swissweather-card'));
  }

  private _lastEntityId: string | undefined;
  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    // Only reload if the entity changes
    if (this.hass && this.config && this.config.entity) {
      if (this._lastEntityId !== this.config.entity) {
        this._lastEntityId = this.config.entity;
        this._loadForecast();
      }
    }
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

  static get styles() {
    return css`
      :host {
        display: block;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        border-radius: 16px;
        padding: 20px;
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
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        border-bottom: 2px solid var(--divider-color, #dc143c);
        padding-bottom: 15px;
      }

      .location {
        font-size: 24px;
        font-weight: bold;
        color: var(--primary-text-color, #fff);
      }

      .warning-section {
        border: 1px solid var(--warning-border-color, #ffeaa7);
        border-radius: 12px;
        padding: 15px;
        margin-bottom: 20px;
      }

      .warning-section.danger {
        background: linear-gradient(90deg, #f8d7da 0%, #f5c6cb 100%);
        border-color: var(--danger-border-color, #f1aeb5);
      }

      .warning-section.severe {
        background: linear-gradient(90deg, #ffeaa7 0%, #fdcb6e 100%);
        border-color: var(--severe-border-color, #e17055);
      }

      .warning-icon {
        font-size: 24px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }

      .current-weather {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 20px;
        margin-bottom: 25px;
      }

      .current-temp {
        font-size: 48px;
        font-weight: 300;
        color: var(--primary-text-color, #fff);
        line-height: 1;
      }

      .current-details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 8px;
      }

      .weather-icon {
        font-size: 64px;
        margin-bottom: 10px;
      }

      .condition {
        font-size: 16px;
        color: var(--primary-text-color, #fff);
        text-align: right;
      }

      .metrics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 15px;
        margin-bottom: 25px;
      }
      .metrics-table {
        display: flex;
        flex-direction: row;
        align-items: stretch;
      }
      .metrics-table .metric-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: none;
        border: none;
        min-width: 0;
        box-shadow: none;
        transition: none;
      }
      .metrics-table .metric-card:hover {
        background: none;
        border: none;
        box-shadow: none;
        transform: none;
      }
      .metrics-table > .metric-card > .metric-icon {
        margin-bottom: 0;
        margin-right: 8px;
      }
      .metrics-table > .metric-card > .wind-compass {
        min-width: 16px;
        width: 16px;
        height: 16px;
        margin: 13px auto 8px;
        margin-right: 8px;
      }
      .metrics-table > .metric-card > .metric-value {
        font-size: 12px;
        font-weight: bold;
        color: var(--primary-text-color, #2c3e50);
        margin-bottom: 0;
        margin-right: 8px;
      }

      .metric-card {
        background: var(--card-background-color, rgba(255, 255, 255, 0.7));
        border-radius: 12px;
        padding: 15px;
        text-align: center;
        border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
        transition: transform 0.2s ease;
      }

      .metric-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px var(--box-shadow-color, rgba(0, 0, 0, 0.15));
      }

      .metric-icon {
        font-size: 24px;
        margin-bottom: 8px;
        color: var(--state-icon-color, #dc143c);
      }

      .metric-value {
        font-size: 20px;
        font-weight: bold;
        color: var(--primary-text-color, #2c3e50);
        margin-bottom: 4px;
      }

      .metric-label {
        font-size: 12px;
        color: var(--secondary-text-color, #7f8c8d);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .wind-compass {
        width: 24px;
        height: 24px;
        border: 2px solid var(--state-icon-color, #dc143c);
        border-radius: 50%;
        position: relative;
        margin: 0 auto 10px;
      }

      .wind-arrow {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2px;
        height: 8px;
        background: var(--state-icon-color, #dc143c);
        transform-origin: bottom center;
        transform: translate(-50%, -100%);
      }

      .wind-arrow::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 8px solid var(--state-icon-color, #dc143c);
        transform: translateX(-50%);
      }

      @media (max-width: 768px) {
        :host {
          padding: 15px;
        }

        .metrics-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `;
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

  public getCardSize(): number {
    return 8;
  }

  public static getStubConfig() {
    return {
      type: 'custom:' + FULL_CARD_NAME,
      entity: '',
      show_location: true,
      location: 'Schweiz',
      show_forecast: true,
      forecast_hours: 6,
      show_temperature: true,
      show_precipitation: true,
      show_sunshine: true,
      show_warnings: true,
      show_wind: true,
      enable_animate_weather_icons: true,
      compact_mode: false,
      chart_order: ['temperature', 'precipitation', 'sunshine', 'wind', 'forecast'],
    };
  }

  public static getConfigElement() {
    // Return the inline editor element
    return document.createElement(FULL_CARD_EDITOR_NAME);
  }

  // Schema for the visual editor
  public static getConfigSchema() {
    return schema;
  }

  private _getEntityState(entityId: string): HassEntity | undefined {
    return this.hass?.states[entityId];
  }

  private _formatWindDirection(degrees: number): string {
    const directions = [
      'N',
      'NNO',
      'NO',
      'ONO',
      'O',
      'OSO',
      'SO',
      'SSO',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW',
    ];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
  }

  private _renderWarningSection(
    warningEntity: HassEntity | null | undefined,
    primaryEntity: HassEntity | null | undefined,
    secondaryEntity: HassEntity | null | undefined,
    tertiaryEntity: HassEntity | null | undefined
  ): TemplateResult | null {
    return renderWarningSection(
      warningEntity,
      primaryEntity,
      secondaryEntity,
      tertiaryEntity,
      this._openWarnings,
      this._toggleWarning
    );
  }

  // @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  // @property({ type: Number }) forecastHours = 12;
  // @property({ type: Boolean }) show_temperature = true;
  // @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  // @property({ type: Function }) showHoursChartLabel!: (hours: number) => TemplateResult;
  private _renderForecastTemperature(forecastHours: number): TemplateResult {
    const tString = (key: string, vars?: Record<string, any>) => `${_t(key, vars)}`;
    return this._forecast.length > 0 && this._hourlyForecast.length > 0
      ? html`<forecast-temperature-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${forecastHours}
          .show_temperature=${this.config.show_temperature !== false}
          ._t=${_t}
          .showHoursChartLabel=${(h: number) => showHoursChartLabel(h, tString)}
        ></forecast-temperature-chart>`
      : html``;
  }
  // @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  // @property({ type: Number }) forecastHours = 12;
  // @property({ type: Boolean }) show_precipitation = true;
  // @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  // @property({ type: Function }) showHoursChartLabel!: (hours: number) => TemplateResult;
  private _renderForecastPrecipitation(forecastHours: number): TemplateResult {
    const tString = (key: string, vars?: Record<string, any>) => `${_t(key, vars)}`;
    return this._forecast.length > 0 && this._hourlyForecast.length > 0
      ? html`<precipitation-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${forecastHours}
          .show_precipitation=${this.config.show_precipitation !== false}
          ._t=${_t}
          .showHoursChartLabel=${(h: number) => showHoursChartLabel(h, tString)}
        ></precipitation-chart>`
      : html``;
  }
  // @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  // @property({ type: Number }) forecastHours = 12;
  // @property({ type: Boolean }) show_sunshine = true;
  // @property({ type: Object }) weatherEntity!: WeatherEntity;
  // @property({ type: Object }) sun_entity?: HassEntity | null;
  // @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  // @property({ type: Function }) showHoursChartLabel!: (hours: number) => TemplateResult;
  private _renderForecastSunshine(
    weatherEntity: WeatherEntity,
    sun_entity: HassEntity | null | undefined,
    forecastHours: number
  ): TemplateResult {
    const tString = (key: string, vars?: Record<string, any>) => `${_t(key, vars)}`;
    return this._forecast.length > 0 && this._hourlyForecast.length > 0
      ? html`<sunshine-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${forecastHours}
          .show_sunshine=${this.config.show_sunshine !== false}
          .weatherEntity=${weatherEntity}
          .sun_entity=${sun_entity}
          ._t=${_t}
          .showHoursChartLabel=${(h: number) => showHoursChartLabel(h, tString)}
        ></sunshine-chart>`
      : html``;
  }
  // @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  // @property({ type: Number }) forecastHours = 12;
  // @property({ type: Boolean }) show_wind = true;
  // @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  // @property({ type: Function }) showHoursChartLabel!: (hours: number) => TemplateResult;
  private _renderForecastWind(forecastHours: number): TemplateResult {
    const tString = (key: string, vars?: Record<string, any>) => `${_t(key, vars)}`;
    return this._forecast.length > 0 && this._hourlyForecast.length > 0
      ? html`<wind-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${forecastHours}
          .show_wind=${this.config.show_wind !== false}
          ._t=${_t}
          .showHoursChartLabel=${(h: number) => showHoursChartLabel(h, tString)}
        ></wind-chart>`
      : html``;
  }

  private _renderCurrentWeather(
    windSpeed: number,
    windDirection: number,
    humidity: number,
    pressure: number,
    visibility: number,
    sunshineEntity: HassEntity | null | undefined
  ): TemplateResult {
    return html`
      <div class="section-title">
        <ha-icon icon="mdi:calendar"></ha-icon>
        ${_t('current_weather')}
      </div>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:weather-windy"></ha-icon></div>
          <div class="metric-value">${Math.round(windSpeed)} km/h</div>
          <div class="metric-label">${_t('wind')}</div>
        </div>
        <div class="metric-card">
          <div class="wind-compass">
            <div
              class="wind-arrow"
              style="transform: translate(-50%, -100%) rotate(${windDirection}deg);"
            ></div>
          </div>
          <div class="metric-value">${this._formatWindDirection(windDirection)}</div>
          <div class="metric-label">${_t('direction')}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:water-percent"></ha-icon></div>
          <div class="metric-value">${humidity}%</div>
          <div class="metric-label">${_t('humidity')}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:gauge"></ha-icon></div>
          <div class="metric-value">${pressure} hPa</div>
          <div class="metric-label">${_t('pressure')}</div>
        </div>
        ${
          sunshineEntity
            ? html`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                  <div class="metric-value">${parseFloat(sunshineEntity.state).toFixed(1)}h</div>
                  <div class="metric-label">${_t('sunshine')}</div>
                </div>
              `
            : ''
        }
        ${
          visibility > 0
            ? html`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                  <div class="metric-value">${visibility} km</div>
                  <div class="metric-label">${_t('visibility')}</div>
                </div>
              `
            : ''
        }
      </div>
    `;
  }

  private _renderCurrentWeatherSection(
    windSpeed: number,
    windDirection: number,
    humidity: number,
    pressure: number,
    visibility: number,
    sunshineEntity: HassEntity | null | undefined
  ): TemplateResult {
    return html`
      <div class="current-weather-section">
        ${
          this.config.compact_mode === true
            ? html`
                ${this._renderCurrentWeatherCompactMode(
                  windSpeed,
                  windDirection,
                  humidity,
                  pressure,
                  visibility,
                  sunshineEntity
                )}
              `
            : html`
                ${this._renderCurrentWeather(
                  windSpeed,
                  windDirection,
                  humidity,
                  pressure,
                  visibility,
                  sunshineEntity
                )}
              `
        }
      </div>
    `;
  }

  public render(): TemplateResult {
    if (!this.hass || !this.config) {
      return html``;
    }

    const lang = (this.hass.selectedLanguage || this.hass.language || 'en').substring(0, 2);
    if (lang !== this._loadedLang) {
      this._loadedLang = lang;
      use(lang).then(() => this.requestUpdate());
    }

    const weatherEntity = this._getEntityState(this.config.entity) as WeatherEntity;
    const sun_entity = this._getEntityState(this.config.sun_entity || 'sun.sun');
    if (!weatherEntity) {
      return html`<div>Entity not found: ${this.config.entity}</div>`;
    }
    const showLocation = this.config.show_location !== false;
    const location = this.config.location || _t('location');
    const temperature = weatherEntity.attributes.temperature;
    const condition = weatherEntity.state as WeatherCondition;

    // Get additional sensor data
    const windEntity = this.config.wind_entity
      ? this._getEntityState(this.config.wind_entity)
      : null;
    const windDirectionEntity = this.config.wind_direction_entity
      ? this._getEntityState(this.config.wind_direction_entity)
      : null;
    const sunshineEntity = this.config.sunshine_entity
      ? this._getEntityState(this.config.sunshine_entity)
      : null;
    const warningEntity = this.config.warning_entity
      ? this._getEntityState(this.config.warning_entity)
      : null;
    const primaryWarningEntity = this.config.primary_warning_entity
      ? this._getEntityState(this.config.primary_warning_entity)
      : null;
    const secondaryWarningEntity = this.config.secondary_warning_entity
      ? this._getEntityState(this.config.secondary_warning_entity)
      : null;
    const tertiaryWarningEntity = this.config.tertiary_warning_entity
      ? this._getEntityState(this.config.tertiary_warning_entity)
      : null;

    const windSpeed = windEntity
      ? parseFloat(windEntity.state)
      : weatherEntity.attributes.wind_speed || 0;
    const windDirection = windDirectionEntity
      ? parseFloat(windDirectionEntity.state)
      : weatherEntity.attributes.wind_bearing || 0;
    const humidity = weatherEntity.attributes.humidity || 0;
    const pressure = weatherEntity.attributes.pressure || 0;
    const visibility = weatherEntity.attributes.visibility || 0;
    const forecastHours = this.config.forecast_hours ?? 6;

    return html`
      ${
        showLocation
          ? html`
              <div class="header">
                <div class="location">${location}</div>
              </div>
            `
          : ''
      }
      ${
        this.config.show_warnings
          ? this._renderWarningSection(
              warningEntity,
              primaryWarningEntity,
              secondaryWarningEntity,
              tertiaryWarningEntity
            )
          : ''
      }

      <div class="current-weather">
        <div>
          <div class="current-temp">${temperature}°</div>
          <div class="condition">${_t(condition)}</div>
        </div>
        <div class="current-details">
          <div
            class="weather-icon"
            style="color: var(--icon-color, #fff); width: 64px; height: 64px;"
          >
            ${getWeatherIcon(
              condition,
              this.config.enable_animate_weather_icons ? 'animated' : 'mdi',
              '64px',
              isDay(this.hass, this.config)
            )}
          </div>
        </div>
      </div>

      ${this._renderCurrentWeatherSection(
        windSpeed,
        windDirection,
        humidity,
        pressure,
        visibility,
        sunshineEntity
      )}
      ${
        this.config.show_temperature !== false ||
        this.config.show_precipitation !== false ||
        this.config.show_sunshine !== false ||
        this.config.show_wind !== false ||
        this.config.show_forecast !== false
          ? html`
              <div class="section-title">
                <ha-icon icon="mdi:clock"></ha-icon>
                ${_t('hourly_charts.forecast_hours', { hours: forecastHours })}
              </div>
            `
          : ''
      }
      ${this._getEffectiveChartOrder().map(chart => {
        switch (chart) {
          case 'temperature':
            return this._renderForecastTemperature(forecastHours);
          case 'precipitation':
            return this._renderForecastPrecipitation(forecastHours);
          case 'sunshine':
            return this._renderForecastSunshine(weatherEntity, sun_entity, forecastHours);
          case 'wind':
            return this._renderForecastWind(forecastHours);
          case 'forecast':
            return this._showDailyForecast();
          default:
            return '';
        }
      })}
    `;
  }

  private _renderCurrentWeatherCompactMode(
    windSpeed: number,
    windDirection: number,
    humidity: number,
    pressure: number,
    visibility: number,
    sunshineEntity: HassEntity | null | undefined
  ): TemplateResult {
    return html`
      <div class="metrics-table">
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:weather-windy"></ha-icon></div>
          <div class="metric-value">${Math.round(windSpeed)} km/h</div>
        </div>
        <div class="metric-card">
          <div class="wind-compass">
            <div
              class="wind-arrow"
              style="transform: translate(-50%, -100%) rotate(${windDirection}deg);"
            ></div>
          </div>
          <div class="metric-value">${this._formatWindDirection(windDirection)}</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:water-percent"></ha-icon></div>
          <div class="metric-value">${humidity}%</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon"><ha-icon icon="mdi:gauge"></ha-icon></div>
          <div class="metric-value">${pressure} hPa</div>
        </div>
        ${
          sunshineEntity
            ? html`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                  <div class="metric-value">${parseFloat(sunshineEntity.state).toFixed(1)}h</div>
                </div>
              `
            : ''
        }
        ${
          visibility > 0
            ? html`
                <div class="metric-card">
                  <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                  <div class="metric-value">${visibility} km</div>
                </div>
              `
            : ''
        }
      </div>
    `;
  }

  private _showDailyForecast(): TemplateResult {
    if (this.config.show_forecast === false) return html``;
    return this.config.compact_mode === true
      ? this._renderDailyForecastDiagram()
      : this._renderDailyForecastChart();
  }

  private _getEffectiveChartOrder(): string[] {
    const chartOrder = Array.isArray(this.config.chart_order)
      ? [...this.config.chart_order]
      : ['temperature', 'precipitation', 'sunshine', 'wind', 'forecast'];

    if (this.config.show_forecast !== false && !chartOrder.includes('forecast')) {
      chartOrder.push('forecast');
    }

    return chartOrder;
  }

  // @property({ type: Array }) forecast: WeatherForecast[] = [];
  // @property({ type: Boolean }) forecastLoading = false;
  // @property({ type: Boolean }) show_forecast = true;
  // @property({ type: Object }) config: any = {};
  // @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  // @property({ type: Function }) getWeatherIcon!: (...args: any[]) => TemplateResult;
  // @property({ type: Function }) isDay!: () => boolean;
  private _renderDailyForecastChart(): TemplateResult {
    return this._forecast.length > 0 && this._hourlyForecast.length > 0
      ? html`<daily-forecast-chart
          .forecast=${this._forecast?.slice(0, 7) ?? []}
          .forecastLoading=${this._forecastLoading}
          .show_forecast=${this.config.show_forecast !== false}
          .config=${this.config}
          ._t=${_t}
          .getWeatherIcon=${getWeatherIcon}
          .formatDate=${this._formatForecastDate}
        ></daily-forecast-chart>`
      : html``;
  }
  // @property({ type: Array }) forecast: WeatherForecast[] = [];
  // @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  // @property({ type: Object }) config: any;
  // @property({ type: Function }) getWeatherIcon!: (...args: any[]) => TemplateResult;
  private _renderDailyForecastDiagram(): TemplateResult {
    return this._forecast.length > 0 && this._hourlyForecast.length > 0
      ? html`<daily-forecast-diagram
          .config=${this.config}
          .forecast=${[...(this._forecast?.slice(0, 7) ?? [])]}
          .hourlyForecast=${[...this._hourlyForecast]}
          ._t=${_t}
          .getWeatherIcon=${getWeatherIcon}
          .standalone=${false}
        ></daily-forecast-diagram>`
      : html``;
  }
}
