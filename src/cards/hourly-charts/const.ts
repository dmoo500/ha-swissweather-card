import { PREFIX_NAME } from '../../const';
import { BasicCardConfig } from '../basic';

// Temperature Card
export const TEMPERATURE_CARD_NAME = `${PREFIX_NAME}-temperature-card`;
export const TEMPERATURE_CARD_EDITOR_NAME = `${TEMPERATURE_CARD_NAME}-editor`;

// Precipitation Card
export const PRECIPITATION_CARD_NAME = `${PREFIX_NAME}-precipitation-card`;
export const PRECIPITATION_CARD_EDITOR_NAME = `${PRECIPITATION_CARD_NAME}-editor`;

// Sunshine Card
export const SUNSHINE_CARD_NAME = `${PREFIX_NAME}-sunshine-card`;
export const SUNSHINE_CARD_EDITOR_NAME = `${SUNSHINE_CARD_NAME}-editor`;

// Wind Card
export const WIND_CARD_NAME = `${PREFIX_NAME}-wind-card`;
export const WIND_CARD_EDITOR_NAME = `${WIND_CARD_NAME}-editor`;

// Schema for cards without sun_entity
export const baseSchema = [
  {
    name: 'entity',
    required: true,
    selector: { entity: { domain: 'weather' } },
    description: 'config.descr.entity',
  },
  {
    name: 'forecast_hours',
    required: false,
    selector: { number: { min: 6, max: 48, step: 1, mode: 'box' } },
    description: 'config.descr.forecast_hours',
  },
];

// Schema for sunshine card (adds optional sun_entity)
export const sunshineSchema = [
  ...baseSchema,
  {
    name: 'sun_entity',
    required: false,
    selector: { entity: { domain: 'sun' } },
    description: 'config.descr.sun_entity',
  },
];

export type HourlyChartCardConfig = BasicCardConfig & {
  forecast_hours?: number;
  sun_entity?: string;
};
