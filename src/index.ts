// Home Assistant 2025.8+ Card Registration
console.log('📦 SwissWeather Card module loading started...');
console.log('📦 Browser support check:', {
  customElements: !!window.customElements,
  hasReflect: !!window.Reflect,
});

import './swissweather-card.js';

console.log('📦 SwissWeather Card TypeScript file imported');

// Debug: Check if element is registered
setTimeout(() => {
  const element = customElements.get('swissweather-card');
  const editor = customElements.get('swissweather-card-editor');
  console.log('🔍 SwissWeather Card registration status:', element ? 'SUCCESS ✅' : 'FAILED ❌');
  console.log('🔍 SwissWeather Editor registration status:', editor ? 'SUCCESS ✅' : 'FAILED ❌');
  if (element) {
    console.log('🔍 Element constructor:', element);
    console.log('🔍 Element prototype:', element.prototype);
  } else {
    console.error('❌ Custom element "swissweather-card" was not registered!');
    console.log('🔍 Checking custom elements registry...');
  }
}, 100);

// Console info for debugging
console.info(
  `%c SWISSWEATHER-CARD %c v1.0.0 `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray'
);

// Register for card picker
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'swissweather-card',
  name: 'SwissWeather Card',
  description: 'Eine Card im Stil der SwissWeather App für Home Assistant 2025.8+',
  preview: false,
  documentationURL: 'https://github.com/your-username/ha-swissweather-card',
});

console.log('📦 SwissWeather Card module loading completed');
