import { LitElement, html, svg, css, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { WeatherForecast } from '../types/home-assistant.js';

@customElement('daily-forecast-diagram')
export class DailyForecastDiagram extends LitElement {
  @property({ type: Array }) forecast: WeatherForecast[] = [];
  @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  @property({ type: Object }) config: any;
  @property({ type: Function }) getWeatherIcon!: (...args: any[]) => TemplateResult;

  static styles = css`
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

    .chart-bar-precipitation {
      width: 18px;
      background: linear-gradient(to top, #3498db, #85c5e5);
      border-radius: 2px 2px 0 0;
      min-height: 2px;
    }
    .chart-bar-precipitation-prob {
      width: 18px;
      background: #87898eff;
      border-radius: 2px 2px 0 0;
      min-height: 2px;
      opacity: 0.6;
    }

    .chart-labels {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: var(--secondary-text-color, #000);
    }
    .weather-temp {
      fill: var(--primary-text-color, #fff);
    }
  `;

  render(): TemplateResult {
    // Daily forecast SVG diagram for temperature and precipitation
    const days = this.forecast.slice(0, 7);
    const hours = this.hourlyForecast.slice(0, days.length * 24);
    if (!hours.length) return html`<div>No hourly forecast available</div>`;

    const nDays = days.length;
    const width = Math.max(180, nDays * 100); // Minimum 100px per day, dynamic
    const dayWidth = nDays > 0 ? width / nDays : 100;
    // More compact chart
    const height = 200;
    // Always 24 hours per day for the X axis
    const hoursPerDay = 24;
    // X position per hour in px (always 24 sections per day)
    const hourStep = dayWidth / hoursPerDay;
    // Get the timestamp (midnight) of the first day
    let firstDayStart = 0;
    if (hours.length > 0 && hours[0].datetime) {
      const dt = new Date(hours[0].datetime);
      firstDayStart = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()).getTime();
    }

    // Temperature data
    const temps = hours.map(h => (typeof h.temperature === 'number' ? h.temperature : null));
    let minTemp = Math.min(...(temps.filter(t => t !== null) as number[]));
    const maxTemp = Math.max(...(temps.filter(t => t !== null) as number[]));
    // Scale always at least from 0 to maxTemp
    if (minTemp > 0) minTemp = 0;
    // Temperature line layout
    const weekdayFont = 13;
    const iconSize = 64;
    const minmaxFont = 20;
    const dayTop = 18; // Static, no more padding
    const dayGap = 8;
    const minmaxY = dayTop + weekdayFont + dayGap + iconSize + dayGap + 2;
    // Move chart further down for more space between min/max temp
    const chartOffset = 32;
    const chartHeight = 60;
    const tempLineYMax = minmaxY + chartOffset; // Chart start Y
    const tempLineY0 = tempLineYMax + chartHeight; // y=0 (bottom)
    const tempRange = maxTemp - minTemp || 1;

    // Precipitation data
    const precs = hours.map(h => (typeof h.precipitation === 'number' ? h.precipitation : 0));
    const precsProberly = hours.map(h =>
      typeof h.precipitation_probability === 'number' ? h.precipitation_probability % 10 : 0
    );
    // Scale for bars: always use full range
    const maxPrecip = Math.max(...precs, ...precsProberly, 1); // never 0, so bars are visible

    // Temperature line: scale to full range (tempLineYMax to tempLineY0)
    // Calculate X position so the first hour ("now") is at the correct place in the day
    // For each hour, calculate the day index and hour-in-day from the date
    function getDayAndHourIdx(dt: Date, firstDayStart: number) {
      const msPerDay = 24 * 60 * 60 * 1000;
      const dayStart = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()).getTime();
      const dayIdx = Math.round((dayStart - firstDayStart) / msPerDay);
      const hourInDay = Math.round((dt.getTime() - dayStart) / (60 * 60 * 1000));
      return { dayIdx, hourInDay };
    }
    // Already declared above
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

    // Rain bars
    const barWidth = Math.max(3, Math.floor(hourStep) - 2);
    const barYBase = tempLineY0;
    // Scale: 5mm rain = 5°C temperature height (1mm = 1°C)
    // Scale: Maximum bar equals temperature range (maxPrecip = full range)
    // The highest precipitation value (maxPrecip) uses the full height (tempLineY0 - tempLineYMax)
    const barMax = tempLineY0 - tempLineYMax;
    // Color scale for precipitation
    function getPrecipColor(p: number): string {
      // Color gradient from bottom (#5994b1ff) to top, top color at 5, 10, 15, 20+ mm
      if (p <= 0) return 'transparent';
      // Color stops at the top
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
      // Interpolate between lower and upper
      const t = (p - lower.val) / (upper.val - lower.val);
      const r = Math.round(lower.color.r + (upper.color.r - lower.color.r) * t);
      const g = Math.round(lower.color.g + (upper.color.g - lower.color.g) * t);
      const b = Math.round(lower.color.b + (upper.color.b - lower.color.b) * t);
      return `rgb(${r},${g},${b})`;
    }

    // precipitation_proberly bars (transparent dark grey)
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

    // Vertical day lines exactly at day changes
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
              ${this.getWeatherIcon(days[d].condition || '', this.config.enable_animate_weather_icons ? 'animated' : 'mdiAsSVG', iconSize + 'px', true)}
          </foreignObject>
          <!-- Min/Max temp -->
          <text class="weather-temp" x="${x}" y="${minmaxY}" text-anchor="middle" font-size="${minmaxFont}"">${minTemp}°<tspan fill="#aaa"> | </tspan><tspan class="weather-temp">${maxTemp}°</tspan></text>
        </g>
      `);
      }
    }

    // Horizontal temperature lines (every 5°C, always 0°C and minTemp)
    const horizontalLines: unknown[] = [];
    const lineStep = (5 / tempRange) * (tempLineY0 - tempLineYMax);
    const nLines = Math.floor((tempLineY0 - tempLineYMax) / lineStep);
    const lineYs = new Set<number>();
    for (let i = 0; i <= nLines; i++) {
      lineYs.add(tempLineY0 - i * lineStep);
    }
    // 0°C line
    if (minTemp > 0) {
      const y0 = tempLineY0 - ((0 - minTemp) / tempRange) * (tempLineY0 - tempLineYMax);
      if (y0 <= tempLineY0 && y0 >= tempLineYMax) lineYs.add(y0);
    }
    // minTemp line
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
          <!-- Precipitation bars -->
          ${bars}

          <polyline points="${tempPoints}" fill="none" stroke="#e74c3c" stroke-width="2" />
        </svg>
      </div>
    `;
  }
}
