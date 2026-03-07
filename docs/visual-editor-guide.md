# SwissWeather Card - Visual Editor Guide

## 🎨 Overview

The SwissWeather Card Visual Editor provides user-friendly configuration directly in the Home Assistant Lovelace UI. No YAML knowledge required!

## 🚀 Quick Start

### 1. Add Card
1. **Open Dashboard** → **Enable Edit Mode**
2. **Click "Add Card"**
3. **Select "Custom: SwissWeather Card"**

### 2. Basic Configuration
1. **Select Weather Entity** (required)
   - Dropdown opens automatically
   - Shows all available `weather.*` entities
   - Example: `weather.openweathermap`

2. **Enter Location** (optional)
   - Displayed name in the card
   - Example: "Zurich", "Bern", "Basel"

### 3. Advanced Sensors (Optional)

#### 💨 Wind Sensors
- **Wind Speed**: `sensor.wind_speed`
- **Wind Direction**: `sensor.wind_bearing`
- **Units**: km/h and degrees (0-360°)

#### 🌧️ Precipitation Sensors
- **Precipitation Forecast**: `sensor.precipitation_1h`
- **Rain Amount**: `sensor.rain`
- **Snow Amount**: `sensor.snow`

#### ⚡ Weather Warnings
- **Warnings Entity**: `sensor.weather_warnings`
- **Alert Binary Sensor**: `binary_sensor.weather_alert`

### 4. Display Options

#### 📊 Grid Layout
- **Columns**: 1-4 (default: 2)
- **Rows**: 1-4 (default: 2)
- **Auto-resize**: Adapts to content

#### 🎭 Visual Settings
- **Animated Icons**: Enable/disable weather icon animations
- **Background Effects**: Lightning, rain animation (performance mode)
- **Compact Mode**: Smaller text and spacing

## 📋 Visual Editor Sections

### 🔧 Basic Settings
```
┌─ Basic Settings ────────────────────┐
│ Weather Entity: [weather.home]      │
│ Title: [Weather]                    │
│ Show Title: [✓]                     │
│ Location: [Home]                    │
└─────────────────────────────────────┘
```

### 📡 Sensor Configuration
```
┌─ Additional Sensors ────────────────┐
│ Precipitation:                      │
│ ├ Rain: [sensor.rain]               │
│ ├ Snow: [sensor.snow]               │
│ └ Forecast: [sensor.precip_1h]      │
│                                     │
│ Wind:                               │
│ ├ Speed: [sensor.wind_speed]        │
│ └ Direction: [sensor.wind_bearing]  │
│                                     │
│ Warnings:                           │
│ └ Alerts: [sensor.weather_warnings] │
└─────────────────────────────────────┘
```

### 🎨 Display Options
```
┌─ Display Settings ──────────────────┐
│ Grid Layout:                        │
│ ├ Columns: [2] ▼                     │
│ └ Rows: [2] ▼                        │
│                                     │
│ Visual Effects:                     │
│ ├ Animated Icons: [✓]               │
│ ├ Background Effects: [✓]           │
│ └ Compact Mode: [ ]                 │
│                                     │
│ Forecast:                           │
│ ├ Show Hourly: [✓]                  │
│ ├ Show Daily: [✓]                   │
│ └ Diagram Labels: [Compact] ▼       │
└─────────────────────────────────────┘
```

## ⚙️ Step-by-Step Configuration

### Step 1: Basic Setup
1. **Select Main Weather Entity**
   - Click dropdown next to "Weather Entity"
   - Choose from available weather integrations
   - Example: `weather.openweathermap`, `weather.met_no`

2. **Configure Title and Location**
   - Enter card title (optional)
   - Add location name for display
   - Toggle title visibility

### Step 2: Add Sensors (Optional)
1. **Precipitation Sensors**
   ```
   Hourly Rain: sensor.rain_1h
   Daily Rain: sensor.rain_today  
   Snow: sensor.snow_depth
   ```

2. **Wind Sensors**
   ```
   Wind Speed: sensor.wind_speed
   Wind Gust: sensor.wind_gust
   Wind Direction: sensor.wind_bearing
   ```

3. **Weather Warnings**
   ```
   Warnings: sensor.meteo_warnings
   Severe Weather: binary_sensor.severe_weather
   ```

### Step 3: Layout Configuration
1. **Grid Options**
   - **Columns**: How many cards wide (1-4)
   - **Rows**: How many cards tall (1-4)  
   - **Auto-size**: Automatically adjust to content

2. **Visual Effects**
   - **Animated Weather Icons**: Smooth animations
   - **Background Effects**: Weather-based backgrounds
   - **Performance Mode**: Reduced animations for slower devices

### Step 4: Forecast Settings
1. **Forecast Display**
   - **Hourly Forecast**: Next 24 hours
   - **Daily Forecast**: Next 7 days
   - **Temperature Chart**: Graphical temperature display

2. **Diagram Options**
   - **Chart Order**: Customize which charts appear and in what order
   - **Forecast Hours**: 6h, 12h, or 18h

## 🎯 Configuration Examples

### 📱 Mobile-Optimized Setup
```
Grid: 1 column × 3 rows
Compact Mode: Enabled
Animated Icons: Disabled (performance)
```

### 🖥️ Desktop Full-Feature Setup  
```
Grid: 2 columns × 2 rows
Compact Mode: Disabled  
Animated Icons: Enabled
All sensors configured
```

### ⚡ Performance Setup
```
Grid: 2 columns × 1 row
Compact Mode: Enabled
Animations: Disabled
Basic sensors only
```

## 🔍 Sensor Discovery

The visual editor automatically discovers compatible sensors:

### 🔎 **Auto-Detection**
- Weather entities starting with `weather.`
- Wind sensors with `wind` in the name
- Precipitation sensors with `rain`, `snow`, `precip` in name
- Warning sensors with `warning`, `alert` in name

### ✅ **Manual Selection**  
If auto-detection misses sensors:
1. Use entity selector dropdown
2. Type exact entity ID
3. Verify entity exists in Developer Tools → States

## 📊 Real-Time Preview

The visual editor provides real-time preview:

### 🔄 **Live Updates**
- Configuration changes update immediately
- No need to save and reload
- See exactly how card will appear

### 🎨 **Style Preview**
- Grid layout visualization  
- Color scheme preview
- Font size and spacing

## 🚨 Common Configuration Issues

### ❌ Entity Not Found
**Problem:** "Entity not available" message
**Solution:**
1. Check entity exists: Developer Tools → States
2. Verify weather integration is working
3. Restart Home Assistant if needed

### ❌ No Data Displayed
**Problem:** Card shows but no weather data
**Solution:**  
1. Verify weather entity has attributes
2. Check internet connection
3. Review weather service API limits

### ❌ Layout Issues
**Problem:** Card layout looks incorrect
**Solution:**
1. Try different grid options
2. Enable compact mode for smaller screens
3. Adjust rows/columns to fit content

## 💡 Pro Tips

### 🎯 **Start Simple**
1. Begin with basic weather entity only
2. Add sensors one by one
3. Test each addition before adding more

### 🔧 **Entity Naming**
- Use descriptive entity names
- Group related sensors with prefixes
- Example: `weather_zurich_temp`, `weather_zurich_wind`

### 📱 **Responsive Design**
- Test on mobile and desktop
- Use compact mode for small screens  
- Adjust grid based on screen size

### ⚡ **Performance Optimization**
- Disable animations on slower devices
- Use fewer sensors for better performance
- Enable compact mode to reduce DOM complexity

## 🔄 Migration from YAML

### From Manual YAML Configuration:
1. Open existing card in edit mode
2. Click "Show Visual Editor" button
3. Visual editor loads current YAML settings
4. Continue editing with visual tools

### Unsupported YAML Features:
Some advanced YAML options may not be available in visual editor:
- Custom CSS styling
- Advanced automation triggers  
- Complex conditional logic

For these features, use "Show Code Editor" to switch back to YAML mode.

💡 **Tip:** Start with minimal configuration and add sensors gradually for best results!

---

**Next Steps:** See the [Configuration Guide](./configuration.md) for YAML options or [Debug Guide](./debug-guide.md) for troubleshooting.