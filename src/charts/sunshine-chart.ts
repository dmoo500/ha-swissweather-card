import { html, TemplateResult } from 'lit';
import type { WeatherForecast, WeatherEntity, HassEntity } from '../types/home-assistant.js';

export function renderForecastSunshine(
  hourlyForecast: WeatherForecast[],
  forecastHours: number,
  show_sunshine: boolean,
  weatherEntity: WeatherEntity,
  sun_entity: HassEntity | null | undefined,
  _t: (key: string, vars?: Record<string, any>) => string,
  showHoursChartLabel: (hours: number) => TemplateResult
): TemplateResult {
  return show_sunshine !== false
    ? hourlyForecast.length > 0 &&
      hourlyForecast.slice(0, forecastHours).some(h => {
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
                const firstHour = hourlyForecast[0]?.datetime
                  ? new Date(hourlyForecast[0].datetime)
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
                          <span style="font-size:10px;color:#fbc02d">
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
                          <span style="font-size:10px;color:#fbc02d;">
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
              ${hourlyForecast.slice(0, forecastHours).map((h: WeatherForecast) => {
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
            ${showHoursChartLabel(forecastHours)}
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
