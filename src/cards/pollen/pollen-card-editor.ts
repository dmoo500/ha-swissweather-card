import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { use, get as _t, registerTranslateConfig } from 'lit-translate';
import { fireEvent } from 'custom-card-helpers';
import type { HomeAssistant, LovelaceCardEditor } from '../../types/home-assistant';
import { translations } from '../../translations';
import {
  POLLEN_CARD_NAME,
  POLLEN_CARD_EDITOR_NAME,
  POLLEN_TYPES,
  type PollenCardConfig,
  type PollenType,
} from './const';

registerTranslateConfig({ loader: lang => translations[lang] });

@customElement(POLLEN_CARD_EDITOR_NAME)
export class PollenCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) private _config!: PollenCardConfig;

  public setConfig(config: PollenCardConfig): void {
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
        color: var(--primary-text-color);
      }
      .pollen-type-block {
        margin-bottom: 12px;
        border: 1px solid var(--card-divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 10px;
        overflow: hidden;
      }
      .pollen-type-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 14px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        user-select: none;
      }
      .pollen-type-toggle {
        background: none;
        border: none;
        padding: 0;
        flex: 1;
        text-align: left;
        cursor: pointer;
        color: inherit;
        font: inherit;
      }
      .pollen-type-name {
        font-size: 14px;
        font-weight: 600;
      }
      .pollen-type-fields {
        padding: 8px 14px 4px;
      }
      .field-label {
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.4px;
        color: var(--secondary-text-color);
        margin: 8px 0 2px;
      }
      ha-form {
        display: block;
      }
    `;
  }

  protected render(): TemplateResult {
    if (!this.hass) return html`<div>Loading...</div>`;
    use((this.hass.selectedLanguage || this.hass.language || 'en').substring(0, 2));

    return html`
      <div class="card-config">
        <div class="header">
          <div class="header-title">🌿 SwissWeather Pollen Card</div>
        </div>
        ${POLLEN_TYPES.map(type => this._renderTypeBlock(type))}
      </div>
    `;
  }

  private _renderTypeBlock(type: PollenType): TemplateResult {
    const enabled = this._config?.[`${type}_enabled` as keyof PollenCardConfig] !== false;
    const levelKey = `${type}_entity`;
    const rawKey = `${type}_raw_entity`;
    const levelValue =
      (this._config?.[levelKey as keyof PollenCardConfig] as string | undefined) ?? undefined;
    const rawValue =
      (this._config?.[rawKey as keyof PollenCardConfig] as string | undefined) ?? undefined;

    return html`
      <div class="pollen-type-block">
        <div class="pollen-type-header">
          <button class="pollen-type-toggle" @click=${() => this._toggleType(type, !enabled)}>
            <span class="pollen-type-name">${_t(`pollen.types.${type}`)}</span>
          </button>
          <ha-switch
            .checked=${enabled}
            @change=${(e: Event) => this._toggleType(type, (e.target as HTMLInputElement).checked)}
          ></ha-switch>
        </div>
        ${enabled
          ? html`
              <div class="pollen-type-fields">
                <div class="field-label">${_t('pollen.config.level_sensor')}</div>
                <ha-form
                  .hass=${this.hass}
                  .data=${{ [levelKey]: levelValue }}
                  .schema=${[
                    { name: levelKey, required: false, selector: { entity: { domain: 'sensor' } } },
                  ]}
                  .computeLabel=${() => _t('pollen.config.level_sensor')}
                  .computeHelper=${() => _t('pollen.config.level_sensor_hint')}
                  @value-changed=${this._valueChanged}
                ></ha-form>
                <div class="field-label">${_t('pollen.config.raw_sensor')}</div>
                <ha-form
                  .hass=${this.hass}
                  .data=${{ [rawKey]: rawValue }}
                  .schema=${[
                    { name: rawKey, required: false, selector: { entity: { domain: 'sensor' } } },
                  ]}
                  .computeLabel=${() => _t('pollen.config.raw_sensor')}
                  .computeHelper=${() => _t('pollen.config.raw_sensor_hint')}
                  @value-changed=${this._valueChanged}
                ></ha-form>
              </div>
            `
          : ''}
      </div>
    `;
  }

  private _toggleType(type: PollenType, enabled: boolean): void {
    const newConfig = { ...this._config, [`${type}_enabled`]: enabled };
    this._config = newConfig;
    fireEvent(this, 'config-changed', { config: newConfig });
    this.requestUpdate();
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config) this._config = { type: `custom:${POLLEN_CARD_NAME}` } as any;
    const newConfig = { ...this._config, ...ev.detail.value };
    this._config = newConfig;
    fireEvent(this, 'config-changed', { config: newConfig });
  }
}
