import { LitElement, html, svg, css, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { WeatherForecast } from '../types/home-assistant.js';

@customElement('precipitation-chart')
export class PrecipitationChart extends LitElement {
  @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  @property({ type: Number }) forecastHours = 12;
  @property({ type: Boolean }) show_precipitation = true;
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
      margin-bottom: var(--chart-margin-bottom, 0);
      border: var(--chart-inner-border, 1px solid var(--border-color, rgba(220, 20, 60, 0.1)));
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .chart-svg-area {
      width: 100%;
      overflow: hidden;
      border-radius: 4px;
      flex: 1;
      min-height: 100px;
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
    if (this.show_precipitation === false) return html``;

    const slice = this.hourlyForecast.slice(0, this.forecastHours);
    const hasData = slice.some(h => typeof h.precipitation === 'number' && !isNaN(h.precipitation));

    if (this.hourlyForecast.length === 0 || !hasData) {
      return html`
        <div class="chart">
          <div class="section-title">
            <ha-icon icon="mdi:weather-pouring"></ha-icon>
            ${this._t('hourly_charts.precipitation_hours', { hours: this.forecastHours })}
          </div>
          <div style="text-align:center; color:#888; padding:16px; font-size:14px;">
            ${this._t('hourly_charts.no_precipitation_data')}
          </div>
        </div>
      `;
    }

    return html`
      <div class="chart">
        <div class="section-title">
          <ha-icon icon="mdi:weather-pouring"></ha-icon>
          ${this._t('hourly_charts.precipitation_hours', { hours: this.forecastHours })}
          <span style="font-size:12px; font-weight:normal; color:var(--secondary-text-color, #888);"
            >mm</span
          >
        </div>
        <div class="chart-svg-area">
          ${(() => {
            const n = slice.length;
            if (n === 0) return html``;

            const svgW = this._measuredWidth > 0 ? this._measuredWidth : 600;
            const svgH = this._measuredHeight > 0 ? this._measuredHeight : 100;
            const padLeft = 28;
            const padRight = 6;
            const padTop = 8;
            const padBottom = 18;

            const chartW = svgW - padLeft - padRight;
            const chartH = svgH - padTop - padBottom;

            // Y-axis: 0 to max mm rounded up to next mm, minimum 5 mm
            const precVals = slice.map(h =>
              typeof h.precipitation === 'number' && !isNaN(h.precipitation) ? h.precipitation : 0
            );
            const maxPrec = Math.max(5, Math.ceil(Math.max(...precVals)));
            const yRange = maxPrec;
            const yOf = (v: number) => padTop + chartH - (v / yRange) * chartH;

            const step = chartW / n;
            const xCenter = (i: number) => padLeft + i * step + step / 2;

            // Horizontal grid lines at 1, 2, 5, 10 mm marks
            const gridTicks = [1, 2, 3, 5, 8, 10, 15, 20].filter(t => t <= maxPrec);
            if (!gridTicks.includes(maxPrec)) gridTicks.push(maxPrec);
            const gridLines: unknown[] = [];
            for (const t of gridTicks) {
              const y = yOf(t);
              const isMajor = t % 5 === 0;
              gridLines.push(svg`
                <line x1="${padLeft}" y1="${y}" x2="${svgW - padRight}" y2="${y}"
                  stroke="#888" stroke-width="${isMajor ? 1 : 0.6}"
                  stroke-dasharray="${isMajor ? '4,3' : '2,3'}" opacity="0.6"/>
                <text x="${padLeft - 3}" y="${y}" text-anchor="end" dominant-baseline="middle"
                  font-size="8" fill="#888" opacity="0.8">${t}</text>
              `);
            }
            // baseline
            gridLines.push(svg`
              <line x1="${padLeft}" y1="${yOf(0)}" x2="${svgW - padRight}" y2="${yOf(0)}"
                stroke="#888" stroke-width="1" opacity="0.5"/>
              <text x="${padLeft - 3}" y="${yOf(0)}" text-anchor="end" dominant-baseline="middle"
                font-size="8" fill="#888" opacity="0.8">0</text>
            `);

            // Vertical hour lines
            const verticals: unknown[] = [];
            for (let i = 0; i < n; i++) {
              const x = xCenter(i);
              const dt = slice[i]?.datetime ? new Date(slice[i].datetime) : null;
              const showLabel = dt ? dt.getHours() % 3 === 0 : n <= 8;
              if (showLabel) {
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

            // Precipitation probability bars (behind)
            const probBars: unknown[] = [];
            const precipBars: unknown[] = [];
            const barWidth = Math.max(2, step * 0.55);

            for (let i = 0; i < n; i++) {
              const h = slice[i];
              const x = xCenter(i) - barWidth / 2;
              const prob =
                typeof h.precipitation_probability === 'number' &&
                !isNaN(h.precipitation_probability)
                  ? h.precipitation_probability
                  : 0;
              const prec =
                typeof h.precipitation === 'number' && !isNaN(h.precipitation)
                  ? h.precipitation
                  : 0;

              // Prob bar: 100% → same height as 5mm
              const probMM = (prob / 100) * 5;
              const probH = (probMM / yRange) * chartH;
              if (prob > 0) {
                probBars.push(svg`
                  <rect x="${x}" y="${yOf(0) - probH}" width="${barWidth}" height="${probH}"
                    fill="#87898e" opacity="0.35" rx="1.5"/>
                `);
              }
              if (prec > 0) {
                const h2 = (prec / yRange) * chartH;
                precipBars.push(svg`
                  <rect x="${x}" y="${yOf(0) - h2}" width="${barWidth}" height="${h2}"
                    fill="url(#precip-grad)" opacity="1" rx="1.5"/>
                `);
              }
            }

            return svg`<svg width="100%" height="100%" viewBox="0 0 ${svgW} ${svgH}" style="display:block;">
              <defs>
                <linearGradient id="precip-grad" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stop-color="#3498db"/>
                  <stop offset="100%" stop-color="#85c5e5"/>
                </linearGradient>
              </defs>
              ${gridLines}
              ${verticals}
              ${probBars}
              ${precipBars}
            </svg>`;
          })()}
        </div>
      </div>
    `;
  }
}
