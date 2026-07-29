import { LitElement, html, css, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { WeatherForecast, WeatherEntity, HassEntity } from '../types/home-assistant.js';

@customElement('sunshine-chart')
export class SunshineChart extends LitElement {
  @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  @property({ type: Number }) forecastHours = 12;
  @property({ type: Boolean }) show_sunshine = true;
  @property({ type: Object }) weatherEntity!: WeatherEntity;
  @property({ type: Object }) sun_entity?: HassEntity | null;
  @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  @property({ type: Function }) showHoursChartLabel!: (hours: number) => TemplateResult;

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 0;
    }

    .chart {
      background: var(--card-background-color, #fff);
      border-radius: 12px;
      padding: var(--chart-padding, 15px);
      margin-top: var(--chart-margin-top, 15px);
      margin-bottom: var(--chart-margin-bottom, 0);
      border: var(--chart-inner-border, 1px solid var(--border-color, rgba(220, 20, 60, 0.1)));
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .chart-sunshine {
      background: var(--card-background-color, #fff);
      border-radius: 12px;
      padding: var(--chart-padding, 15px);
      margin-top: var(--chart-margin-top, 15px);
      margin-bottom: var(--chart-margin-bottom, 0);
      border: var(--chart-inner-border, 1px solid var(--border-color, rgba(220, 20, 60, 0.1)));
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .chart-bars {
      display: flex;
      justify-content: space-between;
      height: 80px;
      margin-bottom: 10px;
    }

    .chart-bar-sunshine {
      width: 18px;
      background: linear-gradient(to top, #ffe082, #fbc02d);
      border-radius: 2px 2px 0 0;
      min-height: 2px;
    }

    .chart-line {
      display: flex;
      justify-content: space-between;
      height: 60px;
      margin-bottom: 10px;
    }

    .chart-labels {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: var(--secondary-text-color, #000);
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

    .section-title ha-icon {
      color: var(--primary-text-color, #fff);
      font-size: 20px;
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
  `;

  render(): TemplateResult {
    return this.show_sunshine !== false
      ? this.hourlyForecast.length > 0 &&
        this.hourlyForecast.slice(0, this.forecastHours).some(h => {
          const hour = h as WeatherForecast & { sunshine?: number; sunshine_duration?: number };
          return (
            (typeof hour.sunshine === 'number' && !isNaN(hour.sunshine)) ||
            (typeof hour.sunshine_duration === 'number' && !isNaN(hour.sunshine_duration))
          );
        })
        ? html`
            <div class="chart-sunshine" style="position:relative;">
              <div class="section-title">
                <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                ${this._t('hourly_charts.sunshine_hours', { hours: this.forecastHours })}
                <span
                  style="font-size:12px; font-weight:normal; color:var(--secondary-text-color, #888);"
                  >min</span
                >
              </div>
              <div class="chart-bars" style="position:relative;">
                ${(() => {
                  // Calculate sunrise/sunset overlay
                  // @ts-expect-error: sunrise/sunset are not in the type, but often present
                  const sunrise = this.weatherEntity?.attributes?.sunrise
                    ? new Date((this.weatherEntity.attributes as any).sunrise)
                    : (this.sun_entity?.attributes as any)?.next_rising
                      ? new Date((this.sun_entity?.attributes as any).next_rising)
                      : null;
                  // @ts-expect-error: sunrise/sunset are not in the type, but often present
                  const sunset = this.weatherEntity?.attributes?.sunset
                    ? new Date((this.weatherEntity.attributes as any).sunset)
                    : (this.sun_entity?.attributes as any)?.next_setting
                      ? new Date((this.sun_entity?.attributes as any).next_setting)
                      : null;
                  const firstHour = this.hourlyForecast[0]?.datetime
                    ? new Date(this.hourlyForecast[0].datetime)
                    : null;
                  let sunriseIdx = -1,
                    sunsetIdx = -1;
                  if (sunrise && firstHour) {
                    sunriseIdx = Math.round(
                      (sunrise.getTime() - firstHour.getTime()) / (60 * 60 * 1000)
                    );
                  }
                  if (sunset && firstHour) {
                    sunsetIdx = Math.round(
                      (sunset.getTime() - firstHour.getTime()) / (60 * 60 * 1000)
                    );
                  }
                  return html`
                    ${
                      sunriseIdx >= 0 && sunriseIdx < this.forecastHours
                        ? html`
                            <div
                              style="position:absolute;left:calc(${
                                (sunriseIdx / this.forecastHours) * 100
                              }% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
                            >
                              <ha-icon
                                icon="mdi:weather-sunset-up"
                                style="color:#fbc02d;font-size:18px;"
                              ></ha-icon>
                              <span style="font-size:10px;color:#fbc02d">
                                ${
                                  sunrise
                                    ? sunrise.toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                      })
                                    : ''
                                }</span
                              >
                            </div>
                          `
                        : ''
                    }
                    ${
                      sunsetIdx >= 0 && sunsetIdx < this.forecastHours
                        ? html`
                            <div
                              style="position:absolute;left:calc(${
                                (sunsetIdx / this.forecastHours) * 100
                              }% - 10px);top:0;height:100%;width:20px;pointer-events:none;z-index:2;display:flex;flex-direction:column;align-items:center;"
                            >
                              <ha-icon
                                icon="mdi:weather-sunset-down"
                                style="color:#fbc02d;font-size:18px;"
                              ></ha-icon>
                              <span style="font-size:10px;color:#fbc02d;">
                                ${
                                  sunset
                                    ? sunset.toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                      })
                                    : ''
                                }</span
                              >
                            </div>
                          `
                        : ''
                    }
                  `;
                })()}
                ${this.hourlyForecast.slice(0, this.forecastHours).map((h: WeatherForecast) => {
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
                        ${value !== null ? value.toFixed(0) : ''}
                      </span>
                      <div class="chart-bar-sunshine" style="height: ${barHeight}px;"></div>
                    </div>
                  `;
                })}
              </div>
              <div
                style="display:flex; justify-content:space-between; font-size:11px; color:var(--secondary-text-color, #888); margin-top:4px;"
              >
                ${this.hourlyForecast.slice(0, this.forecastHours).map((h: WeatherForecast) => {
                  const dt = h.datetime ? new Date(h.datetime) : null;
                  const showLabel = dt ? dt.getHours() % 3 === 0 : false;
                  return html`<div style="flex:1; text-align:center; overflow:hidden;">
                    ${showLabel && dt ? dt.getHours() + 'h' : ''}
                  </div>`;
                })}
              </div>
            </div>
          `
        : html`
            <div class="chart">
              <div class="section-title">
                <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                ${this._t('hourly_charts.sunshine_hours', { hours: this.forecastHours })}
              </div>
              <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
                ${this._t('hourly_charts.no_sunshine_data')}
              </div>
            </div>
          `
      : html``;
  }
}
