import { PREFIX_NAME } from '../../const';
import { BasicCardConfig } from '../basic';

export const POLLEN_CARD_NAME = `${PREFIX_NAME}-pollen-card`;
export const POLLEN_CARD_EDITOR_NAME = `${POLLEN_CARD_NAME}-editor`;

export const POLLEN_TYPES = ['birch', 'grasses', 'alder', 'hazel', 'beech', 'ash', 'oak'] as const;
export type PollenType = (typeof POLLEN_TYPES)[number];

export type PollenLevel = 'NONE' | 'LOW' | 'MEDIUM' | 'STRONG' | 'VERY_STRONG';

export const POLLEN_LEVEL_ORDER: PollenLevel[] = ['NONE', 'LOW', 'MEDIUM', 'STRONG', 'VERY_STRONG'];

export interface PollenCardConfig extends Omit<BasicCardConfig, 'entity'> {
  entity?: string;
  // Toggle each pollen type on/off (default: true when undefined)
  birch_enabled?: boolean;
  grasses_enabled?: boolean;
  alder_enabled?: boolean;
  hazel_enabled?: boolean;
  beech_enabled?: boolean;
  ash_enabled?: boolean;
  oak_enabled?: boolean;
  // Level sensor entity IDs (SwissPollenLevelSensor enum: NONE/LOW/MEDIUM/STRONG/VERY_STRONG)
  birch_entity?: string;
  grasses_entity?: string;
  alder_entity?: string;
  hazel_entity?: string;
  beech_entity?: string;
  ash_entity?: string;
  oak_entity?: string;
  // Optional raw value sensor entity IDs (particles/m³)
  birch_raw_entity?: string;
  grasses_raw_entity?: string;
  alder_raw_entity?: string;
  hazel_raw_entity?: string;
  beech_raw_entity?: string;
  ash_raw_entity?: string;
  oak_raw_entity?: string;
}
