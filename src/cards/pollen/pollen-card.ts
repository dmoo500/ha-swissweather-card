import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { use, get as _t, registerTranslateConfig } from 'lit-translate';
import type { HomeAssistant, HassEntity } from '../../types/home-assistant';
import { translations } from '../../translations';
import { registerCustomCard } from '../../utils';
import {
  POLLEN_CARD_NAME,
  POLLEN_CARD_EDITOR_NAME,
  POLLEN_TYPES,
  POLLEN_LEVEL_ORDER,
  type PollenCardConfig,
  type PollenLevel,
  type PollenType,
} from './const';

registerTranslateConfig({ loader: lang => translations[lang] });
void registerCustomCard;

const LEVEL_COLOR: Record<PollenLevel, string> = {
  NONE: 'var(--pollen-none-color, #9e9e9e)',
  LOW: 'var(--pollen-low-color, #4caf50)',
  MEDIUM: 'var(--pollen-medium-color, #ff9800)',
  STRONG: 'var(--pollen-strong-color, #f44336)',
  VERY_STRONG: 'var(--pollen-very-strong-color, #9c27b0)',
};

function parseLevel(state: string): PollenLevel {
  const normalized = state.toUpperCase().replace(/ /g, '_') as PollenLevel;
  return POLLEN_LEVEL_ORDER.includes(normalized) ? normalized : 'NONE';
}

function maxLevel(levels: PollenLevel[]): PollenLevel {
  if (levels.length === 0) return 'NONE';
  return levels.reduce((max, lvl) =>
    POLLEN_LEVEL_ORDER.indexOf(lvl) > POLLEN_LEVEL_ORDER.indexOf(max) ? lvl : max
  );
}

@customElement(POLLEN_CARD_NAME)
export class PollenCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: PollenCardConfig;
  @state() private _expanded = false;
  private _loadedLang: string | undefined;

  static get styles() {
    return css`
      :host {
        display: block;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        border-radius: 16px;
        padding: 16px;
        box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.1));
        font-family: var(
          --primary-font-family,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          sans-serif
        );
        color: var(--primary-text-color);
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        user-select: none;
        background: none;
        border: none;
        padding: 0;
        width: 100%;
        text-align: left;
        color: inherit;
        font: inherit;
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .title {
        font-size: 16px;
        font-weight: 600;
      }

      .overall-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 10px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 600;
        color: #fff;
      }

      .chevron {
        font-size: 18px;
        transition: transform 0.2s ease;
        color: var(--secondary-text-color);
      }

      .chevron.open {
        transform: rotate(180deg);
      }

      .no-data {
        opacity: 0.6;
        font-size: 14px;
        text-align: center;
        padding: 8px 0;
      }

      .pollen-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
        gap: 8px;
        margin-top: 12px;
      }

      .pollen-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        border-radius: 10px;
        padding: 8px 6px 6px;
        gap: 4px;
      }

      .pollen-name {
        font-size: 12px;
        font-weight: 500;
        text-align: center;
        opacity: 0.85;
      }

      .pollen-level-dot {
        width: 18px;
        height: 18px;
        border-radius: 50%;
      }

      .pollen-level-label {
        font-size: 11px;
        font-weight: 600;
        text-align: center;
      }

      .pollen-raw {
        font-size: 10px;
        opacity: 0.6;
        text-align: center;
      }
    `;
  }

  public setConfig(config: PollenCardConfig): void {
    this.config = config;
  }

  public getCardSize(): number {
    return 2;
  }

  public static getStubConfig() {
    return {
      type: `custom:${POLLEN_CARD_NAME}`,
      // all types enabled by default — user configures entities per type
    };
  }

  public static getConfigElement() {
    return document.createElement(POLLEN_CARD_EDITOR_NAME);
  }

  public static getConfigSchema() {
    return [];
  }

  private _getEntityState(entityId: string | undefined): HassEntity | undefined {
    if (!entityId) return undefined;
    return this.hass?.states[entityId];
  }

  private _toggle = () => {
    this._expanded = !this._expanded;
    this.requestUpdate();
  };

  public render(): TemplateResult {
    if (!this.hass || !this.config) return html``;

    const lang = (this.hass.selectedLanguage || this.hass.language || 'en').substring(0, 2);
    if (lang !== this._loadedLang) {
      this._loadedLang = lang;
      use(lang).then(() => this.requestUpdate());
    }

    // Only include types that are enabled (undefined = enabled by default)
    const pollenData: Array<{
      type: PollenType;
      level: PollenLevel;
      raw?: string;
      unit?: string;
    }> = [];

    // Check across ALL types (including disabled) whether any entity is configured
    const anyEntityConfigured = POLLEN_TYPES.some(
      t => !!(this.config[`${t}_entity` as keyof PollenCardConfig] as string | undefined)
    );

    for (const type of POLLEN_TYPES) {
      const enabled = this.config[`${type}_enabled` as keyof PollenCardConfig];
      if (enabled === false) continue;

      const entityId = this.config[`${type}_entity` as keyof PollenCardConfig] as
        string | undefined;

      const levelEntity = this._getEntityState(entityId);
      if (!levelEntity) continue;

      const level = parseLevel(levelEntity.state);
      const rawEntity = this._getEntityState(
        this.config[`${type}_raw_entity` as keyof PollenCardConfig] as string | undefined
      );
      pollenData.push({
        type,
        level,
        raw: rawEntity ? rawEntity.state : undefined,
        unit: rawEntity?.attributes?.unit_of_measurement,
      });
    }

    if (pollenData.length === 0) {
      const msg = anyEntityConfigured ? _t('pollen.no_data') : _t('pollen.not_configured');
      return html`<div class="no-data">${msg}</div>`;
    }

    const overall = maxLevel(pollenData.map(d => d.level));
    const overallColor = LEVEL_COLOR[overall];

    return html`
      <button class="header" @click=${this._toggle} aria-expanded=${this._expanded}>
        <div class="header-left">
          <span class="title">🌿 ${_t('pollen.title')}</span>
          <span class="overall-badge" style="background: ${overallColor};">
            ${_t(`pollen.levels.${overall.toLowerCase()}`)}
          </span>
        </div>
        <span class="chevron ${this._expanded ? 'open' : ''}">⌄</span>
      </button>

      ${
        this._expanded
          ? html`
              <div class="pollen-grid">
                ${pollenData.map(
                  ({ type, level, raw, unit }) => html`
                    <div class="pollen-item">
                      <div class="pollen-name">${_t(`pollen.types.${type}`)}</div>
                      <div
                        class="pollen-level-dot"
                        style="background: ${LEVEL_COLOR[level]};"
                      ></div>
                      <div class="pollen-level-label" style="color: ${LEVEL_COLOR[level]};">
                        ${_t(`pollen.levels.${level.toLowerCase()}`)}
                      </div>
                      ${
                        raw !== undefined
                          ? html`<div class="pollen-raw">${raw}${unit ? '\u00a0' + unit : ''}</div>`
                          : ''
                      }
                    </div>
                  `
                )}
              </div>
            `
          : ''
      }
    `;
  }
}
