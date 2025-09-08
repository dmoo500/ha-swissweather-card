import { translations } from '../../translations';
import { LitElement, html, css, svg, TemplateResult } from 'lit';
import { use, translate as _t, registerTranslateConfig } from 'lit-translate';
import { customElement, property } from 'lit/decorators.js';
import type {
  HomeAssistant,
  WeatherEntity,
  WeatherCondition,
} from '../../types/home-assistant';
import { getWeatherBackground } from './background';
import { getEntityState, isDay } from '../../utils';
import { ANIMATED_BACKGROUND_CARD_EDITOR_NAME, ANIMATED_BACKGROUND_CARD_NAME, type CardConfig, schema } from './const';

registerTranslateConfig({
  // Loads the language by returning a JSON structure for a given language
  loader: lang => {
    return translations[lang];
  },
});

// Debug: Log before decorator application
console.log('🎯 About to apply @customElement decorator to SwissweatherCard (BG)');
console.log('🎯 customElements registry available:', !!customElements);

@customElement(ANIMATED_BACKGROUND_CARD_NAME)
export class SwissWeatherBGCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: CardConfig;

  static get styles() {
    return css`
      :host {
        display: block;
        box-shadow: none;
        min-height: 260px;
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
        font-size: 36px;
        font-weight: bold;
        text-align: center;
      }

      .img-svg {
        position: absolute;
        margin-top: 36px;
        inset: 0;
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        min-height: 200px;
        box-shadow: var(
          --ha-card-box-shadow,
          0 4px 20px var(--box-shadow-color, rgba(0, 0, 0, 0.1))
        );
      }
      .condition {
        position: absolute;
        bottom: 16px;
        margin-left: 16px;
        margin-right: 16px;
        font-size: 16px;
        color: var(--primary-text-color, #fff);
        text-align: right;
      }
      @media (max-width: 768px) {
        .metrics-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `;
  }

  public setConfig(config: CardConfig): void {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this.config = config;
  }

  public getCardSize(): number {
    return 4;
  }

  public static getStubConfig() {
    return {
      type: `custom:${ANIMATED_BACKGROUND_CARD_NAME}`,
      entity: '',
    };
  }

  public static getConfigElement() {
    // Return the inline editor element
    return document.createElement(ANIMATED_BACKGROUND_CARD_EDITOR_NAME);
  }

  // Schema for the visual editor
  public static getConfigSchema() {
    return schema;
  }

  public render(): TemplateResult {
    use((this.hass.selectedLanguage || this.hass.language || 'en').substring(0, 2));

    if (!this.hass || !this.config) {
      return html``;
    }

    const weatherEntity = getEntityState(this.hass, this.config.entity) as WeatherEntity;
    const temperature = weatherEntity.attributes.temperature;
    const condition = weatherEntity.state as WeatherCondition;

    const chartWidth = this.clientWidth || 300;

    return html`
      <div>
        <div class="temperature">
          ${typeof temperature === 'number' && !isNaN(temperature) ? temperature : '--'}°
        </div>
        ${condition
          ? html`<div class="img-svg">
                <svg
                  viewBox="0 0 ${chartWidth} 200"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="xMidYMid slice"
                >
                  ${chartWidth > 0
                    ? getWeatherBackground(condition, isDay(this.hass, this.config), chartWidth)
                    : svg``}
                </svg>
              </div>
              <div class="condition">${_t(condition)}</div> `
          : html``}
      </div>
    `;
  }
}

console.log('✅ SwissWeatherCard (animated Background) fully loaded and registered');
