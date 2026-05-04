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
import { TemperatureCard } from './cards/hourly-charts/temperature-card';
import { TemperatureCardEditor } from './cards/hourly-charts/temperature-card-editor';
import { PrecipitationCard } from './cards/hourly-charts/precipitation-card';
import { PrecipitationCardEditor } from './cards/hourly-charts/precipitation-card-editor';
import { SunshineCard } from './cards/hourly-charts/sunshine-card';
import { SunshineCardEditor } from './cards/hourly-charts/sunshine-card-editor';
import { WindCard } from './cards/hourly-charts/wind-card';
import { WindCardEditor } from './cards/hourly-charts/wind-card-editor';
import { WarningCard } from './cards/warnings/warning-card';
import { WarningCardEditor } from './cards/warnings/warning-card-editor';
import { PollenCard } from './cards/pollen/pollen-card';
import { PollenCardEditor } from './cards/pollen/pollen-card-editor';
import {
  TEMPERATURE_CARD_NAME,
  PRECIPITATION_CARD_NAME,
  SUNSHINE_CARD_NAME,
  WIND_CARD_NAME,
} from './cards/hourly-charts/const';
import { WARNING_CARD_NAME } from './cards/warnings/const';
import { POLLEN_CARD_NAME } from './cards/pollen/const';
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
registerCustomCard({
  type: TEMPERATURE_CARD_NAME,
  name: 'SwissWeather Temperature Chart Card',
  description: 'Hourly temperature forecast chart as standalone card',
});
registerCustomCard({
  type: PRECIPITATION_CARD_NAME,
  name: 'SwissWeather Precipitation Chart Card',
  description: 'Hourly precipitation forecast chart as standalone card',
});
registerCustomCard({
  type: SUNSHINE_CARD_NAME,
  name: 'SwissWeather Sunshine Chart Card',
  description: 'Hourly sunshine duration chart as standalone card',
});
registerCustomCard({
  type: WIND_CARD_NAME,
  name: 'SwissWeather Wind Chart Card',
  description: 'Hourly wind speed & direction chart as standalone card',
});
registerCustomCard({
  type: WARNING_CARD_NAME,
  name: 'SwissWeather Warning Card',
  description: 'Standalone weather warning card supporting ranked and legacy warning models',
});
registerCustomCard({
  type: POLLEN_CARD_NAME,
  name: 'SwissWeather Pollen Card',
  description:
    'Displays current pollen levels for up to 7 pollen types from SwissWeather integration',
});
console.log(
  `%c 📦 SwissWeather Card module loading completed - version: ${version}`,
  'color: #ef5350; font-weight: 700;'
);

export {
  SwissWeatherCardEditor, // Full SwissWeather Card Editor
  SwissWeatherCard, // Full SwissWeather Card
  ForecastDiagramCardEditor, // Forecast Diagram Card Editor
  ForecastDiagramCard, // Forecast Diagram Card
  SwissWeatherBGCardEditor, // Animated Background Card Editor
  SwissWeatherBGCard, // Animated Background Card
  // Hourly Chart Standalone Cards
  TemperatureCard,
  TemperatureCardEditor,
  PrecipitationCard,
  PrecipitationCardEditor,
  SunshineCard,
  SunshineCardEditor,
  WindCard,
  WindCardEditor,
  // Warning Card
  WarningCard,
  WarningCardEditor,
  // Pollen Card
  PollenCard,
  PollenCardEditor,
  // Charts
  DailyForecastChart,
  ForecastTemperatureChart,
  PrecipitationChart,
  SunshineChart,
  WindChart,
  DailyForecastDiagram,
};
