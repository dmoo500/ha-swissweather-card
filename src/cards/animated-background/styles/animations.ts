import { css } from 'lit';

export const backgroundAnimationStyles = css`
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

  @media (prefers-reduced-motion: reduce) {
    .img-photo *,
    .img-photo *::before,
    .img-photo *::after {
      animation: none !important;
      transition: none !important;
    }

    .img-photo .photo-lightning,
    .img-photo .photo-lightning-bolt {
      display: none !important;
    }

    .img-svg svg animate,
    .img-svg svg animateTransform {
      display: none !important;
    }
  }
`;
