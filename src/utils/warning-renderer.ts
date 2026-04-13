import { html, TemplateResult } from 'lit';
import { get as _t } from 'lit-translate';
import { marked } from 'marked';
import type {
  HassEntity,
  RankedWarningAttributes,
  SwissWeatherWarning,
} from '../types/home-assistant';

export function rankedIconColorToCSS(iconColor: string): string {
  const map: Record<string, string> = {
    yellow: '#f6c90e',
    orange: '#e17055',
    red: '#dc143c',
    violet: '#8e44ad',
    gray: 'var(--disabled-text-color, #9e9e9e)',
  };
  return map[iconColor?.toLowerCase()] ?? 'var(--primary-text-color, #fff)';
}

export function renderRankedSlot(
  entity: HassEntity,
  slotId: string,
  openWarnings: Record<string, boolean>,
  toggle: (id: string) => void,
  effectiveAdditional = 0
): TemplateResult | null {
  const attrs = entity.attributes as RankedWarningAttributes & Record<string, any>;
  if (!attrs.has_warning) return null;

  const color = rankedIconColorToCSS(attrs.icon_color);
  const icon = attrs.icon || 'mdi:alert';
  const label = attrs.warning_type || attrs.level_name || entity.state;
  const isOpen = !!openWarnings[slotId];
  const hasContent = !!(attrs.html_text || attrs.text || attrs.links?.length);

  return html`
    <li style="margin-bottom: 12px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <ha-icon icon="${icon}" style="color: ${color}; flex-shrink: 0;"></ha-icon>
        <div
          style="flex: 1; min-width: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 4px 8px;"
        >
          <span style="font-weight: bold;">${label}</span>
          ${attrs.level_name
            ? html`<span style="font-size: 12px; opacity: 0.8;">(${attrs.level_name})</span>`
            : ''}
          ${effectiveAdditional > 0
            ? html`<span
                style="font-size: 12px; opacity: 0.75;"
                title="${_t('warnings_additional', { count: effectiveAdditional })}"
              >
                +${effectiveAdditional}
              </span>`
            : ''}
        </div>
        ${hasContent
          ? html`
              <button
                @click=${() => toggle(slotId)}
                style="background:none;border:none;cursor:pointer;color:var(--primary-text-color,#fff);font-size:16px;flex-shrink:0;"
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

export function renderRankedWarnings(
  primaryEntity: HassEntity,
  secondaryEntity: HassEntity | null | undefined,
  tertiaryEntity: HassEntity | null | undefined,
  openWarnings: Record<string, boolean>,
  toggle: (id: string) => void
): TemplateResult {
  const primaryAttrs = primaryEntity.attributes as RankedWarningAttributes & Record<string, any>;
  if (!primaryAttrs.has_warning) return html``;

  const containerClass =
    (
      {
        red: 'danger',
        violet: 'danger',
        orange: 'severe',
        yellow: 'warning',
      } as Record<string, string>
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
    renderRankedSlot(primaryEntity, 'primary', openWarnings, toggle, effectiveAdditional),
    secondaryEntity ? renderRankedSlot(secondaryEntity, 'secondary', openWarnings, toggle) : null,
    tertiaryEntity ? renderRankedSlot(tertiaryEntity, 'tertiary', openWarnings, toggle) : null,
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

export function renderLegacyWarnings(
  warningEntity: HassEntity,
  openWarnings: Record<string, boolean>,
  toggle: (id: string) => void
): TemplateResult {
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

  const maxLevel = Math.max(...warnings.map(w => w.level || 0));
  const containerClass =
    maxLevel >= 4 ? 'danger' : maxLevel >= 3 ? 'severe' : maxLevel >= 2 ? 'warning' : 'info';

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
                  @click=${() => toggle(w.id)}
                  style="background:none;border:none;cursor:pointer;color:var(--primary-text-color,#fff);font-size:16px;"
                  title="${openWarnings[w.id] ? _t('collapse') : _t('expand')}"
                  aria-label="${openWarnings[w.id] ? _t('collapse') : _t('expand')}"
                >
                  <ha-icon
                    icon="${openWarnings[w.id] ? 'mdi:chevron-up' : 'mdi:chevron-down'}"
                  ></ha-icon>
                </button>
              </div>
              ${openWarnings[w.id] && w.description
                ? html`
                    <div>
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

export function renderWarningSection(
  warningEntity: HassEntity | null | undefined,
  primaryEntity: HassEntity | null | undefined,
  secondaryEntity: HassEntity | null | undefined,
  tertiaryEntity: HassEntity | null | undefined,
  openWarnings: Record<string, boolean>,
  toggle: (id: string) => void
): TemplateResult {
  if (primaryEntity && primaryEntity.attributes?.has_warning !== undefined) {
    return renderRankedWarnings(
      primaryEntity,
      secondaryEntity,
      tertiaryEntity,
      openWarnings,
      toggle
    );
  }
  if (warningEntity) {
    return renderLegacyWarnings(warningEntity, openWarnings, toggle);
  }
  return html``;
}
