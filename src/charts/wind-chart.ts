import { LitElement, html, svg, css, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { WeatherForecast } from '../types/home-assistant.js';

@customElement('wind-chart')
export class WindChart extends LitElement {
  @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  @property({ type: Number }) forecastHours = 12;
  @property({ type: Boolean }) show_wind = true;
  @property({ type: Function }) _t!: (key: string, vars?: Record<string, any>) => string;
  @property({ type: Function }) showHoursChartLabel!: (hours: number) => TemplateResult;
  private _resizeObserver?: ResizeObserver;
  private _measuredWidth = 0;
  private _measuredHeight = 0;

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
    .chart-svg-area {
      width: 100%;
      overflow: hidden;
      border-radius: 4px;
      flex: 1;
      min-height: 122px;
    }
  `;

  protected firstUpdated(): void {
    const area = this.renderRoot.querySelector('.chart-svg-area') as HTMLElement | null;
    if (!area) return;
    this._resizeObserver = new ResizeObserver(entries => {
      let changed = false;
      for (const entry of entries) {
        const w = Math.floor(entry.contentRect.width);
        const h = Math.floor(entry.contentRect.height);
        if (w > 0 && w !== this._measuredWidth) {
          this._measuredWidth = w;
          changed = true;
        }
        if (h > 0 && h !== this._measuredHeight) {
          this._measuredHeight = h;
          changed = true;
        }
      }
      if (changed) this.requestUpdate();
    });
    this._resizeObserver.observe(area);
  }

  disconnectedCallback(): void {
    this._resizeObserver?.disconnect();
    this._resizeObserver = undefined;
    super.disconnectedCallback();
  }

  render(): TemplateResult {
    if (this.show_wind === false) return html``;

    const slice = this.hourlyForecast.slice(0, this.forecastHours);
    const hasData = slice.some(h => typeof h.wind_speed === 'number' && !isNaN(h.wind_speed));
    if (slice.length === 0 || !hasData) return html``;

    return html`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:weather-windy"></ha-icon>
          ${this._t('hourly_charts.wind_hours', { hours: this.forecastHours })}
          <span style="font-size:12px; font-weight:normal; color:var(--secondary-text-color, #888);"
            >km/h</span
          >
        </div>
        <div class="chart-svg-area">
          ${(() => {
            const n = slice.length;
            if (n < 2) return html``;

            const svgW = this._measuredWidth > 0 ? this._measuredWidth : 600;
            // Extra height at the bottom for compass arrows
            const compassH = 22;
            const svgH = this._measuredHeight > 0 ? this._measuredHeight : 100 + compassH;
            const padLeft = 28;
            const padRight = 6;
            const padTop = 8;
            const padBottom = 18 + compassH; // hour labels + compass area

            const chartW = svgW - padLeft - padRight;
            const chartH = svgH - padTop - padBottom;

            const windsRaw = slice.map(h =>
              typeof h.wind_speed === 'number' && !isNaN(h.wind_speed) ? h.wind_speed : null
            );
            const winds: number[] = windsRaw.filter((v): v is number => v !== null);

            // Y-axis: 0 to rounded-up max in 5 km/h steps
            const maxWind = Math.max(10, Math.ceil(Math.max(...winds) / 5) * 5);
            const yRange = maxWind;
            const yOf = (v: number) => padTop + chartH - (v / yRange) * chartH;

            const step = chartW / (n - 1);
            const xOf = (i: number) => padLeft + i * step;

            // Horizontal grid lines every 5 km/h
            const gridLines: unknown[] = [];
            for (let t = 0; t <= maxWind; t += 5) {
              const y = yOf(t);
              const isMajor = t % 10 === 0;
              gridLines.push(svg`
                <line x1="${padLeft}" y1="${y}" x2="${svgW - padRight}" y2="${y}"
                  stroke="#888" stroke-width="${isMajor ? 1 : 0.6}"
                  stroke-dasharray="${isMajor ? '4,3' : '2,3'}" opacity="0.6"/>
                <text x="${padLeft - 3}" y="${y}" text-anchor="end" dominant-baseline="middle"
                  font-size="8" fill="#888" opacity="0.8">${t}</text>
              `);
            }

            // Vertical hour lines + hour labels
            const verticals: unknown[] = [];
            for (let i = 0; i < n; i++) {
              const x = xOf(i);
              const dt = slice[i]?.datetime ? new Date(slice[i].datetime) : null;
              const showLabel = dt ? dt.getHours() % 3 === 0 : n <= 8;
              if (showLabel) {
                verticals.push(svg`
                  <line x1="${x}" y1="${padTop}" x2="${x}" y2="${padTop + chartH}"
                    stroke="#888" stroke-width="0.4" stroke-dasharray="2,3" opacity="0.3"/>
                  <text x="${x}" y="${svgH - compassH - 2}" text-anchor="middle"
                    font-size="8" fill="#888" opacity="0.7">
                    ${dt ? dt.getHours() + 'h' : ''}
                  </text>
                `);
              }
            }

            // Wind line + dots
            const points = windsRaw
              .map((v, i) => (v !== null ? `${xOf(i)},${yOf(v)}` : ''))
              .filter(Boolean)
              .join(' ');
            const dots = windsRaw.map((v, i) =>
              v !== null
                ? svg`<circle cx="${xOf(i)}" cy="${yOf(v)}" r="2.5" fill="#44739e"/>`
                : null
            );

            // Compass arrows at the bottom
            // Arrow: a small triangle pointing in wind_bearing direction
            const compassY = svgH - compassH / 2 + 2; // center of compass band
            const arrowR = 7; // radius of circle
            const compassArrows = slice.map((h, i) => {
              const bearing =
                typeof h.wind_bearing === 'number' && !isNaN(h.wind_bearing)
                  ? h.wind_bearing
                  : null;
              if (bearing === null) return null;
              const cx = xOf(i);
              const cy = compassY;
              // tip of arrow points in wind direction (bearing = degrees from North, clockwise)
              const rad = (bearing - 90) * (Math.PI / 180);
              const tipX = cx + arrowR * Math.cos(rad);
              const tipY = cy + arrowR * Math.sin(rad);
              // tail
              const tailRad = rad + Math.PI;
              const tailX = cx + (arrowR - 2) * Math.cos(tailRad);
              const tailY = cy + (arrowR - 2) * Math.sin(tailRad);
              return svg`
                <circle cx="${cx}" cy="${cy}" r="${arrowR}" fill="none" stroke="#44739e" stroke-width="0.8" opacity="0.5"/>
                <line x1="${tailX}" y1="${tailY}" x2="${tipX}" y2="${tipY}"
                  stroke="#44739e" stroke-width="1.5" stroke-linecap="round" opacity="0.85"/>
                <circle cx="${tipX}" cy="${tipY}" r="1.5" fill="#44739e" opacity="0.85"/>
              `;
            });

            return svg`<svg width="100%" height="100%" viewBox="0 0 ${svgW} ${svgH}" style="display:block;">
              ${gridLines}
              ${verticals}
              <polyline points="${points}" fill="none" stroke="#44739e" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round"/>
              ${dots}
              ${compassArrows}
            </svg>`;
          })()}
        </div>
      </div>
    `;
  }
}
