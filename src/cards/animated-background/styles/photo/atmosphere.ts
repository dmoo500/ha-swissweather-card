import { css } from 'lit';

export const photoAtmosphereStyles = css`
  .photo-fog {
    background:
      radial-gradient(130% 62% at 18% 74%, rgba(235, 243, 250, 0.34), rgba(235, 243, 250, 0) 72%),
      radial-gradient(136% 66% at 72% 70%, rgba(229, 239, 248, 0.3), rgba(229, 239, 248, 0) 74%),
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
`;
