import { LitElement, html, css, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { HomeAssistant } from '../../types/home-assistant';
import { UV_INDEX_CARD_NAME, UV_INDEX_CARD_EDITOR_NAME, type UVIndexCardConfig } from './const';
import './uv-index';

@customElement(UV_INDEX_CARD_NAME)
export class UVIndexCard extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ attribute: false }) config?: UVIndexCardConfig;

  static styles = css`
    :host {
      display: block;
    }
    ha-card {
      display: block;
      padding: 16px;
    }
  `;

  setConfig(config: UVIndexCardConfig): void {
    if (!config.entity || !config.entity.startsWith('sensor.')) {
      throw new Error('UV Index requires a numeric sensor entity');
    }
    if (config.max_entity && !config.max_entity.startsWith('sensor.')) {
      throw new Error('UV maximum must be a sensor entity');
    }
    if (config.reading_type && !['current', 'daily_max'].includes(config.reading_type)) {
      throw new Error('UV reading_type must be current or daily_max');
    }
    this.config = { ...config };
  }

  getCardSize(): number {
    return 4;
  }
  getGridOptions() {
    return { columns: 12, rows: 'auto', min_columns: 6 };
  }
  static getStubConfig() {
    return { type: `custom:${UV_INDEX_CARD_NAME}`, entity: '' };
  }
  static getConfigElement() {
    return document.createElement(UV_INDEX_CARD_EDITOR_NAME);
  }

  protected render(): TemplateResult {
    if (!this.hass || !this.config) return html``;
    return html`<ha-card
      ><swissweather-uv-index
        .hass=${this.hass}
        .entity=${this.config.entity}
        .maxEntity=${this.config.max_entity}
        .readingType=${this.config.reading_type || 'current'}
      ></swissweather-uv-index
    ></ha-card>`;
  }
}
