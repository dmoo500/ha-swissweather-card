import { LitElement, html, css, TemplateResult } from 'lit';
import { use, get as _t, registerTranslateConfig } from 'lit-translate';
import { customElement, property } from 'lit/decorators.js';
import { fireEvent } from 'custom-card-helpers';
import type { HomeAssistant, LovelaceCardEditor } from '../../types/home-assistant';
import { translations } from '../../translations';
import {
  FORECAST_DIAGRAM_CARD_NAME,
  FORECAST_DIAGRAM_CARD_EDITOR_NAME,
  type CardConfig,
  schema,
} from './const';

registerTranslateConfig({
  // Loads the language by returning a JSON structure for a given language
  loader: lang => {
    return translations[lang];
  },
});

@customElement(FORECAST_DIAGRAM_CARD_EDITOR_NAME)
export class ForecastDiagramCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public lovelace?: any;
  @property({ attribute: false }) private _config!: CardConfig;

  constructor() {
    super();
    console.log('🎨 SwissweatherCardEditor (Forecast Diagram) constructor called');
  }

  public setConfig(config: CardConfig): void {
    // Set entity fields with '' to undefined so the visual editor displays them correctly
    const cleanConfig = { ...config };
    const entityFields = ['entity', 'sun_entity'];
    for (const key of entityFields) {
      if (cleanConfig[key as keyof CardConfig] === '') {
        delete cleanConfig[key as keyof CardConfig];
      }
    }
    this._config = cleanConfig;
    (this as LitElement).requestUpdate(); // Force re-render
  }

  static get styles() {
    return css`
      .card-config {
        padding: 16px;
      }

      .header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 24px;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--card-divider-color);
      }

      .header-title {
        font-size: 24px;
        font-weight: bold;
        color: var(--primary-text-color, #dc143c);
      }

      .header-subtitle {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }

      ha-form {
        display: block;
        margin-bottom: 24px;
      }

      .preview {
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        padding: 20px;
        margin-top: 24px;
      }

      .preview-title {
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .preview-config {
        font-family: 'SFMono-Regular', 'Monaco', 'Consolas', monospace;
        font-size: 13px;
        color: var(--secondary-text-color);
        background: var(--code-editor-background-color, #f8f8f8);
        padding: 16px;
        border-radius: 8px;
        overflow-x: auto;
        white-space: pre-wrap;
        line-height: 1.4;
        border: 1px solid var(--divider-color);
      }
      .group {
        margin-bottom: 24px;
        padding: 16px 0 0 0;
        border-top: 1px solid var(--divider-color, #e0e0e0);
      }
      .group-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color, #dc143c);
        margin-bottom: 8px;
        margin-top: 0;
      }
      .card-config {
        padding: 16px;
      }
      .header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 24px;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--card-divider-color);
      }
      .header-title {
        font-size: 24px;
        font-weight: bold;
        color: var(--primary-text-color, #dc143c);
      }
      .header-subtitle {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }
      ha-form {
        display: block;
        margin-bottom: 24px;
      }
      .preview {
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        padding: 20px;
        margin-top: 24px;
      }
      .preview-title {
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .preview-config {
        font-family: 'SFMono-Regular', 'Monaco', 'Consolas', monospace;
        font-size: 13px;
        color: var(--secondary-text-color);
        background: var(--code-editor-background-color, #f8f8f8);
        padding: 16px;
        border-radius: 8px;
        overflow-x: auto;
        white-space: pre-wrap;
        line-height: 1.4;
        border: 1px solid var(--divider-color);
      }

      @media (max-width: 768px) {
        .card-config {
          padding: 12px;
        }
      }
    `;
  }

  protected render(): TemplateResult {
    if (!this.hass) {
      return html`<div>Loading...</div>`;
    }
    use((this.hass.selectedLanguage || this.hass.language || 'en').substring(0, 2));
    // Prepare data for ha-form
    const data = {
      entity: typeof this._config?.entity === 'string' ? this._config.entity : undefined,
      sun_entity:
        typeof this._config?.sun_entity === 'string' ? this._config.sun_entity : undefined,
    };

    return html`
      <div class="card-config">
        <div class="header">
          <div>
            <div class="header-title">🌦️ SwissWeather Card</div>
          </div>
        </div>

        <!-- General -->
        <div class="group">
          <div class="group-title">${_t('config.group_general') || 'General'}</div>
          <ha-form
            .hass=${this.hass}
            .data=${data}
            .schema=${[schema.find(s => s.name === 'entity')].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Sensors -->
        <div class="group">
          <div class="group-title">${_t('config.group_sensors') || 'Sensors'}</div>
          <ha-form
            .hass=${this.hass}
            .data=${data}
            .schema=${[schema.find(s => s.name === 'sun_entity')].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Configuration Preview -->
        ${this._config?.entity
          ? html`
              <div class="preview">
                <div class="preview-title">📋 YAML-Config</div>
                <div class="preview-config">${this._renderConfigPreview()}</div>
              </div>
            `
          : ''}
      </div>
    `;
  }

  private _computeLabel = (schema: any) => {
    const labels: Record<string, string> = {
      entity: _t('config.entity'),
      sun_entity: _t('config.sun_entity'),
    };
    return labels[schema.name] || schema.name;
  };

  private _computeHelper = (schema: any) => {
    if (schema.description) {
      return _t(schema.description);
    }
    return '';
  };

  private _renderConfigPreview(): string {
    const config: any = { ...this._config };
    if (!config.type) {
      config.type = 'custom:' + FORECAST_DIAGRAM_CARD_NAME;
    }

    // Remove undefined values for cleaner preview
    Object.keys(config).forEach(key => {
      if (config[key] === undefined || config[key] === '') {
        delete config[key];
      }
    });

    return Object.entries(config)
      .map(([key, value]) => {
        if (typeof value === 'string') {
          return `${key}: "${value}"`;
        }
        return `${key}: ${value}`;
      })
      .join('\n');
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config) {
      this._config = {
        type: `custom:${FORECAST_DIAGRAM_CARD_NAME}`,
        entity: '',
        sun_entity: '',
      };
    }

    // Handle ha-form events
    if (ev.type === 'value-changed') {
      // Preserve chart_order and other fields not present in the form
      const keepConfig: Partial<CardConfig> = {};
      const { ...rest } = ev.detail.value || {};
      const newConfig: CardConfig = {
        ...this._config,
        ...rest,
        ...keepConfig,
        type: 'custom:' + FORECAST_DIAGRAM_CARD_NAME,
      };

      // Remove empty values for a cleaner config
      Object.keys(newConfig).forEach(key => {
        if ((newConfig as any)[key] === '' || (newConfig as any)[key] === undefined) {
          delete (newConfig as any)[key];
        }
      });

      this._config = newConfig;
      fireEvent(this, 'config-changed', { config: this._config });
    }
  }
}
