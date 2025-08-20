import { LitElement, html, css, TemplateResult } from 'lit';
import { use, get as _t, registerTranslateConfig } from 'lit-translate';
import { customElement, property, state } from 'lit/decorators.js';
import { fireEvent } from 'custom-card-helpers';
import type { HomeAssistant, LovelaceCardEditor } from './types/home-assistant.js';
import { translations } from './translations.js';

// Extend the config for the editor
interface SwissWeatherCardEditorConfig extends Record<string, any> {
  type?: string;
  entity?: string;
  location?: string;
  wind_entity?: string;
  wind_direction_entity?: string;
  sunshine_entity?: string;
  precipitation_entity?: string;
  warning_entity?: string;
  show_forecast?: boolean;
  show_precipitation?: boolean;
  show_warnings?: boolean;
  compact_mode?: boolean;
}

registerTranslateConfig({
  // Loads the language by returning a JSON structure for a given language
  loader: lang => {
    return translations[lang];
  },
});

@customElement('swissweather-card-editor')
export class SwissWeatherCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public lovelace?: any;
  @state() private _config!: SwissWeatherCardEditorConfig;
  @state() private _toggle?: boolean;

  constructor() {
    super();
    console.log('🎨 SwissWeatherCardEditor constructor called');
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('🎨 SwissWeatherCardEditor connected to DOM');
    console.log('🎨 HASS available:', !!this.hass);
  }

  public setConfig(config: SwissWeatherCardEditorConfig): void {
    console.log('🎨 Editor setConfig called with:', config);
    this._config = {
      type: 'custom:swissweather-card',
      entity: '',
      location: 'Schweiz',
      show_forecast: true,
      show_precipitation: true,
      show_warnings: true,
      compact_mode: false,
      ...config,
    };
  }

  static get styles() {
    return css`
      .card-config {
        padding: 16px;
      }

      .section {
        margin-bottom: 24px;
      }

      .section-header {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--divider-color);
      }

      .section-description {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-bottom: 20px;
        line-height: 1.5;
        background: var(--card-background-color);
        padding: 12px 16px;
        border-radius: 8px;
        border-left: 4px solid #dc143c;
      }

      ha-form {
        display: block;
        margin-bottom: 24px;
      }

      .warning {
        background: var(--warning-color);
        color: var(--text-primary-color);
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
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
    use((this.hass.selectedLanguage || this.hass.language || 'en').substring(0, 2));
    if (!this.hass) {
      return html`
        <div class="card-config">
          <div class="warning">⚠️ Warten auf Home Assistant Verbindung...</div>
        </div>
      `;
    }

    if (!this._config) {
      return html`
        <div class="card-config">
          <div class="warning">⚠️ Konfiguration wird geladen...</div>
        </div>
      `;
    }

    const schema = [
      {
        name: 'entity',
        required: true,
        selector: {
          entity: {
            domain: 'weather',
          },
        },
      },
      {
        name: 'location',
        selector: {
          text: {},
        },
      },
      {
        name: 'wind_entity',
        selector: {
          entity: {
            domain: 'sensor',
          },
        },
      },
      {
        name: 'wind_direction_entity',
        selector: {
          entity: {
            domain: 'sensor',
          },
        },
      },
      {
        name: 'sunshine_entity',
        selector: {
          entity: {
            domain: 'sensor',
          },
        },
      },
      {
        name: 'precipitation_entity',
        selector: {
          entity: {
            domain: 'sensor',
          },
        },
      },
      {
        name: 'warning_entity',
        selector: {
          entity: {
            domain: 'sensor',
          },
        },
      },
      {
        name: 'show_forecast',
        selector: {
          boolean: {},
        },
      },
      {
        name: 'show_precipitation',
        selector: {
          boolean: {},
        },
      },
      {
        name: 'show_warnings',
        selector: {
          boolean: {},
        },
      },
      {
        name: 'compact_mode',
        selector: {
          boolean: {},
        },
      },
    ];

    const data = {
      entity: this._config.entity || '',
      location: this._config.location || '',
      wind_entity: this._config.wind_entity || '',
      wind_direction_entity: this._config.wind_direction_entity || '',
      sunshine_entity: this._config.sunshine_entity || '',
      precipitation_entity: this._config.precipitation_entity || '',
      warning_entity: this._config.warning_entity || '',
      show_forecast: this._config.show_forecast !== false,
      show_precipitation: this._config.show_precipitation !== false,
      show_warnings: this._config.show_warnings !== false,
      compact_mode: this._config.compact_mode === true,
    };

    return html`
      <div class="card-config">
        <!-- Header -->
        <div class="section">
          <div class="section-header">🌦️ SwissWeather Card Konfiguration</div>
          <div class="section-description">
            Konfigurieren Sie Ihre SwissWeather Card mit den untenstehenden Optionen. Alle
            Änderungen werden automatisch gespeichert.
          </div>
        </div>

        <!-- HA Form -->
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${schema}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._valueChanged}
        ></ha-form>

        <!-- Configuration Preview -->
        ${this._config.entity
          ? html`
              <div class="preview">
                <div class="preview-title">📋 YAML-Konfiguration</div>
                <div class="preview-config">${this._renderConfigPreview()}</div>
              </div>
            `
          : html`
              <div class="warning">
                ⚠️ Bitte wählen Sie eine Wetter-Entity aus, um die Konfiguration zu
                vervollständigen.
              </div>
            `}
      </div>
    `;
  }

  private _renderConfigPreview(): string {
    const config: any = {
      type: 'custom:swissweather-card',
      ...this._config,
    };

    // Remove undefined and empty values for cleaner preview
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

  private _computeLabel = (schema: any) => {
    const labels: Record<string, string> = {
      entity: _t('config.entity'),
      location: _t('config.location'),
      wind_entity: _t('config.wind_entity'),
      wind_direction_entity: _t('config.wind_direction_entity'),
      sunshine_entity: _t('config.sunshine_entity'),
      precipitation_entity: _t('config.precipitation_entity'),
      warning_entity: _t('config.warning_entity'),
      show_forecast: _t('config.show_forecast'),
      show_precipitation: _t('config.show_precipitation'),
      show_warnings: _t('config.show_warnings'),
      compact_mode: _t('config.compact_mode'),
    };
    return labels[schema.name] || schema.name;
  };

  private _valueChanged(ev: any): void {
    if (!this._config || !this.hass) {
      return;
    }

    const newConfig = {
      type: 'custom:swissweather-card',
      ...ev.detail.value,
    };

    // Remove empty values
    Object.keys(newConfig).forEach(key => {
      if ((newConfig as any)[key] === '' || (newConfig as any)[key] === undefined) {
        delete (newConfig as any)[key];
      }
    });

    this._config = newConfig;
    fireEvent(this, 'config-changed', { config: this._config });
  }

  static get properties() {
    return {
      hass: {},
      _config: {},
      _toggle: {},
    };
  }
}
