import { LitElement, html, svg, css, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { WeatherForecast } from '../types/home-assistant.js';

@customElement('daily-forecast-diagram')
export class DailyForecastDiagram extends LitElement {
  @property({ type: Array }) forecast: WeatherForecast[] = [];
  @property({ type: Array }) hourlyForecast: WeatherForecast[] = [];
  @property({ type: Object }) config: any;
  @property({ type: Function }) getWeatherIcon!: (...args: any[]) => TemplateResult;
  @property({ type: Boolean }) standalone = false;
  static styles = css`
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
    .weather-day {
      fill: var(--primary-text-color, #fff);
    }
  `;
  // fallback function to get a CSS variable with a default value
  getCSSVariable(varName: string, fallback = '50'): number {
    const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    return Number.parseInt(value || fallback);
  }

  render(): TemplateResult {
    // Daily forecast SVG diagram for temperature and precipitation
    const days = this.forecast.slice(0, 7);
    const hours = this.hourlyForecast.slice(0, days.length * 24);
    if (!hours.length) return html`<div>No hourly forecast available</div>`;

    const nDays = days.length;

    // Use full available space in standalone mode, fixed 200px for non-standalone
    const rows = this.standalone ? this.config.grid_options?.rows || 2 : 2;
    const containerHeight = this.standalone
      ? rows * this.getCSSVariable('--row-height', '56')
      : 200;
    const containerWidth = this.standalone ? 400 : 400; // Use available width

    // SVG dimensions use full container
    const width = containerWidth;
    const height = containerHeight;

    // Calculate time span and create proper scaling
    const firstHour = new Date(hours[0].datetime);
    const lastHour = new Date(hours[hours.length - 1].datetime);
    const totalHours = (lastHour.getTime() - firstHour.getTime()) / (60 * 60 * 1000) + 1; // +1 for inclusive

    // Layout calculations - responsive based on available height
    const padding = 16; // Border radius space
    const usableHeight = height - padding * 2;
    const usableWidth = width - padding * 2; // Also account for horizontal padding

    // Fixed day width - each day gets equal space of usable width (excluding padding)
    const dayWidth = usableWidth / nDays;

    // Dynamic layout based on available height
    // Day groups need fixed minimum space for readability
    const minDayGroupHeight = 80; // Minimum space for weekday + icon + temp
    const maxDayGroupHeight = 120; // Maximum space to prevent oversized icons
    const calculatedDayGroupHeight = Math.min(
      maxDayGroupHeight,
      Math.max(minDayGroupHeight, usableHeight * 0.35)
    );

    // Gap between day groups and chart - smaller for more rows
    const gapBetween = Math.max(10, usableHeight * 0.05); // 5% gap, minimum 10px

    // Chart gets remaining space (more space for higher rows)
    const chartHeight = usableHeight - calculatedDayGroupHeight - gapBetween;

    // Icon size based on available day space
    const iconSize = Math.min(dayWidth * 0.7, calculatedDayGroupHeight * 0.4);

    // Text sizes relative to available space
    const weekdayFont = Math.max(10, calculatedDayGroupHeight * 0.08);
    const minmaxFont = Math.max(12, calculatedDayGroupHeight * 0.12);

    // Layout positions
    const dayTop = padding + 10;
    const weekdayY = dayTop + weekdayFont;
    const iconY = weekdayY + 10;
    const minmaxY = iconY + iconSize + 10;

    // Chart area starts at fixed position after day groups
    const chartTop = padding + calculatedDayGroupHeight + gapBetween;

    console.log('Simplified layout:', {
      nDays,
      containerWidth,
      containerHeight,
      dayWidth,
      iconSize,
      calculatedDayGroupHeight,
      gapBetween,
      chartHeight,
      chartTop,
      tempLineYMax: chartTop,
      tempLineY0: chartTop + chartHeight,
      actualChartHeight: chartHeight,
      usableHeight,
      totalHours,
      'First hour': firstHour.toISOString(),
      'Last hour': lastHour.toISOString(),
    });

    // Always 24 hours per day for the X axis spacing
    const hoursPerDay = 24;
    // X position per hour in px (based on full day width, not actual data span)
    const hourStep = dayWidth / hoursPerDay;

    // Temperature data (can include negative temperatures)
    const temps = hours.map(h => (typeof h.temperature === 'number' ? h.temperature : null));
    const minTemp = Math.min(...(temps.filter(t => t !== null) as number[]));
    const maxTemp = Math.max(...(temps.filter(t => t !== null) as number[]));

    // Chart area layout
    const tempLineYMax = chartTop; // Chart start Y
    const tempLineY0 = chartTop + chartHeight; // Chart end Y (bottom)

    // Precipitation data
    const precs = hours.map(h => (typeof h.precipitation === 'number' ? h.precipitation : 0));
    const precsProberly = hours.map(h =>
      typeof h.precipitation_probability === 'number' ? h.precipitation_probability % 10 : 0
    );
    // Scale for bars: always use full range
    const maxPrecip = Math.max(...precs, ...precsProberly, 1); // never 0, so bars are visible

    // Temperature line: scale to full range (tempLineYMax to tempLineY0)
    // Create a mapping based on actual forecast days instead of calculated offsets
    const dayMapping: { [dateString: string]: number } = {};
    days.forEach((day, idx) => {
      const dayDate = new Date(day.datetime);
      const dateKey = `${dayDate.getFullYear()}-${dayDate.getMonth()}-${dayDate.getDate()}`;
      dayMapping[dateKey] = idx;
    });

    console.log('Day mapping created:', dayMapping);

    function getDayAndHourIdx(dt: Date) {
      const dateKey = `${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()}`;
      const dayIdx = dayMapping[dateKey];
      const hourInDay = dt.getHours(); // Use actual hour of day (0-23)
      return {
        dayIdx: dayIdx !== undefined ? dayIdx : -1,
        hourInDay: hourInDay >= 0 && hourInDay < 24 ? hourInDay : -1,
      };
    }

    // Create a full 24h grid for each day and fill with available data
    const fullDayGrid: { [key: string]: any } = {};

    // Initialize full 24h grid for each day
    for (let d = 0; d < nDays; d++) {
      for (let h = 0; h < 24; h++) {
        const key = `${d}-${h}`;
        fullDayGrid[key] = null; // Default: no data
      }
    }

    // Fill grid with actual data
    hours.forEach((hour, i) => {
      if (hour.datetime && temps[i] !== null) {
        const dt = new Date(hour.datetime);
        const { dayIdx, hourInDay } = getDayAndHourIdx(dt);
        const key = `${dayIdx}-${hourInDay}`;

        // Debug logging for data placement
        if (i < 5 || i >= hours.length - 5) {
          // Log first and last few hours
          console.log(`Hour ${i}: ${dt.toISOString()} -> Day ${dayIdx}, Hour ${hourInDay}`, {
            temp: temps[i],
            withinBounds: dayIdx >= 0 && dayIdx < nDays && hourInDay >= 0 && hourInDay < 24,
          });
        }

        // Only place data within valid bounds
        if (dayIdx >= 0 && dayIdx < nDays && hourInDay >= 0 && hourInDay < 24) {
          fullDayGrid[key] = {
            temp: temps[i],
            precip: precs[i],
            precipProb: precsProberly[i],
            originalIndex: i,
          };
        } else {
          console.warn(`Data point ${i} outside bounds:`, {
            dayIdx,
            hourInDay,
            nDays,
            dt: dt.toISOString(),
          });
        }
      }
    });

    console.log('Full day grid created:', {
      totalSlots: Object.keys(fullDayGrid).length,
      filledSlots: Object.values(fullDayGrid).filter(v => v !== null).length,
      nDays,
      hoursPerDay: 24,
    });

    // Round min/max temps to 5°C boundaries for consistent scaling
    // IMPORTANT: Always include 0°C for correct precipitation scaling (5mm = 5°C)
    let roundedMinTemp = Math.floor(minTemp / 5) * 5;
    let roundedMaxTemp = Math.ceil(maxTemp / 5) * 5;

    // Ensure 0°C is always included in the range for precipitation reference
    if (roundedMinTemp > 0) {
      roundedMinTemp = 0;
    }
    if (roundedMaxTemp < 0) {
      roundedMaxTemp = 0;
    }

    const displayTempRange = roundedMaxTemp - roundedMinTemp;

    console.log('Temperature scaling (with 0°C):', {
      minTemp,
      maxTemp,
      roundedMinTemp,
      roundedMaxTemp,
      displayTempRange,
    });

    // Generate ONE continuous temperature line across all days
    const tempLinesPerDay: any[] = [];
    const allTempPoints: string[] = [];

    // Collect all temperature points across all days in chronological order
    for (let d = 0; d < nDays; d++) {
      for (let h = 0; h < 24; h++) {
        const key = `${d}-${h}`;
        const data = fullDayGrid[key];
        if (data && data.temp !== null) {
          // Calculate X coordinate for this hour
          const x = padding + d * dayWidth + h * hourStep + hourStep / 2;
          const y =
            tempLineY0 -
            ((data.temp - roundedMinTemp) / displayTempRange) * (tempLineY0 - tempLineYMax);
          allTempPoints.push(`${x},${y}`);
        }
      }
    }

    // Create ONE continuous polyline across all days
    if (allTempPoints.length > 0) {
      console.log(
        `Creating continuous temperature line with ${allTempPoints.length} points across ${nDays} days`
      );
      tempLinesPerDay.push(
        svg`
          <!-- Main temperature line -->
          <polyline points="${allTempPoints.join(' ')}" fill="none" stroke="#e74c3c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        `
      );
    }

    // Rain bars
    const barWidth = Math.max(3, Math.floor(hourStep) - 2);
    const barYBase = tempLineY0;

    // Fixed scale: 5mm rain = 5°C temperature height (1mm = 1°C worth of height)
    // Calculate what 5°C height is in pixels
    const fiveDegreeHeight = (5 / displayTempRange) * (tempLineY0 - tempLineYMax);
    const mmToPixelRatio = fiveDegreeHeight / 5; // How many pixels per mm

    console.log('Rain scaling:', {
      displayTempRange,
      fiveDegreeHeight,
      mmToPixelRatio,
      maxPrecip,
      'Example: 2mm height': 2 * mmToPixelRatio,
    });
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

    // precipitation_proberly bars (transparent dark grey) - use full 24h grid
    const barsProberly: any[] = [];
    for (let d = 0; d < nDays; d++) {
      for (let h = 0; h < 24; h++) {
        const key = `${d}-${h}`;
        const data = fullDayGrid[key];
        if (data && data.precipProb > 0) {
          const x = padding + d * dayWidth + h * hourStep + hourStep / 2 - barWidth / 2;

          // Ensure bars stay within day boundaries (with padding offset)
          const minX = padding + d * dayWidth;
          const maxX = padding + (d + 1) * dayWidth - barWidth;
          const clampedX = Math.max(minX, Math.min(maxX, x));

          const barHeight = data.precipProb * mmToPixelRatio;
          barsProberly.push(
            svg`<rect x="${clampedX}" y="${barYBase - barHeight}" width="${barWidth}" height="${barHeight}"
              fill="#988d8dff" opacity="0.4" rx="1.5"/>`
          );
        }
      }
    }

    // precipitation bars (colored) - use full 24h grid
    const bars: any[] = [];
    for (let d = 0; d < nDays; d++) {
      for (let h = 0; h < 24; h++) {
        const key = `${d}-${h}`;
        const data = fullDayGrid[key];
        if (data && data.precip > 0) {
          const x = padding + d * dayWidth + h * hourStep + hourStep / 2 - barWidth / 2;

          // Ensure bars stay within day boundaries (with padding offset)
          const minX = padding + d * dayWidth;
          const maxX = padding + (d + 1) * dayWidth - barWidth;
          const clampedX = Math.max(minX, Math.min(maxX, x));

          const barHeight = data.precip * mmToPixelRatio;
          const color = getPrecipColor(data.precip);
          bars.push(
            svg`<rect x="${clampedX}" y="${barYBase - barHeight}" width="${barWidth}" height="${barHeight}"
              fill="${color}" opacity="1" rx="1.5"/>`
          );
        }
      }
    }

    // Vertical day lines - each day gets full 24h visual representation
    const verticals: unknown[] = [];
    if (hours.length > 0) {
      // Draw vertical lines to completely frame each day (start and end of each day)
      for (let d = 0; d <= nDays; d++) {
        // Position for the beginning of day d (with padding offset)
        const x = padding + d * dayWidth;

        if (d === 0) {
          // First line: Start of first day
          verticals.push(
            svg`<line x1="${x}" y1="${tempLineYMax}" x2="${x}" y2="${tempLineY0}" stroke="#ddd" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.4"/>`
          );
        } else if (d === nDays) {
          // Last line: End of last day
          verticals.push(
            svg`<line x1="${x}" y1="${tempLineYMax}" x2="${x}" y2="${tempLineY0}" stroke="#ddd" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.4"/>`
          );
        } else {
          // Middle lines: Between days
          verticals.push(
            svg`<line x1="${x}" y1="${tempLineYMax}" x2="${x}" y2="${tempLineY0}" stroke="#ddd" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.4"/>`
          );
        }
      }

      console.log(`Drawing ${nDays + 1} vertical lines for ${nDays} days:`, {
        'First day start': `${padding}px`,
        'Last day end': `${padding + nDays * dayWidth}px`,
        dayWidth,
        nDays,
        usableWidth,
        padding,
      });
    }

    const dayGroups: unknown[] = [];
    if (nDays > 0) {
      for (let d = 0; d < nDays; d++) {
        const x = padding + d * dayWidth + dayWidth / 2; // Add padding offset
        const minTemp =
          typeof days[d].templow === 'number'
            ? Math.round(days[d].templow || days[d].temperature - 5)
            : '';
        const maxTemp =
          typeof days[d].temperature === 'number' ? Math.round(days[d].temperature) : '';
        dayGroups.push(svg`
        <g>
          <!-- Weekday -->
          <text x="${x}" y="${weekdayY}" text-anchor="middle" font-size="${weekdayFont}" class="weather-day">
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
          <text class="weather-temp" x="${x}" y="${minmaxY}" text-anchor="middle" font-size="${minmaxFont}">${minTemp}°<tspan fill="#aaa"> | </tspan><tspan class="weather-temp">${maxTemp}°</tspan></text>
        </g>
      `);
      }
    }

    // Horizontal temperature lines (dynamic range to cover all temperatures)
    const horizontalLines: unknown[] = [];

    // Generate temperature lines only for 5°C and 10°C steps
    for (let temp = roundedMinTemp; temp <= roundedMaxTemp; temp += 5) {
      // Only show lines that are multiples of 5°C
      if (temp % 5 === 0) {
        // Use display range for consistent Y calculation
        const y =
          tempLineYMax + ((roundedMaxTemp - temp) / displayTempRange) * (tempLineY0 - tempLineYMax);
        if (y >= tempLineYMax && y <= tempLineY0) {
          // Main lines (solid): multiples of 10°C (0°, 10°, 20°, -10°, etc.)
          // Secondary lines (dashed): multiples of 5°C but not 10°C (5°, 15°, 25°, -5°, etc.)
          const isMainLine = temp % 10 === 0;
          console.log(
            `Temperature line: ${temp}°C at y=${y} (${isMainLine ? 'solid' : 'dashed'}) - should be between ${tempLineYMax} and ${tempLineY0}`
          );
          horizontalLines.push(
            svg`<line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" 
                 stroke="#ddd" 
                 stroke-width="${isMainLine ? 1 : 0.5}" 
                 stroke-dasharray="${isMainLine ? 'none' : '2,2'}" 
                 opacity="0.6" />
                 <text x="${padding + 5}" y="${y - 2}" font-size="10" fill="#888" opacity="0.8">${temp}°</text>`
          );
        }
      }
    }
    return html`
      <style>
        .chart {
        ${this.standalone === false
          ? 'background: var(--card-background-color, #fff);' + 'margin-top: 15px;'
          : 'width: 100%; height: 100%;'}
          border-radius: 12px;
          padding: 0;
          border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
          overflow: hidden;
          position: relative; /* Enable absolute positioning for SVG overlay */
        }
        .chart svg {
          width: 100%;
          height: 100%;
        }
      </style>
      <div class="chart">
        <svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" style="display:block;">
          <!-- Background grid lines (behind everything) -->
          ${horizontalLines} ${verticals}
          <!-- Day groups (labels and icons) -->
          ${dayGroups}
          <!-- Precipitation bars -->
          ${barsProberly} ${bars}
        </svg>

        <!-- Temperature lines in completely separate SVG overlay (continuous line, always on top) -->
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 ${width} ${height}"
          style="display:block; position: absolute; top: 0; left: 0; pointer-events: none;"
        >
          ${tempLinesPerDay}
        </svg>
      </div>
    `;
  }
}
