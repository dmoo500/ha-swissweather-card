import { WeatherCondition } from '../../../types/home-assistant';
import { html, svg, TemplateResult } from 'lit';
import { lightningFlashOverlay } from '../effects/lightning-flash-effect';

export const getWeatherBackground = (
  condition: WeatherCondition | string,
  daytime?: boolean,
  width?: number
): TemplateResult => {
  if (!condition) {
    return html``;
  }
  const normalizedCondition = String(condition).trim().toLowerCase() as WeatherCondition;
  const svgRawMap: Record<WeatherCondition, TemplateResult> = {
    'clear-night': clearNightBG(width || 400),
    cloudy: cloudyBG(width || 400),
    fog: fogBG(width || 400),
    hail: hailBG(width || 400),
    lightning: thunderstormsBG(width || 400),
    'lightning-rainy': thunderstormsRainBG(width || 400),
    partlycloudy: daytime ? partlyCloudyDayBG(width || 400) : partlyCloudyNightBG(width || 400),
    pouring: extremeRainBG(width || 400),
    rainy: rainBG(width || 400),
    snowy: snowBG(width || 400),
    'snowy-rainy': sleetBG(width || 400),
    sunny: sunnyBG(),
    windy: windBG(width || 400),
    'windy-variant': windBG(width || 400),
    exceptional: hurricaneBG(width || 400),
  };

  return svgRawMap[normalizedCondition] || svgRawMap.cloudy;
};

export const clearNightBG = (width: number): TemplateResult => {
  const starCount = Math.max(14, Math.ceil(width / 36));
  return svg`
  <defs>
    <linearGradient id="nightSkyGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f1f3b" />
      <stop offset="65%" stop-color="#12284a" />
      <stop offset="100%" stop-color="#1f3d69" stop-opacity="0.75" />
    </linearGradient>
    <linearGradient id="moonGradient" x1="21.92" x2="38.52" y1="18.75" y2="47.52" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#86c3db"/>
      <stop offset=".45" stop-color="#86c3db"/>
      <stop offset="1" stop-color="#5eafcf"/>
      <animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="5 32 32; -15 32 32; 5 32 32"/>
    </linearGradient>
    <linearGradient id="starGradient" x1="23.22" x2="40.78" y1="16.8" y2="47.2" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fcd966"/>
      <stop offset=".45" stop-color="#fcd966"/>
      <stop offset="1" stop-color="#fccd34"/>
      <animateTransform attributeName="gradientTransform" dur="18s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/>
    </linearGradient>
  <g id="starIcon">
    <path fill="url(#starGradient)" stroke="#fcd34d" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M33 23l9.06-4.25a2.39 2.39 0 013.18 3.18L41 31a2.42 2.42 0 000 2l4.25 9.06a2.39 2.39 0 01-3.18 3.18L33 41a2.42 2.42 0 00-2 0l-9.06 4.25a2.39 2.39 0 01-3.18-3.18L23 33a2.42 2.42 0 000-2l-4.25-9.06a2.39 2.39 0 013.18-3.18L31 23a2.42 2.42 0 002 0z" opacity="0.9">
      <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="1; 0.4; 1"/>
      <animateTransform attributeName="transform" dur="18s" repeatCount="indefinite" type="rotate" values="360 32 32; 0 32 32"/>
    </path>
  </g>
  </defs>
  <!-- moon -->
  <g id="clearNightIcon" transform="translate(168,-30) scale(3)">
    <path fill="url(#moonGradient)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z">
      <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32; 15 32 32; -5 32 32"/>
    </path>
  </g>
  <rect width="100%" height="100%" fill="url(#nightSkyGradient)" />

  <!-- stars -->
  <g>
  ${Array.from({ length: starCount }, (_, i) => i).map(i => {
    const xFinal = Math.round((i / starCount) * width + (Math.random() * 20 - 10));
    const yFinal = 6 + (i % 4) * 11 + Math.round(Math.random() * 8);
    const scale = (0.16 + (i % 3) * 0.08).toFixed(2);
    const dur = (2.8 + (i % 5) * 0.75).toFixed(2);
    const begin = (-0.4 * (i % 7)).toFixed(2);
    return svg`
      <g transform="translate(${xFinal},${yFinal}) scale(${scale})" opacity="0.85">
        <use href="#starIcon" x="0" y="0"/>
        <animate attributeName="opacity" values="0.35;1;0.45;1;0.35" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
      </g>
    `;
  })}
  </g>
`;
};

export const sunnyBG = (): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="sunshineBlueGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4fc3f7" />
      <stop offset="80%" stop-color="#4fc3f7" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="sunGradient" x1="21.92" x2="38.52" y1="18.75" y2="47.52" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fcd966"/>
      <stop offset=".45" stop-color="#fcd966"/>
      <stop offset="1" stop-color="#fccd34"/>
      <animateTransform attributeName="gradientTransform" dur="18s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/>
    </linearGradient>
  </defs>
  <!-- background -->
  <rect width="100%" height="80%" fill="url(#sunshineBlueGradient)" />
  <!-- sun -->
  <g id="sunIcon" transform="translate(168,-30) scale(3)">
    <circle cx="32" cy="32" r="10.5" fill="url(#sunGradient)" stroke="#fcd34d" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" />
    <path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21">
      <animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/>
    </path>
  </g>
`;
};

const cloudyBG = (width: number): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a3bdc9ff" />
      <stop offset="100%" stop-color="#90d4f4ff" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="icon">
      <path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
  </defs>
  <!-- background -->
  <rect width="100%" height="80%" fill="url(#background)" />
  ${animate(width)}
  `;
};

const fogBG = (width: number): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a3bdc9ff" />
      <stop offset="100%" stop-color="#90d4f4ff" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="fogCloud" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <linearGradient id="fogLine1" x1="27.5" x2="36.5" y1="50.21" y2="65.79" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#d4d7dd"/>
      <stop offset=".45" stop-color="#d4d7dd"/>
      <stop offset="1" stop-color="#bec1c6"/>
    </linearGradient>
    <g id="icon">
      <path fill="url(#fogCloud)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <path fill="none" stroke="url(#fogLine1)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30">
        <animateTransform attributeName="transform" begin="0s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </path>
      <path fill="none" stroke="url(#fogLine2)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30">
        <animateTransform attributeName="transform" begin="-4s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </path>
    </g>
  </defs>
  <!-- background -->
  <rect width="100%" height="80%" fill="url(#background)" />
  ${animate(width)}
  `;
};

const hailBG = (width: number): TemplateResult => {
  const cloudCount = Math.max(2, Math.ceil(width / 190));
  const spacing = width / cloudCount;
  return svg`
  <defs>
    <linearGradient id="hailGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="hailCloudIcon">
      <path fill="url(#hailGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <radialGradient id="hailStoneGradient" cx="50%" cy="42%" r="56%">
      <stop offset="0%" stop-color="#f0fbff" />
      <stop offset="100%" stop-color="#b8d6e8" />
    </radialGradient>
  </defs>

  ${Array.from({ length: cloudCount }, (_, i) => {
    const baseX = Math.round(i * spacing + spacing * 0.16);
    const baseY = Math.round(14 + ((i * 11) % 3) * 9);
    const cloudScale = 1.45 + (i % 2) * 0.16;
    const driftDur = 16 + (i % 3) * 3;
    return svg`
      <g transform="translate(${baseX} ${baseY})">
        <g>
          <use href="#hailCloudIcon" x="0" y="0" width="80" height="40" transform="scale(${cloudScale})" opacity="0.93"/>
          <animateTransform attributeName="transform" type="translate" values="0,0;14,0;0,0" dur="${driftDur}s" repeatCount="indefinite"/>
        </g>

        ${Array.from({ length: 10 }, (_, j) => {
          const x = 11 + j * 6.5 + ((i + j) % 2) * 1.2;
          const y = 53 + (j % 3) * 1.7;
          const fall = 44 + (j % 3) * 7;
          const drift = (j % 2 === 0 ? -4.2 : 4.2).toFixed(1);
          const dur = (1.05 + (j % 4) * 0.2).toFixed(2);
          const begin = (-0.14 * (i + j)).toFixed(2);
          const size = (1.6 + (j % 3) * 0.44).toFixed(2);
          return svg`
            <circle cx="${x}" cy="${y}" r="${size}" fill="url(#hailStoneGradient)" stroke="#9bbdd2" stroke-width="0.35" opacity="0">
              <animate attributeName="cy" values="${y}; ${y + fall}" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
              <animate attributeName="cx" values="${x}; ${x + Number(drift)}" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
              <animate attributeName="opacity" values="0;0.95;0.95;0" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
            </circle>
          `;
        })}
      </g>
    `;
  })}
  `;
};

const rainBG = (width: number): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3580a39c" />
      <stop offset="80%" stop-color="#3482a79c" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <linearGradient id="a" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#4286ee"/>
      <stop offset=".45" stop-color="#4286ee"/>
      <stop offset="1" stop-color="#0950bc"/>
    </linearGradient>
    <linearGradient id="c" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlink:href="#a"/>
    <linearGradient id="d" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlink:href="#a"/>
    <g id="icon">
    <path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    <path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94">
      <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
      <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
    </path>
    <path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94">
      <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
      <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
    </path>
    <path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94">
      <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
      <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
    </path>
    </g>    
  </defs>
  <!-- background -->
  <rect width="100%" height="80%" fill="url(#background)" />
  ${animate(width)}
  
  `;
};

export const hail = svg`<g transform="translate(168,-30) scale(3)"><circle cx="24" cy="42" r="4" fill="#a8dadc"/><circle cx="40" cy="42" r="4" fill="#a8dadc"/><circle cx="32" cy="34" r="4" fill="#a8dadc"/><path fill="#f3f7fe" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/></g>`;

export const extremeRainBG = (width: number): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="extremeRainGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="extremeRainIcon">
      <path fill="url(#extremeRainGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <linearGradient id="extremeRainDropGradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#3a86ff" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#3a86ff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  
  <!-- Cloud -->
  <g>
    <use href="#extremeRainIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  
  <!-- Rain drops -->
  ${Array.from({ length: Math.ceil(width / 12) }, (v, i) => i).map(i => {
    const yOffset = Math.floor(Math.random() * 100);
    const xOffset = Math.floor(Math.random() * 10);
    const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(Math.random() * 25); //to spread drops vertically a bit more
    const xFinal = i * 12 + xOffset;
    return svg`
    <line x1="${xFinal}" y1="${yOffsetAdj}" x2="${xFinal + 1.6}" y2="${yOffsetAdj + 14}" stroke="url(#extremeRainDropGradient)" stroke-width="2.2" stroke-linecap="round">
      <animate attributeName="y1" values="${yOffsetAdj}; ${yOffsetAdj + 28}" dur="0.42s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="${yOffsetAdj + 14}; ${yOffsetAdj + 42}" dur="0.42s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0;1;1;0" dur="0.42s" repeatCount="indefinite"/>
    </line>
    `;
  })}
  `;
};

const windBG = (width: number): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="windGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="windIcon">
      <path fill="url(#windGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <linearGradient id="windLineGradient" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%" stop-color="#9ca3af" stop-opacity="0"/>
      <stop offset="50%" stop-color="#9ca3af" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#9ca3af" stop-opacity="0"/>
    </linearGradient>
  </defs>
  
  <!-- Cloud -->
  <g>
    <use href="#windIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  
  <!-- Wind lines -->
  ${Array.from({ length: Math.ceil(width / 50) }, (v, i) => i).map(i => {
    const yOffset = Math.floor(Math.random() * 100);
    const xOffset = Math.floor(Math.random() * 10);
    const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(Math.random() * 25); //to spread lines vertically a bit more
    const xFinal = i * 50 + xOffset;
    return svg`
    <line x1="${xFinal}" y1="${yOffsetAdj}" x2="${xFinal + 30}" y2="${yOffsetAdj}" stroke="url(#windLineGradient)" stroke-width="4" stroke-linecap="round">
      <animate attributeName="x1" values="${xFinal}; ${xFinal + 10}; ${xFinal}" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="${xFinal + 30}; ${xFinal + 40}; ${xFinal + 30}" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0.4; 1" dur="3s" repeatCount="indefinite"/>
    </line>
    `;
  })}
  `;
};

const thunderstormsBG = (width: number): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2e414aff" />
      <stop offset="100%" stop-color="#467388ff" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="thunderstormGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
   
    <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#87ceeb;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4169e1;stop-opacity:1" />
    </linearGradient>
    
    <g id="icon">
      <path fill="url(#thunderstormGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <path fill="#facc15" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z">
        <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1"/>
      </path>
    </g>
  </defs>
  <!-- background -->
  <rect width="100%" height="100%" fill="url(#background)" />
 
  ${animate(width)}
  ${renderLightningStrikes(width, false)}
   
  <!-- Lightning flash effect that illuminates the entire background (full-size overlay) -->
  ${lightningFlashOverlay()}
  `;
};

const thunderstormsRainBG = (width: number): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <linearGradient id="a" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#4286ee"/>
      <stop offset=".45" stop-color="#4286ee"/>
      <stop offset="1" stop-color="#0950bc"/>
    </linearGradient>
    <linearGradient id="c" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlink:href="#a"/>
    <linearGradient id="d" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlink:href="#a"/>
    <linearGradient id="e" x1="26.74" x2="35.76" y1="37.88" y2="53.52" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f7b23b"/>
      <stop offset=".45" stop-color="#f7b23b"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>
    <g id="icon">
      <path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94">
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </path>
      <path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </path>
      <path fill="url(#e)" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z">
        <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1"/>
      </path>
    </g>
  </defs>

  ${animate(width)}
  ${renderHeavyRain(width, 0.72, 1.4)}
  ${renderLightningStrikes(width, true)}
  
  <!-- Lightning flash effect for rainy thunderstorms -->
  ${lightningFlashOverlay()}
  `;
};

const animate = (width: number): TemplateResult => {
  const cloudCount = Math.max(4, Math.ceil(width / 120));
  return svg`
${Array.from({ length: cloudCount }, (_, i) => i).map(i => {
  const laneY = 6 + (i % 3) * 16;
  const yOffsetAdj = laneY + Math.floor(Math.random() * 10);
  const spread = width + 220;
  const xFinal = Math.round((i / cloudCount) * spread - 110 + (Math.random() * 28 - 14));
  const scale = (1 + Math.random() * 1.25).toFixed(2);
  const opacity = (0.68 + Math.random() * 0.22).toFixed(2);
  const duration = 30 + Math.floor(Math.random() * 26);
  const phase = (-Math.random() * duration).toFixed(2);
  const wobble = ((Math.random() * 10 - 5) * 0.6).toFixed(1);
  return svg`
    <g>
      <use href="#icon" x="${xFinal}" y="${yOffsetAdj}" width="80" height="40" transform="scale(${scale})" opacity="${opacity}">
        <animate attributeName="opacity" values="${opacity};${(Number(opacity) * 0.82).toFixed(2)};${opacity}" dur="${duration}s" repeatCount="indefinite" begin="${phase}s"/>
      </use>
      <animateTransform attributeName="transform" type="translate" values="-170,0;${width + 140},${wobble};-170,0" dur="${duration}s" repeatCount="indefinite" begin="${phase}s"/>
    </g>
    `;
})}
  `;
};

const renderLightningStrikes = (width: number, rainy: boolean): TemplateResult => {
  const centers = [0.22, 0.52, 0.8];
  return svg`
    <g>
      ${centers.map((p, i) => {
        const x = Math.round(width * p);
        const y = 18 + (i % 2) * 6;
        const dur = rainy ? 2.6 : 3.1;
        const begin = (-0.55 * i).toFixed(2);
        return svg`
          <path d="M${x} ${y} L${x - 10} ${y + 30} L${x + 1} ${y + 30} L${x - 13} ${y + 66} L${x + 16} ${y + 28} L${x + 3} ${y + 28} Z" fill="#ffe27a" stroke="#f7b733" stroke-width="1" opacity="0">
            <animate attributeName="opacity" values="0;0;1;0;0.85;0" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
          </path>
        `;
      })}
    </g>
  `;
};

const renderHeavyRain = (width: number, duration = 0.8, density = 1): TemplateResult => {
  const dropCount = Math.max(20, Math.ceil((width / 18) * density));
  return svg`
    <g>
      ${Array.from({ length: dropCount }, (_, i) => {
        const x = Math.round((i / dropCount) * width + ((i % 3) - 1) * 3);
        const y = Math.round(20 + (i % 8) * 8);
        const begin = (-0.08 * (i % 11)).toFixed(2);
        const dur = (duration + (i % 4) * 0.07).toFixed(2);
        return svg`
          <line x1="${x}" y1="${y}" x2="${x + 1.5}" y2="${y + 12}" stroke="#7eb7ff" stroke-width="1.6" stroke-linecap="round" opacity="0">
            <animate attributeName="y1" values="${y};${y + 46}" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
            <animate attributeName="y2" values="${y + 12};${y + 58}" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
            <animate attributeName="opacity" values="0;0.9;0.9;0" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
          </line>
        `;
      })}
    </g>
  `;
};

const sleetBG = (width: number): TemplateResult => {
  const cloudCount = Math.max(2, Math.ceil(width / 190));
  const spacing = width / cloudCount;

  return svg`
  <defs>
    <linearGradient id="sleetGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <linearGradient id="sleetRainDropGradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#dbeafe" stop-opacity="0"/>
      <stop offset="30%" stop-color="#93c5fd" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.95"/>
    </linearGradient>
    <g id="sleetSnowFlake" stroke-linecap="round" stroke-linejoin="round">
      <g stroke="rgba(92, 126, 162, 0.55)" stroke-width="2.2">
        <line x1="0" y1="-3.8" x2="0" y2="3.8"/>
        <line x1="-3.2" y1="0" x2="3.2" y2="0"/>
        <line x1="-2.5" y1="-2.5" x2="2.5" y2="2.5"/>
        <line x1="-2.5" y1="2.5" x2="2.5" y2="-2.5"/>
      </g>
      <g stroke="#f4fbff" stroke-width="1.1">
        <line x1="0" y1="-3.8" x2="0" y2="3.8"/>
        <line x1="-3.2" y1="0" x2="3.2" y2="0"/>
        <line x1="-2.5" y1="-2.5" x2="2.5" y2="2.5"/>
        <line x1="-2.5" y1="2.5" x2="2.5" y2="-2.5"/>
      </g>
      <circle cx="0" cy="0" r="0.9" fill="#f8fdff" stroke="none"/>
    </g>
    <g id="sleetCloudIcon">
      <path fill="url(#sleetGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
  </defs>

  ${Array.from({ length: cloudCount }, (_, i) => {
    const baseX = Math.round(i * spacing + spacing * 0.16);
    const baseY = Math.round(14 + ((i * 11) % 3) * 9);
    const cloudScale = 1.45 + (i % 2) * 0.18;
    const driftDur = 16 + (i % 3) * 3;
    return svg`
      <g transform="translate(${baseX} ${baseY})">
        <g>
          <use href="#sleetCloudIcon" x="0" y="0" width="80" height="40" transform="scale(${cloudScale})" opacity="0.93"/>
          <animateTransform attributeName="transform" type="translate" values="0,0;14,0;0,0" dur="${driftDur}s" repeatCount="indefinite"/>
        </g>

        ${Array.from({ length: 7 }, (_, j) => {
          const x = 15 + j * 8 + ((i + j) % 2 === 0 ? -1.2 : 1.2);
          const yTop = 52 + (j % 2) * 2;
          const yBottom = yTop + 16 + (j % 3) * 3;
          const dur = (0.82 + (j % 3) * 0.14).toFixed(2);
          const begin = (-0.16 * (i + j)).toFixed(2);
          return svg`
            <line x1="${x}" y1="${yTop}" x2="${x + 1.8}" y2="${yBottom}" stroke="url(#sleetRainDropGradient)" stroke-width="1.7" stroke-linecap="round" opacity="0.86">
              <animate attributeName="y1" values="${yTop};${yTop + 26}" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
              <animate attributeName="y2" values="${yBottom};${yBottom + 26}" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
              <animate attributeName="opacity" values="0;0.92;0.92;0" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
            </line>
          `;
        })}

        ${Array.from({ length: 10 }, (_, j) => {
          const x = 12 + j * 8 + ((i + j) % 3) * 1.4;
          const y = 54 + (j % 3) * 2;
          const sway = (j % 2 === 0 ? -5 : 5) + (i % 2 === 0 ? 1.5 : -1.5);
          const dur = (3.9 + (j % 4) * 0.65).toFixed(2);
          const begin = (-0.25 * (i + j)).toFixed(2);
          const rotate = (i + j) % 2 === 0 ? -14 : 14;
          const scale = (0.96 + (j % 3) * 0.15).toFixed(2);
          return svg`
            <g transform="translate(${x} ${y}) scale(${scale})">
              <use href="#sleetSnowFlake" opacity="0.9"/>
              <animateTransform additive="sum" attributeName="transform" type="translate" values="0 0; ${sway} 26; ${(
                -sway * 0.3
              ).toFixed(1)} 52" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
              <animateTransform additive="sum" attributeName="transform" type="rotate" values="0; ${rotate}; ${-rotate}" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
              <animate attributeName="opacity" values="0;0.96;0.96;0" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
            </g>
          `;
        })}
      </g>
    `;
  })}
  `;
};

const snowBG = (width: number): TemplateResult => {
  const cloudCount = Math.max(2, Math.ceil(width / 190));
  const spacing = width / cloudCount;

  return svg`
  <defs>
    <linearGradient id="snowGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <radialGradient id="snowCore" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
      <stop offset="100%" stop-color="#e6f4ff" stop-opacity="0.92"/>
    </radialGradient>
    <g id="snowCloudIcon">
      <path fill="url(#snowGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <g id="snowFlakeIcon" stroke-linecap="round" stroke-linejoin="round">
      <g stroke="rgba(82, 120, 160, 0.52)" stroke-width="2.2">
        <line x1="0" y1="-4.2" x2="0" y2="4.2"/>
        <line x1="-3.6" y1="0" x2="3.6" y2="0"/>
        <line x1="-3" y1="-3" x2="3" y2="3"/>
        <line x1="-3" y1="3" x2="3" y2="-3"/>
      </g>
      <g stroke="#f4fbff" stroke-width="1.15">
        <line x1="0" y1="-4.2" x2="0" y2="4.2"/>
        <line x1="-3.6" y1="0" x2="3.6" y2="0"/>
        <line x1="-3" y1="-3" x2="3" y2="3"/>
        <line x1="-3" y1="3" x2="3" y2="-3"/>
      </g>
      <circle cx="0" cy="0" r="1.05" fill="url(#snowCore)" stroke="none"/>
    </g>

  </defs>

  ${Array.from({ length: cloudCount }, (_, i) => {
    const baseX = Math.round(i * spacing + spacing * 0.14);
    const baseY = Math.round(12 + ((i * 7) % 3) * 8);
    const cloudScale = 1.42 + (i % 2) * 0.2;
    const driftDur = 15 + (i % 3) * 3;
    return svg`
      <g transform="translate(${baseX} ${baseY})">
        <g>
          <use href="#snowCloudIcon" x="0" y="0" width="80" height="40" transform="scale(${cloudScale})" opacity="0.93"/>
          <animateTransform attributeName="transform" type="translate" values="0,0;12,0;0,0" dur="${driftDur}s" repeatCount="indefinite"/>
        </g>

        ${Array.from({ length: 14 }, (_, j) => {
          const x = 10 + j * 5.4 + (j % 2) * 1.2;
          const y = 52 + (j % 3);
          const sway = (j % 2 === 0 ? -7 : 7) + (i % 2 === 0 ? 2 : -2);
          const dur = (4.5 + (j % 4) * 0.62).toFixed(2);
          const begin = (-0.22 * (i + j)).toFixed(2);
          const scale = (0.95 + (j % 4) * 0.18).toFixed(2);
          return svg`
            <g transform="translate(${x} ${y}) scale(${scale})" opacity="0">
              <use href="#snowFlakeIcon"/>
              <animateTransform additive="sum" attributeName="transform" type="translate" values="0 0; ${sway} 30; ${(
                -sway * 0.3
              ).toFixed(1)} 62" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
              <animateTransform additive="sum" attributeName="transform" type="rotate" values="0; 26; 340" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
              <animate attributeName="opacity" values="0;0.98;0.98;0" dur="${dur}s" repeatCount="indefinite" begin="${begin}s"/>
            </g>
          `;
        })}
      </g>
    `;
  })}
  `;
};

const partlyCloudyDayBG = (width: number): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="sunshineBlueGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4fc3f7" />
      <stop offset="100%" stop-color="#4fc3f7" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="partlyCloudyDayGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <linearGradient id="a" x1="26.75" x2="37.25" y1="22.91" y2="41.09" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fbbf24"/>
      <stop offset=".45" stop-color="#fbbf24"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>
    <g id="icon">
      <path fill="url(#partlyCloudyDayGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <g id="sunIcon">
      <circle cx="32" cy="32" r="10.5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/>
      <path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21">
        <animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/>
      </path>
    </g>
  </defs>
  <!-- background -->
  <rect width="100%" height="100%" fill="url(#sunshineBlueGradient)" />
  <!-- Sun -->
  <g>
    <use href="#sunIcon" x="${Math.round(width * 0.58)}" y="10" width="94" height="94" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;4,0;0,0" dur="20s" repeatCount="indefinite"/>
  </g>
  ${animate(Math.round(width * 0.82))}
  `;
};

const partlyCloudyNightBG = (width: number): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="partlyCloudyNightGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="icon">
      <path fill="url(#partlyCloudyNightGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <g id="moonIcon">
      <path fill="#fbbf24" stroke="#f59e0b" stroke-width="1" d="M12 2a10 10 0 1010 10A8 8 0 0112 2z"/>
      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="60s" repeatCount="indefinite"/>
    </g>
  </defs>
  <!-- Moon -->
  <g>
    <use href="#moonIcon" x="200" y="50" width="100" height="100" opacity="0.9"/>
  </g>
  ${animate(width)}
  `;
};

const hurricaneBG = (width: number): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="hurricaneBackground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4c5f73"/>
      <stop offset="100%" stop-color="#394b5e" stop-opacity="0.2"/>
    </linearGradient>
    <linearGradient id="hurricaneGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="icon">
      <path fill="url(#hurricaneGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <circle cx="32" cy="36" r="4.8" fill="#f87171" stroke="#b91c1c" stroke-width="0.9"/>
      <path fill="#f87171" stroke="#b91c1c" stroke-width="0.9" d="M32 31a5 5 0 015 5h-5V31zM32 41a5 5 0 01-5-5h5v5zM27 36a5 5 0 015-5v5h-5zM37 36a5 5 0 01-5 5v-5h5z"/>
    </g>
  </defs>

  <rect width="100%" height="100%" fill="url(#hurricaneBackground)" />
  ${animate(width)}
  `;
};
