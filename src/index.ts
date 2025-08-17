// Home Assistant 2025.8+ Card Registration
import './swissmeteo-card.js';

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'swissmeteo-card',
  name: 'SwissMeteo Card',
  description: 'Eine Card im Stil der SwissMeteo App für Home Assistant 2025.8+',
  preview: false,
  documentationURL: 'https://github.com/your-username/ha-swissmeteo-card',
});

// Console info for debugging
console.info(
  `%c SWISSMETEO-CARD %c v1.0.0 `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray'
);
