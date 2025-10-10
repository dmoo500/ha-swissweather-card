import { PREFIX_NAME } from '../../const';
import { BasicCardConfig } from '../basic';

export const ANIMATED_BACKGROUND_CARD_NAME = `${PREFIX_NAME}-animated-background-card`;
export const ANIMATED_BACKGROUND_CARD_EDITOR_NAME = `${ANIMATED_BACKGROUND_CARD_NAME}-editor`;

export const schema = [
  {
    name: 'entity',
    required: true,
    selector: { entity: { domain: 'weather' } },
    description: 'config.descr.entity',
  },
  {
    name: 'sun_entity',
    required: false,
    selector: { entity: { domain: 'sun' } },
    description: 'config.descr.sun_entity',
  },
  {
    name: 'show_sun_times',
    required: false,
    selector: { boolean: {} },
    description: 'config.descr.show_sun_times',
  },
  {
    name: 'show_forecast',
    required: false,
    selector: { boolean: {} },
    description: 'config.descr.show_forecast',
  },
  {
    name: 'show_day_temps',
    required: false,
    selector: { boolean: {} },
    description: 'config.descr.show_day_temps',
  },
  {
    name: 'temperature_font_size',
    required: false,
    selector: { number: { min: 12, max: 96, step: 1, mode: 'box' } },
    description: 'config.descr.temperature_font_size',
  },
];

export type CardConfig = BasicCardConfig & {
  temperature_font_size?: number; // px
  show_forecast?: boolean;
  show_sun_times?: boolean;
  show_day_temps?: boolean;
};
