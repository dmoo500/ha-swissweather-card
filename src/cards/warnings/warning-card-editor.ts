import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { use, get as _t, registerTranslateConfig } from 'lit-translate';
import { fireEvent } from 'custom-card-helpers';
import type { HomeAssistant, LovelaceCardEditor } from '../../types/home-assistant';
import { translations } from '../../translations';
import {
  WARNING_CARD_NAME,
  WARNING_CARD_EDITOR_NAME,
  warningSchema,
  type WarningCardConfig,
} from './const';

registerTranslateConfig({ loader: lang => translations[lang] });

@customElement(WARNING_CARD_EDITOR_NAME)
export class WarningCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) private _config!: WarningCardConfig;

  public setConfig(config: WarningCardConfig): void {
    this._config = { ...config };
    (this as LitElement).requestUpdate();
  }

  static get styles() {
    return css`
      .card-config {
        padding: 16px;
      }
      .header {
        margin-bottom: 16px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--card-divider-color);
      }
      .header-title {
        font-size: 20px;
        font-weight: bold;
        color: var(--primary-text-color, #dc143c);
      }
      .section-label {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--secondary-text-color);
        margin: 16px 0 4px;
      }
      ha-form {
        display: block;
      }
    `;
  }

  protected render(): TemplateResult {
    if (!this.hass) return html`<div>Loading...</div>`;
    use((this.hass.selectedLanguage || this.hass.language || 'en').substring(0, 2));

    const data: Partial<WarningCardConfig> = {
      primary_warning_entity: this._config?.primary_warning_entity,
      secondary_warning_entity: this._config?.secondary_warning_entity,
      tertiary_warning_entity: this._config?.tertiary_warning_entity,
      warning_entity: this._config?.warning_entity,
    };

    return html`
      <div class="card-config">
        <div class="header">
          <div class="header-title">⚠️ SwissWeather Warning Card</div>
        </div>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${warningSchema}
          .computeLabel=${(s: any) =>
            (
              ({
                primary_warning_entity: _t('warning.config.primary_warning_entity'),
                secondary_warning_entity: _t('warning.config.secondary_warning_entity'),
                tertiary_warning_entity: _t('warning.config.tertiary_warning_entity'),
                warning_entity: _t('warning.config.warning_entity'),
              }) as Record<string, string>
            )[s.name] ?? s.name}
          .computeHelper=${(s: any) =>
            (
              ({
                primary_warning_entity: _t('warning.config.descr.primary_warning_entity'),
                secondary_warning_entity: _t('warning.config.descr.secondary_warning_entity'),
                tertiary_warning_entity: _t('warning.config.descr.tertiary_warning_entity'),
                warning_entity: _t('warning.config.descr.warning_entity'),
              }) as Record<string, string>
            )[s.name] ?? ''}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `;
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config) this._config = { type: `custom:${WARNING_CARD_NAME}`, entity: '' } as any;
    const newConfig = { ...this._config, ...ev.detail.value };
    fireEvent(this, 'config-changed', { config: newConfig });
  }
}
