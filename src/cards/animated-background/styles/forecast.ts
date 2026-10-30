import { css } from 'lit';

export const backgroundForecastStyles = css`
  .condition,
  .forecast-temps,
  .sun-times,
  .forecast-mini {
    z-index: 1;
  }

  .condition {
    grid-area: 1 / 2;
    align-self: end;
    overflow-wrap: anywhere;
    font-size: 16px;
    color: var(--primary-text-color, #fff);
    text-align: right;
  }
  .weather-details {
    grid-area: 2 / 1 / 3 / -1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 16px;
  }
  .weather-details:empty {
    display: none;
  }
  .forecast-temps {
    position: relative;
    font-size: 14px;
    color: var(--primary-text-color, #fff);
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .sun-times {
    position: relative;
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    color: var(--primary-text-color, #fff);
    font-size: 14px;
  }
  .sun-times span,
  .forecast-temps span {
    white-space: nowrap;
  }
  .forecast-mini {
    position: relative;
    grid-area: 3 / 1 / 4 / -1;
    align-self: end;
    min-width: 0;
    isolation: isolate;
  }
  .temp-high {
    font-weight: bold;
    color: var(--primary-text-color, #fff);
  }
  .temp-low {
    color: var(--primary-text-color, #fff);
  }
  @media (max-width: 400px) {
    .temperature {
      font-size: calc(var(--bg-temp-font-size, 36px) * 0.8);
      padding: 4px 8px;
    }
    .condition {
      font-size: 14px;
    }
    .forecast-temps {
      font-size: 12px;
    }
  }
  @media (max-width: 768px) {
    .metrics-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
