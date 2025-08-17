// Home Assistant 2025.8+ Card Registration
import './swissmeteo-card.js';

// Debug: Check if element is registered
setTimeout(() => {
  const element = customElements.get('swissmeteo-card');
  console.log('SwissMeteo Card registration status:', element ? 'SUCCESS' : 'FAILED');
  if (element) {
    console.log('Element constructor:', element);
  }
}, 100);

// Console info for debugging
console.info(
  `%c SWISSMETEO-CARD %c v1.0.0 `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray'
);

// Register for card picker
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'swissmeteo-card',
  name: 'SwissMeteo Card',
  description: 'Eine Card im Stil der SwissMeteo App für Home Assistant 2025.8+',
  preview: false,
  documentationURL: 'https://github.com/your-username/ha-swissmeteo-card',
});
