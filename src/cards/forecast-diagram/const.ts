import { PREFIX_NAME } from '../../const';
import { BasicCardConfig } from '../basic';

export const FORECAST_DIAGRAM_CARD_NAME = `${PREFIX_NAME}-forecast-diagram-card`;
export const FORECAST_DIAGRAM_CARD_EDITOR_NAME = `${FORECAST_DIAGRAM_CARD_NAME}-editor`;

export const schema = [
  {
    name: 'entity',
    required: true,
    selector: { entity: { domain: 'weather' } },
    description: 'config.descr.entity',
  },
];

export type CardConfig = BasicCardConfig;
