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

      .img-photo {
        position: absolute;
        margin-top: var(--bg-temp-img-top, 36px);
        inset: 0;
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
        min-height: 200px;
        box-shadow: var(
          --ha-card-box-shadow,
          0 4px 20px var(--box-shadow-color, rgba(0, 0, 0, 0.1))
        );
      }

      .photo-layer {
        position: absolute;
        inset: 0;
      }

      .photo-base {
        animation: bg-pan 34s ease-in-out infinite alternate;
      }

      .img-photo.mood-sunny.day .photo-base {
        background:
          radial-gradient(circle at 75% 20%, rgba(255, 250, 196, 0.95), rgba(255, 250, 196, 0) 45%),
          linear-gradient(
            160deg,
            rgba(123, 198, 250, 0.95) 0%,
            rgba(88, 163, 221, 0.92) 46%,
            rgba(67, 138, 191, 0.96) 100%
          );
      }

      .img-photo.mood-sunny.night .photo-base {
        background:
          radial-gradient(circle at 78% 18%, rgba(196, 225, 255, 0.25), rgba(196, 225, 255, 0) 40%),
          linear-gradient(
            165deg,
            rgba(27, 45, 75, 0.98) 0%,
            rgba(15, 26, 47, 0.98) 58%,
            rgba(9, 16, 32, 1) 100%
          );
      }

      .img-photo.mood-cloudy.day .photo-base {
        background:
          radial-gradient(circle at 30% 15%, rgba(226, 238, 245, 0.6), rgba(226, 238, 245, 0) 40%),
          linear-gradient(
            160deg,
            rgba(144, 168, 183, 0.95) 0%,
            rgba(122, 147, 165, 0.96) 52%,
            rgba(96, 121, 141, 0.98) 100%
          );
      }

      .img-photo.mood-cloudy.night .photo-base {
        background:
          radial-gradient(circle at 25% 12%, rgba(123, 140, 166, 0.24), rgba(123, 140, 166, 0) 44%),
          linear-gradient(
            165deg,
            rgba(40, 52, 71, 0.98) 0%,
            rgba(29, 40, 56, 0.98) 56%,
            rgba(20, 28, 40, 1) 100%
          );
      }

      .img-photo.mood-rainy.day .photo-base {
        background:
          radial-gradient(circle at 72% 8%, rgba(226, 239, 252, 0.35), rgba(226, 239, 252, 0) 45%),
          linear-gradient(
            168deg,
            rgba(95, 120, 139, 0.95) 0%,
            rgba(73, 97, 118, 0.97) 50%,
            rgba(54, 78, 96, 0.99) 100%
          );
      }

      .img-photo.mood-rainy.night .photo-base {
        background:
          radial-gradient(circle at 72% 12%, rgba(122, 145, 170, 0.14), rgba(122, 145, 170, 0) 42%),
          linear-gradient(
            168deg,
            rgba(25, 36, 54, 0.99) 0%,
            rgba(17, 26, 42, 1) 55%,
            rgba(10, 16, 27, 1) 100%
          );
      }

      .photo-clouds {
        background:
          radial-gradient(
            ellipse at 20% 25%,
            rgba(255, 255, 255, 0.26),
            rgba(255, 255, 255, 0) 52%
          ),
          radial-gradient(ellipse at 65% 30%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 55%),
          radial-gradient(ellipse at 85% 20%, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0) 48%);
        filter: blur(6px);
        animation: cloud-drift 26s ease-in-out infinite alternate;
        opacity: 0.62;
      }

      .photo-clouds-front {
        background:
          radial-gradient(ellipse at 8% 36%, rgba(255, 255, 255, 0.42), rgba(255, 255, 255, 0) 40%),
          radial-gradient(
            ellipse at 38% 32%,
            rgba(255, 255, 255, 0.36),
            rgba(255, 255, 255, 0) 44%
          ),
          radial-gradient(
            ellipse at 68% 38%,
            rgba(255, 255, 255, 0.34),
            rgba(255, 255, 255, 0) 42%
          ),
          radial-gradient(ellipse at 96% 34%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0) 41%);
        filter: blur(4px);
        animation: cloud-drift-front 14s ease-in-out infinite alternate;
        mix-blend-mode: screen;
        opacity: 0;
      }

      .photo-clouds-depth {
        background:
          radial-gradient(ellipse at 12% 62%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 52%),
          radial-gradient(
            ellipse at 50% 56%,
            rgba(255, 255, 255, 0.16),
            rgba(255, 255, 255, 0) 50%
          ),
          radial-gradient(ellipse at 82% 64%, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0) 55%);
        filter: blur(9px);
        animation: cloud-drift-depth 18s ease-in-out infinite alternate;
        opacity: 0;
      }

      .img-photo.mood-cloudy .photo-clouds,
      .img-photo.mood-rainy .photo-clouds {
        opacity: 0.95;
      }

      .img-photo.mood-cloudy .photo-clouds-front,
      .img-photo.mood-rainy .photo-clouds-front {
        opacity: 0.92;
      }

      .img-photo.mood-cloudy .photo-clouds-depth,
      .img-photo.mood-rainy .photo-clouds-depth {
        opacity: 0.72;
      }

      .photo-rain {
        background-image: linear-gradient(
          115deg,
          rgba(255, 255, 255, 0) 30%,
          rgba(210, 231, 255, 0.38) 48%,
          rgba(255, 255, 255, 0) 66%
        );
        background-size: 14px 14px;
        opacity: 0.75;
        mix-blend-mode: screen;
        animation: rain-fall 0.55s linear infinite;
      }

      .photo-lightning {
        background: radial-gradient(
          circle at 52% 26%,
          rgba(255, 246, 169, 0.95),
          rgba(255, 246, 169, 0) 52%
        );
        opacity: 0;
        mix-blend-mode: screen;
        animation: lightning-flash 7s infinite;
      }

      .photo-vignette {
        background: radial-gradient(
          circle at center,
          rgba(0, 0, 0, 0) 52%,
          rgba(0, 0, 0, 0.33) 100%
        );
      }

      .photo-grain {
        background-image: radial-gradient(rgba(255, 255, 255, 0.2) 0.6px, transparent 0.8px);
        background-size: 3px 3px;
        opacity: 0.1;
        mix-blend-mode: soft-light;
        animation: grain-shift 0.25s steps(2, end) infinite;
      }

      @keyframes bg-pan {
        0% {
          transform: scale(1.02) translate3d(0, 0, 0);
        }
        100% {
          transform: scale(1.07) translate3d(-1.5%, -1.2%, 0);
        }
      }

      @keyframes cloud-drift {
        0% {
          transform: translate3d(-2%, 0, 0) scale(1.02);
        }
        100% {
          transform: translate3d(2%, -1%, 0) scale(1.06);
        }
      }

      @keyframes cloud-drift-depth {
        0% {
          transform: translate3d(2%, 1%, 0) scale(1.04);
        }
        100% {
          transform: translate3d(-3%, -1%, 0) scale(1.08);
        }
      }

      @keyframes cloud-drift-front {
        0% {
          transform: translate3d(-3%, 1%, 0) scale(1.03);
        }
        100% {
          transform: translate3d(4%, -1%, 0) scale(1.08);
        }
      }

      @keyframes rain-fall {
        0% {
          transform: translateY(-14px);
        }
        100% {
          transform: translateY(14px);
        }
      }

      @keyframes lightning-flash {
        0%,
        83%,
        100% {
          opacity: 0;
        }
        84% {
          opacity: 0.92;
        }
        85% {
          opacity: 0;
        }
        86% {
          opacity: 0.72;
        }
        87% {
          opacity: 0;
        }
      }

      @keyframes grain-shift {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(1px, 1px);
        }
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
        max-width: calc(100% - 32px); /* honor left/right margins */
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
        z-index: 3; /* above forecast tiles */
      }
      .forecast-mini {
        position: absolute;
        bottom: 16px; /* align vertically with bottom spacing */
        right: 16px; /* align to the right edge */
        z-index: 2; /* below sun-times but above background */
        max-width: calc(100% - 32px); /* honor left/right margins */
      }
      @media (max-width: 400px) {
        .forecast-mini {
          right: 12px;
          bottom: 12px;
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
    const daytime = isDay(this.hass, this.config);

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
          ? html`${this.config.photo_mode === true
                ? this._renderPhotoLikeBackground(condition, daytime)
                : html`<div class="img-svg">
                    <svg
                      viewBox="0 0 ${chartWidth} ${height}"
                      width="100%"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      ${chartWidth > 0
                        ? getWeatherBackground(condition, daytime, chartWidth)
                        : svg``}
                    </svg>
                  </div>`}
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
                        .show_forecast=${true}
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
                        .show_forecast=${true}
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

  private _resolvePhotoMood(condition: string): 'sunny' | 'cloudy' | 'rainy' {
    if (
      ['rainy', 'pouring', 'lightning', 'lightning-rainy', 'snowy-rainy', 'exceptional'].includes(
        condition
      )
    ) {
      return 'rainy';
    }

    if (
      ['cloudy', 'partlycloudy', 'fog', 'windy', 'windy-variant', 'snowy', 'hail'].includes(
        condition
      )
    ) {
      return 'cloudy';
    }

    return 'sunny';
  }

  private _renderPhotoLikeBackground(condition: string, daytime: boolean): TemplateResult {
    const mood = this._resolvePhotoMood(condition);
    const hasRain = mood === 'rainy';
    const hasLightning = condition === 'lightning' || condition === 'lightning-rainy';

    return html`
      <div class="img-photo mood-${mood} ${daytime ? 'day' : 'night'}">
        <div class="photo-layer photo-base"></div>
        <div class="photo-layer photo-clouds"></div>
        <div class="photo-layer photo-clouds-front"></div>
        <div class="photo-layer photo-clouds-depth"></div>
        ${hasRain ? html`<div class="photo-layer photo-rain"></div>` : html``}
        ${hasLightning ? html`<div class="photo-layer photo-lightning"></div>` : html``}
        <div class="photo-layer photo-vignette"></div>
        <div class="photo-layer photo-grain"></div>
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
