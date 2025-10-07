import { version } from '../package.json';
import { DailyForecastChart } from './charts/daily-forecast-chart';
import { ForecastTemperatureChart } from './charts/forecast-temperature-chart';
import { PrecipitationChart } from './charts/precipitation-chart';
import { SunshineChart } from './charts/sunshine-chart';
import { WindChart } from './charts/wind-chart';
import { DailyForecastDiagram } from './charts/daily-forecast-diagram';
import { SwissWeatherCardEditor } from './cards/full-card/swissweather-card-editor';
import { SwissWeatherCard } from './cards/full-card/swissweather-card';
import { ForecastDiagramCardEditor } from './cards/forecast-diagram/forecast-diagram-card-editor';
import { ForecastDiagramCard } from './cards/forecast-diagram/forecast-diagram-card';
import { SwissWeatherBGCard } from './cards/animated-background/swissweather-bg-card';
import { SwissWeatherBGCardEditor } from './cards/animated-background/swissweather-bg-card-editor';
import { registerCustomCard } from './utils';
import { FORECAST_DIAGRAM_CARD_NAME } from './cards/forecast-diagram/const';
import { FULL_CARD_NAME } from './cards/full-card/const';
import { ANIMATED_BACKGROUND_CARD_NAME } from './cards/animated-background/const';

// Extend Window interface for customCards
declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description: string;
      preview?: boolean;
      documentationURL?: string;
    }>;
  }
}

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

// Home Assistant 2025.8+ Card Registration
console.log('📦 SwissWeather Card module loading started...');
console.log('📦 Browser support check:', {
  customElements: !!window.customElements,
  hasReflect: !!window.Reflect,
});

registerCustomCard({
  type: FULL_CARD_NAME,
  name: 'SwissWeather Diagram Card',
  description:
    'A comprehensive weather card for Home Assistant with Swiss weather warnings and forecasts',
});

registerCustomCard({
  type: FORECAST_DIAGRAM_CARD_NAME,
  name: 'SwissWeather Daily Forecast Diagram Card',
  description: 'A card to show daily weather forecast as diagram',
});
registerCustomCard({
  type: ANIMATED_BACKGROUND_CARD_NAME,
  name: 'SwissWeather Animated Background Card (Experimental) Editor',
  description: 'the SwissWeather Animated Background Card (Experimental)',
});
console.log(
  `%c 📦 SwissWeather Card module loading completed - version: ${version}`,
  'color: #ef5350; font-weight: 700;'
);

export {
  SwissWeatherCardEditor, // Full SiwssWeather Card Editor
  SwissWeatherCard, // Full SiwssWeather Card
  ForecastDiagramCardEditor, // Forecast Diagram Card Editor
  ForecastDiagramCard, // Forecast Diagram Card
  SwissWeatherBGCardEditor, // Animated Background Card Editor
  SwissWeatherBGCard, // Animated Background Card
  // Charts
  DailyForecastChart,
  ForecastTemperatureChart,
  PrecipitationChart,
  SunshineChart,
  WindChart,
  DailyForecastDiagram,
};
