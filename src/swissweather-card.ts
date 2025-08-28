import { translations } from './translations.js';

import { LitElement, html, css, PropertyValues, TemplateResult, svg } from 'lit';
import { use, translate as _t, registerTranslateConfig } from 'lit-translate';
import { customElement, property, state } from 'lit/decorators.js';
import { marked } from 'marked';
import type {
  HomeAssistant,
  HassEntity,
  WeatherEntity,
  WeatherForecast,
  WeatherCondition,
  SwissWeatherCardConfig as BaseSwissWeatherCardConfig,
  SwissWeatherWarning,
  LovelaceCardEditor,
} from './types/home-assistant.js';
import { schema } from './types/home-assistant.js';
import { getWeatherIcon } from './icons/';

// Extend the config interface for the new type
type SwissWeatherCardConfig = Omit<BaseSwissWeatherCardConfig, 'type'> & {
  type: 'custom:swissweather-card';
};

// Extend Window interface for customCards
declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description: string;
      preview?: boolean;
      documentationURL?: string;
    }>;
  }
}

registerTranslateConfig({
  // Loads the language by returning a JSON structure for a given language
  loader: lang => {
    return translations[lang];
  },
});

// Debug: Log before decorator application
console.log('🎯 About to apply @customElement decorator to SwissweatherCard');
console.log('🎯 customElements registry available:', !!customElements);

@customElement('swissweather-card')
export class SwissWeatherCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: SwissWeatherCardConfig;
  @state() private _forecast: WeatherForecast[] = [];
  @state() private _hourlyForecast: WeatherForecast[] = [];
  @state() private _forecastLoading = false;

  constructor() {
    super();
    console.log('🔧 SwissweatherCard constructor called');
    console.log('🔧 LitElement base:', LitElement);
    console.log('🔧 customElement decorator applied');
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('🔌 SwissweatherCard connected to DOM');
    console.log('🔌 Custom element defined:', customElements.get('swissweather-card'));
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
        display: flex;
        align-items: center;
        gap: 12px;
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
      .weather-temp {
        fill: var(--primary-text-color, #fff);
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

      .forecast-section {
        margin-top: 20px;
      }

      .section-title {
        font-size: 18px;
        font-weight: bold;
        color: var(--primary-text-color, #fff);
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .forecast-7days {
        background: var(--code-editor-background-color, #f8f8f8);
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        margin-bottom: 8px;
      }

      .forecast-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 10px;
      }

      .forecast-day {
        background: var(--card-background-color, rgba(255, 255, 255, 0.6));
        border-radius: 10px;
        padding: 12px 8px;
        text-align: center;
        border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
      }

      .forecast-date {
        font-size: 12px;
        color: var(--secondary-text-color, #7f8c8d);
        margin-bottom: 8px;
      }

      .forecast-icon {
        font-size: 24px;
        margin: 8px 0;
      }

      .forecast-temps {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
      }

      .temp-high {
        font-weight: bold;
        color: var(--material-error-text-color, #e74c3c);
      }

      .temp-low {
        color: var(--secondary-text-color, #00aaff);
      }

      .chart {
        background: var(--card-background-color, #fff);
        border-radius: 12px;
        padding: 15px;
        margin-top: 15px;
        border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
      }

      .chart-bars {
        display: flex;
        justify-content: space-between;
        height: 120px;
        margin-bottom: 10px;
      }

      .chart-line {
        display: flex;
        justify-content: space-between;
        height: 60px;
        margin-bottom: 10px;
      }
      .chart-line-wind {
        display: flex;
        justify-content: space-between;
        height: 50px;
      }
      .chart-bar-precipitation {
        width: 18px;
        background: linear-gradient(to top, #3498db, #85c5e5);
        border-radius: 2px 2px 0 0;
        min-height: 2px;
      }
      .chart-bar-precipitation-prob {
        width: 18px;
        background: linear-gradient(to top, #323335ff, #87898eff);
        border-radius: 2px 2px 0 0;
        min-height: 2px;
      }

      .chart-bar-sunshine {
        width: 18px;
        background: linear-gradient(to top, #ffe082, #fbc02d);
        border-radius: 2px 2px 0 0;
        min-height: 2px;
      }

      .chart-labels {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: var(--secondary-text-color, #000);
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

        .forecast-grid {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    `;
  }

  public setConfig(config: SwissWeatherCardConfig): void {
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
      type: 'custom:swissweather-card',
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
    };
  }

  public static getConfigElement() {
    // Return the inline editor element
    return document.createElement('swissweather-card-editor');
  }

  // Schema for the visual editor
  public static getConfigSchema() {
    return schema;
  }

  private _getEntityState(entityId: string): HassEntity | undefined {
    return this.hass?.states[entityId];
  }

  private _getWarningLevel(warnings: SwissWeatherWarning[]): string {
    if (!warnings || warnings.length === 0) return 'none';

    const maxLevel = Math.max(...warnings.map((w: SwissWeatherWarning) => w.level || 0));
    if (maxLevel >= 4) return 'danger';
    if (maxLevel >= 3) return 'severe';
    if (maxLevel >= 2) return 'warning';
    return 'info';
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

  private _renderWarningSection(warningEntity: HassEntity | null | undefined): TemplateResult {
    const warnings: SwissWeatherWarning[] = [];
    if (
      warningEntity?.attributes?.warning_levels &&
      Array.isArray(warningEntity.attributes.warning_levels)
    ) {
      for (let i = 0; i < warningEntity?.attributes.warning_levels.length; i++)
        warnings.push({
          id: `warning_${i}`,
          title: warningEntity?.attributes.warning_levels[i],
          level: warningEntity?.attributes.warning_levels[i],
          type: warningEntity?.attributes.warning_types[i],
          description: warningEntity?.attributes.warning_texts[i],
          valid_from: warningEntity.attributes.warning_valid_from[i],
          valid_to: warningEntity.attributes.warning_valid_to[i],
          link: warningEntity.attributes.warning_links[i],
          regions: [],
          phenomena: [],
        });
    }
    const warningLevel = this._getWarningLevel(warnings);
    // Helper: Map warning type to icon
    const typeToIcon: Record<string, string> = {
      storm: 'mdi:weather-lightning',
      rain: 'mdi:weather-pouring',
      snow: 'mdi:snowflake',
      wind: 'mdi:weather-windy',
      fog: 'mdi:weather-fog',
      heat: 'mdi:weather-sunny-alert',
      cold: 'mdi:snowflake-alert',
      flood: 'mdi:waves',
      // add more as needed
      default: 'mdi:alert',
    };

    // Collapsible state for each warning
    // Use a state property to track open/closed state
    if (!this._openWarnings) this._openWarnings = {};
    const toggleWarning = (id: string) => {
      this._openWarnings = { ...this._openWarnings, [id]: !this._openWarnings[id] };
      this.requestUpdate();
    };

    return warnings.length > 0
      ? html`
          <div class="warning-section ${warningLevel}">
            <div>
              <strong>${_t('weather_warning')}</strong>
              <ul style="margin: 6px 0 0 0; padding-left: 18px;">
                ${warnings.map(
                  w => html`
                    <li style="margin-bottom: 12px;">
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <ha-icon
                          icon="${typeToIcon[w.type?.toLowerCase?.()] || typeToIcon.default}"
                          style="color: var(--error-color, #dc143c);"
                        ></ha-icon>
                        <span style="font-weight:bold;">${w.title}</span>
                        ${w.link
                          ? html`
                              <a
                                href="${w.link}"
                                target="_blank"
                                style="color: var(--primary-text-color, #fff); text-decoration: underline; display: flex; align-items: center;"
                                title="More info"
                              >
                                <ha-icon
                                  icon="mdi:link-variant"
                                  style="font-size: 16px; margin-left: 2px;"
                                ></ha-icon>
                              </a>
                            `
                          : ''}
                        <button
                          @click=${() => toggleWarning(w.id)}
                          style="background:none;border:none;cursor:pointer;color:var(--primary-text-color,#fff);font-size:16px;"
                          title="${this._openWarnings[w.id] ? _t('collapse') : _t('expand')}"
                          aria-label="${this._openWarnings[w.id] ? _t('collapse') : _t('expand')}"
                        >
                          <ha-icon
                            icon="${this._openWarnings[w.id]
                              ? 'mdi:chevron-up'
                              : 'mdi:chevron-down'}"
                          ></ha-icon>
                        </button>
                      </div>
                      ${this._openWarnings[w.id] && w.description
                        ? html`
                            <div>
                              <strong>${_t('valid_from')}: </strong>
                              ${w.valid_from
                                ? new Date(w.valid_from).toLocaleString()
                                : _t('unknown')}
                              <strong>${_t('valid_to')}: </strong>
                              ${w.valid_to ? new Date(w.valid_to).toLocaleString() : _t('unknown')}
                            </div>
                            <div
                              style="color: var(--primary-text-color, #fff); font-size: 14px; line-height: 1.4; margin-left: 2px; margin-top: 4px;"
                              .innerHTML="${marked.parse(w.description || '')}"
                            ></div>
                          `
                        : ''}
                    </li>
                  `
                )}
              </ul>
            </div>
          </div>
        `
      : html``;
  }
  // Add this state property to your class:
  @state() private _openWarnings: Record<string, boolean> = {};

  private _renderForecastTemperature(forecastHours: number): TemplateResult {
    return this.config.show_temperature !== false
      ? this._hourlyForecast.length > 0 &&
        this._hourlyForecast
          .slice(0, forecastHours)
          .some(h => typeof h.temperature === 'number' && !isNaN(h.temperature))
        ? html`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:thermometer"></ha-icon>
                ${_t('temperature_hours', { hours: forecastHours })}
              </div>
              <div class="chart-line" style="position:relative;">
                ${this._hourlyForecast.slice(0, forecastHours).map((hour: WeatherForecast) => {
                  const value =
                    typeof hour.temperature === 'number' && !isNaN(hour.temperature)
                      ? hour.temperature
                      : null;
                  return html`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;margin-bottom:10px;"
                    >
                      <span
                        style="font-size:11px; color:#db4a34; writing-mode:vertical-rl; transform:rotate(180deg); min-height:30px; font-variant-numeric:tabular-nums;"
                      >
                        ${value !== null ? value.toFixed(1) + ' °C' : ''}
                      </span>
                    </div>
                  `;
                })}
              </div>
              <div style="width:100%;height:90px;overflow-x:auto;">
                ${(() => {
                  const tempsRaw = this._hourlyForecast
                    .slice(0, forecastHours)
                    .map(h =>
                      typeof h.temperature === 'number' && !isNaN(h.temperature)
                        ? h.temperature
                        : null
                    );
                  const temps: number[] = tempsRaw.filter((t): t is number => t !== null);
                  if (temps.length < 2) return '';
                  const min = Math.min(...temps);
                  const max = Math.max(...temps);
                  const range = max - min || 1;
                  const n = tempsRaw.length;
                  const w = Math.max(360, Math.min(1600, n * 250));
                  const h = 50;
                  const step = w / (n - 1);
                  const points = tempsRaw
                    .map((t, i) => (t !== null ? `${i * step},${h - ((t - min) / range) * h}` : ''))
                    .filter(Boolean)
                    .join(' ');
                  const svgWidth =
                    forecastHours === 6
                      ? '84%'
                      : forecastHours === 12
                        ? '90%'
                        : forecastHours === 18
                          ? '96%'
                          : '100%';
                  const svgPadding =
                    forecastHours === 6
                      ? '8%'
                      : forecastHours === 12
                        ? '5%'
                        : forecastHours === 18
                          ? '2%'
                          : '0%';
                  return svg`<svg width="${svgWidth}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="display:block;padding-left:${svgPadding};">
                        <polyline points="${points}" fill="none" stroke="#db4a34" stroke-width="3" />
                        ${tempsRaw.map((t, i) => (t !== null ? svg`<circle r="3" fill="#db4a34" cx="${i * step}" cy="${h - ((t - min) / range) * h}" />` : null))}
                        </svg>`;
                })()}
              </div>
              ${this._showHoursChartLabel(forecastHours)}
            </div>
          `
        : html`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:thermometer"></ha-icon>
                ${_t('temperature_hours', { hours: forecastHours })}
              </div>
              <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
                ${_t('no_temperature_data')}
              </div>
            </div>
          `
      : html``;
  }
  private _renderForecastPrecipitation(forecastHours: number): TemplateResult {
    return this.config.show_precipitation !== false
      ? this._hourlyForecast.length > 0 &&
        this._hourlyForecast
          .slice(0, forecastHours)
          .some(h => typeof h.precipitation === 'number' && !isNaN(h.precipitation))
        ? html`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:weather-pouring"></ha-icon>
                ${_t('precipitation_hours', { hours: forecastHours })}
              </div>
              <div class="chart-bars">
                ${this._hourlyForecast.slice(0, forecastHours).map((hour: WeatherForecast) => {
                  const precValue =
                    typeof hour.precipitation === 'number' && !isNaN(hour.precipitation)
                      ? hour.precipitation
                      : null;
                  const precBarHeight = precValue !== null ? Math.round(precValue * 10) : 2;
                  const precProbValue =
                    typeof hour.precipitation_probability === 'number' &&
                    !isNaN(hour.precipitation_probability)
                      ? hour.precipitation_probability
                      : null;
                  const precProbBarHeight =
                    precProbValue !== null ? Math.round(precProbValue / 5) : 2;
                  return html`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
                    >
                      <div
                        style="height:32px; display:flex; align-items:flex-end; justify-content:center;"
                      >
                        <span
                          style="font-size:11px; color:#3498db; margin-bottom:2px; min-height:16px; font-variant-numeric:tabular-nums;"
                        >
                          ${precValue !== null ? precValue.toFixed(1) + ' mm' : ''}
                        </span>
                      </div>
                      <div
                        class="chart-bar-precipitation"
                        style="height: ${precBarHeight}px;"
                      ></div>
                      <div
                        class="chart-bar-precipitation-prob"
                        style="height: ${precProbBarHeight}px;"
                      ></div>
                    </div>
                  `;
                })}
              </div>
              ${this._showHoursChartLabel(forecastHours)}
            </div>
          `
        : html`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:weather-pouring"></ha-icon>
                ${_t('precipitation_hours', { hours: forecastHours })}
              </div>
              <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
                ${_t('no_precipitation_data')}
              </div>
            </div>
          `
      : html``;
  }

  private _renderForecastSunshine(
    weatherEntity: WeatherEntity,
    sun_entity: HassEntity | null | undefined,
    forecastHours: number
  ): TemplateResult {
    return this.config.show_sunshine !== false
      ? // Type extension for sunshine chart (workaround)
        this._hourlyForecast.length > 0 &&
        this._hourlyForecast.slice(0, forecastHours).some(h => {
          const hour = h as WeatherForecast & { sunshine?: number; sunshine_duration?: number };
          return (
            (typeof hour.sunshine === 'number' && !isNaN(hour.sunshine)) ||
            (typeof hour.sunshine_duration === 'number' && !isNaN(hour.sunshine_duration))
          );
        })
        ? html`
            <div class="chart" style="position:relative;">
              <div class="section-title">
                <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                ${_t('sunshine_hours', { hours: forecastHours })}
              </div>
              <div class="chart-bars" style="position:relative;">
                ${(() => {
                  // Calculate sunrise/sunset overlay
                  // @ts-expect-error: sunrise/sunset are not in the type, but often present
                  const sunrise = weatherEntity?.attributes?.sunrise
                    ? new Date((weatherEntity.attributes as any).sunrise)
                    : new Date((sun_entity?.attributes as any).next_rising) || null;
                  // @ts-expect-error: sunrise/sunset are not in the type, but often present
                  const sunset = weatherEntity?.attributes?.sunset
                    ? new Date((weatherEntity.attributes as any).sunset)
                    : new Date((sun_entity?.attributes as any).next_setting) || null;
                  const firstHour = this._hourlyForecast[0]?.datetime
                    ? new Date(this._hourlyForecast[0].datetime)
                    : null;
                  let sunriseIdx = -1,
                    sunsetIdx = -1;
                  if (sunrise && firstHour) {
                    sunriseIdx = Math.round(
                      (sunrise.getTime() - firstHour.getTime()) / (60 * 60 * 1000) + 1
                    );
                  }
                  if (sunset && firstHour) {
                    sunsetIdx = Math.round(
                      (sunset.getTime() - firstHour.getTime()) / (60 * 60 * 1000) + 1
                    );
                  }
                  return html`
                    ${sunriseIdx >= 0 && sunriseIdx < forecastHours
                      ? html`
                          <div
                            style="position:absolute;left:calc(${(sunriseIdx / forecastHours) *
                            100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
                          >
                            <ha-icon
                              icon="mdi:weather-sunset-up"
                              style="color:#fbc02d;font-size:18px;"
                            ></ha-icon>
                            <span style="font-size:10px;color:#fbc02d;"
                              >${_t('sunrise')}
                              ${sunrise
                                ? sunrise.toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  })
                                : ''}</span
                            >
                          </div>
                        `
                      : ''}
                    ${sunsetIdx >= 0 && sunsetIdx < forecastHours
                      ? html`
                          <div
                            style="position:absolute;left:calc(${(sunsetIdx / forecastHours) *
                            100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
                          >
                            <ha-icon
                              icon="mdi:weather-sunset-down"
                              style="color:#fbc02d;font-size:18px;"
                            ></ha-icon>
                            <span style="font-size:10px;color:#fbc02d;align-items:center;"
                              >${_t('sunset')}
                              ${sunset
                                ? sunset.toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  })
                                : ''}</span
                            >
                          </div>
                        `
                      : ''}
                  `;
                })()}
                ${this._hourlyForecast.slice(0, forecastHours).map((h: WeatherForecast) => {
                  const hour = h as WeatherForecast & {
                    sunshine?: number;
                    sunshine_duration?: number;
                  };
                  // Try both possible properties: sunshine or sunshine_duration
                  const value =
                    typeof hour.sunshine === 'number' && !isNaN(hour.sunshine)
                      ? hour.sunshine
                      : typeof hour.sunshine_duration === 'number' && !isNaN(hour.sunshine_duration)
                        ? hour.sunshine_duration
                        : null;
                  // Bar height: 0-60 minutes → 0-60px
                  const barHeight = value !== null ? Math.round(value) : 2;
                  return html`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
                    >
                      <span
                        style="font-size:11px; color:#fbc02d; margin-bottom:2px; min-height:16px; font-variant-numeric:tabular-nums;"
                      >
                        ${value !== null ? value.toFixed(0) + ' min' : ''}
                      </span>
                      <div class="chart-bar-sunshine" style="height: ${barHeight}px;"></div>
                    </div>
                  `;
                })}
              </div>
              ${this._showHoursChartLabel(forecastHours)}
            </div>
          `
        : html`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                ${_t('sunshine_hours', { hours: forecastHours })}
              </div>
              <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
                ${_t('no_sunshine_data')}
              </div>
            </div>
          `
      : html``;
  }

  private _renderForecastWind(forecastHours: number): TemplateResult {
    return this.config.show_sunshine !== false
      ? this._hourlyForecast.length > 0 &&
        this._hourlyForecast
          .slice(0, forecastHours)
          .some(h => typeof h.wind_speed === 'number' && !isNaN(h.wind_speed))
        ? html`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:weather-windy"></ha-icon>
                ${_t('wind_hours', { hours: forecastHours })}
              </div>
              <div class="chart-line-wind" style="position:relative;">
                ${this._hourlyForecast.slice(0, forecastHours).map((hour: WeatherForecast) => {
                  const value =
                    typeof hour.wind_speed === 'number' && !isNaN(hour.wind_speed)
                      ? hour.wind_speed
                      : null;
                  return html`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
                    >
                      <span
                        style="font-size:11px; color:#44739e; writing-mode:vertical-rl; transform:rotate(180deg); min-height:16px; font-variant-numeric:tabular-nums;"
                      >
                        ${value !== null ? value.toFixed(1) + ' km/h' : ''}
                      </span>
                    </div>
                  `;
                })}
              </div>
              <div class="chart-line-wind" style="position:relative;">
                ${this._hourlyForecast.slice(0, forecastHours).map((hour: WeatherForecast) => {
                  const value =
                    typeof hour.wind_bearing === 'number' && !isNaN(hour.wind_bearing)
                      ? hour.wind_bearing
                      : null;
                  const windDirection = value !== null ? value : 0; // Fallback to 0 if no value is present
                  return html`
                    <div
                      style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center;"
                    >
                      <div class="wind-compass" style="width: 12px; height: 12px; margin: 0 auto;">
                        <div
                          class="wind-arrow"
                          style="transform: translate(-50%, -100%) rotate(${windDirection}deg);"
                        ></div>
                      </div>
                    </div>
                  `;
                })}
              </div>
              <div style="width:100%;height:90px;overflow-x:auto;">
                ${(() => {
                  const windRaw = this._hourlyForecast
                    .slice(0, forecastHours)
                    .map(h =>
                      typeof h.wind_speed === 'number' && !isNaN(h.wind_speed) ? h.wind_speed : null
                    );
                  const winds: number[] = windRaw.filter((t): t is number => t !== null);
                  if (winds.length < 2) return '';
                  const min = Math.min(...winds);
                  const max = Math.max(...winds);
                  const range = max - min || 1;
                  const n = windRaw.length;
                  const w = Math.max(360, Math.min(1600, n * 250));
                  const h = 50;
                  const step = w / (n - 1);
                  const points = windRaw
                    .map((t, i) => (t !== null ? `${i * step},${h - ((t - min) / range) * h}` : ''))
                    .filter(Boolean)
                    .join(' ');
                  const svgWidth =
                    forecastHours === 6
                      ? '84%'
                      : forecastHours === 12
                        ? '90%'
                        : forecastHours === 18
                          ? '96%'
                          : '100%';
                  const svgPadding =
                    forecastHours === 6
                      ? '8%'
                      : forecastHours === 12
                        ? '5%'
                        : forecastHours === 18
                          ? '2%'
                          : '0%';
                  return svg`<svg width="${svgWidth}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="display:block;padding-left:${svgPadding};">
                <polyline points="${points}" fill="none" stroke="#44739e" stroke-width="3" />
                ${windRaw.map((t, i) => (t !== null ? svg`<circle r="3" fill="#44739e" cx="${i * step}" cy="${h - ((t - min) / range) * h}" />` : null))}
              </svg>`;
                })()}
              </div>
              ${this._showHoursChartLabel(forecastHours)}
            </div>
          `
        : html``
      : html``;
  }

  private _renderDailyForecast(forecast: WeatherForecast[]): TemplateResult {
    return this.config.show_forecast !== false
      ? this._forecastLoading && forecast.length === 0
        ? html`
            <div class="forecast-section">
              <div class="section-title">
                <ha-icon icon="mdi:calendar"></ha-icon>
                ${_t('7d_forecast')}
                <small
                  style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                  >${_t('loading')}</small
                >
              </div>
              <div
                style="text-align: center; padding: 20px; color: var(--secondary-text-color, #666); font-style: italic;"
              >
                ⏳ ${_t('loading_forecast')}<br />
                <small>Service: weather.get_forecasts</small>
              </div>
            </div>
          `
        : forecast.length > 0
          ? html`
              <div class="forecast-section">
                <div class="section-title">
                  <ha-icon icon="mdi:calendar"></ha-icon>
                  ${forecast.length === 7
                    ? _t('7d_forecast')
                    : _t('xd_forecast', { days: forecast.length })}
                  <small
                    style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;"
                  >
                    (${forecast.length} ${_t('days_available')})
                  </small>
                </div>
                ${forecast.length < 7
                  ? html`
                      <div
                        style="text-align: center; color: var(--warning-color, #b8860b); font-size: 13px; margin-bottom: 8px;"
                      >
                        ${_t('forecast_days_hint', { count: forecast.length })}
                      </div>
                    `
                  : ''}
                <div class="forecast-grid">
                  ${forecast.slice(0, 7).map(
                    (day: WeatherForecast) => html`
                      <div class="forecast-day">
                        <div class="forecast-date">${this._formatDate(day.datetime)}</div>
                        <div class="forecast-icon">
                          ${getWeatherIcon(
                            day.condition,
                            this.config.enable_animate_weather_icons ? 'animated' : 'mdi',
                            '24px'
                          )}
                        </div>
                        <div class="forecast-temps">
                          <span class="temp-high">${Math.round(day.temperature)}°</span>
                          <span class="temp-low"
                            >${Math.round(day.templow || day.temperature - 5)}°</span
                          >
                        </div>
                      </div>
                    `
                  )}
                </div>
              </div>
            `
          : html`
              <div class="forecast-section">
                <div class="section-title">
                  <ha-icon icon="mdi:calendar"></ha-icon>
                  ${_t('7d_forecast')}
                  <small style="font-size: 12px; color: #666; margin-left: 10px;">
                    (0 ${_t('days_available')})
                  </small>
                </div>
                <div style="text-align: center; padding: 20px; color: #666; font-style: italic;">
                  ⚠️ ${_t('no_forecast_data')}<br />
                  <small>Entity: ${this.config.entity}</small><br />
                  <small>${_t('check_devtools')}</small><br />
                  <small style="color: #999;">${_t('try_other_entity')}</small>
                </div>
              </div>
            `
      : html``;
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
      </div
      `;
  }

  private _renderDailyForecastDiagram(): TemplateResult {
    // ...wird nach der Definition von width, barYBase, barMax, maxPrecip eingefügt...
    const days = this._forecast?.slice(0, 7) ?? [];
    const hours = this._hourlyForecast?.slice(0, days.length * 24) ?? [];
    if (!hours.length) return html`<div>no hour forecast available</div>`;

    const nDays = days.length;
    const nHours = hours.length;
    const width = Math.max(180, nDays * 100); // min 100px pro Tag, aber dynamisch
    const dayWidth = nDays > 0 ? width / nDays : 100;
    // Chart deutlich kompakter
    const height = 200;
    // Immer 24 Stunden pro Tag für die X-Achse
    const hoursPerDay = 24;
    // x-position per hour in px (immer 24 Abschnitte pro Tag)
    const hourStep = dayWidth / hoursPerDay;
    // Ermittle den Timestamp (Mitternacht) des ersten Tages
    let firstDayStart = 0;
    if (hours.length > 0 && hours[0].datetime) {
      const dt = new Date(hours[0].datetime);
      firstDayStart = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()).getTime();
    }

    // temprature data
    const temps = hours.map(h => (typeof h.temperature === 'number' ? h.temperature : null));
    let minTemp = Math.min(...(temps.filter(t => t !== null) as number[]));
    const maxTemp = Math.max(...(temps.filter(t => t !== null) as number[]));
    // Skala immer mindestens von 0 bis maxTemp
    if (minTemp > 0) minTemp = 0;
    // temprature line layout
    const weekdayFont = 13;
    const iconSize = 64;
    const minmaxFont = 20;
    const dayTop = 18; // statisch, da kein padding mehr
    const dayGap = 8;
    const minmaxY = dayTop + weekdayFont + dayGap + iconSize + dayGap + 2;
    // Chart weiter nach unten verschieben, damit mehr Abstand zu min/max temp entsteht
    const chartOffset = 32;
    const chartHeight = 60;
    const tempLineYMax = minmaxY + chartOffset; // Startpunkt des Charts
    const tempLineY0 = tempLineYMax + chartHeight; // y=0 (unten)
    const tempRange = maxTemp - minTemp || 1;

    // rain data
    const precs = hours.map(h => (typeof h.precipitation === 'number' ? h.precipitation : 0));
    const precsProberly = hours.map(h =>
      typeof h.precipitation_probability === 'number' ? h.precipitation_probability % 10: 0
    );
    // Skala für Balken: immer vollen Bereich nutzen
    const maxPrecip = Math.max(...precs, ...precsProberly, 1); // nie 0, damit Balken sichtbar

    // Temperatur-Linie: Skaliere auf vollen Bereich (tempLineYMax bis tempLineY0)
    // Die X-Position so berechnen, dass die erste Stunde ("jetzt") an der passenden Stelle im Tag steht
    // Berechne für jede Stunde den Tag-Index und die Stunde-im-Tag anhand des Datums
    function getDayAndHourIdx(dt: Date, firstDayStart: number) {
      const msPerDay = 24 * 60 * 60 * 1000;
      const dayStart = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()).getTime();
      const dayIdx = Math.round((dayStart - firstDayStart) / msPerDay);
      const hourInDay = Math.round((dt.getTime() - dayStart) / (60 * 60 * 1000));
      return { dayIdx, hourInDay };
    }
    // entfernt, da bereits oben deklariert
    const tempPoints = temps
      .map((t, i) => {
        if (!hours[i] || !hours[i].datetime) return '';
        const dt = new Date(hours[i].datetime);
        const { dayIdx, hourInDay } = getDayAndHourIdx(dt, firstDayStart);
        const x = dayIdx * dayWidth + hourInDay * hourStep + hourStep / 2;
        return t !== null
          ? `${x},${tempLineY0 - ((t - minTemp) / tempRange) * (tempLineY0 - tempLineYMax)}`
          : '';
      })
      .filter(Boolean)
      .join(' ');

    // rain bars
    const barWidth = Math.max(3, Math.floor(hourStep) - 2);
    const barYBase = tempLineY0;
    // Skala: 5mm Regen = 5°C Temperaturhöhe (1mm = 1°C)
    // Skala: Maximaler Balken entspricht Temperaturbereich (maxPrecip = voller Bereich)
    // Der höchste Niederschlagswert (maxPrecip) nutzt die volle Höhe (tempLineY0 - tempLineYMax)
    const barMax = tempLineY0 - tempLineYMax;
    // Farbskala für Niederschlag
    function getPrecipColor(p: number): string {
      // Farbverlauf von unten (#5994b1ff) nach oben, oben die jeweilige Farbe bei 5, 10, 15, 20+ mm
      if (p <= 0) return 'transparent';
      // Stufenfarben oben
      const stops = [
        { val: 0, color: { r: 89, g: 148, b: 177 } }, // #5994b1ff
        { val: 5, color: { r: 33, g: 150, b: 243 } }, // #2196f3
        { val: 10, color: { r: 0, g: 100, b: 0 } }, // #006400
        { val: 15, color: { r: 76, g: 175, b: 80 } }, // #4caf50
        { val: 20, color: { r: 255, g: 224, b: 102 } }, // #ffe066
      ];
      let lower = stops[0],
        upper = stops[stops.length - 1];
      for (let i = 1; i < stops.length; i++) {
        if (p < stops[i].val) {
          upper = stops[i];
          lower = stops[i - 1];
          break;
        }
      }
      // Interpolation zwischen lower und upper
      const t = (p - lower.val) / (upper.val - lower.val);
      const r = Math.round(lower.color.r + (upper.color.r - lower.color.r) * t);
      const g = Math.round(lower.color.g + (upper.color.g - lower.color.g) * t);
      const b = Math.round(lower.color.b + (upper.color.b - lower.color.b) * t);
      return `rgb(${r},${g},${b})`;
    }

    // precipitation_proberly Balken (transparentes darkgrey)
    const barsProberly = precsProberly.map((p, i) => {
      if (!hours[i] || !hours[i].datetime) return null;
      const dt = new Date(hours[i].datetime);
      const { dayIdx, hourInDay } = getDayAndHourIdx(dt, firstDayStart);
      const x = dayIdx * dayWidth + hourInDay * hourStep + hourStep / 2 - barWidth / 2;
      const barHeight = maxPrecip > 0 ? (p / maxPrecip) * barMax : 0;
      return p > 0
        ? svg`<rect x="${x}" y="${barYBase - barHeight}" width="${barWidth}" height="${barHeight}"
            fill="#988d8dff" opacity="0.4" rx="1.5"/>`
        : null;
    });

    const bars = precs.map((p, i) => {
      if (!hours[i] || !hours[i].datetime) return null;
      const dt = new Date(hours[i].datetime);
      const { dayIdx, hourInDay } = getDayAndHourIdx(dt, firstDayStart);
      const x = dayIdx * dayWidth + hourInDay * hourStep + hourStep / 2 - barWidth / 2;
      const barHeight = maxPrecip > 0 ? (p / maxPrecip) * barMax : 0;
      const color = getPrecipColor(p);
      return p > 0
        ? svg`<rect x="${x}" y="${barYBase - barHeight}" width="${barWidth}" height="${barHeight}"
            fill="${color}" opacity="1" rx="1.5"/>`
        : null;
    });

    // vertical day lines exakt an Tageswechseln
    const verticals: unknown[] = [];
    if (nDays > 1 && hours.length > 0) {
      for (let d = 1; d < nDays; d++) {
        // Finde die X-Position von Mitternacht für Tag d
        const midnight = new Date(firstDayStart + d * 24 * 60 * 60 * 1000);
        const { dayIdx, hourInDay } = getDayAndHourIdx(midnight, firstDayStart);
        const x = dayIdx * dayWidth + hourInDay * hourStep;
        verticals.push(
          svg`<line x1="${x}" y1="16" x2="${x}" y2="${height - 16}" stroke="#bbb" stroke-width="1" stroke-dasharray="2,2"/>`
        );
      }
    }

    const dayGroups: unknown[] = [];
    const paddingBottom = 6;
    if (nDays > 0) {
      for (let d = 0; d < nDays; d++) {
        const x = d * dayWidth + dayWidth / 2;
        const weekdayY = dayTop + weekdayFont;
        const iconY = weekdayY + dayGap + paddingBottom;
        const minmaxY = iconY + iconSize + dayGap + paddingBottom + 2;
        const minTemp =
          typeof days[d].templow === 'number'
            ? Math.round(days[d].templow || days[d].temperature - 5)
            : '';
        const maxTemp =
          typeof days[d].temperature === 'number' ? Math.round(days[d].temperature) : '';
        dayGroups.push(svg`
          <g>
            <!-- Weekday -->
            <text x="${x}" y="${weekdayY}" text-anchor="middle" font-size="${weekdayFont}" fill="#888">
              ${(() => {
                const dt = new Date(days[d].datetime);
                return dt.toLocaleDateString(undefined, { weekday: 'short' });
              })()}
            </text>
            <!-- Icon -->
            <foreignObject x="${x - iconSize / 2}" y="${iconY}" width="${iconSize}" height="${iconSize}">
                ${getWeatherIcon(days[d].condition || '', this.config.enable_animate_weather_icons ? 'animated' : 'mdiAsSVG', iconSize + 'px')}
            </foreignObject>
            <!-- Min/Max temp -->
            <text class="weather-temp" x="${x}" y="${minmaxY}" text-anchor="middle" font-size="${minmaxFont}"">${minTemp}°<tspan fill="#aaa"> | </tspan><tspan class="weather-temp">${maxTemp}°</tspan></text>
          </g>
        `);
      }
    }

    // Horizontale neutrale Linien (ohne Farbe/Wert) für Temperatur- und Regenskala (gleiche Höhe)
    const horizontalLines: unknown[] = [];
    // Immer Linie für 0°C und minTemp anzeigen
    const lineStep = (5 / tempRange) * (tempLineY0 - tempLineYMax);
    const nLines = Math.floor((tempLineY0 - tempLineYMax) / lineStep);
    const lineYs = new Set<number>();
    for (let i = 0; i <= nLines; i++) {
      lineYs.add(tempLineY0 - i * lineStep);
    }
    // 0°C-Linie
    if (minTemp > 0) {
      const y0 = tempLineY0 - ((0 - minTemp) / tempRange) * (tempLineY0 - tempLineYMax);
      if (y0 <= tempLineY0 && y0 >= tempLineYMax) lineYs.add(y0);
    }
    // minTemp-Linie
    const ymin = tempLineY0 - ((minTemp - minTemp) / tempRange) * (tempLineY0 - tempLineYMax);
    lineYs.add(ymin);
    Array.from(lineYs)
      .sort((a, b) => b - a)
      .forEach((y, idx) => {
        horizontalLines.push(
          svg`<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="#bbb" stroke-width="${idx % 2 === 0 ? 2 : 1}" stroke-dasharray="${idx % 2 === 0 ? 'none' : '4,3'}" />`
        );
      });
    return html`
      <div class="chart">
        <svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" style="display:block;">
          ${horizontalLines} ${dayGroups} ${verticals} ${barsProberly}
          <!-- Niederschlagsbalken -->
          ${bars}

          <polyline points="${tempPoints}" fill="none" stroke="#e74c3c" stroke-width="2" />
        </svg>
      </div>
    `;
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
        ${sunshineEntity
          ? html`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
                <div class="metric-value">${parseFloat(sunshineEntity.state).toFixed(1)}h</div>
                <div class="metric-label">${_t('sunshine')}</div>
              </div>
            `
          : ''}
        ${visibility > 0
          ? html`
              <div class="metric-card">
                <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
                <div class="metric-value">${visibility} km</div>
                <div class="metric-label">${_t('visibility')}</div>
              </div>
            `
          : ''}
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
        ${this.config.compact_mode === true
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
            `}
      </div>
    `;
  }

  public render(): TemplateResult {
    use((this.hass.selectedLanguage || this.hass.language || 'en').substring(0, 2));

    if (!this.hass || !this.config) {
      return html``;
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
    const forecast = this._forecast; // Use state instead of attributes

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
      ${showLocation
        ? html`
            <div class="header">
              <div class="location">${location}</div>
            </div>
          `
        : ''}
      ${this.config.show_warnings ? this._renderWarningSection(warningEntity) : ''}

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
              '64px'
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
      ${this.config.compact_mode === false &&
      (this.config.show_temperature === true ||
        this.config.show_precipitation === true ||
        this.config.show_sunshine === true)
        ? html`
            <div class="section-title">
              <ha-icon icon="mdi:clock"></ha-icon>
              ${_t('forecast_hours', { hours: forecastHours })}
            </div>
          `
        : ''}
      ${this._renderForecastTemperature(forecastHours)}
      ${this._renderForecastPrecipitation(forecastHours)}
      ${this._renderForecastSunshine(weatherEntity, sun_entity, forecastHours)}
      ${this._renderForecastWind(forecastHours)}
      ${this.config.compact_mode === true && this.config.show_forecast === true
        ? this._renderDailyForecastDiagram()
        : html``}
      ${this.config.compact_mode === false ? this._renderDailyForecast(forecast) : html``}
    `;
  }

  private _showHoursChartLabel(hours: number): TemplateResult {
    return html`
      <div class="chart-labels">
        ${Array.from(
          { length: hours },
          (_, i) => html`
            <div
              style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
            >
              <span>${i === 0 ? _t('now') : _t('hour', { h: i })}</span>
            </div>
          `
        )}
      </div>
    `;
  }

  private _formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    return days[date.getDay()];
  }
}

// Schema-based visual editor as a separate class
@customElement('swissweather-card-editor')
export class SwissweatherCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public lovelace?: any;
  @property({ attribute: false }) private _config!: SwissWeatherCardConfig;

  public setConfig(config: SwissWeatherCardConfig): void {
    // Set entity fields with '' to undefined so the visual editor displays them correctly
    const cleanConfig = { ...config };
    const entityFields = [
      'entity',
      'sun_entity',
      'wind_entity',
      'wind_direction_entity',
      'sunshine_entity',
      'warning_entity',
    ];
    for (const key of entityFields) {
      if (cleanConfig[key as keyof SwissWeatherCardConfig] === '') {
        delete cleanConfig[key as keyof SwissWeatherCardConfig];
      }
    }
    this._config = cleanConfig;
    (this as LitElement).requestUpdate(); // Force re-render
  }

  static get styles() {
    return css`
      .card-config {
        padding: 16px;
      }

      .header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 24px;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--card-divider-color);
      }

      .header-title {
        font-size: 24px;
        font-weight: bold;
        color: var(--primary-text-color, #dc143c);
      }

      .header-subtitle {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }

      ha-form {
        display: block;
        margin-bottom: 24px;
      }

      .preview {
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        padding: 20px;
        margin-top: 24px;
      }

      .preview-title {
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .preview-config {
        font-family: 'SFMono-Regular', 'Monaco', 'Consolas', monospace;
        font-size: 13px;
        color: var(--secondary-text-color);
        background: var(--code-editor-background-color, #f8f8f8);
        padding: 16px;
        border-radius: 8px;
        overflow-x: auto;
        white-space: pre-wrap;
        line-height: 1.4;
        border: 1px solid var(--divider-color);
      }

      @media (max-width: 768px) {
        .card-config {
          padding: 12px;
        }
      }
    `;
  }

  protected render(): TemplateResult {
    if (!this.hass) {
      return html`<div>Loading...</div>`;
    }
    use((this.hass.selectedLanguage || this.hass.language || 'en').substring(0, 2));
    const schema = [
      {
        name: 'entity',
        required: true,
        selector: {
          entity: {
            domain: 'weather',
          },
        },
      },
      {
        name: 'show_location',
        selector: {
          boolean: {},
        },
      },
      {
        name: 'location',
        selector: {
          text: {},
        },
      },
      {
        name: 'sun_entity',
        selector: {
          entity: {
            domain: 'sun',
          },
        },
      },
      {
        name: 'wind_entity',
        selector: {
          entity: {
            domain: 'sensor',
          },
        },
      },
      {
        name: 'wind_direction_entity',
        selector: {
          entity: {
            domain: 'sensor',
          },
        },
      },
      {
        name: 'sunshine_entity',
        selector: {
          entity: {
            domain: 'sensor',
          },
        },
      },
      {
        name: 'warning_entity',
        selector: {
          entity: {
            domain: 'sensor',
          },
        },
      },
      {
        name: 'show_warnings',
        selector: {
          boolean: {},
        },
      },
      {
        name: 'show_temperature',
        selector: {
          boolean: {},
        },
      },
      {
        name: 'show_precipitation',
        selector: {
          boolean: {},
        },
      },
      {
        name: 'show_sunshine',
        selector: {
          boolean: {},
        },
      },
      {
        name: 'show_wind',
        selector: {
          boolean: {},
        },
      },
      {
        name: 'enable_animate_weather_icons',
        selector: {
          boolean: {},
        },
      },
      {
        name: 'show_forecast',
        selector: {
          boolean: {},
        },
      },
      {
        name: 'forecast_hours',
        selector: {
          number: {
            min: 6,
            max: 18,
            mode: 'box',
            unit_of_measurement: 'h',
            step: 6,
          },
        },
      },
      {
        name: 'compact_mode',
        selector: {
          boolean: {},
        },
      },
    ];

    const data = {
      entity: typeof this._config?.entity === 'string' ? this._config.entity : undefined,
      show_location: this._config?.show_location ?? true,
      location: this._config?.location ?? '',
      sun_entity:
        typeof this._config?.sun_entity === 'string' ? this._config.sun_entity : undefined,
      wind_entity:
        typeof this._config?.wind_entity === 'string' ? this._config.wind_entity : undefined,
      wind_direction_entity:
        typeof this._config?.wind_direction_entity === 'string'
          ? this._config.wind_direction_entity
          : undefined,
      sunshine_entity:
        typeof this._config?.sunshine_entity === 'string'
          ? this._config.sunshine_entity
          : undefined,
      warning_entity:
        typeof this._config?.warning_entity === 'string' ? this._config.warning_entity : undefined,
      show_forecast: this._config?.show_forecast ?? false,
      forecast_hours: this._config?.forecast_hours ?? 6,
      show_temperature: this._config?.show_temperature ?? false,
      show_precipitation: this._config?.show_precipitation ?? false,
      show_sunshine: this._config?.show_sunshine ?? false,
      show_warnings: this._config?.show_warnings ?? false,
      show_wind: this._config?.show_wind ?? true,
      enable_animate_weather_icons: this._config?.enable_animate_weather_icons ?? true,
      compact_mode: this._config?.compact_mode ?? false,
    };

    return html`
      <div class="card-config">
        <div class="header">
          <div>
            <div class="header-title">🌦️ SwissWeather Card</div>
          </div>
        </div>

        <!-- HA Form -->
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${schema}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._valueChanged}
        ></ha-form>

        <!-- Configuration Preview -->
        ${this._config?.entity
          ? html`
              <div class="preview">
                <div class="preview-title">📋 YAML-Config</div>
                <div class="preview-config">${this._renderConfigPreview()}</div>
              </div>
            `
          : ''}
      </div>
    `;
  }

  private _computeLabel = (schema: any) => {
    const labels: Record<string, string> = {
      entity: _t('config.entity'),
      show_location: _t('config.show_location'),
      sun_entity: _t('config.sun_entity'),
      location: _t('config.location'),
      wind_entity: _t('config.wind_entity'),
      wind_direction_entity: _t('config.wind_direction_entity'),
      sunshine_entity: _t('config.sunshine_entity'),
      warning_entity: _t('config.warning_entity'),
      show_forecast: _t('config.show_forecast'),
      forecast_hours: _t('config.forecast_hours'),
      show_temperature: _t('config.show_temperature'),
      show_precipitation: _t('config.show_precipitation'),
      show_sunshine: _t('config.show_sunshine'),
      show_warnings: _t('config.show_warnings'),
      show_wind: _t('config.show_wind'),
      enable_animate_weather_icons: _t('config.enable_animate_weather_icons'),
      compact_mode: _t('config.compact_mode'),
    };
    return labels[schema.name] || schema.name;
  };

  private _renderConfigPreview(): string {
    const config: any = { ...this._config };
    if (!config.type) {
      config.type = 'custom:swissweather-card';
    }

    // Remove undefined values for cleaner preview
    Object.keys(config).forEach(key => {
      if (config[key] === undefined || config[key] === '') {
        delete config[key];
      }
    });

    return Object.entries(config)
      .map(([key, value]) => {
        if (typeof value === 'string') {
          return `${key}: "${value}"`;
        }
        return `${key}: ${value}`;
      })
      .join('\n');
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config) {
      this._config = {
        type: 'custom:swissweather-card',
        entity: '',
        location: 'Schweiz',
        show_forecast: true,
        show_temperature: true,
        show_precipitation: true,
        show_sunshine: true,
        show_warnings: true,
        show_wind: true,
        forecast_hours: 6,
        enable_animate_weather_icons: true,
        show_location: true,
        sun_entity: 'sun.sun',
        compact_mode: false,
      };
    }

    // Handle ha-form events
    if (ev.type === 'value-changed') {
      const newConfig = {
        type: 'custom:swissweather-card',
        ...ev.detail.value,
      };

      // Remove empty values
      Object.keys(newConfig).forEach(key => {
        if ((newConfig as any)[key] === '' || (newConfig as any)[key] === undefined) {
          delete (newConfig as any)[key];
        }
      });

      this._config = newConfig;

      // Dispatch config-changed event
      const event = new CustomEvent('config-changed', {
        detail: { config: this._config },
        bubbles: true,
        composed: true,
      });

      (this as any).dispatchEvent(event);
    }
  }
}

// Register card in window.customCards for HA UI discovery
if (!window.customCards) {
  window.customCards = [];
}

window.customCards.push({
  type: 'swissweather-card',
  name: 'SwissWeather Card',
  description: 'Eine Custom Card für Schweizer Wetterinformationen im MeteoSchweiz-Design',
  preview: true,
  documentationURL: 'https://github.com/dmoo500/ha-swissweather-card',
});

console.log('✅ SwissWeatherCard fully loaded and registered');
