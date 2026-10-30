import { getTranslations } from '../../translations';
import { LitElement, html, svg, TemplateResult, PropertyValues } from 'lit';
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
import { fetchWeatherForecast } from '../../utils/weather-forecast';
import {
  ANIMATED_BACKGROUND_CARD_EDITOR_NAME,
  ANIMATED_BACKGROUND_CARD_NAME,
  type CardConfig,
  schema,
} from './const';
import { getWeatherIcon } from '../../icons';
import {
  backgroundAnimationStyles,
  backgroundForecastStyles,
  backgroundLayoutStyles,
  backgroundParticleStyles,
  backgroundPhotoStyles,
} from './styles';
import { formatDateToWeekDay } from '../../charts';
import '../../charts/hourly-forecast-chart';
import {
  renderDrizzleParticles,
  renderHailParticles,
  renderLightningBolts,
  renderLightningFlashes,
  renderRainParticles,
  renderSnowParticles,
} from './effects/weather-particles';

registerTranslateConfig({
  // Loads the language by returning a JSON structure for a given language
  loader: lang => {
    return getTranslations(lang);
  },
});

@customElement(ANIMATED_BACKGROUND_CARD_NAME)
export class SwissWeatherBGCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: CardConfig;
  @state() private _forecast: WeatherForecast[] = [];
  @state() private _hourly: WeatherForecast[] = [];
  private _forecastLoading = false;
  private _hourlyLoading = false;
  private _lastEntityId: string | undefined;
  private _prefersReducedMotion = false;
  private _removeMotionPreferenceListener?: () => void;

  public connectedCallback(): void {
    super.connectedCallback();
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onPreferenceChange = () => {
      this._prefersReducedMotion = motionQuery.matches;
      this._syncSvgAnimations();
    };
    this._prefersReducedMotion = motionQuery.matches;
    motionQuery.addEventListener('change', onPreferenceChange);
    this._removeMotionPreferenceListener = () =>
      motionQuery.removeEventListener('change', onPreferenceChange);
  }

  public disconnectedCallback(): void {
    this._removeMotionPreferenceListener?.();
    this._removeMotionPreferenceListener = undefined;
    super.disconnectedCallback();
  }

  private _formatForecastDate = (date: string): string =>
    formatDateToWeekDay(date, this.hass?.selectedLanguage || this.hass?.language || 'en');

  static styles = [
    backgroundLayoutStyles,
    backgroundPhotoStyles,
    backgroundParticleStyles,
    backgroundAnimationStyles,
    backgroundForecastStyles,
  ];

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
    this._syncSvgAnimations();
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

  private _syncSvgAnimations(): void {
    for (const svgElement of this.renderRoot.querySelectorAll('.img-svg svg')) {
      if (
        !('setCurrentTime' in svgElement) ||
        typeof svgElement.setCurrentTime !== 'function' ||
        !('pauseAnimations' in svgElement) ||
        typeof svgElement.pauseAnimations !== 'function' ||
        !('unpauseAnimations' in svgElement) ||
        typeof svgElement.unpauseAnimations !== 'function'
      ) {
        continue;
      }

      if (this._prefersReducedMotion) {
        // Shared weather symbols fade in over the first third of their 44–133s cycle.
        svgElement.setCurrentTime(30);
        svgElement.pauseAnimations();
      } else {
        svgElement.unpauseAnimations();
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
        ${
          condition
            ? html`${
                  this.config.photo_mode === true
                    ? this._renderPhotoLikeBackground(condition, daytime)
                    : html`<div class="img-svg">
                        <svg
                          viewBox="0 0 ${chartWidth} ${height}"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          preserveAspectRatio="xMidYMid slice"
                        >
                          ${
                            chartWidth > 0
                              ? getWeatherBackground(condition, daytime, chartWidth)
                              : svg``
                          }
                        </svg>
                      </div>`
                }
                ${
                  day && this.config.show_day_temps !== false
                    ? html`
                        <div class="forecast-temps">
                          <span class="temp-high">
                            <ha-icon icon="mdi:arrow-up-bold"></ha-icon>
                            ${Math.round(day.temperature)}°
                          </span>
                          <span class="temp-low">
                            <ha-icon icon="mdi:arrow-down-bold"></ha-icon> ${Math.round(
                              day.templow || day.temperature - 5
                            )}°
                          </span>
                        </div>
                      `
                    : ''
                }
                ${
                  sunEntityId && this.config.show_sun_times !== false && condition !== 'clear-night'
                    ? html`
                        <div class="sun-times">
                          <span title="${_t('bg_card.sunrise')}">
                            <ha-icon icon="mdi:weather-sunset-up"></ha-icon> ${fmt(nextSunrise)}
                          </span>
                          <span title="${_t('bg_card.sunset')}">
                            <ha-icon icon="mdi:weather-sunset-down"></ha-icon> ${fmt(nextSunset)}
                          </span>
                        </div>
                      `
                    : ''
                }
                ${
                  (this.config.forecast_mode || 'daily') === 'daily' && this._forecast.length > 0
                    ? html`
                        <div class="forecast-mini">
                          <daily-forecast-chart
                            .forecast=${this._forecast}
                            .forecastLoading=${this._forecastLoading}
                            .show_forecast=${true}
                            .config=${{ ...this.config, enable_animate_weather_icons: true }}
                            .compact=${true}
                            .startTomorrow=${true}
                            .maxDays=${5}
                            .alignRight=${true}
                            ._t=${_t}
                            .getWeatherIcon=${getWeatherIcon}
                            .formatDate=${this._formatForecastDate}
                          ></daily-forecast-chart>
                        </div>
                      `
                    : html``
                }
                ${
                  (this.config.forecast_mode || 'daily') === 'hourly' && this._hourly.length > 0
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
                    : html``
                }
                <div class="condition">${_t(condition)}</div> `
            : html``
        }
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

    if (['cloudy', 'fog', 'windy', 'windy-variant', 'snowy', 'hail'].includes(condition)) {
      return 'cloudy';
    }

    return 'sunny';
  }

  private _renderPhotoLikeBackground(condition: string, daytime: boolean): TemplateResult {
    const mood = this._resolvePhotoMood(condition);
    const isClearNight = condition === 'clear-night';
    const isFog = condition === 'fog';
    const isPartlyCloudy = condition === 'partlycloudy';
    const isNightVisual = isClearNight || !daytime;
    const isWindy = condition === 'windy' || condition === 'windy-variant';
    const hasSunBloom = daytime && (condition === 'sunny' || condition === 'partlycloudy');
    const hasRain =
      mood === 'rainy' ||
      condition === 'snowy-rainy' ||
      condition === 'rainy' ||
      condition === 'pouring';
    const hasSnow = condition === 'snowy' || condition === 'snowy-rainy';
    const hasHail = condition === 'hail';
    const hasLightning = condition === 'lightning' || condition === 'lightning-rainy';
    const useCloudBoundMix = condition === 'snowy-rainy';
    const cloudClusters = ['c1', 'c2', 'c3'];

    return html`
      <div
        class="img-photo mood-${mood} ${isNightVisual ? 'night' : 'day'} ${
          isClearNight ? 'clear-night' : ''
        } ${isFog ? 'foggy' : ''} ${isPartlyCloudy ? 'partly-cloudy' : ''} ${
          isWindy ? 'windy' : ''
        } ${hasSunBloom ? 'sun-bloom' : ''}"
      >
        <div class="photo-layer photo-base"></div>
        <div class="photo-layer photo-circadian"></div>
        <div class="photo-layer photo-sun-rays"></div>
        ${isClearNight ? html`<div class="photo-layer photo-night-stars"></div>` : html``}
        <div class="photo-layer photo-clouds"></div>
        <div class="photo-layer photo-clouds-front"></div>
        <div class="photo-layer photo-clouds-depth"></div>
        <div class="photo-layer photo-horizon"></div>
        <div class="photo-layer photo-fog"></div>
        <div class="photo-layer photo-wind-streaks"></div>
        <div class="photo-layer photo-cloud-shadow"></div>
        ${
          hasRain || hasSnow || hasHail
            ? html`<div class="photo-layer weather-particles">
                ${
                  useCloudBoundMix
                    ? html`${cloudClusters.map(
                        cls =>
                          html`<div class="weather-cluster ${cls}">
                            ${hasRain ? renderRainParticles(6, true) : html``}
                            ${hasSnow ? renderSnowParticles(10, true) : html``}
                          </div>`
                      )}`
                    : html`${
                        condition === 'pouring' ? renderRainParticles(68, false, true) : html``
                      }
                      ${condition === 'pouring' ? renderDrizzleParticles(28, false, true) : html``}
                      ${condition === 'rainy' ? renderRainParticles(66, false, true) : html``}
                      ${condition === 'rainy' ? renderDrizzleParticles(22, false, true) : html``}
                      ${condition === 'lightning-rainy' ? renderRainParticles(54, false) : html``}
                      ${
                        condition === 'lightning-rainy' ? renderDrizzleParticles(18, false) : html``
                      }
                      ${
                        hasRain &&
                        condition !== 'pouring' &&
                        condition !== 'rainy' &&
                        condition !== 'lightning-rainy'
                          ? renderRainParticles(28, false)
                          : html``
                      }
                      ${hasSnow ? renderSnowParticles(36, false) : html``}
                      ${hasHail ? renderHailParticles(58, false) : html``}`
                }
              </div>`
            : html``
        }
        ${hasLightning ? html`${renderLightningFlashes()} ${renderLightningBolts()}` : html``}
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
      this._forecast = await fetchWeatherForecast(this.hass, this.config.entity, 'daily');
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
      this._hourly = await fetchWeatherForecast(this.hass, this.config.entity, 'hourly');
    } catch (err) {
      console.warn('⚠️ BG Hourly forecast loading failed:', err);
      this._hourly = [];
    } finally {
      this._hourlyLoading = false;
    }
  }
}
