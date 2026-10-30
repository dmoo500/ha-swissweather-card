import { svg } from 'lit';

export const lightningFlashOverlay = () => svg`
  <defs>
    <radialGradient id="lwStormFlashGradient" cx="50%" cy="20%" r="90%">
      <stop offset="0%" style="stop-color:#f5f8ff;stop-opacity:0.85" />
      <stop offset="20%" style="stop-color:#dbe8ff;stop-opacity:0.65" />
      <stop offset="55%" style="stop-color:#a8c6f0;stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:#7896c0;stop-opacity:0.08" />
    </radialGradient>

    <rect
      id="lwStormFlash"
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="url(#lwStormFlashGradient)"
      opacity="0"
    >
      <animate
        attributeName="opacity"
        values="0;0.48;0;0.16;0;0"
        keyTimes="0;0.42;0.43;0.46;0.47;1"
        calcMode="discrete"
        dur="12s"
        repeatCount="indefinite"
      />
    </rect>

    <rect id="lwThunderRumble" x="0" y="0" width="100%" height="100%" fill="#dbe8ff" opacity="0">
      <animate
        attributeName="opacity"
        values="0;0;0.08;0.03;0"
        keyTimes="0;0.4;0.43;0.55;1"
        dur="12s"
        repeatCount="indefinite"
      />
    </rect>
  </defs>
  <use href="#lwStormFlash"/>
  <use href="#lwThunderRumble"/>
`;
