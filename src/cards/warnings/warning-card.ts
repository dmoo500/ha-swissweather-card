import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { use, get as _t, registerTranslateConfig } from 'lit-translate';
import { translations } from '../../translations';
import type { HomeAssistant, HassEntity } from '../../types/home-assistant';
import {
  WARNING_CARD_NAME,
  WARNING_CARD_EDITOR_NAME,
  warningSchema,
  type WarningCardConfig,
} from './const';
import { registerCustomCard } from '../../utils';
import { renderWarningSection } from '../../utils/warning-renderer';

registerTranslateConfig({ loader: lang => translations[lang] });

void registerCustomCard; // prevent tree-shaking before index.ts registers it

@customElement(WARNING_CARD_NAME)
export class WarningCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: WarningCardConfig;
  @state() private _openWarnings: Record<string, boolean> = {};
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
        color: var(--primary-text-color, #fff);
      }

      .warning-section {
        border: 1px solid var(--warning-border-color, #ffeaa7);
        border-radius: 12px;
        padding: 15px;
        margin-bottom: 8px;
      }

      .warning-section.danger {
        background: linear-gradient(90deg, #f8d7da 0%, #f5c6cb 100%);
        border-color: var(--danger-border-color, #f1aeb5);
      }

      .warning-section.severe {
        background: linear-gradient(90deg, #ffeaa7 0%, #fdcb6e 100%);
        border-color: var(--severe-border-color, #e17055);
      }

      .no-warnings {
        opacity: 0.6;
        font-size: 14px;
        text-align: center;
        padding: 8px 0;
      }
    `;
  }

  public setConfig(config: WarningCardConfig): void {
    this.config = config;
  }

  public getCardSize(): number {
    return 2;
  }

  public static getStubConfig() {
    return {
      type: `custom:${WARNING_CARD_NAME}`,
      primary_warning_entity: '',
      secondary_warning_entity: '',
      tertiary_warning_entity: '',
    };
  }

  public static getConfigElement() {
    return document.createElement(WARNING_CARD_EDITOR_NAME);
  }

  public static getConfigSchema() {
    return warningSchema;
  }

  private _getEntityState(entityId: string): HassEntity | undefined {
    return this.hass?.states[entityId];
  }

  private _toggle = (id: string) => {
    this._openWarnings = { ...this._openWarnings, [id]: !this._openWarnings[id] };
    this.requestUpdate();
  };

  public render(): TemplateResult {
    if (!this.hass || !this.config) return html``;
    const lang = (this.hass.selectedLanguage || this.hass.language || 'en').substring(0, 2);
    if (lang !== this._loadedLang) {
      this._loadedLang = lang;
      use(lang).then(() => this.requestUpdate());
    }

    const primaryEntity = this.config.primary_warning_entity
      ? this._getEntityState(this.config.primary_warning_entity)
      : null;
    const secondaryEntity = this.config.secondary_warning_entity
      ? this._getEntityState(this.config.secondary_warning_entity)
      : null;
    const tertiaryEntity = this.config.tertiary_warning_entity
      ? this._getEntityState(this.config.tertiary_warning_entity)
      : null;
    const legacyEntity = this.config.warning_entity
      ? this._getEntityState(this.config.warning_entity)
      : null;

    // Ranked model: show empty state when primary has no active warning
    if (primaryEntity && primaryEntity.attributes?.has_warning !== undefined) {
      if (!(primaryEntity.attributes as any).has_warning) {
        return html`<div class="no-warnings">${_t('warning.warnings_none')}</div>`;
      }
    }

    const content = renderWarningSection(
      legacyEntity,
      primaryEntity,
      secondaryEntity,
      tertiaryEntity,
      this._openWarnings,
      this._toggle
    );

    if (!content) {
      return html`<div class="no-warnings">${_t('warning.warnings_none')}</div>`;
    }
    return content;
  }
}
