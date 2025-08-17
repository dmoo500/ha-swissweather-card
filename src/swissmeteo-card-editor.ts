import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { fireEvent } from 'custom-card-helpers';
import type {
  HomeAssistant,
  LovelaceCardEditor,
  LovelaceCardConfig,
  SwissMeteoCardConfig,
} from './types/home-assistant.js';

// Extend the config for editor
interface SwissMeteoCardEditorConfig extends Record<string, any> {
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

@customElement('swissmeteo-card-editor')
export class SwissMeteoCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public lovelace?: any;
  @state() private _config!: SwissMeteoCardEditorConfig;
  @state() private _toggle?: boolean;

  public setConfig(config: SwissMeteoCardEditorConfig): void {
    this._config = { ...config };
  }

  get _entity(): string {
    return this._config?.entity || '';
  }

  get _location(): string {
    return this._config?.location || '';
  }

  get _wind_entity(): string {
    return this._config?.wind_entity || '';
  }

  get _wind_direction_entity(): string {
    return this._config?.wind_direction_entity || '';
  }

  get _sunshine_entity(): string {
    return this._config?.sunshine_entity || '';
  }

  get _precipitation_entity(): string {
    return this._config?.precipitation_entity || '';
  }

  get _warning_entity(): string {
    return this._config?.warning_entity || '';
  }

  get _show_forecast(): boolean {
    return this._config?.show_forecast !== false;
  }

  get _show_precipitation(): boolean {
    return this._config?.show_precipitation !== false;
  }

  get _show_warnings(): boolean {
    return this._config?.show_warnings !== false;
  }

  get _compact_mode(): boolean {
    return this._config?.compact_mode === true;
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
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 12px;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .section-description {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-bottom: 16px;
        line-height: 1.4;
      }

      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
        min-height: 40px;
      }

      .option-label {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .option-name {
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .option-description {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }

      ha-entity-picker,
      ha-textfield {
        width: 100%;
        margin-bottom: 8px;
      }

      ha-switch {
        margin-left: 8px;
      }

      .required {
        color: var(--error-color);
      }

      .preview {
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 16px;
        margin-top: 16px;
      }

      .preview-title {
        font-weight: 500;
        margin-bottom: 8px;
        color: var(--primary-text-color);
      }

      .preview-config {
        font-family: monospace;
        font-size: 12px;
        color: var(--secondary-text-color);
        background: var(--code-editor-background-color, #f8f8f8);
        padding: 12px;
        border-radius: 4px;
        overflow-x: auto;
        white-space: pre-wrap;
      }

      .entity-group {
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
      }

      .entity-group-title {
        font-weight: 500;
        margin-bottom: 12px;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .optional-badge {
        background: var(--info-color);
        color: white;
        font-size: 10px;
        padding: 2px 6px;
        border-radius: 4px;
        text-transform: uppercase;
        font-weight: bold;
      }

      .warning {
        background: var(--warning-color);
        color: var(--text-primary-color);
        padding: 12px;
        border-radius: 4px;
        margin-bottom: 16px;
        font-size: 14px;
      }
    `;
  }

  protected render(): TemplateResult {
    if (!this.hass) {
      return html``;
    }

    return html`
      <div class="card-config">
        <!-- Main Configuration -->
        <div class="section">
          <div class="section-header">
            🌦️ Grundkonfiguration
          </div>
          <div class="section-description">
            Basis-Einstellungen für die SwissMeteo Card. Die Wetter-Entity ist erforderlich.
          </div>

          <div class="option">
            <div class="option-label">
              <div class="option-name">Wetter Entity <span class="required">*</span></div>
              <div class="option-description">Home Assistant Wetter-Integration (z.B. OpenWeatherMap)</div>
            </div>
          </div>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._entity}
            .configValue=${'entity'}
            .includeDomains=${['weather']}
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>

          <div class="option">
            <div class="option-label">
              <div class="option-name">Standort</div>
              <div class="option-description">Angezeigter Ortsname (optional)</div>
            </div>
          </div>
          <ha-textfield
            .value=${this._location}
            .configValue=${'location'}
            @input=${this._valueChanged}
            placeholder="z.B. Zürich"
          ></ha-textfield>
        </div>

        <!-- Additional Sensors -->
        <div class="section">
          <div class="section-header">
            📊 Zusätzliche Sensoren
            <span class="optional-badge">Optional</span>
          </div>
          <div class="section-description">
            Erweiterte Wetterdaten für detailliertere Anzeigen. Alle Felder sind optional.
          </div>

          <div class="entity-group">
            <div class="entity-group-title">💨 Wind</div>
            
            <div class="option">
              <div class="option-label">
                <div class="option-name">Windgeschwindigkeit</div>
                <div class="option-description">Sensor für Windgeschwindigkeit in km/h</div>
              </div>
            </div>
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._wind_entity}
              .configValue=${'wind_entity'}
              .includeDomains=${['sensor']}
              @value-changed=${this._valueChanged}
              allow-custom-entity
            ></ha-entity-picker>

            <div class="option">
              <div class="option-label">
                <div class="option-name">Windrichtung</div>
                <div class="option-description">Sensor für Windrichtung in Grad (0-360)</div>
              </div>
            </div>
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._wind_direction_entity}
              .configValue=${'wind_direction_entity'}
              .includeDomains=${['sensor']}
              @value-changed=${this._valueChanged}
              allow-custom-entity
            ></ha-entity-picker>
          </div>

          <div class="entity-group">
            <div class="entity-group-title">☀️ Weitere Wetterdaten</div>
            
            <div class="option">
              <div class="option-label">
                <div class="option-name">Sonnenscheindauer</div>
                <div class="option-description">Sensor für Sonnenscheindauer in Stunden</div>
              </div>
            </div>
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._sunshine_entity}
              .configValue=${'sunshine_entity'}
              .includeDomains=${['sensor']}
              @value-changed=${this._valueChanged}
              allow-custom-entity
            ></ha-entity-picker>

            <div class="option">
              <div class="option-label">
                <div class="option-name">Niederschlagsprognose</div>
                <div class="option-description">Sensor für Niederschlagsdaten</div>
              </div>
            </div>
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._precipitation_entity}
              .configValue=${'precipitation_entity'}
              .includeDomains=${['sensor']}
              @value-changed=${this._valueChanged}
              allow-custom-entity
            ></ha-entity-picker>

            <div class="option">
              <div class="option-label">
                <div class="option-name">Wetterwarnungen</div>
                <div class="option-description">Sensor für Schweizer Wetterwarnungen</div>
              </div>
            </div>
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._warning_entity}
              .configValue=${'warning_entity'}
              .includeDomains=${['sensor']}
              @value-changed=${this._valueChanged}
              allow-custom-entity
            ></ha-entity-picker>
          </div>
        </div>

        <!-- Display Options -->
        <div class="section">
          <div class="section-header">
            🎨 Anzeigeoptionen
          </div>
          <div class="section-description">
            Passen Sie die Anzeige der Card an Ihre Bedürfnisse an.
          </div>

          <div class="option">
            <div class="option-label">
              <div class="option-name">Wettervorhersage anzeigen</div>
              <div class="option-description">7-Tage-Prognose anzeigen</div>
            </div>
            <ha-switch
              .checked=${this._show_forecast}
              .configValue=${'show_forecast'}
              @change=${this._valueChanged}
            ></ha-switch>
          </div>

          <div class="option">
            <div class="option-label">
              <div class="option-name">Niederschlagsdiagramm anzeigen</div>
              <div class="option-description">Stündliche Niederschlagsprognose</div>
            </div>
            <ha-switch
              .checked=${this._show_precipitation}
              .configValue=${'show_precipitation'}
              @change=${this._valueChanged}
            ></ha-switch>
          </div>

          <div class="option">
            <div class="option-label">
              <div class="option-name">Wetterwarnungen anzeigen</div>
              <div class="option-description">Schweizer Wetterwarnungen hervorheben</div>
            </div>
            <ha-switch
              .checked=${this._show_warnings}
              .configValue=${'show_warnings'}
              @change=${this._valueChanged}
            ></ha-switch>
          </div>

          <div class="option">
            <div class="option-label">
              <div class="option-name">Kompakter Modus</div>
              <div class="option-description">Kleinere Card für begrenzte Bildschirmgrößen</div>
            </div>
            <ha-switch
              .checked=${this._compact_mode}
              .configValue=${'compact_mode'}
              @change=${this._valueChanged}
            ></ha-switch>
          </div>
        </div>

        <!-- Configuration Preview -->
        ${this._entity ? html`
          <div class="preview">
            <div class="preview-title">📋 YAML-Konfiguration</div>
            <div class="preview-config">${this._renderConfigPreview()}</div>
          </div>
        ` : html`
          <div class="warning">
            ⚠️ Bitte wählen Sie eine Wetter-Entity aus, um die Konfiguration zu vervollständigen.
          </div>
        `}
      </div>
    `;
  }

  private _renderConfigPreview(): string {
    const config: any = {
      type: 'custom:swissmeteo-card',
      entity: this._entity,
    };

    if (this._location) config.location = this._location;
    if (this._wind_entity) config.wind_entity = this._wind_entity;
    if (this._wind_direction_entity) config.wind_direction_entity = this._wind_direction_entity;
    if (this._sunshine_entity) config.sunshine_entity = this._sunshine_entity;
    if (this._precipitation_entity) config.precipitation_entity = this._precipitation_entity;
    if (this._warning_entity) config.warning_entity = this._warning_entity;
    if (!this._show_forecast) config.show_forecast = false;
    if (!this._show_precipitation) config.show_precipitation = false;
    if (!this._show_warnings) config.show_warnings = false;
    if (this._compact_mode) config.compact_mode = true;

    return Object.entries(config)
      .map(([key, value]) => {
        if (typeof value === 'string') {
          return `${key}: "${value}"`;
        }
        return `${key}: ${value}`;
      })
      .join('\n');
  }

  private _valueChanged(ev: any): void {
    if (!this._config || !this.hass) {
      return;
    }

    const target = ev.target;
    const configValue = target.configValue;
    let value: any;

    if (target.type === 'checkbox') {
      value = target.checked;
    } else {
      value = target.value;
      if (value === '') {
        value = undefined;
      }
    }

    if (this._config[configValue] === value) {
      return;
    }

    const newConfig = {
      ...this._config,
      [configValue]: value,
    };

    // Remove undefined values
    Object.keys(newConfig).forEach(key => {
      if ((newConfig as any)[key] === undefined) {
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
