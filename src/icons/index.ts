import { WeatherCondition } from '../types/home-assistant';
import { html, svg, TemplateResult } from 'lit';
import clearNight from './clear-night.svg';
import cloudy from './cloudy.svg';
import partlyCloudyDay from './partly-cloudy-day.svg';
import partlyCloudyNight from './partly-cloudy-night.svg';
import fog from './fog.svg';
import hail from './hail.svg';
import thunderstormsDayRain from './thunderstorms-day-rain.svg';
import thunderstorms from './thunderstorms.svg';
import rain from './rain.svg';
import snow from './snow.svg';
import sleet from './sleet.svg';
import hurricane from './hurricane.svg';
import wind from './wind.svg';
import sun from './sun.svg';
import extremeRain from './extreme-rain.svg';
import {
  mdiWeatherSunny,
  mdiWeatherCloudy,
  mdiWeatherRainy,
  mdiWeatherNight,
  mdiWeatherFog,
  mdiWeatherHail,
  mdiWeatherLightning,
  mdiWeatherLightningRainy,
  mdiWeatherPartlyCloudy,
  mdiWeatherPouring,
  mdiWeatherSnowy,
  mdiWeatherSnowyRainy,
  mdiWeatherWindy,
  mdiWeatherWindyVariant,
  mdiWeatherHurricane,
} from '@mdi/js';

// Returns the appropriate MDI icon for a weather condition
const getMDIIcon = (iconName: string, fontSize?: string): TemplateResult => {
  if (!iconName) {
    return html`<ha-icon
      icon="mdi:weather-sunny"
      style="font-size:${fontSize}; width: ${fontSize}; height: ${fontSize}"
    />`;
  }
  if (!fontSize) {
    fontSize = '24px'; // Default size if not provided
  }

  return html`<ha-icon
    .icon="${iconName}"
    style="font-size:${fontSize}; width: ${fontSize}; height: ${fontSize}"
  />`;
};

const getMDIAsSVGIcon = (iconPath: string, fontSize?: string): TemplateResult => {
  if (!iconPath) {
    return svg`<svg height=${fontSize} width=${fontSize} viewport="0 0 48 48"><path d="${mdiWeatherSunny}" /></svg>`;
  }
  if (!fontSize) {
    fontSize = '24px'; // Default size if not provided
  }
  return svg`<svg height=${fontSize} width=${fontSize} viewport="0 0 48 48"><path d="${iconPath}" /></svg>`;
};

export const getWeatherIcon = (
  condition: WeatherCondition | string,
  iconType: string,
  fontSize?: string,
  daytime?: boolean
): TemplateResult => {
  if (!condition) {
    return getMDIIcon('mdi:weather-sunny', fontSize);
  }

  const mdiAsSVGMap: Record<WeatherCondition, TemplateResult> = {
    'clear-night': getMDIAsSVGIcon(mdiWeatherNight, fontSize),
    cloudy: getMDIAsSVGIcon(mdiWeatherCloudy, fontSize),
    fog: getMDIAsSVGIcon(mdiWeatherFog, fontSize),
    hail: getMDIAsSVGIcon(mdiWeatherHail, fontSize),
    lightning: getMDIAsSVGIcon(mdiWeatherLightning, fontSize),
    'lightning-rainy': getMDIAsSVGIcon(mdiWeatherLightningRainy, fontSize),
    partlycloudy: getMDIAsSVGIcon(mdiWeatherPartlyCloudy, fontSize),
    pouring: getMDIAsSVGIcon(mdiWeatherPouring, fontSize),
    rainy: getMDIAsSVGIcon(mdiWeatherRainy, fontSize),
    snowy: getMDIAsSVGIcon(mdiWeatherSnowy, fontSize),
    'snowy-rainy': getMDIAsSVGIcon(mdiWeatherSnowyRainy, fontSize),
    sunny: getMDIAsSVGIcon(mdiWeatherSunny, fontSize),
    windy: getMDIAsSVGIcon(mdiWeatherWindy, fontSize),
    'windy-variant': getMDIAsSVGIcon(mdiWeatherWindyVariant, fontSize),
    exceptional: getMDIAsSVGIcon(mdiWeatherHurricane, fontSize),
  };

  const mdiMap: Record<WeatherCondition, TemplateResult> = {
    'clear-night': getMDIIcon('mdi:weather-night', fontSize),
    cloudy: getMDIIcon('mdi:weather-cloudy', fontSize),
    fog: getMDIIcon('mdi:weather-fog', fontSize),
    hail: getMDIIcon('mdi:weather-hail', fontSize),
    lightning: getMDIIcon('mdi:weather-lightning', fontSize),
    'lightning-rainy': getMDIIcon('mdi:weather-lightning-rainy', fontSize),
    partlycloudy: getMDIIcon('mdi:weather-partly-cloudy', fontSize),
    pouring: getMDIIcon('mdi:weather-pouring', fontSize),
    rainy: getMDIIcon('mdi:weather-rainy', fontSize),
    snowy: getMDIIcon('mdi:weather-snowy', fontSize),
    'snowy-rainy': getMDIIcon('mdi:weather-snowy-rainy', fontSize),
    sunny: getMDIIcon('mdi:weather-sunny', fontSize),
    windy: getMDIIcon('mdi:weather-windy', fontSize),
    'windy-variant': getMDIIcon('mdi:weather-windy-variant', fontSize),
    exceptional: getMDIIcon('mdi:weather-hurricane', fontSize),
  };

  const svgMap: Record<WeatherCondition, TemplateResult> = {
    'clear-night': html`<img src="${clearNight}" style="font-size:${fontSize}" />`,
    cloudy: html`<img src="${cloudy}" style="font-size:${fontSize}" />`,
    fog: html`<img src="${fog}}" style="font-size:${fontSize}" />`,
    hail: html`<img src="${hail}" style="font-size:${fontSize}" />`,
    lightning: html`<img src="${thunderstorms}" style="font-size:${fontSize}" />`,
    'lightning-rainy': html`<img src="${thunderstormsDayRain}" style="font-size:${fontSize}" />`,
    partlycloudy: html`<img
      src="${daytime ? partlyCloudyDay : partlyCloudyNight}"
      style="font-size:${fontSize}"
    />`,
    pouring: html`<img src="${extremeRain}" style="font-size:${fontSize}" />`,
    rainy: html`<img src="${rain}" style="font-size:${fontSize}" />`,
    snowy: html`<img src="${snow}" style="font-size:${fontSize}" />`,
    'snowy-rainy': html`<img src="${sleet}" style="font-size:${fontSize}" />`,
    sunny: html`<img src="${sun}" style="font-size:${fontSize}" />`,
    windy: html`<img src="${wind}" style="font-size:${fontSize}" />`,
    'windy-variant': html`<img src="${wind}" style="font-size:${fontSize}" />`,
    exceptional: html`<img src="${hurricane}" style="font-size:${fontSize}" />`,
  };

  return iconType === 'mdi'
    ? mdiMap[condition as WeatherCondition] || getMDIIcon('mdi:weather-sunny', fontSize)
    : iconType === 'mdiAsSVG'
      ? mdiAsSVGMap[condition as WeatherCondition] || html`<img src="${sun}" />`
      : svgMap[condition as WeatherCondition] || html`<img src="${sun}" />`;
};
