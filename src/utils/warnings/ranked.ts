import { html, type TemplateResult } from 'lit';
import { get as _t } from 'lit-translate';
import type { HassEntity, RankedWarningAttributes } from '../../types/home-assistant';
import { sanitizeHtml } from './shared';

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
          ${
            attrs.level_name
              ? html`<span style="font-size: 12px; opacity: 0.8;">(${attrs.level_name})</span>`
              : ''
          }
          ${
            effectiveAdditional > 0
              ? html`<span
                  style="font-size: 12px; opacity: 0.75;"
                  title="${_t('warning.warnings_additional', { count: effectiveAdditional })}"
                >
                  +${effectiveAdditional}
                </span>`
              : ''
          }
        </div>
        ${
          hasContent
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
            : ''
        }
      </div>
      ${
        isOpen
          ? html`
              <div style="margin-top: 6px; font-size: 13px; opacity: 0.85;">
                ${
                  attrs.valid_from || attrs.valid_to
                    ? html`
                        <div style="margin-bottom: 4px;">
                          ${
                            attrs.valid_from
                              ? html`<strong>${_t('warning.valid_from')}: </strong>${new Date(
                                    attrs.valid_from
                                  ).toLocaleString()}&nbsp;`
                              : ''
                          }
                          ${
                            attrs.valid_to
                              ? html`<strong>${_t('warning.valid_to')}: </strong>${new Date(
                                    attrs.valid_to
                                  ).toLocaleString()}`
                              : ''
                          }
                        </div>
                      `
                    : ''
                }
                ${
                  attrs.html_text
                    ? html`<div
                        style="line-height: 1.4; margin-bottom: 4px;"
                        .innerHTML="${sanitizeHtml(attrs.html_text)}"
                      ></div>`
                    : attrs.text
                      ? html`<div style="line-height: 1.4; margin-bottom: 4px;">${attrs.text}</div>`
                      : ''
                }
                ${
                  attrs.links?.length
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
                    : ''
                }
              </div>
            `
          : ''
      }
    </li>
  `;
}

export function renderRankedWarnings(
  primaryEntity: HassEntity,
  secondaryEntity: HassEntity | null | undefined,
  tertiaryEntity: HassEntity | null | undefined,
  openWarnings: Record<string, boolean>,
  toggle: (id: string) => void
): TemplateResult | null {
  const primaryAttrs = primaryEntity.attributes as RankedWarningAttributes & Record<string, any>;
  if (!primaryAttrs.has_warning) return null;

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
    totalCount === 1
      ? _t('warning.weather_warning')
      : _t('warning.weather_warnings', { count: totalCount });

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
