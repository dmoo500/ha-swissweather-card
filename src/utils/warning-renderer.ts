import { type TemplateResult } from 'lit';
import type { HassEntity } from '../types/home-assistant';
import { renderLegacyWarnings } from './warnings/legacy';
import { renderRankedWarnings } from './warnings/ranked';

export { renderLegacyWarnings } from './warnings/legacy';
export { rankedIconColorToCSS, renderRankedSlot, renderRankedWarnings } from './warnings/ranked';

export function renderWarningSection(
  warningEntity: HassEntity | null | undefined,
  primaryEntity: HassEntity | null | undefined,
  secondaryEntity: HassEntity | null | undefined,
  tertiaryEntity: HassEntity | null | undefined,
  openWarnings: Record<string, boolean>,
  toggle: (id: string) => void
): TemplateResult | null {
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
  return null;
}
