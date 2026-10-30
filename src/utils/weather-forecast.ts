import type { HomeAssistant, WeatherForecast } from '../types/home-assistant';

type ForecastType = 'daily' | 'hourly';
const FORECAST_REQUEST_TIMEOUT_MS = 20_000;

export function forecastDebug(event: string, details: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  try {
    if (window.localStorage.getItem('swissweather-debug') !== 'true') return;
  } catch (error) {
    console.warn('[SwissWeather] Cannot read forecast debug preference:', error);
    return;
  }
  console.debug(`[SwissWeather forecast] ${event}`, details);
}

interface WeatherForecastResponse {
  response?: Record<string, { forecast?: WeatherForecast[] } | undefined>;
}

export interface WeatherForecastResult {
  forecast: WeatherForecast[];
  error?: unknown;
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
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  const startedAt = Date.now();
  forecastDebug('request started', { entityId, forecastType });
  try {
    const timeout = new Promise<never>((_resolve, reject) => {
      timeoutId = setTimeout(
        () =>
          reject(new Error(`Forecast request timed out after ${FORECAST_REQUEST_TIMEOUT_MS}ms`)),
        FORECAST_REQUEST_TIMEOUT_MS
      );
    });
    const result = await Promise.race([hass.callWS<WeatherForecastResponse>(request), timeout]);
    const forecast = result?.response?.[entityId]?.forecast;
    forecastDebug('request completed', {
      entityId,
      forecastType,
      count: Array.isArray(forecast) ? forecast.length : 0,
      durationMs: Date.now() - startedAt,
    });
    return Array.isArray(forecast) ? forecast : [];
  } catch (error) {
    forecastDebug('request failed', {
      entityId,
      forecastType,
      durationMs: Date.now() - startedAt,
      error,
    });
    throw error;
  } finally {
    if (timeoutId !== undefined) clearTimeout(timeoutId);
  }
}

export async function fetchWeatherForecastsIndependently(
  hass: Pick<HomeAssistant, 'callWS'>,
  entityId: string
): Promise<{ daily: WeatherForecastResult; hourly: WeatherForecastResult }> {
  const [daily, hourly] = await Promise.allSettled([
    fetchWeatherForecast(hass, entityId, 'daily'),
    fetchWeatherForecast(hass, entityId, 'hourly'),
  ]);

  return {
    daily:
      daily.status === 'fulfilled'
        ? { forecast: daily.value }
        : { forecast: [], error: daily.reason },
    hourly:
      hourly.status === 'fulfilled'
        ? { forecast: hourly.value }
        : { forecast: [], error: hourly.reason },
  };
}
