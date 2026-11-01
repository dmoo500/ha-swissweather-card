import { LitElement, html, css, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { use, get as _t, registerTranslateConfig } from 'lit-translate';
import type { HomeAssistant } from '../../types/home-assistant';
import { getTranslations } from '../../translations';
import type { UVReadingType } from './const';
import { parseUVIndex, uvLevel, uvStatus, UV_LEVELS } from './uv-data';

registerTranslateConfig({ loader: lang => getTranslations(lang) });

@customElement('swissweather-uv-index')
export class UVIndex extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property() entity?: string;
  @property() maxEntity?: string;
  @property() readingType: UVReadingType = 'current';
  private _loadedLang?: string;

  static styles = css`
    :host {
      display: block;
      color: var(--primary-text-color, #222);
    }
    h3 {
      margin: 0 0 12px;
      font-size: 16px;
    }
    .readings {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    .reading {
      flex: 1 1 140px;
      min-width: 0;
      padding: 12px;
      border-radius: 12px;
      background: var(--secondary-background-color, #f5f5f5);
    }
    .label,
    time,
    .status {
      color: var(--secondary-text-color, #666);
      font-size: 12px;
      overflow-wrap: anywhere;
    }
    .value {
      font-size: 32px;
      font-weight: 600;
      margin: 4px 0;
      overflow-wrap: anywhere;
    }
    .level {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
    }
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      flex: none;
    }
    time {
      display: block;
      margin-top: 8px;
    }
    .scale {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 4px;
      margin-top: 16px;
    }
    .band {
      height: 8px;
      border-radius: 4px;
    }
    .range {
      text-align: center;
      font-size: 12px;
      padding: 4px 0;
    }
    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 6px 12px;
      margin-top: 6px;
      font-size: 12px;
    }
    .legend span {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .source {
      display: inline-block;
      margin-top: 12px;
      font-size: 12px;
      color: var(--primary-color, #03a9f4);
    }
  `;

  private _reading(entityId: string | undefined, type: UVReadingType): TemplateResult {
    const entity = entityId ? this.hass?.states[entityId] : undefined;
    const status = uvStatus(entity);
    const value = parseUVIndex(entity?.state);
    const lang = this.hass?.selectedLanguage || this.hass?.language || 'en';
    const updated = entity?.last_updated ? new Date(entity.last_updated) : undefined;
    const level = value === undefined ? undefined : uvLevel(value);
    return html`<div class="reading">
      <div class="label">${_t(`uv.${type}`)}</div>
      ${
        level && value !== undefined
          ? html`
              <div class="value">
                ${new Intl.NumberFormat(lang, { maximumFractionDigits: 20 }).format(value)}
              </div>
              <div class="level">
                <span class="dot" style=${`background:${level.color}`} aria-hidden="true"></span
                >${_t(`uv.levels.${level.level}`)}
              </div>
            `
          : html`<p class="status" role="status">
              ${_t(entityId ? `uv.status.${status}` : 'uv.not_configured')}
            </p>`
      }
      ${
        updated && Number.isFinite(updated.getTime())
          ? html`<time datetime=${updated.toISOString()}>
              ${_t('uv.updated', { time: updated.toLocaleString(lang) })}
            </time>`
          : ''
      }
    </div>`;
  }

  protected render(): TemplateResult {
    if (!this.hass) return html``;
    const lang = this.hass.selectedLanguage || this.hass.language || 'en';
    if (lang !== this._loadedLang) {
      this._loadedLang = lang;
      void use(lang).then(() => this.requestUpdate());
    }
    return html`<h3>${_t('uv.title')}</h3>
      <div class="readings">
        ${this._reading(this.entity, this.readingType)}
        ${this.maxEntity && this.readingType !== 'daily_max' ? this._reading(this.maxEntity, 'daily_max') : ''}
      </div>
      <div class="scale" aria-label=${_t('uv.scale')}>
        ${UV_LEVELS.map(
          level =>
            html`<div>
              <div class="band" style=${`background:${level.color}`}></div>
              <div class="range">${level.range}</div>
            </div>`
        )}
      </div>
      <div class="legend">
        ${UV_LEVELS.map(level => html`<span><span class="dot" style=${`background:${level.color}`} aria-hidden="true"></span>${_t(`uv.levels.${level.level}`)}</span>`)}
      </div>
      <a
        class="source"
        href="https://www.meteoswiss.admin.ch/weather/weather-and-climate-from-a-to-z/uv-index.html"
        target="_blank"
        rel="noopener noreferrer"
        >${_t('uv.about')}</a
      >`;
  }
}
