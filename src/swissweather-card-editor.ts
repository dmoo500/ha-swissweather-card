import { LitElement, html, css, TemplateResult } from 'lit';
import { use, get as _t, registerTranslateConfig } from 'lit-translate';
import { customElement, property } from 'lit/decorators.js';
import { fireEvent } from 'custom-card-helpers';
import type {
  HomeAssistant,
  LovelaceCardEditor,
  SwissWeatherCardConfig,
} from './types/home-assistant';
import { schema } from './types/home-assistant';
import { translations } from './translations';

registerTranslateConfig({
  // Loads the language by returning a JSON structure for a given language
  loader: lang => {
    return translations[lang];
  },
});

@customElement('swissweather-card-editor')
export class SwissweatherCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public lovelace?: any;
  @property({ attribute: false }) private _config!: SwissWeatherCardConfig;

  constructor() {
    super();
    console.log('🎨 SwissweatherCardEditor constructor called');
  }

  public setConfig(config: SwissWeatherCardConfig): void {
    // Set entity fields with '' to undefined so the visual editor displays them correctly
    const cleanConfig = { ...config };
    const entityFields = [
      'entity',
      'sun_entity',
      'wind_entity',
      'wind_direction_entity',
      'sunshine_entity',
      'warning_entity',
    ];
    for (const key of entityFields) {
      if (cleanConfig[key as keyof SwissWeatherCardConfig] === '') {
        delete cleanConfig[key as keyof SwissWeatherCardConfig];
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
    // Chart order for the visual editor
    const chartOptions = [
      { key: 'temperature', label: _t('config.chart_temperature') || 'Temperature' },
      { key: 'precipitation', label: _t('config.chart_precipitation') || 'Precipitation' },
      { key: 'sunshine', label: _t('config.chart_sunshine') || 'Sunshine' },
      { key: 'wind', label: _t('config.chart_wind') || 'Wind' },
      { key: 'forecast', label: _t('config.chart_forecast') || 'Forecast' },
    ];
    const chartOrder = Array.isArray(this._config?.chart_order)
      ? this._config.chart_order
      : chartOptions.map(o => o.key);

    if (!this.hass) {
      return html`<div>Loading...</div>`;
    }
    use((this.hass.selectedLanguage || this.hass.language || 'en').substring(0, 2));
    // Prepare data for ha-form
    const data = {
      entity: typeof this._config?.entity === 'string' ? this._config.entity : undefined,
      show_location: this._config?.show_location ?? true,
      location: this._config?.location ?? '',
      sun_entity:
        typeof this._config?.sun_entity === 'string' ? this._config.sun_entity : undefined,
      wind_entity:
        typeof this._config?.wind_entity === 'string' ? this._config.wind_entity : undefined,
      wind_direction_entity:
        typeof this._config?.wind_direction_entity === 'string'
          ? this._config.wind_direction_entity
          : undefined,
      sunshine_entity:
        typeof this._config?.sunshine_entity === 'string'
          ? this._config.sunshine_entity
          : undefined,
      warning_entity:
        typeof this._config?.warning_entity === 'string' ? this._config.warning_entity : undefined,
      show_forecast: this._config?.show_forecast ?? false,
      forecast_hours: this._config?.forecast_hours ?? 6,
      show_temperature: this._config?.show_temperature ?? false,
      show_precipitation: this._config?.show_precipitation ?? false,
      show_sunshine: this._config?.show_sunshine ?? false,
      show_warnings: this._config?.show_warnings ?? false,
      show_wind: this._config?.show_wind ?? true,
      enable_animate_weather_icons: this._config?.enable_animate_weather_icons ?? true,
      compact_mode: this._config?.compact_mode ?? false,
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
            .schema=${[
              schema.find(s => s.name === 'entity'),
              schema.find(s => s.name === 'location'),
              schema.find(s => s.name === 'show_location'),
            ].filter(Boolean)}
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
            .schema=${[
              schema.find(s => s.name === 'warning_entity'),
              schema.find(s => s.name === 'precipitation_entity'),
              schema.find(s => s.name === 'sun_entity'),
              schema.find(s => s.name === 'sunshine_entity'),
              schema.find(s => s.name === 'wind_entity'),
              schema.find(s => s.name === 'wind_direction_entity'),
            ].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>

        <!-- Display options -->
        <div class="group">
          <div class="group-title">${_t('config.group_display') || 'Display Options'}</div>
          <ha-form
            .hass=${this.hass}
            .data=${data}
            .schema=${[
              schema.find(s => s.name === 'forecast_hours'),
              schema.find(s => s.name === 'show_forecast'),
              schema.find(s => s.name === 'show_precipitation'),
              schema.find(s => s.name === 'show_temperature'),
              schema.find(s => s.name === 'show_sunshine'),
              schema.find(s => s.name === 'show_wind'),
              schema.find(s => s.name === 'enable_animate_weather_icons'),
              schema.find(s => s.name === 'show_warnings'),
              schema.find(s => s.name === 'compact_mode'),
            ].filter(Boolean)}
            .computeLabel=${this._computeLabel}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
        <!-- Chart order -->
        <div class="group">
          <div class="group-title">${_t('config.group_chart_order') || 'Chart Order'}</div>
          <ul style="list-style:none;padding:0;margin:0;">
            ${chartOrder.map((key, idx) => {
              const opt = chartOptions.find(o => o.key === key);
              return html` <li style="display:flex;align-items:center;margin-bottom:6px;">
                <span style="flex:1;">${opt?.label || key}</span>
                <button
                  style="margin-left:8px;"
                  @click=${() => this._moveChart(idx, -1)}
                  ?disabled=${idx === 0}
                  title="${_t('config.move_up') || 'Up'}"
                >
                  ⬆️
                </button>
                <button
                  style="margin-left:2px;"
                  @click=${() => this._moveChart(idx, 1)}
                  ?disabled=${idx === chartOrder.length - 1}
                  title="${_t('config.move_down') || 'Down'}"
                >
                  ⬇️
                </button>
              </li>`;
            })}
          </ul>
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

  private _moveChart(idx: number, dir: number) {
    // Move a chart up or down in the order list
    if (!this._config) return;
    const chartOrder = Array.isArray(this._config.chart_order)
      ? [...this._config.chart_order]
      : ['temperature', 'precipitation', 'sunshine', 'wind', 'forecast'];
    const newIdx = idx + dir;
    if (newIdx < 0 || newIdx >= chartOrder.length) return;
    const tmp = chartOrder[idx];
    chartOrder[idx] = chartOrder[newIdx];
    chartOrder[newIdx] = tmp;
    this._config = { ...this._config, chart_order: chartOrder };
    fireEvent(this, 'config-changed', { config: this._config });
    (this as LitElement).requestUpdate();
  }

  private _computeLabel = (schema: any) => {
    const labels: Record<string, string> = {
      entity: _t('config.entity'),
      show_location: _t('config.show_location'),
      sun_entity: _t('config.sun_entity'),
      location: _t('config.location'),
      wind_entity: _t('config.wind_entity'),
      wind_direction_entity: _t('config.wind_direction_entity'),
      sunshine_entity: _t('config.sunshine_entity'),
      warning_entity: _t('config.warning_entity'),
      show_forecast: _t('config.show_forecast'),
      forecast_hours: _t('config.forecast_hours'),
      show_temperature: _t('config.show_temperature'),
      show_precipitation: _t('config.show_precipitation'),
      show_sunshine: _t('config.show_sunshine'),
      show_warnings: _t('config.show_warnings'),
      show_wind: _t('config.show_wind'),
      enable_animate_weather_icons: _t('config.enable_animate_weather_icons'),
      compact_mode: _t('config.compact_mode'),
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
      config.type = 'custom:swissweather-card';
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
        type: 'custom:swissweather-card',
        entity: '',
        location: 'Schweiz',
        show_forecast: true,
        show_temperature: true,
        show_precipitation: true,
        show_sunshine: true,
        show_warnings: true,
        show_wind: true,
        forecast_hours: 6,
        enable_animate_weather_icons: true,
        show_location: true,
        sun_entity: 'sun.sun',
        compact_mode: false,
      };
    }

    // Handle ha-form events
    if (ev.type === 'value-changed') {
      // Preserve chart_order and other fields not present in the form
      const keepConfig: Partial<SwissWeatherCardConfig> = {};
      if (this._config && this._config.chart_order !== undefined) {
        keepConfig.chart_order = this._config.chart_order;
      }
      const { ...rest } = ev.detail.value || {};
      const newConfig: SwissWeatherCardConfig = {
        ...this._config,
        ...rest,
        ...keepConfig,
        type: 'custom:swissweather-card',
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
