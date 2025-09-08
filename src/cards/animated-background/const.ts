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
  }
];

export type CardConfig = BasicCardConfig;
