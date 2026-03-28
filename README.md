
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/dmoo500/ha-swissweather-card)](https://github.com/dmoo500/ha-swissweather-card/releases)
[![License](https://img.shields.io/github/license/dmoo500/ha-swissweather-card)](LICENSE)
[![Issues](https://img.shields.io/github/issues-raw/dmoo500/ha-swissweather-card?maxAge=25000)](https://github.com/dmoo500/ha-swissweather-card/issues)  
[![GitHub stars](https://img.shields.io/github/stars/dmoo500/ha-swissweather-card?style=social&label=Stars&style=plastic)]()
[![GitHub watchers](https://img.shields.io/github/watchers/dmoo500/ha-swissweather-card?style=social&label=Watch&style=plastic)]()

# SwissWeather Home Assistant Card

A custom Home Assistant card that recreates the look and feel of the official SwissWeather app. **Optimized for Home Assistant 2025.8+ with TypeScript and modern web standards.**

## ⭐ Features

### 🚨 **Weather Warnings**
- Color-coded warning levels (green, yellow, orange, red, violet)
- Current alerts for selected regions
- Icons for various weather hazards
- Automatic display when warnings are active

### 🌧️ **Forecasts**
- 7-day weather forecast with icons
- Min/Max temperatures on daily forecast
- Hourly temperature forecast with line chart
- Hourly precipitation forecast with bar chart  
- Hourly Sunshine forecast with bar chart
- Hourly wind and -direction forecast with line chart
- wind direction in the chart


### ☀️ **Sunshine**
- Hourly Sunshine forecast with bar chart
- Integration with HA sunshine sensors to show sunset and sunrise in the chart

### ✅ **animated Icons**
- animated weather icons (can be switched off)

## 📱 Screenshots

All enabled

<img src="docs/images/desktop_max.png" width="250"/> 

All disabled 

<img src="docs/images/desktop_minimal.png" width="250"/>

warn + forecast

<img src="docs/images/desktop_warn_forecast.png" width="250"/> 

temp diagram

<img src="docs/images/desktop_temp.png" width="250"/> 

## 📝 Release Notes & Migration

- Full release notes are maintained in [CHANGELOG.md](CHANGELOG.md)
- GitHub release notes (including beta notes) are available under [Releases](https://github.com/dmoo500/ha-swissweather-card/releases)
- If you update from older 1.x configs, check migration notes in the latest 1.7.0-beta entries first (especially forecast and chart order behavior)


## 📦 Installation

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=dmoo500&repository=ha-swissweather-card&category=frontend)

1. Open HACS in Home Assistant
2. Go to "Frontend" 
3. Click the three dots menu → "Custom repositories"
4. Add repository URL: `https://github.com/dmoo500/ha-swissweather-card`
5. Category: Lovelace
6. Install the "Enhanced Person Card"
7. Restart Home Assistant
8. Add the card resource to your dashboard

### Manual
1. Download the latest `swissweather-card.js` from [Releases](https://github.com/dmoo500/ha-swissweather-card/releases)
2. Copy it to your `config/www/` folder (so the path is `/config/www/swissweather-card.js`)
3. In Home Assistant, go to **Settings → Dashboards → More Options (⋮) → Resources**
4. Click **Add Resource** and enter:
   - **URL:** `/local/swissweather-card.js`
   - **Type:** `module`
5. Click **Create** and reload the dashboard (or restart Home Assistant if required)
6. Now add a new card to your dashboard:
   - Click **Edit Dashboard**
   - Click **Add Card**
   - Search for **SwissWeather Card** or choose **Custom: SwissWeather Card**
   - Configure the card as desired and save

## 🎨 Visual Editor

The SwissWeather Card comes with a full visual editor for the Lovelace UI:

### Usage:
1. **Edit dashboard** → **Add card**
2. Select **"SwissWeather Card"** from the list
3. Configure entities using the dropdown menus
4. Adjust options with the toggles
5. **Save** – done!

#### 📊 Additional Sensors (Optional)

#### 🎨 Display Options
- **Weather warnings**: Toggle warning display
- **Temprature chart**: Toggle hourly chart
- **Precipitation chart**: Toggle hourly chart  
- **Sunshine char**: Toggle hourly chart
- **Wind chart**: Toggle hourly chart
- **Weather forecast**: Toggle 7-day forecast
- **Animated Weather Icons**: show animated Weather Icons
- **forecast hours**: select 6, 12 or 18 hours to show

## ⚠️ Known Issues
If you select 12 or 18 hours in the forecast charts it is possible that some bars and/or some value texts are outside of the card

## ⚙️ Configuration

### Basic Configuration
```yaml
type: custom:swissweather-card
entity: weather.home
location: "Zurich"
```


### Full Configuration
```yaml
type: custom:swissweather-card
entity: weather.openweathermap
location: "Zurich"
show_location: true
warning_entity: sensor.meteoswiss_warnings
wind_entity: sensor.wind_speed
wind_direction_entity: sensor.wind_bearing
sunshine_entity: sensor.sunshine_duration
precipitation_entity: sensor.precipitation_forecast
sun_entity: sun.sun
show_warnings: false
show_temperature: false
show_precipitation: false
show_sunshine: false
show_wind: false
enable_animate_weather_icons: true
show_forecast: false
forecast_hours: 12
```

### Options

| Option                | Type    | Default      | Description                       |
|-----------------------|---------|--------------|-----------------------------------|
| `entity`              | string  | **Required** | Main weather entity               |
| `location`            | string  | "Switzerland" | Displayed location                |
| `warning_entity`      | string  | Optional     | Entity for weather warnings        |
| `wind_entity`         | string  | Optional     | Entity for wind speed              |
| `wind_direction_entity`| string | Optional     | Entity for wind direction          |
| `sunshine_entity`     | string  | Optional     | Entity for sunshine duration       |
| `precipitation_entity`| string  | Optional     | Entity for precipitation forecast  |
| `show_warnings`       | boolean | `true`       | Show weather warnings             |
| `show_temperature`    | boolean | `true`       | Show temperature hourly forecast chart |
| `show_precipitation`  | boolean | `true`       | Show precipitation hourly forecastchart |
| `show_sun`            | boolean | `true`       | Show sun hourly forecastchart     |
| `show_wind`           | boolean | `false`      | Show wind hourly forecastchart    |
| `enable_animate_weather_icons`| boolean | true | show HA MDI weather icons or animated weather icons |
| `show_forecast`       | boolean | `true`       | Show 7-day forecast               |
| `forecast_hours`      | number  | 6            | How many hours you will see on.   |

## 🔧 Recommended Integrations

### hass-swissweather

This card is compatible with the [hass-swissweather](https://github.com/izacus/hass-swissweather) integration by @izacus, which provides high-quality Swiss weather data and warnings directly in Home Assistant. For best results, use this integration as your data source for weather, warnings, and sensor entities.

### weather icons

This card is using the animated svg icons from [Meteocons](https://github.com/basmilius/weather-icons)

## 🛠️ Development

### Requirements
- Node.js 18+
- Yarn 4+

### Setup
```bash
git clone https://github.com/dmoo500/ha-swissweather-card.git
cd ha-swissweather-card
yarn dev          # Development with live reload
yarn type-check   # TypeScript check
yarn lint         # Code linting
yarn format       # Code formatting
yarn build        # Production build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📋 Requirements

### Home Assistant
- **Home Assistant 2025.8+** (for best compatibility)
- **Modern browser** with ES2022 support

### Browser Support
- ✅ Edge 90+

**Possible causes and solutions:**
```
   resources:
      - url: /hacsfiles/swissweather-card/swissweather-card.js
      type: module
```

2. **Cache issue**
   - Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
   - Restart Home Assistant

3. **Check file path**
   - HACS: `/hacsfiles/swissweather-card/swissweather-card.js`
   - Manual: `/local/swissweather-card.js` (if in `config/www/`)

4. **Check browser console**
   - Open F12 → Console tab
   - Look for JavaScript errors

5. **Home Assistant version**
   - At least Home Assistant 2025.8+ required
   - TypeScript-based custom cards require modern browsers

### Other common issues

- **Entity not found**: Check if `entity: weather.xyz` exists in HA
- **No data**: Is the weather integration configured correctly?
- **Layout issues**: Set browser zoom to 100%

## 🔗 Links

- [📖 Documentation](docs/)
- [🐛 Bug Reports](https://github.com/dmoo500/ha-swissweather-card/issues)
- [💡 Feature Requests](https://github.com/dmoo500/ha-swissweather-card/discussions)
- [📋 Changelog](CHANGELOG.md)

## 📄 License

MIT License – see [LICENSE](LICENSE) file

## 🙏 Acknowledgements

- **MeteoSwiss** for the inspiration
- **Home Assistant Community** for the support
- **Lit Team** for the great web components library

---

⭐ **Like this card? Give the repository a star!**
