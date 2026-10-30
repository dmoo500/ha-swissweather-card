import { css } from 'lit';

export const photoBaseStyles = css`
  .img-photo {
    position: absolute;
    margin-top: var(--bg-temp-img-top, 36px);
    inset: 0;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    min-height: 200px;
    isolation: isolate;
    box-shadow: var(--ha-card-box-shadow, 0 4px 20px var(--box-shadow-color, rgba(0, 0, 0, 0.1)));
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

  .photo-horizon {
    inset: 42% -10% -12%;
    background:
      radial-gradient(ellipse at 50% 100%, rgba(234, 243, 246, 0.42), transparent 68%),
      linear-gradient(180deg, transparent 0%, rgba(211, 227, 236, 0.16) 100%);
    opacity: 0;
    mix-blend-mode: screen;
    pointer-events: none;
    z-index: 2;
  }

  .img-photo.day .photo-horizon {
    opacity: 0.72;
  }

  .img-photo.night .photo-horizon {
    background: linear-gradient(180deg, transparent 0%, rgba(87, 118, 157, 0.2) 100%);
    opacity: 0.55;
  }

  .img-photo.mood-rainy .photo-horizon,
  .img-photo.foggy .photo-horizon {
    opacity: 0.24;
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
      radial-gradient(ellipse at 50% 100%, rgba(226, 238, 241, 0.55), transparent 66%),
      radial-gradient(circle at 76% 18%, rgba(255, 247, 207, 0.78), transparent 28%),
      linear-gradient(180deg, #5793be 0%, #82b8d8 54%, #b4cfdf 100%);
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
`;
