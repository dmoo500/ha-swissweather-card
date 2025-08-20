

import {translations} from './translations.js';

  
import { LitElement, html, css, PropertyValues, TemplateResult, svg } from 'lit';
import { use, translate as _t, registerTranslateConfig } from 'lit-translate';
import { customElement, property, state } from 'lit/decorators.js';
import type {
    HomeAssistant,
    HassEntity,
    WeatherEntity,
    WeatherForecast,
    WeatherCondition,
    SwissWeatherCardConfig as BaseSwissWeatherCardConfig,
    SwissWeatherWarning,
    LovelaceCardEditor
} from './types/home-assistant.js';

// Erweitere das Config-Interface für den neuen Typ
type SwissWeatherCardConfig = Omit<BaseSwissWeatherCardConfig, 'type'> & { 
  type: 'custom:swissweather-card' 
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
    // Nur neu laden, wenn sich die Entity ändert
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
      // Beide Forecasts parallel laden
      const [wsDaily, wsHourly] = await Promise.all([
        (this.hass as any).callWS({
          type: 'call_service',
          domain: 'weather',
          service: 'get_forecasts',
          service_data: {
            entity_id: this.config.entity,
            type: 'daily'
          },
          return_response: true
        }),
        (this.hass as any).callWS({
          type: 'call_service',
          domain: 'weather',
          service: 'get_forecasts',
          service_data: {
            entity_id: this.config.entity,
            type: 'hourly'
          },
          return_response: true
        })
      ]);
      // DAILY
      const forecastData = (wsDaily as any)?.response;
      if (forecastData && forecastData[this.config.entity]) {
        this._forecast = forecastData[this.config.entity].forecast || [];
        (this as LitElement).requestUpdate("_forecast");
      } else {
        this._forecast = [];
      }
      // HOURLY
      const hourlyData = (wsHourly as any)?.response;
      if (hourlyData && hourlyData[this.config.entity]) {
        this._hourlyForecast = hourlyData[this.config.entity].forecast || [];
        (this as LitElement).requestUpdate("_hourlyForecast");
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
        background: var(--ha-card-background,var(--card-background-color,#fff));
        border-radius: 16px;
        padding: 20px;
        box-shadow: var(--ha-card-box-shadow, 0 4px 20px var(--box-shadow-color, rgba(0,0,0,0.1)));
        font-family: var(--primary-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
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

      .condition {
        font-size: 16px;
        color:var(--primary-text-color, #fff);
        text-align: right;
      }

      .metrics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 15px;
        margin-bottom: 25px;
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
        height: 50px;
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
            compact_mode: false,
        };
    }

    public static getConfigElement() {
        // Return the inline editor element
        return document.createElement('swissweather-card-editor');
    }

    // Schema für den Visual Editor
    public static getConfigSchema() {
        return [
            {
                name: 'entity',
                required: true,
                selector: {
                    entity: {
                        domain: 'weather'
                    }
                }
            },
            {
                name: 'show_location',
                selector: {
                    boolean: {}
                }
            },
            {
                name: 'location',
                selector: {
                    text: {}
                }
            },
            {
                name: 'wind_entity',
                selector: {
                    entity: {
                        domain: 'sensor'
                    }
                }
            },
            {
                name: 'wind_direction_entity',
                selector: {
                    entity: {
                        domain: 'sensor'
                    }
                }
            },
            {
                name: 'sunshine_entity',
                selector: {
                    entity: {
                        domain: 'sensor'
                    }
                }
            },
            {
                name: 'warning_entity',
                selector: {
                    entity: {
                        domain: 'sensor'
                    }
                }
            },
            {
                name: 'show_forecast',
                selector: {
                    boolean: {}
                }
            },
            {
                name: 'forecast_hours',
                selector: {
                    number: {
                        min: 6,
                        max: 18,
                        mode: 'box'
                    }
                }
            },
            {
                name: 'show_temperature',
                selector: {
                boolean: {}
                }
            },
            {
                name: 'show_precipitation',
                selector: {
                boolean: {}
                }
            },
            {
                name: 'show_sunshine',
                selector: {
                boolean: {}
                }
            },
            {
                name: 'show_warnings',
                selector: {
                    boolean: {}
                }
            },
            {
                name: 'compact_mode',
                selector: {
                    boolean: {}
                }
            }
        ];
    }

    private _getEntityState(entityId: string): HassEntity | undefined {
        return this.hass?.states[entityId];
    }

    // Liefert das passende MDI-Icon für einen Wetterzustand
    private _getWeatherMdiIcon(condition: WeatherCondition | string): string {
        const mdiMap: Record<WeatherCondition, string> = {
            'clear-night': 'mdi:weather-night',
            'cloudy': 'mdi:weather-cloudy',
            'fog': 'mdi:weather-fog',
            'hail': 'mdi:weather-hail',
            'lightning': 'mdi:weather-lightning',
            'lightning-rainy': 'mdi:weather-lightning-rainy',
            'partlycloudy': 'mdi:weather-partly-cloudy',
            'pouring': 'mdi:weather-pouring',
            'rainy': 'mdi:weather-rainy',
            'snowy': 'mdi:weather-snowy',
            'snowy-rainy': 'mdi:weather-snowy-rainy',
            'sunny': 'mdi:weather-sunny',
            'windy': 'mdi:weather-windy',
            'windy-variant': 'mdi:weather-windy-variant',
            'exceptional': 'mdi:weather-hurricane'
        };
        return mdiMap[condition as WeatherCondition] || 'mdi:weather-sunny';
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
        const directions = ['N', 'NNO', 'NO', 'ONO', 'O', 'OSO', 'SO', 'SSO', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        const index = Math.round(degrees / 22.5) % 16;
        return directions[index];
    }

    private _renderWarningSection(warningEntity: HassEntity | null | undefined): TemplateResult {
      const warnings: SwissWeatherWarning[] = [];
        if (warningEntity?.attributes?.warning_levels && Array.isArray(warningEntity.attributes.warning_levels)) {
            for (var i = 0; i < warningEntity?.attributes.warning_levels.length; i++)
                warnings.push({
                    title: warningEntity?.attributes.warning_levels[i],
                    level: warningEntity?.attributes.warning_levels[i],
                    type: warningEntity?.attributes.warning_types[i],
                    description: warningEntity?.attributes.warning_texts[i],
                    valid_from: warningEntity.attributes.warning_valid_from[i],
                    valid_to: warningEntity.attributes.warning_valid_to[i],
                    link: warningEntity.attributes.warning_links[i]
                });
        }
        const warningLevel = this._getWarningLevel(warnings);

        return warnings.length > 0 ? html`
        <div class="warning-section ${warningLevel}">
          <div class="warning-icon">
            <ha-icon icon="mdi:alert" style="color: var(--error-color, #dc143c);"></ha-icon>
          </div>
          <div>
            <strong>${_t('weather_warning')}</strong>
            <ul style="margin: 6px 0 0 0; padding-left: 18px;">
              ${warnings.map(w => html`
                <li>
        ${w.title && w.description && w.link && w.type?
          html`<strong>${w.title}</strong>: ${w.type}<br/>${w.description} - <a href="${w.link}" target="_blank" style="color: var(--primary-text-color, #fff); text-decoration: underline;">Link</a>` :
        w.title && w.description && w.type ?
          html`<strong>${w.title}</strong>: ${w.type}<br/>${w.description}` :
        w.title && w.description ?
          html`<strong>${w.title}</strong>: ${w.description}` :
        w.title ? html`<strong>${w.title}</strong>` :
          w.description || _t('warnings')
      }
                </li>
                `)}
            </ul>
          </div>
        </div>
      ` : html``;
    }

    private _renderForecastTemperature(forecastHours:number): TemplateResult {
      return  this.config.show_temperature !== false ? (
        this._hourlyForecast.length > 0 && this._hourlyForecast.slice(0, forecastHours).some(h => typeof h.temperature === 'number' && !isNaN(h.temperature)) ? html`
          <div class="chart">
            <div class="section-title">
              <ha-icon icon="mdi:thermometer"></ha-icon>
              ${_t('temperature_hours', { hours: forecastHours })}
            </div>
            <div class="chart-line" style="position:relative;">
                ${this._hourlyForecast.slice(0, forecastHours).map((hour: WeatherForecast, i: number) => {
                    const value = typeof hour.temperature === 'number' && !isNaN(hour.temperature) ? hour.temperature : null;
                    return html`
                     <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;margin-bottom:10px;">
                        <span style="font-size:11px; color:#db4a34; writing-mode:vertical-rl; transform:rotate(180deg); min-height:16px; font-variant-numeric:tabular-nums;">
                            ${value !== null ? value.toFixed(1) + ' °C' : ''}
                        </span>
                    </div>
                    `;
                })}
            </div>
            <div style="width:100%;height:90px;overflow-x:auto;">
                ${(() => {
                    const tempsRaw = this._hourlyForecast.slice(0, forecastHours).map(h => typeof h.temperature === 'number' && !isNaN(h.temperature) ? h.temperature : null);
                    const temps: number[] = tempsRaw.filter((t): t is number => t !== null);
                    if (temps.length < 2) return '';
                    const min = Math.min(...temps);
                    const max = Math.max(...temps);
                    const range = max - min || 1;
                    const n = tempsRaw.length;
                    const w = Math.max(360, Math.min(1600, n * 250));
                    const h = 50;
                    const step = w / (n - 1);
                    const points = tempsRaw.map((t, i) => t !== null ? `${i * step},${h - ((t - min) / range) * h}` : '').filter(Boolean).join(' ');
                    const svgWidth = forecastHours === 6 ? '84%' : forecastHours === 12 ? '90%' : forecastHours === 18 ? '96%' : '100%';
                    const svgPadding = forecastHours === 6 ? '8%' : forecastHours === 12 ? '5%' : forecastHours === 18 ? '2%' : '0%';
                    return svg`<svg width="${svgWidth}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="display:block;padding-left:${svgPadding};">
                        <polyline points="${points}" fill="none" stroke="#db4a34" stroke-width="3" />
                        ${tempsRaw.map((t, i) => t !== null ? svg`<circle r="3" fill="#db4a34" cx="${i * step}" cy="${h - ((t - min) / range) * h}" />` : null)}
                        </svg>`;
                })()}
            </div>
            ${this._showHoursChartLabel(forecastHours)}
          </div>
        ` : html`
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
            ) : html``;
    }
    private _renderForecastPrecipitation(forecastHours: number): TemplateResult {
      return this.config.show_precipitation !== false ? (
        this._hourlyForecast.length > 0 && this._hourlyForecast.slice(0, forecastHours).some(h => typeof h.precipitation === 'number' && !isNaN(h.precipitation)) ? html`
          <div class="chart">
            <div class="section-title">
              <ha-icon icon="mdi:weather-pouring"></ha-icon>
              ${_t('precipitation_hours', { hours: forecastHours })}
            </div>
            <div class="chart-bars">
              ${this._hourlyForecast.slice(0, forecastHours).map((hour: WeatherForecast, i: number) => {
                const value = typeof hour.precipitation === 'number' && !isNaN(hour.precipitation) ? hour.precipitation : null;
                const barHeight = value !== null ? Math.round(value * 10) : 2;
                return html`
                  <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;">
                    <div style="height:32px; display:flex; align-items:flex-end; justify-content:center;">
                      <span style="font-size:11px; color:#3498db; margin-bottom:2px; min-height:16px; font-variant-numeric:tabular-nums;">
                        ${value !== null ? value.toFixed(1) + ' mm' : ''}
                      </span>
                    </div>
                    <div class="chart-bar-precipitation" style="height: ${barHeight}px;"></div>
                  </div>
                `;
              })}
            </div>
            ${this._showHoursChartLabel(forecastHours)}
          </div>
        ` : html`
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
      ) : html``;
    }

    private _renderForecastSunshine(weatherEntity: WeatherEntity, sun_entity: HassEntity | null |undefined, forecastHours: number): TemplateResult {
      return this.config.show_sunshine !== false ? (
        // Typ-Erweiterung für Sonnenschein-Chart (Workaround)
        (this._hourlyForecast.length > 0 && this._hourlyForecast.slice(0, forecastHours).some(h => {
          const hour = h as WeatherForecast & { sunshine?: number; sunshine_duration?: number };
          return (typeof hour.sunshine === 'number' && !isNaN(hour.sunshine)) || (typeof hour.sunshine_duration === 'number' && !isNaN(hour.sunshine_duration));
        })) ? html`
          <div class="chart" style="position:relative;">
            <div class="section-title">
              <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
              ${_t('sunshine_hours', { hours: forecastHours })}
            </div>
            <div class="chart-bars" style="position:relative;">
              ${(() => {
                // Sonnenaufgang/-untergang Overlay berechnen
                // @ts-expect-error: sunrise/sunset sind nicht im Typ, aber oft vorhanden
                const sunrise = weatherEntity?.attributes?.sunrise ? new Date((weatherEntity.attributes as any).sunrise) : new Date((sun_entity?.attributes as any).next_rising) || null;
                // @ts-expect-error: sunrise/sunset sind nicht im Typ, aber oft vorhanden
                const sunset = weatherEntity?.attributes?.sunset ? new Date((weatherEntity.attributes as any).sunset) : new Date((sun_entity?.attributes as amy).next_setting) || null;
                const firstHour = this._hourlyForecast[0]?.datetime ? new Date(this._hourlyForecast[0].datetime) : null;
                let sunriseIdx = -1, sunsetIdx = -1;
                if (sunrise && firstHour) {
                  sunriseIdx = Math.round((sunrise.getTime() - firstHour.getTime()) / (60*60*1000) + 1);
                }
                if (sunset && firstHour) {
                  sunsetIdx = Math.round((sunset.getTime() - firstHour.getTime()) / (60*60*1000) + 1);
                }
                return html`
                  ${sunriseIdx >= 0 && sunriseIdx < forecastHours ? html`
                    <div style="position:absolute;left:calc(${(sunriseIdx/forecastHours)*100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;">
                      <ha-icon icon="mdi:weather-sunset-up" style="color:#fbc02d;font-size:18px;"></ha-icon>
                      <span style="font-size:10px;color:#fbc02d;">${_t('sunrise')} ${sunrise ? sunrise.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) : ''}</span>
                    </div>
                  ` : ''}
                  ${sunsetIdx >= 0 && sunsetIdx < forecastHours ? html`
                    <div style="position:absolute;left:calc(${(sunsetIdx/forecastHours)*100}% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;">
                      <ha-icon icon="mdi:weather-sunset-down" style="color:#fbc02d;font-size:18px;"></ha-icon>
                      <span style="font-size:10px;color:#fbc02d;align-items:center;">${_t('sunset')} ${sunset ? sunset.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) : ''}</span>
                    </div>
                  ` : ''}
                `;
              })()}
              ${this._hourlyForecast.slice(0, forecastHours).map((h: WeatherForecast, i: number) => {
                const hour = h as WeatherForecast & { sunshine?: number; sunshine_duration?: number };
                // Versuche beide mögliche Properties: sunshine oder sunshine_duration
                const value = typeof hour.sunshine === 'number' && !isNaN(hour.sunshine)
                  ? hour.sunshine
                  : (typeof hour.sunshine_duration === 'number' && !isNaN(hour.sunshine_duration)
                    ? hour.sunshine_duration
                    : null);
                // Balkenhöhe: 0-60 Minuten → 0-60px
                const barHeight = value !== null ? Math.round(value) : 2;
                return html`
                  <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;">
                    <span style="font-size:11px; color:#fbc02d; margin-bottom:2px; min-height:16px; font-variant-numeric:tabular-nums;">
                      ${value !== null ? value.toFixed(0) + ' min' : ''}
                    </span>
                    <div class="chart-bar-sunshine" style="height: ${barHeight}px;"></div>
                  </div>
                `;
              })}
            </div>
            ${this._showHoursChartLabel(forecastHours)}
          </div>
        ` : html`
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
      ) : html``;
    }

    private _renderForecastWind(forecastHours: number): TemplateResult {
      return this._hourlyForecast.length > 0 && this._hourlyForecast.slice(0, forecastHours).some(h => typeof h.wind_speed === 'number' && !isNaN(h.wind_speed)) ? html`
        <div class="chart">
          <div class="section-title">
            <ha-icon icon="mdi:weather-windy"></ha-icon>
            ${_t('wind_hours', { hours: forecastHours })}
          </div>
          <div class="chart-line-wind" style="position:relative;">
            ${this._hourlyForecast.slice(0, forecastHours).map((hour: WeatherForecast, i: number) => {
              const value = typeof hour.wind_speed === 'number' && !isNaN(hour.wind_speed) ? hour.wind_speed : null;
              return html`
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;">
                  <span style="font-size:11px; color:#44739e; writing-mode:vertical-rl; transform:rotate(180deg); min-height:16px; font-variant-numeric:tabular-nums;">
                    ${value !== null ? value.toFixed(1) + ' km/h' : ''}
                  </span>
                </div>
              `;
            })}
          </div>
          <div class="chart-line-wind" style="position:relative;">
            ${this._hourlyForecast.slice(0, forecastHours).map((hour: WeatherForecast, i: number) => {
              const value = typeof hour.wind_bearing === 'number' && !isNaN(hour.wind_bearing) ? hour.wind_bearing : null;
              const windDirection = value !== null ? value : 0; // Fallback auf 0, wenn kein Wert vorhanden
              return html`
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                  <div class="wind-compass" style="width: 12px; height: 12px; margin: 0 auto;">
                    <div class="wind-arrow" style="transform: translate(-50%, -100%) rotate(${windDirection}deg);"></div>
                  </div>
                </div>
              `;
            })}
          </div>
          <div style="width:100%;height:90px;overflow-x:auto;">
            ${(() => {
              const windRaw = this._hourlyForecast.slice(0, forecastHours).map(h => typeof h.wind_speed === 'number' && !isNaN(h.wind_speed) ? h.wind_speed : null);
              const winds: number[] = windRaw.filter((t): t is number => t !== null);
              if (winds.length < 2) return '';
              const min = Math.min(...winds);
              const max = Math.max(...winds);
              const range = max - min || 1;
              const n = windRaw.length;
              const w = Math.max(360, Math.min(1600, n * 250));
              const h = 50;
              const step = w / (n - 1);
              const points = windRaw.map((t, i) => t !== null ? `${i * step},${h - ((t - min) / range) * h}` : '').filter(Boolean).join(' ');
              const svgWidth = forecastHours === 6 ? '84%' : forecastHours === 12 ? '90%' : forecastHours === 18 ? '96%' : '100%';
              const svgPadding = forecastHours === 6 ? '8%' : forecastHours === 12 ? '5%' : forecastHours === 18 ? '2%' : '0%';
              return svg`<svg width="${svgWidth}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="display:block;padding-left:${svgPadding};">
                <polyline points="${points}" fill="none" stroke="#44739e" stroke-width="3" />
                ${windRaw.map((t, i) => t !== null ? svg`<circle r="3" fill="#44739e" cx="${i * step}" cy="${h - ((t - min) / range) * h}" />` : null)}
              </svg>`;
            })()}
          </div>
          ${this._showHoursChartLabel(forecastHours)}
        </div>
      ` : html``
    }

    private _renderDailyForecast(forecast:WeatherForecast[]): TemplateResult {
      return this.config.show_forecast !== false ? (
                this._forecastLoading && forecast.length === 0 ? html`
          <div class="forecast-section">
            <div class="section-title">
              <ha-icon icon="mdi:calendar"></ha-icon>
              ${_t('7d_forecast')}
              <small style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;">${_t('loading')}</small>
            </div>
            <div style="text-align: center; padding: 20px; color: var(--secondary-text-color, #666); font-style: italic;">
              ⏳ ${_t('loading_forecast')}<br>
              <small>Service: weather.get_forecasts</small>
            </div>
          </div>
        ` : forecast.length > 0 ? html`
          <div class="forecast-section">
            <div class="section-title">
              <ha-icon icon="mdi:calendar"></ha-icon>
              ${forecast.length === 7 ? _t('7d_forecast') : _t('xd_forecast', { days: forecast.length })}
              <small style="font-size: 12px; color: var(--secondary-text-color, #666); margin-left: 10px;">
                (${forecast.length} ${_t('days_available')})
              </small>
            </div>
            ${forecast.length < 7 ? html`
              <div style="text-align: center; color: var(--warning-color, #b8860b); font-size: 13px; margin-bottom: 8px;">
                ${_t('forecast_days_hint', { count: forecast.length })}
              </div>
            ` : ''}
            <div class="forecast-grid">
              ${forecast.slice(0, 7).map((day: WeatherForecast) => html`
                <div class="forecast-day">
                  <div class="forecast-date">${this._formatDate(day.datetime)}</div>
                  <div class="forecast-icon">
                    <ha-icon .icon=${this._getWeatherMdiIcon(day.condition)} style="font-size: 24px; color: var(--state-icon-color, #44739e);"></ha-icon>
                  </div>
                  <div class="forecast-temps">
                    <span class="temp-high">${Math.round(day.temperature)}°</span>
                    <span class="temp-low">${Math.round(day.templow || day.temperature - 5)}°</span>
                  </div>
                </div>
              `)}
            </div>
          </div>
        ` : html`
          <div class="forecast-section">
            <div class="section-title">
              <ha-icon icon="mdi:calendar"></ha-icon>
              ${_t('7d_forecast')}
              <small style="font-size: 12px; color: #666; margin-left: 10px;">
                (0 ${_t('days_available')})
              </small>
            </div>
            <div style="text-align: center; padding: 20px; color: #666; font-style: italic;">
              ⚠️ ${_t('no_forecast_data')}<br>
              <small>Entity: ${this.config.entity}</small><br>
              <small>${_t('check_devtools')}</small><br>
              <small style="color: #999;">${_t('try_other_entity')}</small>
            </div>
          </div>
        `
            ) : html``;
    }

    public render(): TemplateResult {
        use((this.hass.selectedLanguage || this.hass.language || 'en').substring(0,2));

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
        const windEntity = this.config.wind_entity ? this._getEntityState(this.config.wind_entity) : null;
        const windDirectionEntity = this.config.wind_direction_entity ? this._getEntityState(this.config.wind_direction_entity) : null;
        const sunshineEntity = this.config.sunshine_entity ? this._getEntityState(this.config.sunshine_entity) : null;
        // precipitationEntity entfernt
        const warningEntity = this.config.warning_entity ? this._getEntityState(this.config.warning_entity) : null;

        const windSpeed = windEntity ? parseFloat(windEntity.state) : weatherEntity.attributes.wind_speed || 0;
        const windDirection = windDirectionEntity ? parseFloat(windDirectionEntity.state) : weatherEntity.attributes.wind_bearing || 0;
        const humidity = weatherEntity.attributes.humidity || 0;
        const pressure = weatherEntity.attributes.pressure || 0;
        const visibility = weatherEntity.attributes.visibility || 0;
        const forecastHours = this.config.forecast_hours ?? 6;

        return html`
        ${showLocation ? html`
      <div class="header">
        <div class="location">${location}</div>
      </div>
      `: ''}

      ${this.config.show_warnings ? this._renderWarningSection(warningEntity) : ''}
      
      <div class="current-weather">
        <div>
          <div class="current-temp">${temperature}°</div>
          <div class="condition">${_t(condition)}</div>
        </div>
        <div class="current-details">
          <div class="weather-icon">
            <ha-icon .icon=${this._getWeatherMdiIcon(condition)} style="font-size: 64px; color: var(--state-icon-color, #44739e);"></ha-icon>
          </div>
        </div>
      </div>

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
            <div class="wind-arrow" style="transform: translate(-50%, -100%) rotate(${windDirection}deg);"></div>
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
        ${sunshineEntity ? html`
          <div class="metric-card">
            <div class="metric-icon"><ha-icon icon="mdi:white-balance-sunny"></ha-icon></div>
            <div class="metric-value">${parseFloat(sunshineEntity.state).toFixed(1)}h</div>
            <div class="metric-label">${_t('sunshine')}</div>
          </div>
        ` : ''}
        ${visibility > 0 ? html`
          <div class="metric-card">
            <div class="metric-icon"><ha-icon icon="mdi:eye"></ha-icon></div>
            <div class="metric-value">${visibility} km</div>
            <div class="metric-label">${_t('visibility')}</div>
          </div>
        ` : ''}
      </div>

      ${this.config.show_temperature === true || this.config.show_precipitation === true || this.config.show_sunshine === true ? html`
        <div class="section-title">
          <ha-icon icon="mdi:clock"></ha-icon>
          ${_t('forecast_hours', { hours: forecastHours })}
        </div>
      ` : ''}
      
        ${this._renderForecastTemperature(forecastHours)}

        ${this._renderForecastPrecipitation(forecastHours)}

        ${this._renderForecastSunshine(weatherEntity, sun_entity, forecastHours)}
     
        ${this._renderForecastWind(forecastHours)}

      ${this._renderDailyForecast(forecast)}
    `;
    }

    private _showHoursChartLabel(hours: number): TemplateResult {
    return html`
        <div class="chart-labels">
            ${Array.from({length: hours}, (_, i) => html`
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;">
                    <span>${i === 0 ? _t('now') : _t('hour', {h: i})}</span>
                </div>
            `)}
        </div>
    `;
    }

    private _formatDate(dateStr: string): string {
        const date = new Date(dateStr);
        const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
        return days[date.getDay()];
    }
}

// Schema-basierter Visual Editor als separate Klasse
@customElement('swissweather-card-editor')
export class SwissweatherCardEditor extends LitElement implements LovelaceCardEditor {
    @property({ attribute: false }) public hass!: HomeAssistant;
    @property({ attribute: false }) public lovelace?: any;
    @property({ attribute: false }) private _config!: SwissWeatherCardConfig;

    public setConfig(config: SwissWeatherCardConfig): void {
        // Entity-Felder mit '' auf undefined setzen, damit der Visual Editor sie korrekt anzeigt
        const cleanConfig = { ...config };
        const entityFields = [
            'entity',
            'sun_entity',
            'wind_entity',
            'wind_direction_entity',
            'sunshine_entity',
            'precipitation_entity',
            'warning_entity'
        ];
        for (const key of entityFields) {
            if (cleanConfig[key as keyof SwissWeatherCardConfig] === '') {
                delete cleanConfig[key as keyof SwissWeatherCardConfig];
            }
        }
        this._config = cleanConfig;
        (this as LitElement).requestUpdate(); // Re-Render erzwingen
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
        use((this.hass.selectedLanguage || this.hass.language || 'en').substring(0,2));
        const schema = [
            {
                name: "entity",
                required: true,
                selector: {
                    entity: {
                        domain: "weather"
                    }
                }
            },
            {   name: "show_location",
                selector: {
                    boolean: {}
                }
            },
            {
                name: "location",
                selector: {
                    text: {}
                }
            },
            {
                name: "sun_entity",
                selector: {
                    entity: {
                        domain: "sun" 
                    }
                  }
            },
            {
                name: "wind_entity",
                selector: {
                    entity: {
                        domain: "sensor"
                    }
                }
            },
            {
                name: "wind_direction_entity",
                selector: {
                    entity: {
                        domain: "sensor"
                    }
                }
            },
            {
                name: "sunshine_entity",
                selector: {
                    entity: {
                        domain: "sensor"
                    }
                }
            },
            {
                name: "warning_entity",
                selector: {
                    entity: {
                        domain: "sensor"
                    }
                }
            },
            {
                name: "show_forecast",
                selector: {
                    boolean: {}
                }
            },
            {
                name: "forecast_hours",
                selector: {
                    number: {
                        min: 1,
                        max: 24,
                        mode: "box",
                        unit_of_measurement: "h",
                        step: 6
                    }
                }
            },
            {
                name: "show_temperature",
                selector: {
                    boolean: {}
                }
            },
            {
                name: "show_precipitation",
                selector: {
                    boolean: {}
                }
            },
            {
                name: "show_sunshine",
                selector: {
                    boolean: {}
                }
            },
            {
                name: "show_warnings",
                selector: {
                    boolean: {}
                }
            },
            {
                name: "compact_mode",
                selector: {
                    boolean: {}
                }
            }
        ];

        const data = {
            entity: typeof this._config?.entity === 'string' ? this._config.entity : undefined,
            show_location: this._config?.show_location ?? true,
            location: this._config?.location ?? '',
            sun_entity: typeof this._config?.sun_entity === 'string' ? this._config.sun_entity : undefined,
            wind_entity: typeof this._config?.wind_entity === 'string' ? this._config.wind_entity : undefined,
            wind_direction_entity: typeof this._config?.wind_direction_entity === 'string' ? this._config.wind_direction_entity : undefined,
            sunshine_entity: typeof this._config?.sunshine_entity === 'string' ? this._config.sunshine_entity : undefined,
            // precipitation_entity entfernt
            warning_entity: typeof this._config?.warning_entity === 'string' ? this._config.warning_entity : undefined,
            show_forecast: this._config?.show_forecast ?? false,
            forecast_hours: this._config?.forecast_hours ?? 6,
            show_temperature: this._config?.show_temperature ?? false,
            show_precipitation: this._config?.show_precipitation ?? false,
            show_sunshine: this._config?.show_sunshine ?? false,
            show_warnings: this._config?.show_warnings ?? false,
            compact_mode: this._config?.compact_mode ?? false
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
        ${this._config?.entity ? html`
          <div class="preview">
            <div class="preview-title">
              📋 YAML-Config
            </div>
            <div class="preview-config">${this._renderConfigPreview()}</div>
          </div>
        ` : ''}
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
            // precipitation_entity entfernt
            warning_entity: _t('config.warning_entity'),
            show_forecast: _t('config.show_forecast'),
            forecast_hours: _t('config.forecast_hours'),
            show_temperature: _t('config.show_temperature'),
            show_precipitation: _t('config.show_precipitation'),
            show_sunshine: _t('config.show_sunshine'),
            show_warnings: _t('config.show_warnings'),
            compact_mode: _t('config.compact_mode')
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
                compact_mode: false,
            };
        }

        // Handle ha-form events
        if (ev.type === 'value-changed') {
            const newConfig = {
                type: 'custom:swissweather-card',
                ...ev.detail.value
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
    documentationURL: 'https://github.com/user/ha-swissweather-card',
});

console.log('✅ SwissWeatherCard fully loaded and registered');
