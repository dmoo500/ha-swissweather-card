import { WeatherCondition } from '../../../types/home-assistant';
import { html, svg, TemplateResult } from 'lit';

export const getWeatherBackground = (
  condition: WeatherCondition | string,
  daytime?: boolean,
  width?: number
): TemplateResult => {
  if (!condition) {
    return html``;
  }
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

  return condition ? svgRawMap[condition as WeatherCondition] : html``;
};

export const clearNightBG = (width: number): TemplateResult => {
  return svg`
  <defs>
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
  <!-- star -->
  <g id="starIcon">
    <path fill="url(#starGradient)" stroke="#fcd34d" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M33 23l9.06-4.25a2.39 2.39 0 013.18 3.18L41 31a2.42 2.42 0 000 2l4.25 9.06a2.39 2.39 0 01-3.18 3.18L33 41a2.42 2.42 0 00-2 0l-9.06 4.25a2.39 2.39 0 01-3.18-3.18L23 33a2.42 2.42 0 000-2l-4.25-9.06a2.39 2.39 0 013.18-3.18L31 23a2.42 2.42 0 002 0z">
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
  <!-- stars -->
  <g>
  ${Array.from({ length: Math.ceil(width / 100) }, (v, i) => i).map(i => {
    const yOffset = Math.floor(Math.random() * 100);
    const xOffset = Math.floor(Math.random() * 10);
    const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(Math.random() * 25); //to spread stars vertically a bit more
    const xFinal = i * 100 + xOffset;
    return svg`
    <use href="#starIcon" x="0" y="0" transform="translate(${xFinal},${yOffsetAdj}) scale(0.5)"/>
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
    <linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="cloudIcon">
      <path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
  </defs>
  
  ${Array.from({ length: Math.ceil(width / 100) }, (v, i) => i).map(i => {
    const yOffset = Math.floor(Math.random() * 100);
    const xOffset = Math.floor(Math.random() * 10);
    const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(Math.random() * 25); //to spread clouds vertically a bit more
    const xFinal = i * 100 + xOffset;
    return svg`
    <g>
      <use href="#cloudIcon" x="0" y="0" transform="translate(${xFinal},${yOffsetAdj}) scale(0.5)"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
    </g>
    `;
  })}
  `;
};

const fogBG = (width: number): TemplateResult => {
  return svg`
  <defs>
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
    <g id="fogIcon">
      <path fill="url(#fogCloud)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <path fill="none" stroke="url(#fogLine1)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30">
        <animateTransform attributeName="transform" begin="0s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </path>
      <path fill="none" stroke="url(#fogLine2)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30">
        <animateTransform attributeName="transform" begin="-4s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </path>
    </g>
  </defs>

  ${Array.from({ length: Math.ceil(width / 100) }, (v, i) => i).map(i => {
    const yOffset = Math.floor(Math.random() * 100);
    const xOffset = Math.floor(Math.random() * 10);
    const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(Math.random() * 25); //to spread clouds vertically a bit more
    const xFinal = i * 100 + xOffset;
    return svg`
    <g>
      <use href="#fogIcon" x="0" y="0" transform="translate(${xFinal},${yOffsetAdj}) scale(0.5)"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
    </g>
    `;
  })}
  `;
};
const hailBG = (width: number): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="hailGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="hailIcon">
      <path fill="url(#hailGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <circle cx="24" cy="42" r="4" fill="#a8dadc"/>
      <circle cx="40" cy="42" r="4" fill="#a8dadc"/>
      <circle cx="32" cy="34" r="4" fill="#a8dadc"/>
    </g>
  </defs>
  ${Array.from({ length: Math.ceil(width / 100) }, (v, i) => i).map(i => {
    const yOffset = Math.floor(Math.random() * 100);
    const xOffset = Math.floor(Math.random() * 10);
    const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(Math.random() * 25); //to spread clouds vertically a bit more
    const xFinal = i * 100 + xOffset;
    return svg`
  <g>
    <use href="#hailIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(${xFinal},${yOffsetAdj})" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  `;
  })}
  `;
};

const rainBG = (width: number): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4fc2f79c" />
      <stop offset="80%" stop-color="#4fc2f79c" stop-opacity="0" />
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
    <g id="cloudRainGroup">
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
  ${Array.from({ length: Math.ceil(width / 100) }, (v, i) => i).map(i => {
    const yOffset = Math.floor(Math.random() * 100);
    const xOffset = Math.floor(Math.random() * 10);
    const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(Math.random() * 25); //to spread drops vertically a bit more
    const xFinal = i * 100 + xOffset;
    const scale = 1 * Math.random(); // to vary cloud sizes a bit
    return svg`
    <g>
      <use href="#cloudRainGroup" x="0" y="-10" width="80" height="40" transform="scale(${scale}.${scale}) translate(${xFinal},${yOffsetAdj})" opacity="0.9"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
    </g>
    `;
  })}
  
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
  ${Array.from({ length: Math.ceil(width / 20) }, (v, i) => i).map(i => {
    const yOffset = Math.floor(Math.random() * 100);
    const xOffset = Math.floor(Math.random() * 10);
    const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(Math.random() * 25); //to spread drops vertically a bit more
    const xFinal = i * 20 + xOffset;
    return svg`
    <line x1="${xFinal}" y1="${yOffsetAdj}" x2="${xFinal}" y2="${yOffsetAdj + 10}" stroke="url(#extremeRainDropGradient)" stroke-width="2" stroke-linecap="round">
      <animate attributeName="y1" values="${yOffsetAdj}; ${yOffsetAdj + 20}" dur="0.5s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="${yOffsetAdj + 10}; ${yOffsetAdj + 30}" dur="0.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0" dur="0.5s" repeatCount="indefinite"/>
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
    <linearGradient id="thunderstormGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="thunderstormIcon">
      <path fill="url(#thunderstormGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <path fill="#facc15" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M30 35l-8 12h6l-8 12"/>
    </g>
  </defs>
  
  <!-- Cloud -->
  <g>
    <use href="#thunderstormIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  
  <!-- Lightning flashes -->
  ${Array.from({ length: Math.ceil(width / 100) }, (v, i) => i).map(i => {
    const yOffset = Math.floor(Math.random() * 100);
    const xOffset = Math.floor(Math.random() * 10);
    const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(Math.random() * 25); //to spread flashes vertically a bit more
    const xFinal = i * 100 + xOffset;
    return svg`
    <g transform="translate(${xFinal},${yOffsetAdj}) scale(0.5)">
      <path fill="#facc15" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M30 35l-8 12h6l-8 12" opacity="0">
        <animate attributeName="opacity" values="0; 1; 0" dur="2s" repeatCount="indefinite" begin="${(i * 2) % 10}s"/>
      </path>
    </g>
    `;
  })}
  `;
};

const thunderstormsRainBG = (width: number): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="thunderstormRainGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="thunderstormRainIcon">
      <path fill="url(#thunderstormRainGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <path fill="#facc15" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M30 35l-8 12h6l-8 12"/>
    </g>
    <linearGradient id="thunderstormRainDropGradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#3a86ff" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#3a86ff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  
  <!-- Cloud -->
  <g>
    <use href="#thunderstormRainIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>

  <!-- Rain drops -->
  ${Array.from({ length: Math.ceil(width / 20) }, (v, i) => i).map(i => {
    const yOffset = Math.floor(Math.random() * 100);
    const xOffset = Math.floor(Math.random() * 10);
    const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(Math.random() * 25); //to spread drops vertically a bit more
    const xFinal = i * 20 + xOffset;
    return svg`
    <line x1="${xFinal}" y1="${yOffsetAdj}" x2="${xFinal}" y2="${yOffsetAdj + 10}" stroke="url(#thunderstormRainDropGradient)" stroke-width="2" stroke-linecap="round">
      <animate attributeName="y1" values="${yOffsetAdj}; ${yOffsetAdj + 20}" dur="1s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="${yOffsetAdj + 10}; ${yOffsetAdj + 30}" dur="1s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0" dur="1s" repeatCount="indefinite"/>
    </line>
    `;
  })}
  <!-- Lightning flashes -->
  ${Array.from({ length: Math.ceil(width / 100) }, (v, i) => i).map(i => {
    const yOffset = Math.floor(Math.random() * 100);
    const xOffset = Math.floor(Math.random() * 10);
    const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(Math.random() * 25); //to spread flashes vertically a bit more
    const xFinal = i * 100 + xOffset;
    return svg`
    <g transform="translate(${xFinal},${yOffsetAdj}) scale(0.5)">
      <path fill="#facc15" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M30 35l-8 12h6l-8 12" opacity="0">
        <animate attributeName="opacity" values="0; 1; 0" dur="2s" repeatCount="indefinite" begin="${(i * 2) % 10}s"/>
      </path>
    </g>
    `;
  })}
  `;
};

const sleetBG = (width: number): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="sleetGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="sleetIcon">
      <path fill="url(#sleetGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <circle cx="24" cy="42" r="4" fill="#a8dadc"/>
      <circle cx="40" cy="42" r="4" fill="#a8dadc"/>
      <line x1="32" y1="34" x2="32" y2="38" stroke="#3a86ff" stroke-width="2" stroke-linecap="round">
        <animate attributeName="y1" values="34; 44" dur="1s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="38; 48" dur="1s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1; 0" dur="1s" repeatCount="indefinite"/>
      </line>
    </g>
  </defs>
  
  ${Array.from({ length: Math.ceil(width / 100) }, (v, i) => i).map(i => {
    const yOffset = Math.floor(Math.random() * 100);
    const xOffset = Math.floor(Math.random() * 10);
    const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(Math.random() * 25); //to spread clouds vertically a bit more
    const xFinal = i * 100 + xOffset;
    return svg`
  <g>
    <use href="#sleetIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(${xFinal},${yOffsetAdj})" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  `;
  })}
  `;
};

const snowBG = (width: number): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="snowGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="snowIcon">
      <path fill="url(#snowGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <linearGradient id="snowFlakeGradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#dbeafe" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#dbeafe" stop-opacity="0"/>
    </linearGradient>
    <g id="snowFlakeIcon" stroke="url(#snowFlakeGradient)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <line x1="0" y1="-4" x2="0" y2="4"/>
      <line x1="-3" y1="-3" x2="3" y2="3"/>
      <line x1="-3" y1="3" x2="3" y2="-3"/>
    </g>
    <g id="cloudIcon">
      <use href="#snowIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(10,20)" opacity="0.9"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
    </g>
    <g id="cloudIconWithSnow">
    </g>

  </defs>
  
  <g>
  ${Array.from({ length: Math.ceil(width / 20) }, (v, i) => i).map(i => {
    const yOffset = Math.floor(Math.random() * 100);
    const xOffset = Math.floor(Math.random() * 10);
    const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(Math.random() * 25); //to spread flakes vertically a bit more
    const xFinal = i * 20 + xOffset;
    return svg`
    <g transform="translate(${xFinal},${yOffsetAdj}) scale(0.5)">
      <use href="#snowFlakeIcon" x="0" y="0" width="8" height="8" opacity="1"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;0,20" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1; 0" dur="3s" repeatCount="indefinite"/>
    </g>
    `;
  })}
  </g>
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
    </linearGradient
    <g id="cloudIcon">
      <path fill="url(#partlyCloudyDayGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </g>
    <g id="partlyCloudyDayIcon">
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
    <use href="#sunIcon" x="200" y="50" width="100" height="100" opacity="0.9"/>
  </g>
  ${Array.from({ length: Math.ceil(width / 100) }, (v, i) => i).map(i => {
    const yOffset = Math.floor(Math.random() * 100);
    const xOffset = Math.floor(Math.random() * 10);
    const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(Math.random() * 25); //to spread clouds vertically a bit more
    const xFinal = i * 100 + xOffset;
    const scale = Math.floor(Math.random() * 2) + 1; // to vary cloud sizes a bit
    const opacity = 0.5 + Math.random() * 0.5;
    const duration = 44 + Math.floor(Math.random() * 100);
    const fadeDuration = 10 + Math.floor(Math.random() * 100);
    return svg`
    <g>
      <use href="#partlyCloudyDayIcon" x="${xFinal}" y="${yOffsetAdj}" width="80" height="40" transform="scale(${scale})" opacity="0">
        <animate attributeName="opacity" values="0;${opacity};${opacity};0" dur="${fadeDuration}s" repeatCount="indefinite"/>
      </use>
      <animateTransform attributeName="transform" type="translate" values="-150,20;450,20" dur="${duration}s" repeatCount="indefinite"/>
    </g>
    `;
  })}
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
    <g id="partlyCloudyNightIcon">
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
  ${Array.from({ length: Math.ceil(width / 100) }, (v, i) => i).map(i => {
    const yOffset = Math.floor(Math.random() * 100);
    const xOffset = Math.floor(Math.random() * 10);
    const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(Math.random() * 25); //to spread clouds vertically a bit more
    const xFinal = i * 100 + xOffset;
    const scale = Math.floor(Math.random() * 2) + 1; // to vary cloud sizes a bit
    const opacity = 0.5 + Math.random() * 0.5;
    const duration = 44 + Math.floor(Math.random() * 100);
    const fadeDuration = 10 + Math.floor(Math.random() * 100);
    console.log(duration);
    return svg`
    <g>
      <use href="#partlyCloudyNighIcon" x="${xFinal}" y="${yOffsetAdj}" width="80" height="40" transform="scale(${scale})" opacity="0">
        <animate attributeName="opacity" values="0;${opacity};${opacity};0" dur="${fadeDuration}s" repeatCount="indefinite"/>
      </use>
      <animateTransform attributeName="transform" type="translate" values="-150,20;450,20" dur="${duration}s" repeatCount="indefinite"/>
    </g>
    `;
  })}
  `;
};

const hurricaneBG = (width: number): TemplateResult => {
  return svg`
  <defs>
    <linearGradient id="hurricaneGradient" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset=".45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>
    <g id="hurricaneIcon">
      <path fill="url(#hurricaneGradient)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <circle cx="32" cy="36" r="6" fill="#f87171" stroke="#b91c1c" stroke-width="1"/>
      <path fill="#f87171" stroke="#b91c1c" stroke-width="1" d="M32 30a6 6 0 016 6h-6V30zM32 42a6 6 0 01-6-6h6v6zM26 36a6 6 0 016-6v6H26zM38 36a6 6 0 01-6 6v-6h6z"/>
    </g>
  </defs>
  
  ${Array.from({ length: Math.ceil(width / 100) }, (v, i) => i).map(i => {
    const yOffset = Math.floor(Math.random() * 100);
    const xOffset = Math.floor(Math.random() * 10);
    const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(Math.random() * 25); //to spread clouds vertically a bit more
    const xFinal = i * 100 + xOffset;
    return svg`
  <g>
    <use href="#hurricaneIcon" x="0" y="-10" width="80" height="40" transform="scale(2.2) translate(${xFinal},${yOffsetAdj})" opacity="0.9"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;20,0;0,0" dur="18s" repeatCount="indefinite"/>
  </g>
  `;
  })}
  `;
};
