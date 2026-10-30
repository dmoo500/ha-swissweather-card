import { css } from 'lit';

export const backgroundForecastStyles = css`
  .condition {
    position: absolute;
    top: calc(var(--bg-temp-font-size, 36px) + 16px);
    right: 16px;
    margin-left: 16px;
    font-size: 16px;
    color: var(--primary-text-color, #fff);
    text-align: right;
  }
  .forecast-temps {
    position: absolute;
    top: calc(var(--bg-temp-font-size, 36px) * 2 + 16px);
    left: 16px;
    font-size: 14px;
    color: var(--primary-text-color, #fff);
    max-width: calc(100% - 32px); /* honor left/right margins */
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .sun-times {
    position: absolute;
    top: calc(var(--bg-temp-font-size, 36px) * 2 + 16px);
    right: 16px;
    display: flex;
    gap: 12px;
    align-items: center;
    color: var(--primary-text-color, #fff);
    font-size: 14px;
    z-index: 12; /* above photo overlays */
  }
  .forecast-mini {
    position: absolute;
    bottom: 16px; /* align vertically with bottom spacing */
    right: 16px; /* align to the right edge */
    z-index: 12; /* keep charts above photo overlays */
    max-width: calc(100% - 32px); /* honor left/right margins */
    isolation: isolate;
  }
  @media (max-width: 400px) {
    .forecast-mini {
      right: 12px;
      bottom: 12px;
      max-width: calc(100% - 24px);
    }
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
