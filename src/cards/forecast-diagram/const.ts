import { PREFIX_NAME } from '../../const';
import { BasicCardConfig } from '../basic';
import type { ForecastTemperatureOrder } from '../../utils/forecast-temperature';

export const FORECAST_DIAGRAM_CARD_NAME = `${PREFIX_NAME}-forecast-diagram-card`;
export const FORECAST_DIAGRAM_CARD_EDITOR_NAME = `${FORECAST_DIAGRAM_CARD_NAME}-editor`;

export const schema = [
  {
    name: 'entity',
    required: true,
    selector: { entity: { domain: 'weather' } },
    description: 'forecast_diagram.config.descr.entity',
  },
  {
    name: 'temperature_order',
    required: false,
    selector: {
      select: {
        options: [
          { value: 'high_low', label: 'config.temperature_order_high_low' },
          { value: 'low_high', label: 'config.temperature_order_low_high' },
        ],
      },
    },
    description: 'config.descr.temperature_order',
  },
];

export type CardConfig = BasicCardConfig & {
  temperature_order?: ForecastTemperatureOrder;
};
