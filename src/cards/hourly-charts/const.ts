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

// Base schema: weather entity + forecast hours (temperature & precipitation)
export const baseSchema = [
  {
    name: 'entity',
    required: true,
    selector: { entity: { domain: 'weather' } },
    description: 'hourly_charts.config.descr.entity',
  },
  {
    name: 'forecast_hours',
    required: false,
    selector: { number: { min: 6, max: 48, step: 1, mode: 'box' } },
    description: 'hourly_charts.config.descr.forecast_hours',
  },
];

// Wind card schema: weather entity + forecast hours
export const windSchema = [
  {
    name: 'entity',
    required: true,
    selector: { entity: { domain: 'weather' } },
    description: 'hourly_charts.config.descr.entity',
  },
  {
    name: 'forecast_hours',
    required: false,
    selector: { number: { min: 6, max: 48, step: 1, mode: 'box' } },
    description: 'hourly_charts.config.descr.forecast_hours',
  },
];

// Sunshine card schema: weather entity + optional sun & sunshine sensor
export const sunshineSchema = [
  {
    name: 'entity',
    required: true,
    selector: { entity: { domain: 'weather' } },
    description: 'hourly_charts.config.descr.entity',
  },
  {
    name: 'forecast_hours',
    required: false,
    selector: { number: { min: 6, max: 48, step: 1, mode: 'box' } },
    description: 'hourly_charts.config.descr.forecast_hours',
  },
  {
    name: 'sun_entity',
    required: false,
    selector: { entity: { domain: 'sun' } },
    description: 'hourly_charts.config.descr.sun_entity',
  },
  {
    name: 'sunshine_entity',
    required: false,
    selector: { entity: { domain: 'sensor' } },
    description: 'hourly_charts.config.descr.sunshine_entity',
  },
];

export type HourlyChartCardConfig = BasicCardConfig & {
  forecast_hours?: number;
  sun_entity?: string;
  sunshine_entity?: string;
};
