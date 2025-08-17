import { LitElement, html, css, PropertyValues, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type {
  HomeAssistant,
  HassEntity,
  WeatherEntity,
  WeatherForecast,
  WeatherCondition,
  SwissMeteoCardConfig,
  SwissWeatherWarning,
} from './types/home-assistant.js';

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

// Debug: Log before decorator application
console.log('🎯 About to apply @customElement decorator to SwissMeteoCard');
console.log('🎯 customElements registry available:', !!customElements);

@customElement('swissmeteo-card')
export class SwissMeteoCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: SwissMeteoCardConfig;

  constructor() {
    super();
    console.log('🔧 SwissMeteoCard constructor called');
    console.log('🔧 LitElement base:', LitElement);
    console.log('🔧 customElement decorator applied');
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('🔌 SwissMeteoCard connected to DOM');
    console.log('🔌 Custom element defined:', customElements.get('swissmeteo-card'));
  }

  static get styles() {
    return css`
      :host {
        display: block;
        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: #333;
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        border-bottom: 2px solid #dc143c;
        padding-bottom: 15px;
      }

      .location {
        font-size: 24px;
        font-weight: bold;
        color: #dc143c;
      }

      .meteoswiss-logo {
        font-size: 14px;
        color: #666;
        font-weight: 500;
      }

      .warning-section {
        background: linear-gradient(90deg, #fff3cd 0%, #fcf8e3 100%);
        border: 1px solid #ffeaa7;
        border-radius: 12px;
        padding: 15px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .warning-section.danger {
        background: linear-gradient(90deg, #f8d7da 0%, #f5c6cb 100%);
        border-color: #f1aeb5;
      }

      .warning-section.severe {
        background: linear-gradient(90deg, #ffeaa7 0%, #fdcb6e 100%);
        border-color: #e17055;
      }

      .warning-icon {
        font-size: 24px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.8);
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
        color: #2c3e50;
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
        color: #7f8c8d;
        text-align: right;
      }

      .metrics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 15px;
        margin-bottom: 25px;
      }

      .metric-card {
        background: rgba(255, 255, 255, 0.7);
        border-radius: 12px;
        padding: 15px;
        text-align: center;
        border: 1px solid rgba(220, 20, 60, 0.1);
        transition: transform 0.2s ease;
      }

      .metric-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .metric-icon {
        font-size: 24px;
        margin-bottom: 8px;
        color: #dc143c;
      }

      .metric-value {
        font-size: 20px;
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 4px;
      }

      .metric-label {
        font-size: 12px;
        color: #7f8c8d;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .forecast-section {
        margin-top: 20px;
      }

      .section-title {
        font-size: 18px;
        font-weight: bold;
        color: #2c3e50;
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
        background: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
        padding: 12px 8px;
        text-align: center;
        border: 1px solid rgba(220, 20, 60, 0.1);
      }

      .forecast-date {
        font-size: 12px;
        color: #7f8c8d;
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
        color: #e74c3c;
      }

      .temp-low {
        color: #7f8c8d;
      }

      .precipitation-chart {
        background: rgba(255, 255, 255, 0.6);
        border-radius: 12px;
        padding: 15px;
        margin-top: 15px;
        border: 1px solid rgba(220, 20, 60, 0.1);
      }

      .chart-bars {
        display: flex;
        align-items: end;
        height: 60px;
        gap: 2px;
        margin-bottom: 10px;
      }

      .chart-bar {
        flex: 1;
        background: linear-gradient(to top, #3498db, #85c5e5);
        border-radius: 2px 2px 0 0;
        min-height: 2px;
        position: relative;
      }

      .chart-labels {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: #7f8c8d;
      }

      .wind-compass {
        width: 80px;
        height: 80px;
        border: 2px solid #dc143c;
        border-radius: 50%;
        position: relative;
        margin: 0 auto 10px;
        background: radial-gradient(circle, #ffffff 30%, #f8f9fa 100%);
      }

      .wind-arrow {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2px;
        height: 30px;
        background: #dc143c;
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
        border-bottom: 8px solid #dc143c;
        transform: translateX(-50%);
      }

      @media (max-width: 768px) {
        :host {
          padding: 15px;
        }
        
        .current-weather {
          grid-template-columns: 1fr;
          text-align: center;
        }
        
        .current-details {
          align-items: center;
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

  public setConfig(config: SwissMeteoCardConfig): void {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this.config = config;
  }

  public getCardSize(): number {
    return 8;
  }

  public static async getConfigElement() {
    await import('./swissmeteo-card-editor.js');
    return document.createElement('swissmeteo-card-editor');
  }

  public static getStubConfig() {
    return {
      type: 'custom:swissmeteo-card',
      entity: '',
      location: 'Schweiz',
      show_forecast: true,
      show_precipitation: true,
      show_warnings: true,
      compact_mode: false,
    };
  }

  private _getEntityState(entityId: string): HassEntity | undefined {
    return this.hass?.states[entityId];
  }

  private _getWeatherIcon(condition: WeatherCondition | string): string {
    const iconMap: Record<WeatherCondition, string> = {
      'clear-night': '🌙',
      'cloudy': '☁️',
      'fog': '🌫️',
      'hail': '🧊',
      'lightning': '⛈️',
      'lightning-rainy': '⛈️',
      'partlycloudy': '⛅',
      'pouring': '🌧️',
      'rainy': '🌦️',
      'snowy': '🌨️',
      'snowy-rainy': '🌨️',
      'sunny': '☀️',
      'windy': '💨',
      'windy-variant': '💨',
      'exceptional': '🌪️'
    };
    return iconMap[condition as WeatherCondition] || '☀️';
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

  public render(): TemplateResult {
    if (!this.hass || !this.config) {
      return html``;
    }

    const weatherEntity = this._getEntityState(this.config.entity) as WeatherEntity;
    if (!weatherEntity) {
      return html`<div>Entity not found: ${this.config.entity}</div>`;
    }

    const location = this.config.location || 'Schweiz';
    const temperature = weatherEntity.attributes.temperature;
    const condition = weatherEntity.state as WeatherCondition;
    const forecast = weatherEntity.attributes.forecast || [];
    
    // Get additional sensor data
    const windEntity = this.config.wind_entity ? this._getEntityState(this.config.wind_entity) : null;
    const windDirectionEntity = this.config.wind_direction_entity ? this._getEntityState(this.config.wind_direction_entity) : null;
    const sunshineEntity = this.config.sunshine_entity ? this._getEntityState(this.config.sunshine_entity) : null;
    const precipitationEntity = this.config.precipitation_entity ? this._getEntityState(this.config.precipitation_entity) : null;
    const warningEntity = this.config.warning_entity ? this._getEntityState(this.config.warning_entity) : null;

    const windSpeed = windEntity ? parseFloat(windEntity.state) : weatherEntity.attributes.wind_speed || 0;
    const windDirection = windDirectionEntity ? parseFloat(windDirectionEntity.state) : weatherEntity.attributes.wind_bearing || 0;
    const humidity = weatherEntity.attributes.humidity || 0;
    const pressure = weatherEntity.attributes.pressure || 0;
    const visibility = weatherEntity.attributes.visibility || 0;

    const warnings: SwissWeatherWarning[] = warningEntity?.attributes?.warnings 
      ? (Array.isArray(warningEntity.attributes.warnings) ? warningEntity.attributes.warnings : [])
      : [];
    const warningLevel = this._getWarningLevel(warnings);

    return html`
      <div class="header">
        <div class="location">${location}</div>
        <div class="meteoswiss-logo">MeteoSchweiz</div>
      </div>

      ${warnings.length > 0 ? html`
        <div class="warning-section ${warningLevel}">
          <div class="warning-icon">⚠️</div>
          <div>
            <strong>Wetterwarnung aktiv</strong><br>
            ${warnings[0]?.description || 'Aktuelle Wetterwarnungen für Ihre Region'}
          </div>
        </div>
      ` : ''}

      <div class="current-weather">
        <div>
          <div class="current-temp">${temperature}°</div>
          <div class="condition">${this._translateCondition(condition)}</div>
        </div>
        <div class="current-details">
          <div class="weather-icon">${this._getWeatherIcon(condition)}</div>
        </div>
      </div>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-icon">💨</div>
          <div class="metric-value">${Math.round(windSpeed)} km/h</div>
          <div class="metric-label">Wind</div>
        </div>
        
        <div class="metric-card">
          <div class="wind-compass">
            <div class="wind-arrow" style="transform: translate(-50%, -100%) rotate(${windDirection}deg);"></div>
          </div>
          <div class="metric-value">${this._formatWindDirection(windDirection)}</div>
          <div class="metric-label">Richtung</div>
        </div>

        <div class="metric-card">
          <div class="metric-icon">💧</div>
          <div class="metric-value">${humidity}%</div>
          <div class="metric-label">Luftfeuchtigkeit</div>
        </div>

        <div class="metric-card">
          <div class="metric-icon">🌡️</div>
          <div class="metric-value">${pressure} hPa</div>
          <div class="metric-label">Luftdruck</div>
        </div>

        ${sunshineEntity ? html`
          <div class="metric-card">
            <div class="metric-icon">☀️</div>
            <div class="metric-value">${parseFloat(sunshineEntity.state).toFixed(1)}h</div>
            <div class="metric-label">Sonnenschein</div>
          </div>
        ` : ''}

        ${visibility > 0 ? html`
          <div class="metric-card">
            <div class="metric-icon">👁️</div>
            <div class="metric-value">${visibility} km</div>
            <div class="metric-label">Sicht</div>
          </div>
        ` : ''}
      </div>

      ${precipitationEntity && this.config.show_precipitation !== false ? html`
        <div class="precipitation-chart">
          <div class="section-title">
            <span>🌧️</span>
            Niederschlag (nächste 6h)
          </div>
          <div class="chart-bars">
            ${Array.from({length: 6}, (_, i) => html`
              <div class="chart-bar" style="height: ${Math.random() * 100}%"></div>
            `)}
          </div>
          <div class="chart-labels">
            <span>Jetzt</span>
            <span>1h</span>
            <span>2h</span>
            <span>3h</span>
            <span>4h</span>
            <span>5h</span>
          </div>
        </div>
      ` : ''}

      ${this.config.show_forecast !== false && forecast.length > 0 ? html`
        <div class="forecast-section">
          <div class="section-title">
            <span>📅</span>
            7-Tage-Prognose
          </div>
          <div class="forecast-grid">
            ${forecast.slice(0, 7).map((day: WeatherForecast) => html`
              <div class="forecast-day">
                <div class="forecast-date">${this._formatDate(day.datetime)}</div>
                <div class="forecast-icon">${this._getWeatherIcon(day.condition)}</div>
                <div class="forecast-temps">
                  <span class="temp-high">${Math.round(day.temperature)}°</span>
                  <span class="temp-low">${Math.round(day.templow || day.temperature - 5)}°</span>
                </div>
              </div>
            `)}
          </div>
        </div>
      ` : ''}
    `;
  }

  private _translateCondition(condition: WeatherCondition | string): string {
    const translations: Record<WeatherCondition, string> = {
      'clear-night': 'Klar',
      'cloudy': 'Bewölkt',
      'fog': 'Nebel',
      'hail': 'Hagel',
      'lightning': 'Gewitter',
      'lightning-rainy': 'Gewitter mit Regen',
      'partlycloudy': 'Teilweise bewölkt',
      'pouring': 'Starker Regen',
      'rainy': 'Regen',
      'snowy': 'Schnee',
      'snowy-rainy': 'Schneeregen',
      'sunny': 'Sonnig',
      'windy': 'Windig',
      'windy-variant': 'Böig',
      'exceptional': 'Sturm'
    };
    return translations[condition as WeatherCondition] || condition;
  }

  private _formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    return days[date.getDay()];
  }
}
