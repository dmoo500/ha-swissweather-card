import { translations } from '../../translations';
import { LitElement, html, css, svg, TemplateResult, PropertyValues } from 'lit';
import { query } from 'lit/decorators.js';
import { use, translate as _t, registerTranslateConfig } from 'lit-translate';
import { customElement, property, state } from 'lit/decorators.js';
import type {
  HomeAssistant,
  WeatherEntity,
  WeatherCondition,
  WeatherForecast,
} from '../../types/home-assistant';
import { getWeatherBackground } from './background';
import { getEntityState, isDay } from '../../utils';
import {
  ANIMATED_BACKGROUND_CARD_EDITOR_NAME,
  ANIMATED_BACKGROUND_CARD_NAME,
  type CardConfig,
  schema,
} from './const';
import { getWeatherIcon } from '../../icons';
import { formatDateToWeekDay } from '../../charts';
import '../../charts/hourly-forecast-chart';

registerTranslateConfig({
  // Loads the language by returning a JSON structure for a given language
  loader: lang => {
    return translations[lang];
  },
});

// Debug: Log before decorator application
console.log('🎯 About to apply @customElement decorator to SwissweatherCard (BG)');
console.log('🎯 customElements registry available:', !!customElements);

@customElement(ANIMATED_BACKGROUND_CARD_NAME)
export class SwissWeatherBGCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: CardConfig;
  @query('.temperature') private _tempEl?: HTMLElement;
  @state() private _forecast: WeatherForecast[] = [];
  @state() private _hourly: WeatherForecast[] = [];
  private _forecastLoading = false;
  private _hourlyLoading = false;
  private _lastEntityId: string | undefined;

  static get styles() {
    return css`
      :host {
        display: block;
        box-shadow: none;
        /* Calculate height according to HA docs: rows * 56px + (rows-1) * 8px gap */
        /* Simplified: height = rows * 64px - 8px */
        height: calc(var(--card-grid-rows, 3) * 64px - 8px);
        min-height: calc(var(--card-grid-rows, 3) * 64px - 8px);
      }

      .temperature {
        text-align: center;
        border-radius: 45px;
        border: 2px solid var(--primary-text-color, #fff);
        background: var(--ha-card-background, var(--card-background-color, #fff));
        padding: 5px 10px;
        float: left;
        box-shadow: var(
          --ha-card-box-shadow,
          0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2)
        );
        item-align: center;
        justify-content: center;
        align-content: center;
        align-items: center;
        position: relative;
        font-size: var(--bg-temp-font-size, 36px);
        font-weight: bold;
        text-align: center;
        z-index: 1;
      }

      .img-svg {
        position: absolute;
        margin-top: var(--bg-temp-img-top, 36px);
        inset: 0;
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        min-height: 200px;
        box-shadow: var(
          --ha-card-box-shadow,
          0 4px 20px var(--box-shadow-color, rgba(0, 0, 0, 0.1))
        );
      }
      .condition {
        position: absolute;
        top: calc(var(--bg-temp-font-size, 36px) + 16px);
        right: 16px;
        margin-left: 16px;
        font-size: 16px;
        color: var(--primary-text-color, #fff);
        text-align: right;
      }
      .forecast-temps {
        position: absolute;
        top: calc(var(--bg-temp-font-size, 36px) * 2 + 16px);
        left: 16px;
        font-size: 14px;
        color: var(--primary-text-color, #fff);
        text-align: right;
        display: flex;
        flex-direction: row;
      }
      .sun-times {
        position: absolute;
        top: calc(var(--bg-temp-font-size, 36px) * 2 + 16px);
        right: 16px;
        display: flex;
        gap: 12px;
        align-items: center;
        color: var(--primary-text-color, #fff);
        font-size: 14px;
      }
      .forecast-mini {
        position: absolute;
        bottom: 16px;
        right: 16px;
        z-index: 2; /* ensure it is in the foreground over background */
        padding-right: 8px;
        max-width: calc(100% - 32px); /* honor left/right margins */
      }
      @media (max-width: 400px) {
        .forecast-mini {
          right: 12px;
          bottom: 12px;
          padding-right: 6px;
          max-width: calc(100% - 24px);
        }
      }
      .temp-high {
        font-weight: bold;
      }
      .temp-low {
      }
      @media (max-width: 400px) {
        .temperature {
          font-size: calc(var(--bg-temp-font-size, 36px) * 0.8);
          padding: 4px 8px;
        }
        .condition {
          font-size: 14px;
        }
        .forecast-temps {
          font-size: 12px;
        }
      }
      @media (max-width: 768px) {
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
  }

  public getCardSize(): number {
    return this.config?.grid_options?.rows ?? 4;
  }
  // The rules for sizing your card in the grid in sections view
  public getGridOptions() {
    return {
      rows: this.config?.grid_options?.rows ?? 3,
      columns: this.config?.grid_options?.columns ?? 12,
      min_columns: 12,
      max_columns: 48,
      min_rows: 4,
      max_rows: 8,
    };
  }

  public static getStubConfig() {
    return {
      type: `custom:${ANIMATED_BACKGROUND_CARD_NAME}`,
      entity: '',
    };
  }

  public static getConfigElement() {
    // Return the inline editor element
    return document.createElement(ANIMATED_BACKGROUND_CARD_EDITOR_NAME);
  }

  // Schema for the visual editor
  public static getConfigSchema() {
    return schema;
  }

  protected updated(changed: PropertyValues): void {
    super.updated(changed);
    if (this.hass && this.config?.entity) {
      if (this._lastEntityId !== this.config.entity) {
        this._lastEntityId = this.config.entity;
        // Load per mode
        const mode = this.config.forecast_mode || 'daily';
        if (mode === 'daily') this._loadDailyForecast();
        if (mode === 'hourly') this._loadHourlyForecast();
      }
      // Ensure day min/max can render even in hourly/none mode
      if (
        this.config.show_day_temps !== false &&
        !this._forecastLoading &&
        this._forecast.length === 0
      ) {
        this._loadDailyForecast();
      }
    }
  }

  public render(): TemplateResult {
    use((this.hass.selectedLanguage || this.hass.language || 'en').substring(0, 2));

    if (!this.hass || !this.config) {
      return html``;
    }
    const gridRows = this.config?.grid_options?.rows ?? 3;

    // Set CSS variable for card height calculation
    this.style.setProperty('--card-grid-rows', gridRows.toString());

    const weatherEntity = getEntityState(this.hass, this.config.entity) as WeatherEntity;
    const temperature = weatherEntity.attributes.temperature;
    const condition = weatherEntity.state as WeatherCondition;

    const chartWidth = this.clientWidth || 300;
    const height = gridRows * 64 - 8;
    // Apply CSS variable for temperature font size
    const fs = this.config?.temperature_font_size;
    const fontSizePx = typeof fs === 'number' && fs > 0 ? `${fs}px` : '36px';
    this.style.setProperty('--bg-temp-font-size', fontSizePx);
    this.style.setProperty('--bg-temp-img-top', `calc(${fontSizePx})`);
    const day =
      this._forecast && this._forecast.length > 0
        ? (this._forecast[0] as WeatherForecast)
        : weatherEntity.attributes.forecast
          ? (weatherEntity.attributes.forecast[0] as WeatherForecast)
          : null;
    const sunEntityId = this.config.sun_entity;
    const sunState = sunEntityId ? (this.hass.states[sunEntityId] as any) : undefined;
    const nextSunrise = sunState?.attributes?.next_rising
      ? new Date(sunState.attributes.next_rising)
      : undefined;
    const nextSunset = sunState?.attributes?.next_setting
      ? new Date(sunState.attributes.next_setting)
      : undefined;
    // Format times as HH:MM according to HA language
    const locale = (this.hass.selectedLanguage || this.hass.language || 'en').replace('_', '-');
    const fmt = (d?: Date) =>
      d ? d.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' }) : '--:--';
    return html`
      <div>
        <div class="temperature">
          ${typeof temperature === 'number' && !isNaN(temperature) ? temperature : '--'}°
        </div>
        ${condition
          ? html`<div class="img-svg">
                <svg
                  viewBox="0 0 ${chartWidth} ${height}"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="xMidYMid slice"
                >
                  ${chartWidth > 0
                    ? getWeatherBackground(condition, isDay(this.hass, this.config), chartWidth)
                    : svg``}
                </svg>
              </div>
              ${day && this.config.show_day_temps !== false
                ? html`
                    <div class="forecast-temps">
                      <span class="temp-high">
                        <ha-icon icon="mdi:arrow-up-bold"></ha-icon> ${Math.round(day.temperature)}°
                      </span>
                      <span class="temp-low">
                        <ha-icon icon="mdi:arrow-down-bold"></ha-icon> ${Math.round(
                          day.templow || day.temperature - 5
                        )}°
                      </span>
                    </div>
                  `
                : ''}
              ${sunEntityId && this.config.show_sun_times !== false
                ? html`
                    <div class="sun-times">
                      <span title="${_t('sunrise')}">
                        <ha-icon icon="mdi:weather-sunset-up"></ha-icon> ${fmt(nextSunrise)}
                      </span>
                      <span title="${_t('sunset')}">
                        <ha-icon icon="mdi:weather-sunset-down"></ha-icon> ${fmt(nextSunset)}
                      </span>
                    </div>
                  `
                : ''}
              ${(this.config.forecast_mode || 'daily') === 'daily' && this._forecast.length > 0
                ? html`
                    <div class="forecast-mini">
                      <daily-forecast-chart
                        .forecast=${this._forecast?.slice(0, 7) ?? []}
                        .forecastLoading=${this._forecastLoading}
                        .show_forecast=${this.config.show_forecast !== false}
                        .config=${{ ...this.config, enable_animate_weather_icons: true }}
                        .compact=${true}
                        .startTomorrow=${true}
                        .maxDays=${5}
                        .alignRight=${true}
                        ._t=${_t}
                        .getWeatherIcon=${getWeatherIcon}
                        .formatDate=${formatDateToWeekDay}
                      ></daily-forecast-chart>
                    </div>
                  `
                : html``}
              ${(this.config.forecast_mode || 'daily') === 'hourly' && this._hourly.length > 0
                ? html`
                    <div class="forecast-mini">
                      <hourly-forecast-chart
                        .hourlyForecast=${this._hourly}
                        .forecastLoading=${this._hourlyLoading}
                        .show_forecast=${this.config.show_forecast !== false}
                        .config=${{ ...this.config, enable_animate_weather_icons: true }}
                        .compact=${true}
                        .maxHours=${5}
                        .alignRight=${true}
                        ._t=${_t}
                        .getWeatherIcon=${getWeatherIcon}
                      ></hourly-forecast-chart>
                    </div>
                  `
                : html``}
              <div class="condition">${_t(condition)}</div> `
          : html``}
      </div>
    `;
  }

  // Load only the daily forecast via Home Assistant WS API
  private async _loadDailyForecast(): Promise<void> {
    if (!this.hass || !this.config?.entity || this._forecastLoading) return;
    this._forecastLoading = true;
    try {
      const wsDaily = await (this.hass as any).callWS({
        type: 'call_service',
        domain: 'weather',
        service: 'get_forecasts',
        service_data: {
          entity_id: this.config.entity,
          type: 'daily',
        },
        return_response: true,
      });
      const forecastData = (wsDaily as any)?.response;
      if (forecastData && forecastData[this.config.entity]) {
        this._forecast = forecastData[this.config.entity].forecast || [];
        (this as LitElement).requestUpdate('_forecast');
      } else {
        this._forecast = [];
      }
    } catch (err) {
      console.warn('⚠️ BG Daily forecast loading failed:', err);
      this._forecast = [];
    } finally {
      this._forecastLoading = false;
    }
  }

  // Load only the hourly forecast via Home Assistant WS API
  private async _loadHourlyForecast(): Promise<void> {
    if (!this.hass || !this.config?.entity || this._hourlyLoading) return;
    this._hourlyLoading = true;
    try {
      const wsHourly = await (this.hass as any).callWS({
        type: 'call_service',
        domain: 'weather',
        service: 'get_forecasts',
        service_data: {
          entity_id: this.config.entity,
          type: 'hourly',
        },
        return_response: true,
      });
      const forecastData = (wsHourly as any)?.response;
      if (forecastData && forecastData[this.config.entity]) {
        this._hourly = forecastData[this.config.entity].forecast || [];
        (this as LitElement).requestUpdate('_hourly');
      } else {
        this._hourly = [];
      }
    } catch (err) {
      console.warn('⚠️ BG Hourly forecast loading failed:', err);
      this._hourly = [];
    } finally {
      this._hourlyLoading = false;
    }
  }
}

console.log('✅ SwissWeatherCard (animated Background) fully loaded and registered');
