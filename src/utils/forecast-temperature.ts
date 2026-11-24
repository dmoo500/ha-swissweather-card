export type ForecastTemperatureOrder = 'high_low' | 'low_high';

export function getOrderedForecastTemperatures<T>(
  high: T,
  low: T,
  order?: ForecastTemperatureOrder
): { kind: 'high' | 'low'; value: T }[] {
  const temperatures = [
    { kind: 'high' as const, value: high },
    { kind: 'low' as const, value: low },
  ];
  return order === 'low_high' ? temperatures.reverse() : temperatures;
}
