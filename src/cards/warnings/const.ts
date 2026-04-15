import { PREFIX_NAME } from '../../const';
import { BasicCardConfig } from '../basic';

export const WARNING_CARD_NAME = `${PREFIX_NAME}-warning-card`;
export const WARNING_CARD_EDITOR_NAME = `${WARNING_CARD_NAME}-editor`;

export const warningSchema = [
  {
    name: 'primary_warning_entity',
    required: false,
    selector: { entity: { domain: 'sensor' } },
    description: 'config.descr.primary_warning_entity',
  },
  {
    name: 'secondary_warning_entity',
    required: false,
    selector: { entity: { domain: 'sensor' } },
    description: 'config.descr.secondary_warning_entity',
  },
  {
    name: 'tertiary_warning_entity',
    required: false,
    selector: { entity: { domain: 'sensor' } },
    description: 'config.descr.tertiary_warning_entity',
  },
  {
    name: 'warning_entity',
    required: false,
    selector: { entity: { domain: 'sensor' } },
    description: 'config.descr.warning_entity',
  },
];

export type WarningCardConfig = Omit<BasicCardConfig, 'entity'> & {
  type: typeof WARNING_CARD_NAME;
  /** Optional entity — not used by this card but kept for schema compatibility */
  entity?: string;
  /** Ranked model – primary slot (*_primary_weather_warning) */
  primary_warning_entity?: string;
  /** Ranked model – secondary slot (*_secondary_weather_warning) */
  secondary_warning_entity?: string;
  /** Ranked model – tertiary slot (*_tertiary_weather_warning) */
  tertiary_warning_entity?: string;
  /** Legacy aggregated warning sensor (izacus/hass-swissweather) */
  warning_entity?: string;
};
