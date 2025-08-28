import { LitElement, html, css, TemplateResult } from 'lit';

import { translations } from './translations.js';
import type { TranslationDict } from './translations.d';
import { use, get as _t, registerTranslateConfig } from 'lit-translate';
import { customElement, property, state } from 'lit/decorators.js';
import { fireEvent } from 'custom-card-helpers';
import type {
  HomeAssistant,
  LovelaceCardEditor,
  SwissWeatherCardConfig,
} from './types/home-assistant.js';
import { schema } from './types/home-assistant.js';

console.log('🎨 Loading SwissWeather Card Schema Editor...');

registerTranslateConfig({
  // Loads the language by returning a JSON structure for a given language
  loader: (lang: string) => {
    return (translations as TranslationDict)[lang];
  },
});

@customElement('swissweather-card-editor')
export class SwissWeatherCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public lovelace?: any;
  @state() private _config!: SwissWeatherCardConfig;

  private _schema = schema;

  public setConfig(config: SwissWeatherCardConfig): void {
    this._config = { ...config };
    console.log('🎨 Editor config set:', this._config);
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
        border-bottom: 1px solid var(--divider-color);
      }

      .header-title {
        font-size: 24px;
        font-weight: bold;
        color: #dc143c;
      }

      .header-subtitle {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }

      .section {
        margin-bottom: 32px;
      }

      .section-header {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 16px;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 0;
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

      .form-group {
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 16px;
      }

      .form-group-title {
        font-weight: 600;
        margin-bottom: 16px;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .optional-badge {
        background: var(--primary-color);
        color: var(--text-primary-color);
        font-size: 11px;
        padding: 3px 8px;
        border-radius: 12px;
        text-transform: uppercase;
        font-weight: bold;
        opacity: 0.8;
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

      ha-form {
        display: block;
        margin: 16px 0;
      }

      .info-box {
        background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
        border: 1px solid #2196f3;
        border-radius: 12px;
        padding: 16px;
        margin-bottom: 24px;
      }

      .info-title {
        font-weight: bold;
        color: #1976d2;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .info-text {
        color: #1565c0;
        font-size: 14px;
        line-height: 1.4;
      }

      @media (max-width: 768px) {
        .card-config {
          padding: 12px;
        }

        .form-group {
          padding: 16px;
        }
      }
    `;
  }

  protected render(): TemplateResult {
    if (!this.hass) {
      return html`<div>Loading...</div>`;
    }
    use((this.hass.selectedLanguage || this.hass.language || 'en').substring(0, 2));

    // Split schema into logical groups
    const basicSchema = this._schema.filter(item => ['entity', 'location'].includes(item.name));

    const sensorSchema = this._schema.filter(item =>
      [
        'wind_entity',
        'wind_direction_entity',
        'sunshine_entity',
        'precipitation_entity',
        'warning_entity',
      ].includes(item.name)
    );

    const displaySchema = this._schema.filter(item =>
      [
        'show_forecast',
        'show_temperature',
        'show_precipitation',
        'show_sunshine',
        'show_warnings',
        'compact_mode',
      ].includes(item.name)
    );

    return html`
      <div class="card-config">
        <div class="header">
          <div>
            <div class="header-title">🌦️ SwissWeather Card</div>
            <div class="header-subtitle">
              ${_t('editor_subtitle') || 'SwissWeather Card configuration'}
            </div>
          </div>
        </div>

        <div class="info-box">
          <div class="info-title">💡 ${_t('editor_visual_title') || 'Visual Editor'}</div>
          <div class="info-text">
            ${_t('editor_visual_desc') ||
            'Configure your SwissWeather Card with the options below. All changes are saved automatically.'}
          </div>
        </div>

        <!-- Grundkonfiguration -->
        <div class="section">
          <div class="section-header">
            🌦️ ${_t('editor_section_basic') || 'Basic configuration'}
          </div>
          <div class="section-description">
            ${_t('editor_section_basic_desc') ||
            'Basic settings for the SwissWeather Card. The weather entity is required.'}
          </div>

          <div class="form-group">
            <div class="form-group-title">${_t('editor_group_weather') || 'Weather data'}</div>
            <ha-form
              .hass=${this.hass}
              .data=${this._config}
              .schema=${basicSchema}
              .computeLabel=${this._computeLabel}
              @value-changed=${this._valueChanged}
            ></ha-form>
          </div>
        </div>

        <!-- Zusätzliche Sensoren -->
        <div class="section">
          <div class="section-header">
            📊 ${_t('editor_section_sensors') || 'Additional sensors'}
            <span class="optional-badge">${_t('editor_optional') || 'Optional'}</span>
          </div>
          <div class="section-description">
            ${_t('editor_section_sensors_desc') ||
            'Extended weather data for more detailed display. All fields are optional and improve the display.'}
          </div>

          <div class="form-group">
            <div class="form-group-title">💨 ${_t('editor_group_wind') || 'Wind sensors'}</div>
            <ha-form
              .hass=${this.hass}
              .data=${this._config}
              .schema=${sensorSchema.filter(s => s.name.includes('wind'))}
              .computeLabel=${this._computeLabel}
              @value-changed=${this._valueChanged}
            ></ha-form>
          </div>

          <div class="form-group">
            <div class="form-group-title">
              ☀️ ${_t('editor_group_other') || 'Other weather data'}
            </div>
            <ha-form
              .hass=${this.hass}
              .data=${this._config}
              .schema=${sensorSchema.filter(s => !s.name.includes('wind'))}
              .computeLabel=${this._computeLabel}
              @value-changed=${this._valueChanged}
            ></ha-form>
          </div>
        </div>

        <!-- Anzeigeoptionen -->
        <div class="section">
          <div class="section-header">🎨 ${_t('editor_section_display') || 'Display options'}</div>
          <div class="section-description">
            ${_t('editor_section_display_desc') || 'Customize the card display to your needs.'}
          </div>

          <div class="form-group">
            <div class="form-group-title">${_t('editor_group_display') || 'Display settings'}</div>
            <ha-form
              .hass=${this.hass}
              .data=${this._config}
              .schema=${displaySchema}
              .computeLabel=${this._computeLabel}
              @value-changed=${this._valueChanged}
            ></ha-form>
          </div>
        </div>

        <!-- Live-Vorschau -->
        ${this._config?.entity
          ? html`
              <div class="preview">
                <div class="preview-title">
                  📋 ${_t('editor_preview_title') || 'YAML configuration'}
                </div>
                <div class="preview-config">${this._renderConfigPreview()}</div>
              </div>
            `
          : ''}
      </div>
    `;
  }

  private _computeLabel = (schema: any) => {
    return _t(schema.name) || schema.name;
  };

  private _renderConfigPreview(): string {
    const config: any = { ...this._config };

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
    if (!this._config || !this.hass) {
      return;
    }

    const newConfig = ev.detail.value;

    console.log('🎨 Value changed:', newConfig);

    this._config = { ...newConfig };
    fireEvent(this, 'config-changed', { config: this._config });
  }

  static get properties() {
    return {
      hass: { attribute: false },
      _config: { state: true },
    };
  }
}

console.log('🎨 SwissWeather Card Schema Editor loaded successfully');
