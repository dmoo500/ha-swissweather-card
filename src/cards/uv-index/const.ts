import { PREFIX_NAME } from '../../const';
import type { LovelaceCardConfig } from '../../types/home-assistant';

export const UV_INDEX_CARD_NAME = `${PREFIX_NAME}-uv-index-card`;
export const UV_INDEX_CARD_EDITOR_NAME = `${UV_INDEX_CARD_NAME}-editor`;
export type UVReadingType = 'current' | 'daily_max';

export interface UVIndexCardConfig extends LovelaceCardConfig {
  entity: string;
  max_entity?: string;
  reading_type?: UVReadingType;
}

export const uvSchema = [
  {
    name: 'entity',
    suggested: ['uv', 'ultraviolet'],
    required: true,
    description: 'uv.config.entity_hint',
    selector: { entity: { domain: 'sensor' } },
  },
  {
    name: 'max_entity',
    suggested: ['uv', 'ultraviolet'],
    description: 'uv.config.max_entity_hint',
    selector: { entity: { domain: 'sensor' } },
  },
  {
    name: 'reading_type',
    description: 'uv.config.reading_type_hint',
    selector: {
      select: {
        options: [
          { value: 'current', label: 'uv.current' },
          { value: 'daily_max', label: 'uv.daily_max' },
        ],
      },
    },
  },
];
