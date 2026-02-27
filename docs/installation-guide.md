# Detailed Installation Guide for SwissWeather Card

## 🎯 Step-by-Step Installation

### Option 1: HACS Installation (Recommended)

1. **Open HACS**
   - Home Assistant → HACS → Frontend

2. **Add Custom Repository**
   - Menu → Custom repositories
   - URL: `https://github.com/dmoo500/ha-swissweather-card`
   - Category: "Lovelace"
   - Click "Add"

3. **Install Card**
   - Search for "SwissWeather Card"
   - Click "Download"
   - Restart Home Assistant

4. **Resource Automatically Registered**
   - HACS registers the resource automatically
   - No manual configuration needed

### Option 2: Manual Installation

1. **Download File**
   ```bash
   # Latest release from GitHub
   wget https://github.com/dmoo500/ha-swissweather-card/releases/latest/download/swissweather-card.js
   ```

2. **Copy File**
   ```bash
   # To Home Assistant config/www/ directory
   cp swissweather-card.js /path/to/homeassistant/config/www/
   ```

3. **Register Resource**
   ```yaml
   # In configuration.yaml or via UI
   lovelace:
     resources:
       - url: /local/swissweather-card.js
         type: module
   ```

4. **Restart Home Assistant**

## 🔧 Card Configuration

### Basic Configuration
```yaml
type: custom:swissweather-card
entity: weather.home_assistant
```

### Advanced Configuration
```yaml
type: custom:swissweather-card
entity: weather.home_assistant
title: "Weather Forecast"
show_warnings: true
grid_options:
  columns: 2
  rows: 3
diagram_labels: "compact"
enable_animate_weather_icons: true
weather_date_sensors:
  - sensor.weather_warnings
precipitation_forecast:
  - sensor.precipitation_1h
  - sensor.precipitation_2h
  - sensor.precipitation_3h
```

## 🎨 Card Types

### 1. Full Weather Card
```yaml
type: custom:swissweather-card
entity: weather.home_assistant
title: "Full Weather Display"
show_current: true
show_forecast: true
show_warnings: true
```

### 2. Forecast Diagram
```yaml
type: custom:forecast-diagram-card
entity: weather.home_assistant
title: "Temperature & Precipitation"
diagram_type: "detailed"
```

### 3. Animated Background Card
```yaml
type: custom:swissweather-bg-card
entity: weather.home_assistant
background_effects: true
show_temperature: true
```

## ⚙️ Entity Requirements

### Required Entities
```yaml
# Main weather entity (required)
weather.your_weather_provider  # OpenWeatherMap, Met.no, etc.
```

### Optional Entities
```yaml
# Weather warnings
sensor.weather_warnings
sensor.meteo_warnings
binary_sensor.weather_alert

# Precipitation forecast
sensor.precipitation_1h
sensor.precipitation_2h
sensor.precipitation_6h

# Wind information
sensor.wind_speed
sensor.wind_gust
sensor.wind_direction

# Additional sensors
sensor.sunshine_duration
sensor.visibility
sensor.humidity
```

## 🔍 Verification Steps

### Check File Path
```bash
# Verify file exists:
ls -la /config/www/swissweather-card.js

# File should have proper permissions:
-rw-r--r-- 1 root root 123456 date time swissweather-card.js
```

### Test Resource Loading
1. Open browser developer tools (F12)
2. Go to Network tab  
3. Reload Home Assistant
4. Look for `swissweather-card.js` in network requests
5. Status should be `200 OK`

### Check Weather Entity
```bash
# Check your weather entity:
# Developer Tools → States → search for "weather."
# Verify entity has the required attributes
```

### Test Card Configuration
1. Go to Dashboard
2. Edit dashboard (three dots → Edit dashboard)
3. Add card → Manual card
4. Enter basic configuration
5. Save and test

## 🚨 Common Installation Issues

### Issue 1: "Custom element doesn't exist"
**Possible Causes:**
- Resource not properly registered
- File not in correct location
- Browser cache issues

**Solutions:**
1. Clear browser cache (Ctrl+F5)
2. Verify file path: `/config/www/swissweather-card.js`
3. Check resource configuration:
   ```yaml
   lovelace:
     resources:
       - url: /local/swissweather-card.js
         type: module  # Important: type must be "module"
   ```

### Issue 2: "Resource loading failed"
**Possible Causes:**
- File permission issues
- Incorrect file path
- File corruption

**Solutions:**
1. Check file permissions: `chmod 644 /config/www/swissweather-card.js`
2. Re-download the file
3. Verify URL accessibility: `http://your-ha-url:8123/local/swissweather-card.js`

### Issue 3: Weather Data Not Displayed
**Possible Causes:**
- Weather entity not found
- Entity missing required attributes
- Network connectivity issues

**Solutions:**
1. Verify entity name in Developer Tools
2. Test with different weather integration
3. Check entity attributes include forecast data

## 🔧 Advanced Configuration

### For Docker Users
```bash
# Mount www directory
docker run -d \
  --name homeassistant \
  -v /path/to/config:/config \
  -v /path/to/config/www:/config/www \  # Ensure www is accessible
  homeassistant/home-assistant
```

### For Home Assistant OS
1. Access via Samba share or SSH
2. Place files in `/config/www/`
3. Set correct permissions

### For Supervised Installation
1. Use File Editor add-on
2. Upload to `www` folder
3. Verify via System → General → Network

## ✅ Installation Verification

After installation, you should see:

1. **In Browser Console (F12):**
   ```
   ✅ SwissWeather Card module loaded successfully
   ✅ Custom elements registered: swissweather-card, forecast-diagram-card
   ```

2. **In Home Assistant:**
   - Card appears in card selector when editing dashboard
   - No error messages in Configuration → System → Logs
   - Weather data displays correctly

3. **Card Functionality:**
   - Weather information displays
   - Animations work (if enabled)  
   - Forecast updates automatically

## 📞 Getting Help

**If you have issues:** Open a [GitHub Issue](https://github.com/dmoo500/ha-swissweather-card/issues) with:

1. Installation method (HACS/Manual)
2. Home Assistant version
3. Browser console errors
4. Card configuration (YAML)
5. Entity names used
6. Screenshots of issues

**Before reporting:** Please check the [Debug Guide](./debug-guide.md) for troubleshooting steps.

---

**Next Steps:** See the [Configuration Guide](./configuration.md) for detailed customization options and the [Visual Editor Guide](./visual-editor-guide.md) for UI-based configuration.