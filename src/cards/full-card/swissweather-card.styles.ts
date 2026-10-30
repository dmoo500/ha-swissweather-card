import { css } from 'lit';

export const fullCardStyles = css`
  :host {
    display: block;
    background: var(--ha-card-background, var(--card-background-color, #fff));
    border-radius: 16px;
    padding: 20px;
    box-shadow: var(--ha-card-box-shadow, 0 4px 20px var(--box-shadow-color, rgba(0, 0, 0, 0.1)));
    font-family: var(
      --primary-font-family,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      sans-serif
    );
    color: var(--primary-text-color, #fff);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 2px solid var(--divider-color, #dc143c);
    padding-bottom: 15px;
  }

  .hourly-forecast-title {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-top: 24px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  .location {
    font-size: 24px;
    font-weight: bold;
    color: var(--primary-text-color, #fff);
  }

  .warning-section {
    border: 1px solid var(--warning-border-color, #ffeaa7);
    border-radius: 12px;
    padding: 15px;
    margin-bottom: 20px;
  }

  .warning-section.danger {
    background: linear-gradient(90deg, #f8d7da 0%, #f5c6cb 100%);
    border-color: var(--danger-border-color, #f1aeb5);
  }

  .warning-section.severe {
    background: linear-gradient(90deg, #ffeaa7 0%, #fdcb6e 100%);
    border-color: var(--severe-border-color, #e17055);
  }

  .warning-icon {
    font-size: 24px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .current-weather {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    margin-bottom: 25px;
  }

  .current-temp {
    font-size: 48px;
    font-weight: 300;
    color: var(--primary-text-color, #fff);
    line-height: 1;
  }

  .current-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 8px;
  }

  .weather-icon {
    font-size: 64px;
    margin-bottom: 10px;
  }

  .condition {
    font-size: 16px;
    color: var(--primary-text-color, #fff);
    text-align: right;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 15px;
    margin-bottom: 25px;
  }
  .metrics-table {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
  .metrics-table .metric-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border: none;
    min-width: 0;
    box-shadow: none;
    transition: none;
  }
  .metrics-table .metric-card:hover {
    background: none;
    border: none;
    box-shadow: none;
    transform: none;
  }
  .metrics-table > .metric-card > .metric-icon {
    margin-bottom: 0;
    margin-right: 8px;
  }
  .metrics-table > .metric-card > .wind-compass {
    min-width: 16px;
    width: 16px;
    height: 16px;
    margin: 13px auto 8px;
    margin-right: 8px;
  }
  .metrics-table > .metric-card > .metric-value {
    font-size: 12px;
    font-weight: bold;
    color: var(--primary-text-color, #2c3e50);
    margin-bottom: 0;
    margin-right: 8px;
  }

  .metric-card {
    background: var(--card-background-color, rgba(255, 255, 255, 0.7));
    border-radius: 12px;
    padding: 15px;
    text-align: center;
    border: 1px solid var(--border-color, rgba(220, 20, 60, 0.1));
    transition: transform 0.2s ease;
  }

  .metric-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--box-shadow-color, rgba(0, 0, 0, 0.15));
  }

  .metric-icon {
    font-size: 24px;
    margin-bottom: 8px;
    color: var(--state-icon-color, #dc143c);
  }

  .metric-value {
    font-size: 20px;
    font-weight: bold;
    color: var(--primary-text-color, #2c3e50);
    margin-bottom: 4px;
  }

  .metric-label {
    font-size: 12px;
    color: var(--secondary-text-color, #7f8c8d);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .wind-compass {
    width: 24px;
    height: 24px;
    border: 2px solid var(--state-icon-color, #dc143c);
    border-radius: 50%;
    position: relative;
    margin: 0 auto 10px;
  }

  .wind-arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 8px;
    background: var(--state-icon-color, #dc143c);
    transform-origin: bottom center;
    transform: translate(-50%, -100%);
  }

  .wind-arrow::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 8px solid var(--state-icon-color, #dc143c);
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    :host {
      padding: 15px;
    }

    .metrics-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
