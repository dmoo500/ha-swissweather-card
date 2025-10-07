import { BasicCardConfig } from '../cards/basic';
import { HassEntity, HomeAssistant, WeatherEntity } from '../types/home-assistant';

export const getEntityState = (hass: HomeAssistant, entityId: string): HassEntity | undefined => {
  return hass?.states[entityId];
};

export const isDay = (hass: HomeAssistant, config: BasicCardConfig): boolean => {
  const now = new Date();
  // Try to get today's sunrise/sunset from weather entity, else fallback to sun.sun
  const weatherEntity = getEntityState(hass, config!.entity) as WeatherEntity;
  const sun_entity = getEntityState(hass, config!.sun_entity || 'sun.sun');
  let sunrise: Date | null = null;
  let sunset: Date | null = null;
  // Try weather entity first
  if (
    weatherEntity &&
    weatherEntity.attributes &&
    'sunrise' in weatherEntity.attributes &&
    'sunset' in weatherEntity.attributes &&
    (weatherEntity.attributes as any).sunrise &&
    (weatherEntity.attributes as any).sunset
  ) {
    sunrise = new Date((weatherEntity.attributes as any).sunrise);
    sunset = new Date((weatherEntity.attributes as any).sunset);
  } else if (sun_entity?.attributes) {
    // sun.sun gives next_rising/next_setting, which may be in the future (next day)
    const nextRising = sun_entity.attributes.next_rising
      ? new Date(sun_entity.attributes.next_rising)
      : null;
    const nextSetting = sun_entity.attributes.next_setting
      ? new Date(sun_entity.attributes.next_setting)
      : null;
    if (nextRising && nextSetting) {
      // Last sunrise: if next_rising is in the future, lastSunrise = next_rising - 1 day; else next_rising
      const lastSunrise =
        nextRising > now ? new Date(nextRising.getTime() - 24 * 60 * 60 * 1000) : nextRising;
      // Next sunset is always next_setting
      const nextSunset = nextSetting;
      sunrise = lastSunrise;
      sunset = nextSunset;
    }
  }
  // Debug
  // console.log('Sunrise:', sunrise, 'Sunset:', sunset, 'Now:', now, 'isDay:', sunrise && sunset ? now >= sunrise && now < sunset : 'unknown' );
  // Fallback: if still missing, treat as day
  if (!sunrise || !sunset) return true;
  // If now is between sunrise and sunset, it's day
  return now >= sunrise && now < sunset;
};
export const formatDate = (hass: HomeAssistant) => {
  return (dateStr: string, fmtOptions: Intl.DateTimeFormatOptions) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    // Use Home Assistant's locale
    const locale = hass?.selectedLanguage || hass?.language || 'en';
    return new Intl.DateTimeFormat(locale, fmtOptions).format(date);
  };
};
interface RegisterCardParams {
  type: string;
  name: string;
  description: string;
}

export function registerCustomCard(params: RegisterCardParams) {
  const windowWithCards = window as unknown as Window & {
    customCards: unknown[];
  };
  windowWithCards.customCards = windowWithCards.customCards || [];

  //const cardPage = params.type.replace('-card', '').replace('swissweather-', '');
  windowWithCards.customCards.push({
    ...params,
    preview: true,
    // documentationURL: `
  });
}
