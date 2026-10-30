import type { WeatherCondition } from '../../../types/home-assistant';
import { html, type TemplateResult } from 'lit';
import { clearNightBG, partlyCloudyDayBG, partlyCloudyNightBG, sunnyBG } from './clear-sky';
import { cloudyBG, fogBG } from './clouds';
import { extremeRainBG, hailBG, rainBG, sleetBG, snowBG } from './precipitation';
import { hurricaneBG, thunderstormsBG, thunderstormsRainBG, windBG } from './storms';

export const getWeatherBackground = (
  condition: WeatherCondition | string,
  daytime?: boolean,
  width?: number
): TemplateResult => {
  if (!condition) {
    return html``;
  }
  const sceneWidth = width || 400;
  const scenes: Partial<Record<WeatherCondition, () => TemplateResult>> = {
    'clear-night': () => clearNightBG(sceneWidth),
    cloudy: () => cloudyBG(sceneWidth),
    fog: () => fogBG(sceneWidth),
    hail: () => hailBG(sceneWidth),
    lightning: () => thunderstormsBG(sceneWidth),
    'lightning-rainy': () => thunderstormsRainBG(sceneWidth),
    partlycloudy: () => (daytime ? partlyCloudyDayBG(sceneWidth) : partlyCloudyNightBG(sceneWidth)),
    pouring: () => extremeRainBG(sceneWidth),
    rainy: () => rainBG(sceneWidth),
    snowy: () => snowBG(sceneWidth),
    'snowy-rainy': () => sleetBG(sceneWidth),
    sunny: () => sunnyBG(),
    windy: () => windBG(sceneWidth),
    'windy-variant': () => windBG(sceneWidth),
    exceptional: () => hurricaneBG(sceneWidth),
  };

  return scenes[condition as WeatherCondition]?.() ?? html``;
};
