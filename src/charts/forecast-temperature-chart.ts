import { LitElement, html, svg, css, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { WeatherForecast } from '../types/home-assistant.js';

@customElement('forecast-temperature-chart')
export class ForecastTemperatureChart extends LitElement {
  @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  @property({ type: Number }) forecastHours = 12;
  @property({ type: Boolean }) show_temperature = true;
  @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  @property({ type: Function }) showHoursChartLabel!: (hours: number) => TemplateResult;

  static styles = css`
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
    .chart {
      background: var(--card-background-color, #fff);
      border-radius: 12px;
      padding: var(--chart-padding, 15px);
      margin-top: var(--chart-margin-top, 15px);
      border: var(--chart-inner-border, 1px solid var(--border-color, rgba(220, 20, 60, 0.1)));
    }
    .chart-svg-area {
      width: 100%;
      overflow: hidden;
      border-radius: 4px;
    }
  `;

  render(): TemplateResult {
    if (this.show_temperature === false) return html``;

    const slice = this.hourlyForecast.slice(0, this.forecastHours);
    const tempsRaw = slice.map(h =>
      typeof h.temperature === 'number' && !isNaN(h.temperature) ? h.temperature : null
    );
    const temps: number[] = tempsRaw.filter((t): t is number => t !== null);

    return html`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:thermometer"></ha-icon>
          ${this._t('temperature_hours', { hours: this.forecastHours })}
          <span style="font-size:12px; font-weight:normal; color:var(--secondary-text-color, #888);"
            >°C</span
          >
        </div>
        <div class="chart-svg-area" style="aspect-ratio: 600 / 100; width: 100%;">
          ${(() => {
            if (temps.length < 2) return html``;
            const n = tempsRaw.length;

            // SVG dimensions
            const svgW = 600;
            const svgH = 100;
            const padLeft = 28; // space for y-axis labels
            const padRight = 6;
            const padTop = 8;
            const padBottom = 18; // space for hour labels

            const chartW = svgW - padLeft - padRight;
            const chartH = svgH - padTop - padBottom;

            // Rounded temp range in 5°C steps
            let yMin = Math.floor(Math.min(...temps) / 5) * 5;
            let yMax = Math.ceil(Math.max(...temps) / 5) * 5;
            if (yMin === yMax) {
              yMin -= 5;
              yMax += 5;
            }
            const yRange = yMax - yMin;

            const step = chartW / (n - 1);
            const xOf = (i: number) => padLeft + i * step;
            const yOf = (v: number) => padTop + chartH - ((v - yMin) / yRange) * chartH;

            // Horizontal grid lines every 5°C
            const gridLines: unknown[] = [];
            for (let t = yMin; t <= yMax; t += 5) {
              const y = yOf(t);
              const isMajor = t % 10 === 0;
              gridLines.push(svg`
                <line x1="${padLeft}" y1="${y}" x2="${svgW - padRight}" y2="${y}"
                  stroke="#888" stroke-width="${isMajor ? 1 : 0.6}"
                  stroke-dasharray="${isMajor ? '4,3' : '2,3'}" opacity="0.6"/>
                <text x="${padLeft - 3}" y="${y}" text-anchor="end" dominant-baseline="middle"
                  font-size="8" fill="#888" opacity="0.8">${t}°</text>
              `);
            }

            // Vertical hour lines
            const verticals: unknown[] = [];
            for (let i = 0; i < n; i++) {
              const x = xOf(i);
              const hour = this.hourlyForecast[i];
              const dt = hour?.datetime ? new Date(hour.datetime) : null;
              const isHourMark = dt ? dt.getHours() % 3 === 0 : false;
              if (isHourMark || n <= 8) {
                verticals.push(svg`
                  <line x1="${x}" y1="${padTop}" x2="${x}" y2="${padTop + chartH}"
                    stroke="#888" stroke-width="0.4" stroke-dasharray="2,3" opacity="0.3"/>
                  <text x="${x}" y="${svgH - 2}" text-anchor="middle"
                    font-size="8" fill="#888" opacity="0.7">
                    ${dt ? dt.getHours() + 'h' : ''}
                  </text>
                `);
              }
            }

            // Temperature line + dots
            const points = tempsRaw
              .map((t, i) => (t !== null ? `${xOf(i)},${yOf(t)}` : ''))
              .filter(Boolean)
              .join(' ');
            const dots = tempsRaw.map((t, i) =>
              t !== null
                ? svg`<circle cx="${xOf(i)}" cy="${yOf(t)}" r="2.5" fill="#db4a34"/>`
                : null
            );

            return svg`<svg width="100%" height="100%" viewBox="0 0 ${svgW} ${svgH}" preserveAspectRatio="none" style="display:block;">
              ${gridLines}
              ${verticals}
              <polyline points="${points}" fill="none" stroke="#db4a34" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round"/>
              ${dots}
            </svg>`;
          })()}
        </div>
      </div>
    `;
  }
}
