import { getTranslations } from '../../translations';
import { LitElement, html, css, svg, TemplateResult, PropertyValues } from 'lit';
import { query } from 'lit/decorators.js';
import { use, translate as _t, registerTranslateConfig } from 'lit-translate';
import { customElement, property, state } from 'lit/decorators.js';
import type {
  HomeAssistant,
  WeatherEntity,
  WeatherCondition,
  WeatherForecast,
} from '../../types/home-assistant';
import { getWeatherBackground } from './background';
import { getEntityState, isDay } from '../../utils';
import {
  ANIMATED_BACKGROUND_CARD_EDITOR_NAME,
  ANIMATED_BACKGROUND_CARD_NAME,
  type CardConfig,
  schema,
} from './const';
import { getWeatherIcon } from '../../icons';
import { formatDateToWeekDay } from '../../charts';
import '../../charts/hourly-forecast-chart';

registerTranslateConfig({
  // Loads the language by returning a JSON structure for a given language
  loader: lang => {
    return getTranslations(lang);
  },
});

// Debug: Log before decorator application
console.log('🎯 About to apply @customElement decorator to SwissweatherCard (BG)');
console.log('🎯 customElements registry available:', !!customElements);

@customElement(ANIMATED_BACKGROUND_CARD_NAME)
export class SwissWeatherBGCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: CardConfig;
  @query('.temperature') private _tempEl?: HTMLElement;
  @state() private _forecast: WeatherForecast[] = [];
  @state() private _hourly: WeatherForecast[] = [];
  private _forecastLoading = false;
  private _hourlyLoading = false;
  private _lastEntityId: string | undefined;

  private _formatForecastDate = (date: string): string =>
    formatDateToWeekDay(date, this.hass?.selectedLanguage || this.hass?.language || 'en');

  static get styles() {
    return css`
      :host {
        display: block;
        box-shadow: none;
        /* Calculate height according to HA docs: rows * 56px + (rows-1) * 8px gap */
        /* Simplified: height = rows * 64px - 8px */
        height: calc(var(--card-grid-rows, 3) * 64px - 8px);
        min-height: calc(var(--card-grid-rows, 3) * 64px - 8px);
      }

      .temperature {
        text-align: center;
        border-radius: 45px;
        border: 2px solid var(--primary-text-color, #fff);
        background: var(--ha-card-background, var(--card-background-color, #fff));
        padding: 5px 10px;
        float: left;
        box-shadow: var(
          --ha-card-box-shadow,
          0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2)
        );
        item-align: center;
        justify-content: center;
        align-content: center;
        align-items: center;
        position: relative;
        font-size: var(--bg-temp-font-size, 36px);
        font-weight: bold;
        text-align: center;
        z-index: 1;
      }

      .img-svg {
        position: absolute;
        margin-top: var(--bg-temp-img-top, 36px);
        inset: 0;
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        min-height: 200px;
        box-shadow: var(
          --ha-card-box-shadow,
          0 4px 20px var(--box-shadow-color, rgba(0, 0, 0, 0.1))
        );
      }

      .img-photo {
        position: absolute;
        margin-top: var(--bg-temp-img-top, 36px);
        inset: 0;
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
        min-height: 200px;
        isolation: isolate;
        box-shadow: var(
          --ha-card-box-shadow,
          0 4px 20px var(--box-shadow-color, rgba(0, 0, 0, 0.1))
        );
        transition:
          filter 1.1s ease,
          transform 1.1s ease;
      }

      .img-photo.day {
        filter: saturate(1.04) brightness(1.03) hue-rotate(0deg);
      }

      .img-photo.night {
        filter: saturate(0.86) brightness(0.82) hue-rotate(-8deg);
      }

      .photo-layer {
        position: absolute;
        inset: 0;
      }

      .photo-base {
        animation: bg-pan 34s ease-in-out infinite alternate;
      }

      .photo-circadian {
        opacity: 0;
        transition: opacity 1.1s ease;
        z-index: 1;
        pointer-events: none;
      }

      .img-photo.day .photo-circadian {
        background:
          radial-gradient(circle at 72% 16%, rgba(255, 239, 181, 0.26), rgba(255, 239, 181, 0) 44%),
          linear-gradient(180deg, rgba(255, 245, 209, 0.1) 0%, rgba(255, 255, 255, 0) 72%);
        mix-blend-mode: screen;
        opacity: 0.58;
      }

      .img-photo.night .photo-circadian {
        background:
          radial-gradient(circle at 26% 18%, rgba(127, 161, 214, 0.2), rgba(127, 161, 214, 0) 40%),
          linear-gradient(180deg, rgba(7, 15, 33, 0.3) 0%, rgba(4, 10, 24, 0.5) 100%);
        mix-blend-mode: multiply;
        opacity: 0.74;
      }

      .img-photo.mood-sunny.day .photo-base {
        background:
          radial-gradient(circle at 75% 20%, rgba(255, 250, 196, 0.95), rgba(255, 250, 196, 0) 45%),
          linear-gradient(
            160deg,
            rgba(123, 198, 250, 0.95) 0%,
            rgba(88, 163, 221, 0.92) 46%,
            rgba(67, 138, 191, 0.96) 100%
          );
      }

      .img-photo.mood-sunny.night .photo-base {
        background:
          radial-gradient(circle at 78% 18%, rgba(80, 120, 160, 0.12), rgba(80, 120, 160, 0) 40%),
          linear-gradient(
            165deg,
            rgba(12, 24, 45, 0.99) 0%,
            rgba(8, 16, 32, 0.99) 58%,
            rgba(2, 6, 15, 1) 100%
          );
      }

      .img-photo.mood-sunny.clear-night .photo-base,
      .img-photo.clear-night .photo-base {
        background: linear-gradient(
          180deg,
          rgba(5, 16, 38, 0.99) 0%,
          rgba(4, 12, 28, 1) 52%,
          rgba(1, 6, 16, 1) 100%
        );
        animation: none;
      }

      .img-photo.clear-night .photo-clouds {
        opacity: 0;
      }

      .img-photo.clear-night .photo-clouds-front {
        opacity: 0;
      }

      .img-photo.clear-night .photo-clouds-depth {
        opacity: 0;
      }

      .img-photo.clear-night .photo-cloud-shadow {
        opacity: 0;
      }

      .img-photo.clear-night .photo-sun-rays {
        opacity: 0;
        animation: none;
        display: none;
      }

      .img-photo.mood-cloudy .photo-sun-rays {
        opacity: 0;
        animation: none;
        display: none;
      }

      .img-photo.partly-cloudy .photo-sun-rays {
        opacity: 0;
        animation: none;
        display: none;
      }

      .img-photo.mood-cloudy.day .photo-base {
        background:
          radial-gradient(circle at 30% 15%, rgba(226, 238, 245, 0.6), rgba(226, 238, 245, 0) 40%),
          linear-gradient(
            160deg,
            rgba(144, 168, 183, 0.95) 0%,
            rgba(122, 147, 165, 0.96) 52%,
            rgba(96, 121, 141, 0.98) 100%
          );
      }

      .img-photo.mood-cloudy.night .photo-base {
        background:
          radial-gradient(circle at 25% 12%, rgba(123, 140, 166, 0.24), rgba(123, 140, 166, 0) 44%),
          linear-gradient(
            165deg,
            rgba(40, 52, 71, 0.98) 0%,
            rgba(29, 40, 56, 0.98) 56%,
            rgba(20, 28, 40, 1) 100%
          );
      }

      .img-photo.foggy.day .photo-base {
        background: linear-gradient(
          180deg,
          rgba(158, 176, 188, 0.98) 0%,
          rgba(146, 165, 179, 0.99) 54%,
          rgba(132, 152, 168, 1) 100%
        );
      }

      .img-photo.foggy.night .photo-base {
        background: linear-gradient(
          180deg,
          rgba(41, 54, 68, 0.99) 0%,
          rgba(33, 45, 59, 1) 52%,
          rgba(24, 35, 48, 1) 100%
        );
      }

      .img-photo.mood-rainy.day .photo-base {
        background:
          radial-gradient(circle at 72% 8%, rgba(226, 239, 252, 0.35), rgba(226, 239, 252, 0) 45%),
          linear-gradient(
            168deg,
            rgba(95, 120, 139, 0.95) 0%,
            rgba(73, 97, 118, 0.97) 50%,
            rgba(54, 78, 96, 0.99) 100%
          );
      }

      .img-photo.mood-rainy.night .photo-base {
        background:
          radial-gradient(circle at 72% 12%, rgba(122, 145, 170, 0.14), rgba(122, 145, 170, 0) 42%),
          linear-gradient(
            168deg,
            rgba(25, 36, 54, 0.99) 0%,
            rgba(17, 26, 42, 1) 55%,
            rgba(10, 16, 27, 1) 100%
          );
      }

      .photo-clouds {
        background:
          radial-gradient(
            118% 86% at 6% 24%,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.08) 48%,
            rgba(255, 255, 255, 0) 62%
          ),
          radial-gradient(
            120% 90% at 28% 20%,
            rgba(255, 255, 255, 0.48),
            rgba(255, 255, 255, 0.08) 50%,
            rgba(255, 255, 255, 0) 64%
          ),
          radial-gradient(
            124% 92% at 50% 22%,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 64%
          ),
          radial-gradient(
            118% 88% at 72% 20%,
            rgba(255, 255, 255, 0.47),
            rgba(255, 255, 255, 0.08) 48%,
            rgba(255, 255, 255, 0) 62%
          ),
          radial-gradient(
            114% 84% at 95% 25%,
            rgba(255, 255, 255, 0.52),
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 64%
          ),
          linear-gradient(
            180deg,
            rgba(249, 253, 255, 0.42) 0%,
            rgba(233, 243, 252, 0.2) 34%,
            rgba(210, 224, 239, 0.04) 58%,
            rgba(210, 224, 239, 0) 74%
          ),
          linear-gradient(
            180deg,
            rgba(172, 194, 220, 0.18) 0%,
            rgba(172, 194, 220, 0.08) 46%,
            rgba(183, 205, 230, 0) 72%
          );
        filter: blur(5.5px) contrast(1.08) saturate(1.06) brightness(1.03);
        animation: cloud-drift 36s ease-in-out infinite alternate;
        opacity: 0.78;
      }

      .photo-clouds-front {
        background:
          radial-gradient(
            94% 74% at 0% 36%,
            rgba(255, 255, 255, 0.88),
            rgba(255, 255, 255, 0.16) 52%,
            rgba(255, 255, 255, 0) 66%
          ),
          radial-gradient(
            98% 76% at 22% 30%,
            rgba(255, 255, 255, 0.86),
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0) 64%
          ),
          radial-gradient(
            102% 78% at 48% 34%,
            rgba(255, 255, 255, 0.84),
            rgba(255, 255, 255, 0.16) 50%,
            rgba(255, 255, 255, 0) 66%
          ),
          radial-gradient(
            96% 74% at 74% 30%,
            rgba(255, 255, 255, 0.82),
            rgba(255, 255, 255, 0.14) 50%,
            rgba(255, 255, 255, 0) 64%
          ),
          radial-gradient(
            92% 72% at 100% 34%,
            rgba(255, 255, 255, 0.86),
            rgba(255, 255, 255, 0.16) 50%,
            rgba(255, 255, 255, 0) 66%
          ),
          linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.34) 0%,
            rgba(242, 249, 255, 0.18) 44%,
            rgba(211, 226, 242, 0.1) 64%,
            rgba(255, 255, 255, 0) 74%
          );
        filter: blur(2.8px) contrast(1.12) saturate(1.05)
          drop-shadow(0 6px 8px rgba(122, 149, 178, 0.18));
        animation: cloud-drift-front 22s ease-in-out infinite alternate;
        mix-blend-mode: normal;
        opacity: 0;
      }

      .photo-clouds-depth {
        background:
          radial-gradient(
            118% 86% at 14% 68%,
            rgba(217, 232, 248, 0.42),
            rgba(255, 255, 255, 0.08) 52%,
            rgba(255, 255, 255, 0) 68%
          ),
          radial-gradient(
            122% 90% at 46% 62%,
            rgba(210, 226, 243, 0.36),
            rgba(255, 255, 255, 0.08) 50%,
            rgba(255, 255, 255, 0) 66%
          ),
          radial-gradient(
            118% 88% at 78% 70%,
            rgba(215, 231, 247, 0.38),
            rgba(255, 255, 255, 0.08) 50%,
            rgba(255, 255, 255, 0) 66%
          ),
          linear-gradient(
            180deg,
            rgba(193, 214, 237, 0.28) 0%,
            rgba(172, 198, 225, 0.14) 44%,
            rgba(162, 189, 217, 0) 72%
          );
        filter: blur(7.5px) saturate(1.04);
        animation: cloud-drift-depth 28s ease-in-out infinite alternate;
        opacity: 0;
      }

      .img-photo.mood-cloudy .photo-clouds {
        opacity: 0.88;
      }

      .img-photo.mood-cloudy .photo-clouds-front {
        opacity: 0.8;
      }

      .img-photo.mood-cloudy .photo-clouds-depth {
        opacity: 0.62;
      }

      .img-photo.mood-rainy .photo-clouds {
        opacity: 0.94;
      }

      .img-photo.mood-rainy .photo-clouds-front {
        opacity: 0.9;
      }

      .img-photo.mood-rainy .photo-clouds-depth {
        opacity: 0.8;
      }

      .img-photo.mood-cloudy.night .photo-clouds,
      .img-photo.mood-rainy.night .photo-clouds {
        filter: blur(7px) saturate(0.9) brightness(0.88);
      }

      .img-photo.mood-cloudy.night .photo-clouds-front,
      .img-photo.mood-rainy.night .photo-clouds-front {
        mix-blend-mode: normal;
        filter: blur(4.8px) brightness(0.8);
      }

      .img-photo.mood-cloudy.night .photo-clouds-depth,
      .img-photo.mood-rainy.night .photo-clouds-depth {
        filter: blur(9px) saturate(0.86) brightness(0.78);
        opacity: 0.7;
      }

      .img-photo.partly-cloudy .photo-clouds {
        opacity: 0.62;
        filter: blur(9px) saturate(0.95);
      }

      .img-photo.partly-cloudy .photo-clouds-front {
        opacity: 0.36;
        filter: blur(7px) brightness(0.98);
      }

      .img-photo.partly-cloudy .photo-clouds-depth {
        opacity: 0.28;
        filter: blur(13px) saturate(0.9);
      }

      .img-photo.partly-cloudy.night .photo-clouds {
        opacity: 0.54;
        filter: blur(10px) saturate(0.82) brightness(0.9);
      }

      .img-photo.partly-cloudy.night .photo-clouds-front {
        opacity: 0.3;
        filter: blur(8px) brightness(0.84);
        mix-blend-mode: normal;
      }

      .img-photo.partly-cloudy.night .photo-clouds-depth {
        opacity: 0.24;
        filter: blur(14px) saturate(0.8) brightness(0.84);
      }

      .photo-fog {
        background:
          radial-gradient(
            130% 62% at 18% 74%,
            rgba(235, 243, 250, 0.34),
            rgba(235, 243, 250, 0) 72%
          ),
          radial-gradient(
            136% 66% at 72% 70%,
            rgba(229, 239, 248, 0.3),
            rgba(229, 239, 248, 0) 74%
          ),
          linear-gradient(
            180deg,
            rgba(217, 229, 240, 0.08) 0%,
            rgba(217, 229, 240, 0.24) 46%,
            rgba(217, 229, 240, 0.38) 100%
          );
        mix-blend-mode: screen;
        opacity: 0;
        animation: fog-drift 24s ease-in-out infinite alternate;
        z-index: 3;
        pointer-events: none;
      }

      .img-photo.foggy .photo-fog {
        opacity: 0.88;
      }

      .img-photo.foggy .photo-clouds {
        filter: blur(16px) saturate(0.72) brightness(0.94);
        opacity: 0.6;
      }

      .img-photo.foggy .photo-clouds-front {
        filter: blur(13px) saturate(0.68) brightness(0.92);
        opacity: 0.46;
      }

      .img-photo.foggy .photo-clouds-depth {
        filter: blur(20px) saturate(0.65) brightness(0.9);
        opacity: 0.44;
      }

      .img-photo.foggy .photo-cloud-shadow {
        opacity: 0.16;
      }

      .img-photo.foggy .photo-wind-streaks {
        opacity: 0;
      }

      .img-photo.sun-bloom.day .photo-sun-rays {
        opacity: 0.8;
      }

      .img-photo.windy .photo-wind-streaks {
        opacity: 1;
        height: 78%;
        animation-duration: 1.7s;
        background-size:
          260% 100%,
          240% 100%;
        background-position:
          -18% 18%,
          -58% 60%;
        filter: blur(0.15px);
      }

      .img-photo.windy .photo-wind-streaks::after {
        content: '';
        position: absolute;
        inset: 4% -8% 0 -8%;
        background-image:
          linear-gradient(
            114deg,
            rgba(224, 241, 255, 0) 0%,
            rgba(224, 241, 255, 0.3) 24%,
            rgba(224, 241, 255, 0.45) 38%,
            rgba(224, 241, 255, 0) 58%
          ),
          linear-gradient(
            114deg,
            rgba(204, 229, 250, 0) 14%,
            rgba(204, 229, 250, 0.24) 34%,
            rgba(204, 229, 250, 0.38) 52%,
            rgba(204, 229, 250, 0) 70%
          );
        background-size:
          280% 100%,
          250% 100%;
        background-position:
          -46% 24%,
          -86% 68%;
        animation: wind-streak-sweep-strong 1.35s linear infinite;
        opacity: 0.88;
        mix-blend-mode: screen;
        pointer-events: none;
      }

      .img-photo.windy .photo-clouds {
        animation-duration: 20s;
      }

      .img-photo.windy .photo-clouds-front {
        animation-duration: 10s;
      }

      .img-photo.windy .photo-clouds-depth {
        animation-duration: 14s;
      }

      .photo-rain {
        display: none;
      }

      .weather-particles {
        position: absolute;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
        z-index: 4;
      }

      .weather-cluster {
        position: absolute;
        top: 14%;
        width: 28%;
        height: 86%;
      }

      .weather-cluster.c1 {
        left: 4%;
      }

      .weather-cluster.c2 {
        left: 34%;
      }

      .weather-cluster.c3 {
        left: 64%;
      }

      .rain-drop {
        position: absolute;
        top: var(--start-y, -14%);
        left: var(--x, 50%);
        width: var(--w, 2px);
        height: var(--h, 22px);
        border-radius: 999px;
        background: linear-gradient(
          to bottom,
          rgba(224, 241, 255, 0),
          rgba(224, 241, 255, 0.85) 35%,
          rgba(168, 214, 255, 0.9) 100%
        );
        filter: blur(0.2px);
        opacity: var(--opacity, 0.7);
        mix-blend-mode: screen;
        animation: rain-drop-fall var(--duration, 1.1s) linear infinite;
        animation-delay: var(--delay, 0s);
      }

      .snow-flake {
        position: absolute;
        top: -12%;
        left: var(--x, 50%);
        width: var(--size, 4px);
        height: var(--size, 4px);
        background: transparent;
        opacity: var(--opacity, 0.9);
        animation: snow-flake-fall var(--duration, 7s) linear infinite;
        animation-delay: var(--delay, 0s);
        z-index: 5;
      }

      .hail-stone {
        position: absolute;
        top: -14%;
        left: var(--x, 50%);
        width: var(--size, 4.6px);
        height: var(--size, 4.6px);
        border-radius: 999px;
        background: radial-gradient(
          circle at 28% 28%,
          rgba(248, 253, 255, 1),
          rgba(199, 224, 246, 0.95) 70%,
          rgba(136, 174, 209, 0.92) 100%
        );
        box-shadow:
          inset -1px -1px 1px rgba(97, 137, 177, 0.52),
          0 0 6px rgba(228, 241, 255, 0.6);
        opacity: var(--opacity, 0.84);
        animation: hail-stone-fall var(--duration, 0.7s) linear infinite;
        animation-delay: var(--delay, 0s);
        z-index: 5;
      }

      .img-photo.mood-cloudy .hail-stone {
        filter: contrast(1.08) brightness(1.06);
      }

      .rain-drizzle {
        position: absolute;
        top: var(--start-y, -12%);
        left: var(--x, 50%);
        width: var(--w, 1.1px);
        height: var(--h, 11px);
        border-radius: 999px;
        background: linear-gradient(
          to bottom,
          rgba(234, 245, 255, 0),
          rgba(234, 245, 255, 0.55) 40%,
          rgba(182, 216, 246, 0.7) 100%
        );
        filter: blur(0.3px);
        opacity: var(--opacity, 0.4);
        mix-blend-mode: screen;
        animation: rain-drop-fall var(--duration, 1.45s) linear infinite;
        animation-delay: var(--delay, 0s);
        z-index: 4;
      }

      .snow-flake::before,
      .snow-flake::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.98),
          rgba(222, 240, 255, 0.96)
        );
        border-radius: 999px;
      }

      .snow-flake::before {
        width: max(1px, calc(var(--size, 4px) * 0.22));
        height: var(--size, 4px);
        box-shadow:
          0 0 6px rgba(255, 255, 255, 0.8),
          0 0 2px rgba(210, 233, 255, 0.9);
      }

      .snow-flake::after {
        width: var(--size, 4px);
        height: max(1px, calc(var(--size, 4px) * 0.22));
      }

      .snow-flake i,
      .snow-flake b {
        position: absolute;
        left: 50%;
        top: 50%;
        width: max(1px, calc(var(--size, 4px) * 0.18));
        height: calc(var(--size, 4px) * 0.86);
        border-radius: 999px;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.92),
          rgba(216, 236, 255, 0.88)
        );
        transform-origin: center;
      }

      .snow-flake i {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      .snow-flake b {
        transform: translate(-50%, -50%) rotate(-45deg);
      }

      .photo-sun-rays {
        background: conic-gradient(
          from 20deg at 76% 20%,
          rgba(255, 249, 189, 0.28) 0deg,
          rgba(255, 249, 189, 0) 35deg,
          rgba(255, 246, 177, 0.24) 52deg,
          rgba(255, 246, 177, 0) 90deg,
          rgba(255, 247, 181, 0.28) 116deg,
          rgba(255, 247, 181, 0) 160deg,
          rgba(255, 249, 189, 0.22) 198deg,
          rgba(255, 249, 189, 0) 240deg,
          rgba(255, 250, 200, 0.26) 280deg,
          rgba(255, 250, 200, 0) 320deg,
          rgba(255, 249, 189, 0.28) 360deg
        );
        mix-blend-mode: screen;
        opacity: 0;
        animation: sun-ray-sweep 18s linear infinite;
        z-index: 2;
      }

      .photo-night-stars {
        background-image:
          radial-gradient(circle at 8% 18%, rgba(255, 247, 201, 0.95) 0 1.2px, transparent 1.9px),
          radial-gradient(circle at 16% 34%, rgba(235, 242, 255, 0.95) 0 1px, transparent 1.7px),
          radial-gradient(circle at 24% 12%, rgba(255, 247, 201, 0.88) 0 1.4px, transparent 2.1px),
          radial-gradient(circle at 34% 28%, rgba(235, 242, 255, 0.92) 0 1.1px, transparent 1.8px),
          radial-gradient(circle at 42% 16%, rgba(255, 247, 201, 0.9) 0 1.3px, transparent 2px),
          radial-gradient(circle at 56% 24%, rgba(235, 242, 255, 0.95) 0 1px, transparent 1.8px),
          radial-gradient(circle at 68% 10%, rgba(255, 247, 201, 0.9) 0 1.5px, transparent 2.2px),
          radial-gradient(circle at 78% 22%, rgba(235, 242, 255, 0.9) 0 1.1px, transparent 1.8px),
          radial-gradient(circle at 88% 14%, rgba(255, 247, 201, 0.9) 0 1.3px, transparent 2px);
        opacity: 0;
        filter: drop-shadow(0 0 4px rgba(255, 244, 180, 0.22));
        animation: night-stars-twinkle 5.8s ease-in-out infinite alternate;
        z-index: 1;
        pointer-events: none;
      }

      .img-photo.clear-night .photo-night-stars {
        opacity: 0.92;
      }

      .photo-wind-streaks {
        background-image:
          linear-gradient(
            112deg,
            rgba(225, 239, 255, 0) 0%,
            rgba(225, 239, 255, 0.18) 26%,
            rgba(225, 239, 255, 0.34) 38%,
            rgba(225, 239, 255, 0) 54%
          ),
          linear-gradient(
            112deg,
            rgba(213, 233, 255, 0) 18%,
            rgba(213, 233, 255, 0.2) 34%,
            rgba(213, 233, 255, 0.3) 48%,
            rgba(213, 233, 255, 0) 64%
          );
        background-size:
          220% 100%,
          200% 100%;
        background-position:
          0% 20%,
          -36% 62%;
        opacity: 0;
        animation: wind-streak-sweep 2.6s linear infinite;
        z-index: 4;
        pointer-events: none;
        inset: 0 0 auto 0;
        height: 68%;
        -webkit-mask-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.95) 0%,
          rgba(0, 0, 0, 0.82) 58%,
          rgba(0, 0, 0, 0) 100%
        );
        mask-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.95) 0%,
          rgba(0, 0, 0, 0.82) 58%,
          rgba(0, 0, 0, 0) 100%
        );
        mix-blend-mode: screen;
      }

      .photo-lightning {
        background: radial-gradient(
          circle at var(--flash-x, 52%) var(--flash-y, 26%),
          rgba(255, 246, 169, 0.95),
          rgba(255, 246, 169, 0) 52%
        );
        opacity: 0;
        mix-blend-mode: screen;
        animation: lightning-flash var(--flash-duration, 7s) infinite;
        animation-delay: var(--delay, 0s);
        z-index: 6;
      }

      .photo-lightning-bolt {
        position: absolute;
        top: var(--bolt-top, 8%);
        left: var(--bolt-left, 54%);
        width: var(--bolt-width, 6px);
        height: var(--bolt-height, 40%);
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.9) 22%,
          rgba(255, 241, 168, 0.95) 100%
        );
        clip-path: polygon(48% 0, 70% 0, 44% 36%, 68% 36%, 30% 100%, 44% 56%, 24% 56%);
        filter: drop-shadow(0 0 8px rgba(255, 248, 190, 0.9));
        opacity: 0;
        transform: rotate(var(--bolt-rotate, 0deg));
        animation: lightning-bolt var(--flash-duration, 7s) infinite;
        animation-delay: var(--delay, 0s);
        z-index: 7;
      }

      .photo-cloud-shadow {
        background:
          radial-gradient(ellipse at 22% 42%, rgba(42, 66, 94, 0.2), rgba(42, 66, 94, 0) 48%),
          radial-gradient(ellipse at 58% 40%, rgba(45, 70, 99, 0.16), rgba(45, 70, 99, 0) 46%),
          radial-gradient(ellipse at 85% 44%, rgba(42, 67, 96, 0.2), rgba(42, 67, 96, 0) 49%);
        animation: cloud-shadow-drift 20s ease-in-out infinite alternate;
        opacity: 0.36;
        mix-blend-mode: soft-light;
      }

      .photo-vignette {
        background: radial-gradient(
          circle at center,
          rgba(0, 0, 0, 0) 52%,
          rgba(0, 0, 0, 0.33) 100%
        );
        z-index: 3;
      }

      .photo-grain {
        background-image: radial-gradient(rgba(255, 255, 255, 0.2) 0.6px, transparent 0.8px);
        background-size: 3px 3px;
        opacity: 0.1;
        mix-blend-mode: soft-light;
        animation: grain-shift 0.25s steps(2, end) infinite;
        z-index: 8;
      }

      @keyframes bg-pan {
        0% {
          transform: scale(1.02) translate3d(0, 0, 0);
        }
        100% {
          transform: scale(1.07) translate3d(-1.5%, -1.2%, 0);
        }
      }

      @keyframes cloud-drift {
        0% {
          transform: translate3d(-2%, 0, 0) scale(1.02);
        }
        100% {
          transform: translate3d(2%, -1%, 0) scale(1.06);
        }
      }

      @keyframes cloud-drift-depth {
        0% {
          transform: translate3d(2%, 1%, 0) scale(1.04);
        }
        100% {
          transform: translate3d(-3%, -1%, 0) scale(1.08);
        }
      }

      @keyframes cloud-drift-front {
        0% {
          transform: translate3d(-3%, 1%, 0) scale(1.03);
        }
        100% {
          transform: translate3d(4%, -1%, 0) scale(1.08);
        }
      }

      @keyframes cloud-shadow-drift {
        0% {
          transform: translate3d(-2%, 1%, 0) scale(1.01);
        }
        100% {
          transform: translate3d(2%, -1%, 0) scale(1.06);
        }
      }

      @keyframes rain-fall {
        0% {
          transform: translateY(-14px);
        }
        100% {
          transform: translateY(14px);
        }
      }

      @keyframes rain-drop-fall {
        0% {
          transform: translate3d(0, -12%, 0) rotate(10deg);
        }
        100% {
          transform: translate3d(var(--drift, 6px), 132%, 0) rotate(10deg);
        }
      }

      @keyframes hail-stone-fall {
        0% {
          transform: translate3d(0, -10%, 0) scale(0.95);
        }
        82% {
          transform: translate3d(var(--drift, 4px), 126%, 0) scale(1);
        }
        100% {
          transform: translate3d(calc(var(--drift, 4px) * 1.15), 138%, 0) scale(0.92);
        }
      }

      @keyframes snow-flake-fall {
        0% {
          top: -12%;
          transform: translate3d(0, 0, 0) rotate(0deg);
        }
        35% {
          transform: translate3d(var(--drift, 10px), 0, 0) rotate(120deg);
        }
        70% {
          transform: translate3d(var(--drift-back, -10px), 0, 0) rotate(220deg);
        }
        100% {
          top: 112%;
          transform: translate3d(0, 0, 0) rotate(360deg);
        }
      }

      @keyframes sun-ray-sweep {
        0% {
          transform: rotate(0deg) scale(1);
          opacity: 0.55;
        }
        50% {
          transform: rotate(8deg) scale(1.04);
          opacity: 0.9;
        }
        100% {
          transform: rotate(16deg) scale(1);
          opacity: 0.58;
        }
      }

      @keyframes wind-streak-sweep {
        0% {
          background-position:
            0% 20%,
            -36% 62%;
          opacity: 0.55;
        }
        50% {
          background-position:
            76% 24%,
            46% 66%;
          opacity: 0.95;
        }
        100% {
          background-position:
            156% 28%,
            128% 70%;
          opacity: 0.45;
        }
      }

      @keyframes wind-streak-sweep-strong {
        0% {
          background-position:
            -46% 24%,
            -86% 68%;
          opacity: 0.66;
        }
        50% {
          background-position:
            72% 20%,
            38% 66%;
          opacity: 0.98;
        }
        100% {
          background-position:
            188% 16%,
            152% 62%;
          opacity: 0.62;
        }
      }

      @keyframes fog-drift {
        0% {
          transform: translate3d(-1.2%, 0.4%, 0) scale(1.01);
        }
        100% {
          transform: translate3d(1.8%, -0.6%, 0) scale(1.04);
        }
      }

      @keyframes lightning-bolt {
        0%,
        83%,
        100% {
          opacity: 0;
        }
        84% {
          opacity: 1;
        }
        85% {
          opacity: 0;
        }
        86% {
          opacity: 0.85;
        }
        87% {
          opacity: 0;
        }
      }

      @keyframes lightning-flash {
        0%,
        83%,
        100% {
          opacity: 0;
        }
        84% {
          opacity: 0.92;
        }
        85% {
          opacity: 0;
        }
        86% {
          opacity: 0.72;
        }
        87% {
          opacity: 0;
        }
      }

      @keyframes night-stars-twinkle {
        0% {
          opacity: 0.72;
          transform: translate3d(0, 0, 0) scale(1);
        }
        50% {
          opacity: 1;
          transform: translate3d(0.4%, -0.3%, 0) scale(1.01);
        }
        100% {
          opacity: 0.82;
          transform: translate3d(-0.4%, 0.2%, 0) scale(1.02);
        }
      }

      @keyframes grain-shift {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(1px, 1px);
        }
      }
      .condition {
        position: absolute;
        top: calc(var(--bg-temp-font-size, 36px) + 16px);
        right: 16px;
        margin-left: 16px;
        font-size: 16px;
        color: var(--primary-text-color, #fff);
        text-align: right;
      }
      .forecast-temps {
        position: absolute;
        top: calc(var(--bg-temp-font-size, 36px) * 2 + 16px);
        left: 16px;
        font-size: 14px;
        color: var(--primary-text-color, #fff);
        max-width: calc(100% - 32px); /* honor left/right margins */
        display: flex;
        flex-direction: row;
        gap: 10px;
      }
      .sun-times {
        position: absolute;
        top: calc(var(--bg-temp-font-size, 36px) * 2 + 16px);
        right: 16px;
        display: flex;
        gap: 12px;
        align-items: center;
        color: var(--primary-text-color, #fff);
        font-size: 14px;
        z-index: 12; /* above photo overlays */
      }
      .forecast-mini {
        position: absolute;
        bottom: 16px; /* align vertically with bottom spacing */
        right: 16px; /* align to the right edge */
        z-index: 12; /* keep charts above photo overlays */
        max-width: calc(100% - 32px); /* honor left/right margins */
        isolation: isolate;
      }
      @media (max-width: 400px) {
        .forecast-mini {
          right: 12px;
          bottom: 12px;
          max-width: calc(100% - 24px);
        }
      }
      .temp-high {
        font-weight: bold;
        color: var(--primary-text-color, #fff);
      }
      .temp-low {
        color: var(--primary-text-color, #fff);
      }
      @media (max-width: 400px) {
        .temperature {
          font-size: calc(var(--bg-temp-font-size, 36px) * 0.8);
          padding: 4px 8px;
        }
        .condition {
          font-size: 14px;
        }
        .forecast-temps {
          font-size: 12px;
        }
      }
      @media (max-width: 768px) {
        .metrics-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `;
  }

  public setConfig(config: CardConfig): void {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this.config = config;
  }

  public getCardSize(): number {
    return this.config?.grid_options?.rows ?? 4;
  }
  // The rules for sizing your card in the grid in sections view
  public getGridOptions() {
    return {
      rows: this.config?.grid_options?.rows ?? 3,
      columns: this.config?.grid_options?.columns ?? 12,
      min_columns: 12,
      max_columns: 48,
      min_rows: 4,
      max_rows: 8,
    };
  }

  public static getStubConfig() {
    return {
      type: `custom:${ANIMATED_BACKGROUND_CARD_NAME}`,
      entity: '',
    };
  }

  public static getConfigElement() {
    // Return the inline editor element
    return document.createElement(ANIMATED_BACKGROUND_CARD_EDITOR_NAME);
  }

  // Schema for the visual editor
  public static getConfigSchema() {
    return schema;
  }

  protected updated(changed: PropertyValues): void {
    super.updated(changed);
    if (this.hass && this.config?.entity) {
      if (this._lastEntityId !== this.config.entity) {
        this._lastEntityId = this.config.entity;
        // Load per mode
        const mode = this.config.forecast_mode || 'daily';
        if (mode === 'daily') this._loadDailyForecast();
        if (mode === 'hourly') this._loadHourlyForecast();
      }
      // Ensure day min/max can render even in hourly/none mode
      if (
        this.config.show_day_temps !== false &&
        !this._forecastLoading &&
        this._forecast.length === 0
      ) {
        this._loadDailyForecast();
      }
    }
  }

  public render(): TemplateResult {
    use((this.hass.selectedLanguage || this.hass.language || 'en').substring(0, 2));

    if (!this.hass || !this.config) {
      return html``;
    }
    const gridRows = this.config?.grid_options?.rows ?? 3;

    // Set CSS variable for card height calculation
    this.style.setProperty('--card-grid-rows', gridRows.toString());

    const weatherEntity = getEntityState(this.hass, this.config.entity) as WeatherEntity;
    const temperature = weatherEntity.attributes.temperature;
    const condition = weatherEntity.state as WeatherCondition;
    const daytime = isDay(this.hass, this.config);

    const chartWidth = this.clientWidth || 300;
    const height = gridRows * 64 - 8;
    // Apply CSS variable for temperature font size
    const fs = this.config?.temperature_font_size;
    const fontSizePx = typeof fs === 'number' && fs > 0 ? `${fs}px` : '36px';
    this.style.setProperty('--bg-temp-font-size', fontSizePx);
    this.style.setProperty('--bg-temp-img-top', `calc(${fontSizePx})`);
    const day =
      this._forecast && this._forecast.length > 0
        ? (this._forecast[0] as WeatherForecast)
        : weatherEntity.attributes.forecast
          ? (weatherEntity.attributes.forecast[0] as WeatherForecast)
          : null;
    const sunEntityId = this.config.sun_entity;
    const sunState = sunEntityId ? (this.hass.states[sunEntityId] as any) : undefined;
    const nextSunrise = sunState?.attributes?.next_rising
      ? new Date(sunState.attributes.next_rising)
      : undefined;
    const nextSunset = sunState?.attributes?.next_setting
      ? new Date(sunState.attributes.next_setting)
      : undefined;
    // Format times as HH:MM according to HA language
    const locale = (this.hass.selectedLanguage || this.hass.language || 'en').replace('_', '-');
    const fmt = (d?: Date) =>
      d ? d.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' }) : '--:--';
    return html`
      <div>
        <div class="temperature">
          ${typeof temperature === 'number' && !isNaN(temperature) ? temperature : '--'}°
        </div>
        ${
          condition
            ? html`${
                  this.config.photo_mode === true
                    ? this._renderPhotoLikeBackground(condition, daytime)
                    : html`<div class="img-svg">
                        <svg
                          viewBox="0 0 ${chartWidth} ${height}"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          preserveAspectRatio="xMidYMid slice"
                        >
                          ${
                            chartWidth > 0
                              ? getWeatherBackground(condition, daytime, chartWidth)
                              : svg``
                          }
                        </svg>
                      </div>`
                }
                ${
                  day && this.config.show_day_temps !== false
                    ? html`
                        <div class="forecast-temps">
                          <span class="temp-high">
                            <ha-icon icon="mdi:arrow-up-bold"></ha-icon>
                            ${Math.round(day.temperature)}°
                          </span>
                          <span class="temp-low">
                            <ha-icon icon="mdi:arrow-down-bold"></ha-icon> ${Math.round(
                              day.templow || day.temperature - 5
                            )}°
                          </span>
                        </div>
                      `
                    : ''
                }
                ${
                  sunEntityId && this.config.show_sun_times !== false && condition !== 'clear-night'
                    ? html`
                        <div class="sun-times">
                          <span title="${_t('bg_card.sunrise')}">
                            <ha-icon icon="mdi:weather-sunset-up"></ha-icon> ${fmt(nextSunrise)}
                          </span>
                          <span title="${_t('bg_card.sunset')}">
                            <ha-icon icon="mdi:weather-sunset-down"></ha-icon> ${fmt(nextSunset)}
                          </span>
                        </div>
                      `
                    : ''
                }
                ${
                  (this.config.forecast_mode || 'daily') === 'daily' && this._forecast.length > 0
                    ? html`
                        <div class="forecast-mini">
                          <daily-forecast-chart
                            .forecast=${this._forecast}
                            .forecastLoading=${this._forecastLoading}
                            .show_forecast=${true}
                            .config=${{ ...this.config, enable_animate_weather_icons: true }}
                            .compact=${true}
                            .startTomorrow=${true}
                            .maxDays=${5}
                            .alignRight=${true}
                            ._t=${_t}
                            .getWeatherIcon=${getWeatherIcon}
                            .formatDate=${this._formatForecastDate}
                          ></daily-forecast-chart>
                        </div>
                      `
                    : html``
                }
                ${
                  (this.config.forecast_mode || 'daily') === 'hourly' && this._hourly.length > 0
                    ? html`
                        <div class="forecast-mini">
                          <hourly-forecast-chart
                            .hourlyForecast=${this._hourly}
                            .forecastLoading=${this._hourlyLoading}
                            .show_forecast=${true}
                            .config=${{ ...this.config, enable_animate_weather_icons: true }}
                            .compact=${true}
                            .maxHours=${5}
                            .alignRight=${true}
                            ._t=${_t}
                            .getWeatherIcon=${getWeatherIcon}
                          ></hourly-forecast-chart>
                        </div>
                      `
                    : html``
                }
                <div class="condition">${_t(condition)}</div> `
            : html``
        }
      </div>
    `;
  }

  private _resolvePhotoMood(condition: string): 'sunny' | 'cloudy' | 'rainy' {
    if (
      ['rainy', 'pouring', 'lightning', 'lightning-rainy', 'snowy-rainy', 'exceptional'].includes(
        condition
      )
    ) {
      return 'rainy';
    }

    if (['cloudy', 'fog', 'windy', 'windy-variant', 'snowy', 'hail'].includes(condition)) {
      return 'cloudy';
    }

    return 'sunny';
  }

  private _renderPhotoLikeBackground(condition: string, daytime: boolean): TemplateResult {
    const mood = this._resolvePhotoMood(condition);
    const isClearNight = condition === 'clear-night';
    const isFog = condition === 'fog';
    const isPartlyCloudy = condition === 'partlycloudy';
    const isNightVisual = isClearNight || !daytime;
    const isWindy = condition === 'windy' || condition === 'windy-variant';
    const hasSunBloom = daytime && (condition === 'sunny' || condition === 'partlycloudy');
    const hasRain =
      mood === 'rainy' ||
      condition === 'snowy-rainy' ||
      condition === 'rainy' ||
      condition === 'pouring';
    const hasSnow = condition === 'snowy' || condition === 'snowy-rainy';
    const hasHail = condition === 'hail';
    const hasLightning = condition === 'lightning' || condition === 'lightning-rainy';
    const useCloudBoundMix = condition === 'snowy-rainy';
    const cloudClusters = ['c1', 'c2', 'c3'];

    return html`
      <div
        class="img-photo mood-${mood} ${isNightVisual ? 'night' : 'day'} ${
          isClearNight ? 'clear-night' : ''
        } ${isFog ? 'foggy' : ''} ${isPartlyCloudy ? 'partly-cloudy' : ''} ${
          isWindy ? 'windy' : ''
        } ${hasSunBloom ? 'sun-bloom' : ''}"
      >
        <div class="photo-layer photo-base"></div>
        <div class="photo-layer photo-circadian"></div>
        <div class="photo-layer photo-sun-rays"></div>
        ${isClearNight ? html`<div class="photo-layer photo-night-stars"></div>` : html``}
        <div class="photo-layer photo-clouds"></div>
        <div class="photo-layer photo-clouds-front"></div>
        <div class="photo-layer photo-clouds-depth"></div>
        <div class="photo-layer photo-fog"></div>
        <div class="photo-layer photo-wind-streaks"></div>
        <div class="photo-layer photo-cloud-shadow"></div>
        ${
          hasRain || hasSnow || hasHail
            ? html`<div class="photo-layer weather-particles">
                ${
                  useCloudBoundMix
                    ? html`${cloudClusters.map(
                        cls =>
                          html`<div class="weather-cluster ${cls}">
                            ${hasRain ? this._renderRainParticles(6, true) : html``}
                            ${hasSnow ? this._renderSnowParticles(10, true) : html``}
                          </div>`
                      )}`
                    : html`${
                        condition === 'pouring'
                          ? this._renderRainParticles(68, false, true)
                          : html``
                      }
                      ${
                        condition === 'pouring'
                          ? this._renderDrizzleParticles(28, false, true)
                          : html``
                      }
                      ${condition === 'rainy' ? this._renderRainParticles(66, false, true) : html``}
                      ${condition === 'rainy' ? this._renderDrizzleParticles(22, false, true) : html``}
                      ${condition === 'lightning-rainy' ? this._renderRainParticles(54, false) : html``}
                      ${
                        condition === 'lightning-rainy'
                          ? this._renderDrizzleParticles(18, false)
                          : html``
                      }
                      ${
                        hasRain &&
                        condition !== 'pouring' &&
                        condition !== 'rainy' &&
                        condition !== 'lightning-rainy'
                          ? this._renderRainParticles(28, false)
                          : html``
                      }
                      ${hasSnow ? this._renderSnowParticles(36, false) : html``}
                      ${hasHail ? this._renderHailParticles(58, false) : html``}`
                }
              </div>`
            : html``
        }
        ${
          hasLightning
            ? html`${this._renderLightningFlashes()} ${this._renderLightningBolts()}`
            : html``
        }
        <div class="photo-layer photo-vignette"></div>
        <div class="photo-layer photo-grain"></div>
      </div>
    `;
  }

  private _renderRainParticles(
    count: number,
    cloudBound: boolean,
    fullHeight = false
  ): TemplateResult[] {
    return Array.from({ length: count }, (_, i) => {
      const base = cloudBound ? 14 : 4;
      const spread = cloudBound ? 72 : 96;
      const x = base + (((i * 31 + 17) % 100) / 100) * spread;
      const duration = (cloudBound ? 0.95 : 0.9 + (i % 5) * 0.14).toFixed(2);
      const delay = (-1 * ((i % 7) * 0.23)).toFixed(2);
      const height = (cloudBound ? 15 : 14) + (i % 4) * 5;
      const opacity = (0.46 + (i % 4) * 0.11).toFixed(2);
      const drift = (i % 2 === 0 ? 5 : -5) + ((i % 3) - 1) * 1.7;
      const width = i % 3 === 0 ? 1.6 : 2.1;
      const startY = fullHeight ? `${(-8 + ((i * 19 + 13) % 100)).toFixed(1)}%` : '-14%';

      return html`<span
        class="rain-drop"
        style="--x:${x.toFixed(
          2
        )}%; --start-y:${startY}; --duration:${duration}s; --delay:${delay}s; --h:${height}px; --opacity:${opacity}; --drift:${drift.toFixed(
          1
        )}px; --w:${width}px;"
      ></span>`;
    });
  }

  private _renderSnowParticles(count: number, cloudBound: boolean): TemplateResult[] {
    return Array.from({ length: count }, (_, i) => {
      const base = cloudBound ? 12 : 2;
      const spread = cloudBound ? 76 : 98;
      const x = base + (((i * 29 + 7) % 100) / 100) * spread;
      const duration = (cloudBound ? 6.1 : 5.6 + (i % 5) * 1.1).toFixed(2);
      const delay = (-1 * ((i % 9) * 0.7)).toFixed(2);
      const size = (cloudBound ? 2.8 : 2.4 + (i % 4) * 1.1).toFixed(1);
      const opacity = (0.52 + (i % 4) * 0.11).toFixed(2);
      const drift = (i % 2 === 0 ? 13 : -13) + ((i % 3) - 1) * 2.6;
      const driftBack = -drift * 0.7;

      return html`<span
        class="snow-flake"
        style="--x:${x.toFixed(
          2
        )}%; --duration:${duration}s; --delay:${delay}s; --size:${size}px; --opacity:${opacity}; --drift:${drift}px; --drift-back:${driftBack.toFixed(
          1
        )}px;"
        ><i></i><b></b
      ></span>`;
    });
  }

  private _renderDrizzleParticles(
    count: number,
    cloudBound: boolean,
    fullHeight = false
  ): TemplateResult[] {
    return Array.from({ length: count }, (_, i) => {
      const base = cloudBound ? 12 : 2;
      const spread = cloudBound ? 76 : 98;
      const x = base + (((i * 17 + 11) % 100) / 100) * spread;
      const duration = (cloudBound ? 1.25 : 1.3 + (i % 4) * 0.14).toFixed(2);
      const delay = (-1 * ((i % 8) * 0.17)).toFixed(2);
      const height = (cloudBound ? 8 : 7) + (i % 3) * 2;
      const opacity = (0.22 + (i % 4) * 0.07).toFixed(2);
      const drift = (i % 2 === 0 ? 2.5 : -2.5) + ((i % 3) - 1) * 1.1;
      const width = i % 2 === 0 ? 1 : 1.2;
      const startY = fullHeight ? `${(-8 + ((i * 23 + 5) % 100)).toFixed(1)}%` : '-12%';

      return html`<span
        class="rain-drizzle"
        style="--x:${x.toFixed(
          2
        )}%; --start-y:${startY}; --duration:${duration}s; --delay:${delay}s; --h:${height}px; --opacity:${opacity}; --drift:${drift.toFixed(
          1
        )}px; --w:${width}px;"
      ></span>`;
    });
  }

  private _renderHailParticles(count: number, cloudBound: boolean): TemplateResult[] {
    return Array.from({ length: count }, (_, i) => {
      const base = cloudBound ? 14 : 4;
      const spread = cloudBound ? 72 : 96;
      const x = base + (((i * 31 + 17) % 100) / 100) * spread;
      const duration = (cloudBound ? 0.73 : 0.62 + (i % 5) * 0.075).toFixed(2);
      const delay = (-1 * ((i % 7) * 0.19)).toFixed(2);
      const opacity = (0.72 + (i % 4) * 0.09).toFixed(2);
      const drift = (i % 2 === 0 ? 3.4 : -3.4) + ((i % 3) - 1) * 1.3;
      const size = i % 2 === 0 ? 4.3 : 5.1;

      return html`<span
        class="hail-stone"
        style="--x:${x.toFixed(
          2
        )}%; --duration:${duration}s; --delay:${delay}s; --opacity:${opacity}; --drift:${drift.toFixed(
          1
        )}px; --size:${size}px;"
      ></span>`;
    });
  }

  private _renderLightningFlashes(): TemplateResult[] {
    const flashes = [
      { x: 12, y: 24, delay: '-0.2s', duration: '6.8s' },
      { x: 28, y: 18, delay: '-1.1s', duration: '7.1s' },
      { x: 50, y: 26, delay: '-2.4s', duration: '6.6s' },
      { x: 72, y: 20, delay: '-3.2s', duration: '7.0s' },
      { x: 88, y: 28, delay: '-4.3s', duration: '6.9s' },
    ];

    return flashes.map(
      flash =>
        html`<div
          class="photo-layer photo-lightning"
          style="--flash-x:${flash.x}%; --flash-y:${flash.y}%; --delay:${flash.delay}; --flash-duration:${flash.duration};"
        ></div>`
    );
  }

  private _renderLightningBolts(): TemplateResult[] {
    const bolts = [
      {
        left: 11,
        top: 10,
        height: 34,
        width: 7,
        rotate: '-6deg',
        delay: '-0.2s',
        duration: '6.8s',
      },
      { left: 27, top: 6, height: 42, width: 8, rotate: '5deg', delay: '-1.1s', duration: '7.1s' },
      { left: 49, top: 9, height: 38, width: 7, rotate: '-2deg', delay: '-2.4s', duration: '6.6s' },
      { left: 70, top: 7, height: 44, width: 8, rotate: '4deg', delay: '-3.2s', duration: '7.0s' },
      {
        left: 86,
        top: 12,
        height: 32,
        width: 6,
        rotate: '-8deg',
        delay: '-4.3s',
        duration: '6.9s',
      },
    ];

    return bolts.map(
      bolt =>
        html`<div
          class="photo-layer photo-lightning-bolt"
          style="--bolt-left:${bolt.left}%; --bolt-top:${bolt.top}%; --bolt-height:${bolt.height}%; --bolt-width:${bolt.width}px; --bolt-rotate:${bolt.rotate}; --delay:${bolt.delay}; --flash-duration:${bolt.duration};"
        ></div>`
    );
  }

  // Load only the daily forecast via Home Assistant WS API
  private async _loadDailyForecast(): Promise<void> {
    if (!this.hass || !this.config?.entity || this._forecastLoading) return;
    this._forecastLoading = true;
    try {
      const wsDaily = await (this.hass as any).callWS({
        type: 'call_service',
        domain: 'weather',
        service: 'get_forecasts',
        service_data: {
          entity_id: this.config.entity,
          type: 'daily',
        },
        return_response: true,
      });
      const forecastData = (wsDaily as any)?.response;
      if (forecastData && forecastData[this.config.entity]) {
        this._forecast = forecastData[this.config.entity].forecast || [];
        (this as LitElement).requestUpdate('_forecast');
      } else {
        this._forecast = [];
      }
    } catch (err) {
      console.warn('⚠️ BG Daily forecast loading failed:', err);
      this._forecast = [];
    } finally {
      this._forecastLoading = false;
    }
  }

  // Load only the hourly forecast via Home Assistant WS API
  private async _loadHourlyForecast(): Promise<void> {
    if (!this.hass || !this.config?.entity || this._hourlyLoading) return;
    this._hourlyLoading = true;
    try {
      const wsHourly = await (this.hass as any).callWS({
        type: 'call_service',
        domain: 'weather',
        service: 'get_forecasts',
        service_data: {
          entity_id: this.config.entity,
          type: 'hourly',
        },
        return_response: true,
      });
      const forecastData = (wsHourly as any)?.response;
      if (forecastData && forecastData[this.config.entity]) {
        this._hourly = forecastData[this.config.entity].forecast || [];
        (this as LitElement).requestUpdate('_hourly');
      } else {
        this._hourly = [];
      }
    } catch (err) {
      console.warn('⚠️ BG Hourly forecast loading failed:', err);
      this._hourly = [];
    } finally {
      this._hourlyLoading = false;
    }
  }
}

console.log('✅ SwissWeatherCard (animated Background) fully loaded and registered');
