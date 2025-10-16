import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { WeatherForecast } from '../types/home-assistant';

@customElement('hourly-forecast-chart')
export class HourlyForecastChart extends LitElement {
  @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  @property({ type: Boolean }) forecastLoading = false;
  @property({ type: Boolean }) show_forecast = true;
  @property({ type: Object }) config: any = {};
  @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  @property({ type: Function }) getWeatherIcon!: (...args: any[]) => TemplateResult;

  // BG embedding options
  @property({ type: Boolean }) compact: boolean = true;
  @property({ type: Number }) maxHours: number = 6;
  @property({ type: Boolean }) alignRight: boolean = true;

  static styles = css`
    .wrapper {
      display: block;
      width: 100%;
    }
    .wrapper.align-right {
      display: flex;
      justify-content: flex-end;
    }

    .section-title {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 10px;
      color: var(--primary-text-color, #fff);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .grid {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;
      align-items: stretch;
      gap: 8px;
      overflow: hidden;
      padding: 0;
      margin: 0;
    }

    .tile {
      background: var(--card-background-color, rgba(255, 255, 255, 0.6));
      border-radius: 8px;
      padding: 8px 6px;
      text-align: center;
      border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
      width: 64px;
      min-width: 64px;
      box-sizing: border-box;
    }

    .label {
      font-size: 10px;
      color: var(--secondary-text-color, #7f8c8d);
      margin-bottom: 4px;
    }
    .icon {
      font-size: 18px;
      margin: 4px 0;
    }
    .temps {
      font-size: 11px;
      display: flex;
      justify-content: center;
      gap: 6px;
    }

    @media (max-width: 400px) {
      .grid {
        gap: 6px;
      }
      .tile {
        width: 56px;
        min-width: 56px;
      }
      .icon {
        font-size: 16px;
      }
      .temps {
        font-size: 10px;
      }
    }
  `;

  private _fmtHour(d: string): string {
    const date = new Date(d);
    return date.toLocaleTimeString([], { hour: '2-digit' });
  }

  render() {
    if (this.show_forecast === false || this.config.show_forecast === false) return html``;
    const items = (this.hourlyForecast || []).slice(0, Math.max(1, this.maxHours));
    return html`
      <div class="wrapper ${this.alignRight ? 'align-right' : ''}">
        ${this.compact
          ? html``
          : html`
              <div class="section-title">
                <ha-icon icon="mdi:clock-outline"></ha-icon>
                ${this._t('forecast_hours', { hours: items.length })}
              </div>
            `}
        <div class="grid">
          ${items.map(
            (h: WeatherForecast) => html`
              <div class="tile">
                <div class="label">${this._fmtHour((h as any).datetime ?? (h as any).time)}</div>
                <div class="icon">
                  ${this.getWeatherIcon(
                    (h as any).condition,
                    this.config.enable_animate_weather_icons ? 'animated' : 'mdi',
                    this.compact ? '18px' : '24px',
                    true
                  )}
                </div>
                <div class="temps">
                  ${typeof (h as any).temperature === 'number'
                    ? html`<span>${Math.round((h as any).temperature)}°</span>`
                    : ''}
                </div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
