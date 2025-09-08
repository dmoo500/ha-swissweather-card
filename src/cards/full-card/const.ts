import { PREFIX_NAME } from '../../const';
import { BasicCardConfig } from '../basic';

export const FULL_CARD_NAME = `${PREFIX_NAME}-card`;
export const FULL_CARD_EDITOR_NAME = `${FULL_CARD_NAME}-editor`;

export const schema = [
  {
    name: 'entity',
    required: true,
    description: 'config.descr.entity',
    selector: {
      entity: {
        domain: 'weather',
      },
    },
  },
  {
    name: 'location',
    description: 'config.descr.location',
    selector: {
      text: {},
    },
  },
  {
    name: 'show_location',
    description: 'config.descr.show_location',
    selector: { boolean: {} },
  },
  {
    name: 'wind_entity',
    description: 'config.descr.wind_entity',
    selector: {
      entity: {
        domain: 'sensor',
      },
    },
  },
  {
    name: 'wind_direction_entity',
    description: 'config.descr.wind_direction_entity',
    selector: {
      entity: {
        domain: 'sensor',
      },
    },
  },
  {
    name: 'sunshine_entity',
    description: 'config.descr.sunshine_entity',
    selector: {
      entity: {
        domain: 'sensor',
      },
    },
  },
  {
    name: 'warning_entity',
    description: 'config.descr.warning_entity',
    selector: {
      entity: {
        domain: 'sensor',
      },
    },
  },
  {
    name: 'forecast_hours',
    description: 'config.descr.forecast_hours',
    selector: { number: { min: 6, max: 18, step: 1 } },
  },
  {
    name: 'show_forecast',
    description: 'config.descr.show_forecast',
    selector: { boolean: {} },
  },
  {
    name: 'show_precipitation',
    description: 'config.descr.show_precipitation',
    selector: { boolean: {} },
  },
  {
    name: 'show_temperature',
    description: 'config.descr.show_temperature',
    selector: { boolean: {} },
  },
  {
    name: 'show_sunshine',
    description: 'config.descr.show_sunshine',
    selector: { boolean: {} },
  },
  {
    name: 'show_wind',
    description: 'config.descr.show_wind',
    selector: { boolean: {} },
  },
  {
    name: 'enable_animate_weather_icons',
    description: 'config.descr.enable_animate_weather_icons',
    selector: { boolean: {} },
  },
  {
    name: 'show_warnings',
    description: 'config.descr.show_warnings',
    selector: { boolean: {} },
  },
  {
    name: 'compact_mode',
    description: 'config.descr.compact_mode',
    selector: { boolean: {} },
  },
  {
    name: 'chart_order',
    description: 'config.descr.chart_order',
    selector: {
      select: {
        multiple: true,
        options: [
          { value: 'temperature', label: 'config.descr.temperature' },
          { value: 'precipitation', label: 'config.descr.precipitation' },
          { value: 'sunshine', label: 'config.descr.sunshine' },
          { value: 'wind', label: 'config.descr.wind' },
          { value: 'forecast', label: 'config.descr.forecast' },
        ],
      },
    },
  },
];

export type CardConfig = BasicCardConfig & {
  type: typeof FULL_CARD_NAME;
  show_location?: boolean;
  location?: string;
  warning_entity?: string;
  sun_entity?: string;
  wind_entity?: string;
  wind_direction_entity?: string;
  sunshine_entity?: string;
  precipitation_entity?: string;
  show_forecast?: boolean;
  forecast_hours?: number;
  show_hourly?: boolean;
  show_warnings?: boolean;
  show_temperature?: boolean;
  show_precipitation?: boolean;
  show_sunshine?: boolean;
  show_wind?: boolean;
  enable_animate_weather_icons?: boolean;
  compact_mode?: boolean;
  chart_order?: string[];
};
