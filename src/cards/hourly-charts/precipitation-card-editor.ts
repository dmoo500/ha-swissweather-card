import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { use, get as _t, registerTranslateConfig } from 'lit-translate';
import { fireEvent } from 'custom-card-helpers';
import type { HomeAssistant, LovelaceCardEditor } from '../../types/home-assistant';
import { translations } from '../../translations';
import {
  PRECIPITATION_CARD_NAME,
  PRECIPITATION_CARD_EDITOR_NAME,
  baseSchema,
  type HourlyChartCardConfig,
} from './const';

registerTranslateConfig({ loader: lang => translations[lang] });

@customElement(PRECIPITATION_CARD_EDITOR_NAME)
export class PrecipitationCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) private _config!: HourlyChartCardConfig;

  public setConfig(config: HourlyChartCardConfig): void {
    const clean = { ...config };
    if (clean.entity === '') delete (clean as any).entity;
    this._config = clean;
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
      ha-form {
        display: block;
      }
    `;
  }

  protected render(): TemplateResult {
    if (!this.hass) return html`<div>Loading...</div>`;
    use((this.hass.selectedLanguage || this.hass.language || 'en').substring(0, 2));

    const data = {
      entity: typeof this._config?.entity === 'string' ? this._config.entity : undefined,
      forecast_hours: this._config?.forecast_hours ?? 12,
    };

    return html`
      <div class="card-config">
        <div class="header">
          <div class="header-title">🌧️ SwissWeather Precipitation Card</div>
        </div>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${baseSchema}
          .computeLabel=${(s: any) =>
            (
              ({
                entity: _t('hourly_charts.config.entity'),
                forecast_hours: _t('hourly_charts.config.forecast_hours') ?? 'Forecast hours',
              }) as Record<string, string>
            )[s.name] ?? s.name}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `;
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config) this._config = { type: `custom:${PRECIPITATION_CARD_NAME}`, entity: '' };
    const newConfig = { ...this._config, ...ev.detail.value };
    fireEvent(this, 'config-changed', { config: newConfig });
  }
}
