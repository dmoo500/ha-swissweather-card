import { html, type TemplateResult } from 'lit';
import { get as _t } from 'lit-translate';
import { marked } from 'marked';
import type { HassEntity, SwissWeatherWarning } from '../../types/home-assistant';
import { sanitizeHtml } from './shared';

export function renderLegacyWarnings(
  warningEntity: HassEntity,
  openWarnings: Record<string, boolean>,
  toggle: (id: string) => void
): TemplateResult | null {
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
  if (warnings.length === 0) return null;

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
      <strong>${_t('warning.weather_warning')}</strong>
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
                ${
                  w.link
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
                    : ''
                }
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
              ${
                openWarnings[w.id] && w.description
                  ? html`
                      <div>
                        <strong>${_t('warning.valid_from')}: </strong>
                        ${w.valid_from ? new Date(w.valid_from).toLocaleString() : _t('unknown')}
                        <strong>${_t('warning.valid_to')}: </strong>
                        ${w.valid_to ? new Date(w.valid_to).toLocaleString() : _t('unknown')}
                      </div>
                      <div
                        style="font-size: 14px; line-height: 1.4; margin-top: 4px;"
                        .innerHTML="${sanitizeHtml(String(marked.parse(w.description || '')))}"
                      ></div>
                    `
                  : ''
              }
            </li>
          `
        )}
      </ul>
    </div>
  `;
}
