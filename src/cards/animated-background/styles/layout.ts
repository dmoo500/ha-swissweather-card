import { css } from 'lit';

export const backgroundLayoutStyles = css`
  :host {
    display: block;
    position: relative;
    isolation: isolate;
    box-shadow: none;
    /* Calculate height according to HA docs: rows * 56px + (rows-1) * 8px gap */
    /* Simplified: height = rows * 64px - 8px */
    height: calc(var(--card-grid-rows, 3) * 64px - 8px);
    min-height: calc(var(--card-grid-rows, 3) * 64px - 8px);
  }

  .temperature {
    text-align: center;
    border-radius: 45px;
    border: 2px solid var(--primary-text-color, #fff);
    background: var(--ha-card-background, var(--card-background-color, #fff));
    padding: 5px 10px;
    float: left;
    box-shadow: var(
      --ha-card-box-shadow,
      0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2)
    );
    item-align: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    position: relative;
    font-size: var(--bg-temp-font-size, 36px);
    font-weight: bold;
    text-align: center;
    z-index: 1;
  }

  .img-svg,
  .img-photo {
    z-index: 0;
    pointer-events: none;
  }

  .img-svg {
    position: absolute;
    margin-top: var(--bg-temp-img-top, 36px);
    inset: 0;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    min-height: 200px;
    box-shadow: var(--ha-card-box-shadow, 0 4px 20px var(--box-shadow-color, rgba(0, 0, 0, 0.1)));
  }
`;
