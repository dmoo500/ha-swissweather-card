import { css } from 'lit';
import { chartTooltipStyles } from './chart-tooltip-controller';

export const hourlyChartStyles = css`
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
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
    flex: 1;
    min-height: var(--chart-svg-min-height, 100px);
  }

  ${chartTooltipStyles}
`;
