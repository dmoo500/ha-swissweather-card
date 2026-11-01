import { LitElement, html, css, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { use, get as _t } from 'lit-translate';
import type { HomeAssistant, LovelaceCardEditor } from '../../types/home-assistant';
import '../../components/editor-form';
import {
  UV_INDEX_CARD_NAME,
  UV_INDEX_CARD_EDITOR_NAME,
  uvSchema,
  type UVIndexCardConfig,
} from './const';

@customElement(UV_INDEX_CARD_EDITOR_NAME)
export class UVIndexCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ attribute: false }) private _config?: UVIndexCardConfig;
  private _loadedLang?: string;
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  setConfig(config: UVIndexCardConfig): void {
    this._config = { ...config };
  }

  protected render(): TemplateResult {
    if (!this.hass) return html``;
    const lang = this.hass.selectedLanguage || this.hass.language || 'en';
    if (lang !== this._loadedLang) {
      this._loadedLang = lang;
      void use(lang).then(() => this.requestUpdate());
    }
    return html`<h3>${_t('uv.title')}</h3>
      <swissweather-editor-form
        .hass=${this.hass}
        .data=${{ ...this._config, reading_type: this._config?.reading_type || 'current' }}
        .schema=${uvSchema.map(field =>
          field.name === 'reading_type'
            ? {
                ...field,
                selector: {
                  select: {
                    options: [
                      { value: 'current', label: _t('uv.current') },
                      { value: 'daily_max', label: _t('uv.daily_max') },
                    ],
                  },
                },
              }
            : field
        )}
        .computeLabel=${(field: { name: string }) => _t(`uv.config.${field.name}`)}
        .computeHelper=${(field: { description?: string }) => (field.description ? _t(field.description) : '')}
        @value-changed=${(event: CustomEvent<{ value: Partial<UVIndexCardConfig> }>) => {
          this._config = {
            entity: '',
            ...this._config,
            ...event.detail.value,
            type: `custom:${UV_INDEX_CARD_NAME}`,
          };
          this.dispatchEvent(
            new CustomEvent('config-changed', {
              detail: { config: this._config },
              bubbles: true,
              composed: true,
            })
          );
        }}
      ></swissweather-editor-form>`;
  }
}
