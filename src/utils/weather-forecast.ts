import type { HomeAssistant, WeatherForecast } from '../types/home-assistant';

type ForecastType = 'daily' | 'hourly';

interface WeatherForecastResponse {
  response?: Record<string, { forecast?: WeatherForecast[] } | undefined>;
}

export async function fetchWeatherForecast(
  hass: Pick<HomeAssistant, 'callWS'>,
  entityId: string,
  forecastType: ForecastType
): Promise<WeatherForecast[]> {
  const request = {
    type: 'call_service',
    domain: 'weather',
    service: 'get_forecasts',
    service_data: { entity_id: entityId, type: forecastType },
    return_response: true,
  };
  const result = await hass.callWS<WeatherForecastResponse>(request);
  const forecast = result?.response?.[entityId]?.forecast;
  return Array.isArray(forecast) ? forecast : [];
}
