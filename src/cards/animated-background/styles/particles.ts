import { css } from 'lit';

export const backgroundParticleStyles = css`
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
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.98), rgba(222, 240, 255, 0.96));
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
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.92), rgba(216, 236, 255, 0.88));
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
      rgba(238, 246, 255, 0.76),
      rgba(190, 213, 250, 0) 56%
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
      rgba(245, 249, 255, 0.86) 22%,
      rgba(197, 218, 255, 0.92) 100%
    );
    clip-path: polygon(48% 0, 70% 0, 44% 36%, 68% 36%, 30% 100%, 44% 56%, 24% 56%);
    filter: drop-shadow(0 0 7px rgba(211, 228, 255, 0.76));
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
    opacity: 0;
    mix-blend-mode: soft-light;
  }

  .img-photo.mood-cloudy .photo-cloud-shadow {
    opacity: 0.22;
  }

  .img-photo.mood-rainy .photo-cloud-shadow {
    opacity: 0.42;
  }

  .img-photo.partly-cloudy .photo-cloud-shadow {
    opacity: 0.12;
  }

  .photo-vignette {
    background: radial-gradient(circle at center, rgba(0, 0, 0, 0) 56%, rgba(0, 0, 0, 0.2) 100%);
    z-index: 3;
  }

  .photo-grain {
    background-image: radial-gradient(rgba(255, 255, 255, 0.2) 0.6px, transparent 0.8px);
    background-size: 3px 3px;
    opacity: 0.045;
    mix-blend-mode: soft-light;
    z-index: 8;
  }
`;
