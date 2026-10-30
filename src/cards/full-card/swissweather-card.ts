import { getTranslations } from '../../translations';
import { fullCardStyles } from './swissweather-card.styles';
import { formatDateToWeekDay } from '../../charts/index';
import { LitElement, html, PropertyValues, TemplateResult } from 'lit';
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
import { fetchWeatherForecastsIndependently, forecastDebug } from '../../utils/weather-forecast';
import { getOrderedCharts } from './chart-order';

registerTranslateConfig({
  // Loads the language by returning a JSON structure for a given language
  loader: lang => {
    return getTranslations(lang);
  },
});

@customElement(FULL_CARD_NAME)
export class SwissWeatherCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: CardConfig;
  @state() private _forecast: WeatherForecast[] = [];
  @state() private _hourlyForecast: WeatherForecast[] = [];
  @state() private _forecastLoading = false;
  @state() private _forecastLoaded = false;
  @state() private _hourlyForecastError = false;
  @state() private _openWarnings: Record<string, boolean> = {};
  private _loadedLang: string | undefined;
  private _forecastRequestId = 0;

  private _toggleWarning = (id: string) => {
    this._openWarnings = { ...this._openWarnings, [id]: !this._openWarnings[id] };
    this.requestUpdate();
  };

  private _formatForecastDate = (date: string): string =>
    formatDateToWeekDay(date, this.hass?.selectedLanguage || this.hass?.language || 'en');

  private _lastEntityId: string | undefined;
  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (changedProperties.has('_hourlyForecast')) {
      forecastDebug('full card rendered', {
        entityId: this.config?.entity,
        hourlyCount: this._hourlyForecast.length,
        dailyCount: this._forecast.length,
      });
    }
    // Only reload if the entity changes
    if (this.hass && this.config && this.config.entity) {
      if (this._lastEntityId !== this.config.entity) {
        this._lastEntityId = this.config.entity;
        void this._loadForecast(this.config.entity);
      }
    }
  }

  private async _loadForecast(entityId: string): Promise<void> {
    if (!this.hass || !entityId) {
      return;
    }
    const requestId = ++this._forecastRequestId;
    this._forecastLoading = true;
    this._forecastLoaded = false;
    this._hourlyForecastError = false;

    try {
      const forecasts = await fetchWeatherForecastsIndependently(this.hass, entityId);
      if (requestId !== this._forecastRequestId) return;
      this._forecast = forecasts.daily.forecast;
      this._hourlyForecast = forecasts.hourly.forecast;
      this._hourlyForecastError = !!forecasts.hourly.error;
      if (forecasts.daily.error) {
        console.warn('⚠️ Daily forecast loading failed:', forecasts.daily.error);
      }
      if (forecasts.hourly.error) {
        console.warn('⚠️ Hourly forecast loading failed:', forecasts.hourly.error);
      }
    } catch (wsError) {
      if (requestId !== this._forecastRequestId) return;
      console.error('⚠️ Forecast loading failed:', wsError);
      this._forecast = [];
      this._hourlyForecast = [];
      this._hourlyForecastError = true;
    } finally {
      if (requestId === this._forecastRequestId) {
        this._forecastLoading = false;
        this._forecastLoaded = true;
      }
    }
  }

  static styles = fullCardStyles;

  public setConfig(config: CardConfig): void {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this.config = config;
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

  private _renderForecastTemperature(forecastHours: number): TemplateResult {
    return this._hourlyForecast.length > 0
      ? html`<forecast-temperature-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${forecastHours}
          .show_temperature=${this.config.show_temperature !== false}
          ._t=${_t}
        ></forecast-temperature-chart>`
      : html``;
  }
  private _renderForecastPrecipitation(forecastHours: number): TemplateResult {
    return this._hourlyForecast.length > 0
      ? html`<precipitation-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${forecastHours}
          .show_precipitation=${this.config.show_precipitation !== false}
          ._t=${_t}
        ></precipitation-chart>`
      : html``;
  }
  private _renderForecastSunshine(
    weatherEntity: WeatherEntity,
    sun_entity: HassEntity | null | undefined,
    forecastHours: number
  ): TemplateResult {
    return this._hourlyForecast.length > 0
      ? html`<sunshine-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${forecastHours}
          .show_sunshine=${this.config.show_sunshine !== false}
          .weatherEntity=${weatherEntity}
          .sun_entity=${sun_entity}
          ._t=${_t}
        ></sunshine-chart>`
      : html``;
  }
  private _renderForecastWind(forecastHours: number): TemplateResult {
    return this._hourlyForecast.length > 0
      ? html`<wind-chart
          .hourlyForecast=${this._hourlyForecast}
          .forecastHours=${forecastHours}
          .show_wind=${this.config.show_wind !== false}
          ._t=${_t}
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
    const orderedCharts = getOrderedCharts({
      chartOrder: this.config.chart_order,
      showTemperature: this.config.show_temperature,
      showPrecipitation: this.config.show_precipitation,
      showSunshine: this.config.show_sunshine,
      showWind: this.config.show_wind,
      showForecast: this.config.show_forecast,
    }).map(({ chart, showHourlyTitle }) => {
      let chartContent: TemplateResult | string = '';
      const showHourlyHeading = showHourlyTitle && this._hourlyForecast.length > 0;
      const showHourlyError =
        showHourlyTitle &&
        this._forecastLoaded &&
        this._hourlyForecast.length === 0 &&
        !this._forecastLoading;
      switch (chart) {
        case 'temperature':
          chartContent = this._renderForecastTemperature(forecastHours);
          break;
        case 'precipitation':
          chartContent = this._renderForecastPrecipitation(forecastHours);
          break;
        case 'sunshine':
          chartContent = this._renderForecastSunshine(weatherEntity, sun_entity, forecastHours);
          break;
        case 'wind':
          chartContent = this._renderForecastWind(forecastHours);
          break;
        case 'forecast':
          chartContent = this._showDailyForecast();
          break;
      }

      return html`
        ${
          showHourlyHeading
            ? html`
                <div class="section-title hourly-forecast-title">
                  <ha-icon icon="mdi:clock"></ha-icon>
                  ${_t('hourly_charts.forecast_hours', { hours: forecastHours })}
                </div>
              `
            : ''
        }
        ${
          showHourlyError
            ? html`<div class="forecast-error">
                ${_t(
                  this._hourlyForecastError
                    ? 'hourly_charts.forecast_request_failed'
                    : 'hourly_charts.no_forecast_data'
                )}
              </div>`
            : ''
        }
        ${chartContent}
      `;
    });

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
      ${orderedCharts}
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

  private _renderDailyForecastChart(): TemplateResult {
    return this._forecast.length > 0
      ? html`<daily-forecast-chart
          .forecast=${this._forecast}
          .forecastLoading=${this._forecastLoading}
          .show_forecast=${this.config.show_forecast !== false}
          .config=${this.config}
          ._t=${_t}
          .getWeatherIcon=${getWeatherIcon}
          .formatDate=${this._formatForecastDate}
        ></daily-forecast-chart>`
      : html``;
  }
  private _renderDailyForecastDiagram(): TemplateResult {
    return this._forecast.length > 0 && this._hourlyForecast.length > 0
      ? html`<daily-forecast-diagram
          .language=${this.hass.selectedLanguage || this.hass.language || 'en'}
          .config=${this.config}
          .forecast=${[...(this._forecast?.slice(0, 7) ?? [])]}
          .hourlyForecast=${[...this._hourlyForecast]}
          ._t=${_t}
          .getWeatherIcon=${getWeatherIcon}
          .standalone=${false}
        ></daily-forecast-diagram>`
      : this._forecast.length > 0
        ? this._renderDailyForecastChart()
        : html``;
  }
}
