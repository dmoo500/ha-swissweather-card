import { svg } from 'lit';

export const createLightningFlashEffect = (width = 400, height = 300) => svg`
  <defs>
    <!-- Lightning flash overlay -->
    <rect id="lightningFlash" x="0" y="0" width="${width}" height="${height}" 
          fill="url(#lightningFlashGradient)" 
          opacity="0">
      <!-- Main lightning flash sequence - STRONGER -->
      <animate attributeName="opacity" 
               values="0;0;1;0;0.9;0;1;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0" 
               dur="4s" 
               repeatCount="indefinite"/>
    </rect>
    
    <!-- Flash gradient for realistic lightning effect -->
    <radialGradient id="lightningFlashGradient" cx="50%" cy="30%" r="80%">
      <stop offset="0%" style="stop-color:#ffff99;stop-opacity:1" />
      <stop offset="20%" style="stop-color:#fff59d;stop-opacity:0.95" />
      <stop offset="50%" style="stop-color:#ffeb3b;stop-opacity:0.8" />
      <stop offset="80%" style="stop-color:#ffc107;stop-opacity:0.5" />
      <stop offset="100%" style="stop-color:#ff8f00;stop-opacity:0.2" />
    </radialGradient>
    
    <!-- Multiple flash layers for intensity -->
    <rect id="lightningFlash2" x="0" y="0" width="${width}" height="${height}" 
          fill="#ffff66" 
          opacity="0">
      <!-- Secondary quick flash -->
      <animate attributeName="opacity" 
               values="0;0;0;0.7;0;0;0;0.9;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0" 
               dur="4s" 
               begin="0.1s"
               repeatCount="indefinite"/>
    </rect>
    
    <!-- Realistic flickering -->
    <rect id="lightningFlicker" x="0" y="0" width="${width}" height="${height}" 
          fill="#fff176" 
          opacity="0">
      <!-- Random-like flickering before main flash -->
      <animate attributeName="opacity" 
               values="0;0.2;0;0.3;0;0.1;0;0.5;0;0.25;0;0;0;0;0;0;0;0;0;0;0;0;0;0" 
               dur="4s" 
               begin="0.2s"
               repeatCount="indefinite"/>
    </rect>
  </defs>
  
  <!-- Apply the lightning flash as overlay -->
  <use href="#lightningFlicker"/>
  <use href="#lightningFlash"/>
  <use href="#lightningFlash2"/>
  
`;

// Function to add lightning flash to any existing SVG
export const addLightningFlashToSVG = (existingSVG: any, width = 400, height = 300) => svg`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <!-- Original content -->
    ${existingSVG}
    
    <!-- Lightning flash overlay on top -->
    ${createLightningFlashEffect(width, height)}
  </svg>
`;

// Full-size overlay variant that covers 100% of the host SVG area
// Useful when the container uses flexible sizing and we can't know pixel height in advance
export const lightningFlashOverlay = () => svg`
  <defs>
    <radialGradient id="lwStormFlashGradient" cx="50%" cy="20%" r="90%">
      <stop offset="0%" style="stop-color:#ffff88;stop-opacity:1" />
      <stop offset="15%" style="stop-color:#fff59d;stop-opacity:0.95" />
      <stop offset="40%" style="stop-color:#ffeb3b;stop-opacity:0.8" />
      <stop offset="70%" style="stop-color:#ffc107;stop-opacity:0.5" />
      <stop offset="100%" style="stop-color:#ff8f00;stop-opacity:0.2" />
    </radialGradient>

    <!-- Dramatic storm flash (full background) -->
    <rect id="lwStormFlash" x="0" y="0" width="100%" height="100%" fill="url(#lwStormFlashGradient)" opacity="0">
      <animate attributeName="opacity" 
               values="0;0;0;1;0;0.9;0;1;0;0.5;0;0;0;0;0;0;0.6;0;0;0;0;0;0.8;0" 
               dur="6s" 
               repeatCount="indefinite"/>
    </rect>

    <!-- Thunder rumble glow layer -->
    <rect id="lwThunderRumble" x="0" y="0" width="100%" height="100%" fill="#fff9c4" opacity="0">
      <animate attributeName="opacity" 
               values="0;0;0.2;0.1;0.3;0.05;0.4;0;0;0;0;0;0;0;0;0;0.1;0;0;0;0;0;0.2;0" 
               dur="6s" 
               begin="0.5s"
               repeatCount="indefinite"/>
    </rect>

    <!-- Subtle flicker -->
    <rect id="lwLightningFlicker" x="0" y="0" width="100%" height="100%" fill="#fff176" opacity="0">
      <animate attributeName="opacity" 
               values="0;0.2;0;0.3;0;0.1;0;0.5;0;0.25;0;0;0;0;0;0;0;0;0;0;0;0;0;0" 
               dur="4s" 
               begin="0.2s"
               repeatCount="indefinite"/>
    </rect>
  </defs>
  <use href="#lwLightningFlicker"/>
  <use href="#lwStormFlash"/>
  <use href="#lwThunderRumble"/>
`;

// Lightning flash for thunderstorm backgrounds
export const thunderstormLightningFlash = (width = 400, height = 300) => svg`
  <defs>
    <!-- Dramatic storm flash -->
    <rect id="stormFlash" x="0" y="0" width="${width}" height="${height}" 
          fill="url(#stormFlashGradient)" 
          opacity="0">
      <!-- Intense storm lightning sequence - STRONGER -->
      <animate attributeName="opacity" 
               values="0;0;0;1;0;0.9;0;1;0;0.5;0;0;0;0;0;0;0.6;0;0;0;0;0;0.8;0" 
               dur="6s" 
               repeatCount="indefinite"/>
    </rect>
    
    <radialGradient id="stormFlashGradient" cx="50%" cy="20%" r="90%">
      <stop offset="0%" style="stop-color:#ffff88;stop-opacity:1" />
      <stop offset="15%" style="stop-color:#fff59d;stop-opacity:0.95" />
      <stop offset="40%" style="stop-color:#ffeb3b;stop-opacity:0.8" />
      <stop offset="70%" style="stop-color:#ffc107;stop-opacity:0.5" />
      <stop offset="100%" style="stop-color:#ff8f00;stop-opacity:0.2" />
    </radialGradient>
    
    <!-- Thunder rumble effect - STRONGER -->
    <rect id="thunderRumble" x="0" y="0" width="${width}" height="${height}" 
          fill="#fff9c4" 
          opacity="0">
      <animate attributeName="opacity" 
               values="0;0;0.2;0.1;0.3;0.05;0.4;0;0;0;0;0;0;0;0;0;0.1;0;0;0;0;0;0.2;0" 
               dur="6s" 
               begin="0.5s"
               repeatCount="indefinite"/>
    </rect>
  </defs>
  
  <use href="#stormFlash"/>
  <use href="#thunderRumble"/>
`;
