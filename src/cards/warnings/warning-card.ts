import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { use, get as _t, registerTranslateConfig } from 'lit-translate';
import { marked } from 'marked';
import { translations } from '../../translations';
import type {
  HomeAssistant,
  HassEntity,
  SwissWeatherWarning,
  RankedWarningAttributes,
} from '../../types/home-assistant';
import {
  WARNING_CARD_NAME,
  WARNING_CARD_EDITOR_NAME,
  warningSchema,
  type WarningCardConfig,
} from './const';
import { registerCustomCard } from '../../utils';

registerTranslateConfig({ loader: lang => translations[lang] });

void registerCustomCard; // prevent tree-shaking before index.ts registers it

@customElement(WARNING_CARD_NAME)
export class WarningCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: WarningCardConfig;
  @state() private _openWarnings: Record<string, boolean> = {};

  static get styles() {
    return css`
      :host {
        display: block;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        border-radius: 16px;
        padding: 16px;
        box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.1));
        font-family: var(
          --primary-font-family,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          sans-serif
        );
        color: var(--primary-text-color, #fff);
      }

      .warning-section {
        border: 1px solid var(--warning-border-color, #ffeaa7);
        border-radius: 12px;
        padding: 15px;
        margin-bottom: 8px;
      }

      .warning-section.danger {
        background: linear-gradient(90deg, #f8d7da 0%, #f5c6cb 100%);
        border-color: var(--danger-border-color, #f1aeb5);
      }

      .warning-section.severe {
        background: linear-gradient(90deg, #ffeaa7 0%, #fdcb6e 100%);
        border-color: var(--severe-border-color, #e17055);
      }

      .no-warnings {
        opacity: 0.6;
        font-size: 14px;
        text-align: center;
        padding: 8px 0;
      }
    `;
  }

  public setConfig(config: WarningCardConfig): void {
    this.config = config;
  }

  public getCardSize(): number {
    return 2;
  }

  public static getStubConfig() {
    return {
      type: `custom:${WARNING_CARD_NAME}`,
      primary_warning_entity: '',
      secondary_warning_entity: '',
      tertiary_warning_entity: '',
    };
  }

  public static getConfigElement() {
    return document.createElement(WARNING_CARD_EDITOR_NAME);
  }

  public static getConfigSchema() {
    return warningSchema;
  }

  private _getEntityState(entityId: string): HassEntity | undefined {
    return this.hass?.states[entityId];
  }

  private _rankedIconColorToCSS(iconColor: string): string {
    const map: Record<string, string> = {
      yellow: '#f6c90e',
      orange: '#e17055',
      red: '#dc143c',
      violet: '#8e44ad',
      gray: 'var(--disabled-text-color, #9e9e9e)',
    };
    return map[iconColor?.toLowerCase()] ?? 'var(--primary-text-color, #fff)';
  }

  private _renderRankedSlot(
    entity: HassEntity,
    slotId: string,
    effectiveAdditional = 0
  ): TemplateResult | null {
    const attrs = entity.attributes as RankedWarningAttributes & Record<string, any>;
    if (!attrs.has_warning) return null;

    const color = this._rankedIconColorToCSS(attrs.icon_color);
    const icon = attrs.icon || 'mdi:alert';
    const label = attrs.warning_type || attrs.level_name || entity.state;
    const isOpen = !!this._openWarnings[slotId];
    const hasContent = !!(attrs.html_text || attrs.text || attrs.links?.length);
    const additionalCount = effectiveAdditional;

    const toggleWarning = (id: string) => {
      this._openWarnings = { ...this._openWarnings, [id]: !this._openWarnings[id] };
      this.requestUpdate();
    };

    return html`
      <li style="margin-bottom: 12px;">
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <ha-icon icon="${icon}" style="color: ${color}; flex-shrink: 0;"></ha-icon>
          <span style="font-weight: bold;">${label}</span>
          ${attrs.level_name
            ? html`<span style="font-size: 12px; opacity: 0.8;">(${attrs.level_name})</span>`
            : ''}
          ${additionalCount > 0
            ? html`<span style="font-size: 12px; opacity: 0.75; margin-left: 4px;">
                +${additionalCount}
              </span>`
            : ''}
          ${hasContent
            ? html`
                <button
                  @click=${() => toggleWarning(slotId)}
                  style="background:none;border:none;cursor:pointer;color:var(--primary-text-color,#fff);font-size:16px;margin-left:auto;"
                  title="${isOpen ? _t('collapse') : _t('expand')}"
                  aria-label="${isOpen ? _t('collapse') : _t('expand')}"
                >
                  <ha-icon icon="${isOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'}"></ha-icon>
                </button>
              `
            : ''}
        </div>
        ${isOpen
          ? html`
              <div style="margin-top: 6px; font-size: 13px; opacity: 0.85;">
                ${attrs.valid_from || attrs.valid_to
                  ? html`
                      <div style="margin-bottom: 4px;">
                        ${attrs.valid_from
                          ? html`<strong>${_t('valid_from')}: </strong>${new Date(
                                attrs.valid_from
                              ).toLocaleString()}&nbsp;`
                          : ''}
                        ${attrs.valid_to
                          ? html`<strong>${_t('valid_to')}: </strong>${new Date(
                                attrs.valid_to
                              ).toLocaleString()}`
                          : ''}
                      </div>
                    `
                  : ''}
                ${attrs.html_text
                  ? html`<div
                      style="line-height: 1.4; margin-bottom: 4px;"
                      .innerHTML="${attrs.html_text}"
                    ></div>`
                  : attrs.text
                    ? html`<div style="line-height: 1.4; margin-bottom: 4px;">${attrs.text}</div>`
                    : ''}
                ${attrs.links?.length
                  ? html`
                      <div style="display: flex; flex-direction: column; gap: 2px;">
                        ${attrs.links.map(
                          (l: { url: string; text: string; alt_url?: string }) => html`
                            <a
                              href="${l.url.startsWith('http') ? l.url : (l.alt_url ?? l.url)}"
                              target="_blank"
                              rel="noopener noreferrer"
                              style="color: var(--primary-text-color, #fff); text-decoration: underline; display: flex; align-items: center; gap: 4px;"
                            >
                              <ha-icon icon="mdi:link-variant" style="font-size: 14px;"></ha-icon>
                              ${l.text}
                            </a>
                          `
                        )}
                      </div>
                    `
                  : ''}
              </div>
            `
          : ''}
      </li>
    `;
  }

  private _renderRankedWarnings(
    primaryEntity: HassEntity,
    secondaryEntity: HassEntity | null | undefined,
    tertiaryEntity: HassEntity | null | undefined
  ): TemplateResult {
    const primaryAttrs = primaryEntity.attributes as RankedWarningAttributes & Record<string, any>;
    if (!primaryAttrs.has_warning) return html``;

    const containerClass =
      (
        { red: 'danger', violet: 'danger', orange: 'severe', yellow: 'warning' } as Record<
          string,
          string
        >
      )[primaryAttrs.icon_color?.toLowerCase()] ?? 'info';

    const secondaryActive = !!(secondaryEntity?.attributes as any)?.has_warning;
    const tertiaryActive = !!(tertiaryEntity?.attributes as any)?.has_warning;
    const rawAdditional = primaryAttrs.additional_warning_count ?? 0;
    const effectiveAdditional = Math.max(
      rawAdditional - (secondaryActive ? 1 : 0) - (tertiaryActive ? 1 : 0),
      0
    );
    const totalCount = 1 + rawAdditional;
    const title =
      totalCount === 1 ? _t('weather_warning') : _t('weather_warnings', { count: totalCount });

    const slots = [
      this._renderRankedSlot(primaryEntity, 'primary', effectiveAdditional),
      secondaryEntity ? this._renderRankedSlot(secondaryEntity, 'secondary') : null,
      tertiaryEntity ? this._renderRankedSlot(tertiaryEntity, 'tertiary') : null,
    ].filter(Boolean);

    return html`
      <div class="warning-section ${containerClass}">
        <strong>${title}</strong>
        <ul style="margin: 6px 0 0 0; padding-left: 18px;">
          ${slots}
        </ul>
      </div>
    `;
  }

  private _renderLegacyWarnings(warningEntity: HassEntity): TemplateResult {
    const warnings: SwissWeatherWarning[] = [];
    if (
      warningEntity.attributes.warning_levels &&
      Array.isArray(warningEntity.attributes.warning_levels)
    ) {
      for (let i = 0; i < warningEntity.attributes.warning_levels.length; i++)
        warnings.push({
          id: `warning_${i}`,
          title: warningEntity.attributes.warning_levels[i],
          level: warningEntity.attributes.warning_levels[i],
          type: warningEntity.attributes.warning_types[i],
          description: warningEntity.attributes.warning_texts[i],
          valid_from: warningEntity.attributes.warning_valid_from[i],
          valid_to: warningEntity.attributes.warning_valid_to[i],
          link: warningEntity.attributes.warning_links[i],
          regions: [],
          phenomena: [],
        });
    }
    if (warnings.length === 0) return html``;

    const levelToColor = (level: number): string => {
      if (level >= 4) return '#dc143c';
      if (level >= 3) return '#e17055';
      if (level >= 2) return '#f6c90e';
      return 'var(--primary-text-color, #fff)';
    };
    const typeToIcon: Record<string, string> = {
      storm: 'mdi:weather-lightning',
      thunderstorms: 'mdi:weather-lightning-rainy',
      rain: 'mdi:weather-pouring',
      snow: 'mdi:snowflake',
      wind: 'mdi:weather-windy',
      fog: 'mdi:weather-fog',
      heat: 'mdi:weather-sunny-alert',
      heat_waves: 'mdi:thermometer-high',
      cold: 'mdi:snowflake-alert',
      frost: 'mdi:snowflake-thermometer',
      thaw: 'mdi:thermometer-high',
      flood: 'mdi:waves-arrow-up',
      drought: 'mdi:water-off',
      avalanches: 'mdi:snowflake-alert',
      slippery_roads: 'mdi:car-brake-alert',
      forest_fires: 'mdi:fire-alert',
      earthquakes: 'mdi:pulse',
      default: 'mdi:alert',
    };

    const maxLevel = Math.max(...warnings.map(w => w.level || 0));
    const containerClass =
      maxLevel >= 4 ? 'danger' : maxLevel >= 3 ? 'severe' : maxLevel >= 2 ? 'warning' : 'info';

    const toggleWarning = (id: string) => {
      this._openWarnings = { ...this._openWarnings, [id]: !this._openWarnings[id] };
      this.requestUpdate();
    };

    return html`
      <div class="warning-section ${containerClass}">
        <strong>${_t('weather_warning')}</strong>
        <ul style="margin: 6px 0 0 0; padding-left: 18px;">
          ${warnings.map(
            w => html`
              <li style="margin-bottom: 12px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <ha-icon
                    icon="${typeToIcon[w.type?.toLowerCase?.()] || typeToIcon.default}"
                    style="color: ${levelToColor(w.level)};"
                  ></ha-icon>
                  <span style="font-weight: bold;">${w.title}</span>
                  ${w.link
                    ? html`
                        <a
                          href="${w.link}"
                          target="_blank"
                          rel="noopener noreferrer"
                          style="color: var(--primary-text-color, #fff); text-decoration: underline; display: flex; align-items: center;"
                        >
                          <ha-icon icon="mdi:link-variant" style="font-size: 16px;"></ha-icon>
                        </a>
                      `
                    : ''}
                  <button
                    @click=${() => toggleWarning(w.id)}
                    style="background:none;border:none;cursor:pointer;color:var(--primary-text-color,#fff);font-size:16px;"
                    title="${this._openWarnings[w.id] ? _t('collapse') : _t('expand')}"
                    aria-label="${this._openWarnings[w.id] ? _t('collapse') : _t('expand')}"
                  >
                    <ha-icon
                      icon="${this._openWarnings[w.id] ? 'mdi:chevron-up' : 'mdi:chevron-down'}"
                    ></ha-icon>
                  </button>
                </div>
                ${this._openWarnings[w.id] && w.description
                  ? html`
                      <div style="margin-top: 4px;">
                        <strong>${_t('valid_from')}: </strong>
                        ${w.valid_from ? new Date(w.valid_from).toLocaleString() : _t('unknown')}
                        <strong>${_t('valid_to')}: </strong>
                        ${w.valid_to ? new Date(w.valid_to).toLocaleString() : _t('unknown')}
                      </div>
                      <div
                        style="font-size: 14px; line-height: 1.4; margin-top: 4px;"
                        .innerHTML="${marked.parse(w.description || '')}"
                      ></div>
                    `
                  : ''}
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }

  public render(): TemplateResult {
    if (!this.hass || !this.config) return html``;
    use((this.hass.selectedLanguage || this.hass.language || 'en').substring(0, 2));

    const primaryEntity = this.config.primary_warning_entity
      ? this._getEntityState(this.config.primary_warning_entity)
      : null;
    const secondaryEntity = this.config.secondary_warning_entity
      ? this._getEntityState(this.config.secondary_warning_entity)
      : null;
    const tertiaryEntity = this.config.tertiary_warning_entity
      ? this._getEntityState(this.config.tertiary_warning_entity)
      : null;
    const legacyEntity = this.config.warning_entity
      ? this._getEntityState(this.config.warning_entity)
      : null;

    // Ranked model: prefer if primary entity exposes has_warning
    if (primaryEntity && primaryEntity.attributes?.has_warning !== undefined) {
      const content = this._renderRankedWarnings(primaryEntity, secondaryEntity, tertiaryEntity);
      // If primary has no active warning, show empty state
      if (!(primaryEntity.attributes as any).has_warning) {
        return html`<div class="no-warnings">${_t('warnings_none')}</div>`;
      }
      return content;
    }

    // Legacy model
    if (legacyEntity) {
      return this._renderLegacyWarnings(legacyEntity);
    }

    return html`<div class="no-warnings">${_t('warnings_none')}</div>`;
  }
}
