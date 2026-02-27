# HACS Installation & Configuration

## 📦 Installation via HACS

### Prerequisites
- Home Assistant 2025.8+
- HACS already installed and configured

### Step-by-Step Installation

1. **Open HACS**
   - Go to HACS in the sidebar
   - Select "Frontend"

2. **Add Repository**
   - Click on the three dots (⋮)
   - Select "Custom repositories"
   - Enter URL: `https://github.com/dmoo500/ha-swissweather-card`
   - Category: "Lovelace"
   - Click "Add"

3. **Install Card**
   - Search for "SwissWeather Card"
   - Click "Download"
   - Select the latest version
   - Confirm the installation

4. **Restart Home Assistant**
   - Go to Settings > System > Restart
   - Wait until HA is fully loaded

## ⚙️ Configuration

### Basic Configuration
```yaml
type: custom:swissweather-card
entity: weather.home
location: "Zurich"
```

### Advanced Configuration
```yaml
type: custom:swissweather-card
entity: weather.openweathermap
location: "Zurich"
warning_entity: sensor.meteoswiss_warnings
wind_entity: sensor.wind_speed
wind_direction_entity: sensor.wind_bearing
sunshine_entity: sensor.sunshine_duration
show_forecast: true
compact_mode: false
grid_options:
  columns: 2
  rows: 2
```

### Full Configuration Example
```yaml
type: custom:swissweather-card
entity: weather.met_no
title: "Swiss Weather"
location: "Basel"

# Weather entities
weather_date_sensors:
  - sensor.weather_warnings
  - sensor.meteo_alerts

# Precipitation sensors
precipitation_forecast:
  - sensor.precipitation_1h
  - sensor.precipitation_3h
  - sensor.precipitation_6h

# Wind information
wind_entity: sensor.wind_speed
wind_direction_entity: sensor.wind_bearing
wind_gust_entity: sensor.wind_gust

# Additional sensors
sunshine_entity: sensor.sunshine_duration
uv_index_entity: sensor.uv_index

# Display options
show_current: true
show_forecast: true
show_warnings: true
enable_animate_weather_icons: true

# Layout
grid_options:
  columns: 2
  rows: 3
  
compact_mode: false
diagram_labels: "compact"
```

## 🔧 HACS Management

### Update Card
1. **Check for Updates**
   - Go to HACS → Frontend
   - Look for update badge on SwissWeather Card
   - Click on the card

2. **Install Update**
   - Click "Update"
   - Select version to install
   - Confirm update

3. **Clear Browser Cache**
   - Clear browser cache after update
   - Or use Ctrl+F5 to force refresh

### Uninstall Card
1. **Remove from HACS**
   - HACS → Frontend → SwissWeather Card
   - Click three dots (⋮) → Remove

2. **Remove from Lovelace**
   - Remove card configurations from dashboard
   - Remove resource reference if manually added

3. **Clean Up**
   - Restart Home Assistant
   - Clear browser cache

## 🔍 Verification Steps

### Check Installation
1. **HACS Frontend**
   - Card appears in installed list
   - Status shows "Installed"
   - Version number visible

2. **File System Check**
   ```bash
   # File should exist at:
   /config/custom_components/frontend/swissweather-card/
   ```

3. **Lovelace Resources**
   - Resources automatically registered by HACS
   - No manual resource configuration needed

### Test Card
1. **Add to Dashboard**
   - Edit dashboard
   - Add card → Search for "SwissWeather"
   - Configure basic entity

2. **Check Console**
   - Open browser console (F12)
   - Look for successful loading messages
   - No error messages should appear

## 🚨 Troubleshooting

### Common HACS Issues

#### Repository Not Found
**Problem:** Cannot find repository in HACS
**Solution:**
1. Verify URL is correct
2. Check repository is public
3. Ensure HACS is updated
4. Try adding as custom repository

#### Download Failed
**Problem:** Installation fails during download
**Solution:**
1. Check internet connection
2. Verify GitHub access from HA
3. Try different version
4. Restart HACS

#### Card Not Available
**Problem:** Card doesn't appear in card selector
**Solution:**
1. Restart Home Assistant after installation
2. Clear browser cache (Ctrl+F5)  
3. Check HACS resources are loaded
4. Verify no conflicting custom cards

### Browser Issues

#### Resource Loading Failed
**Problem:** Card fails to load in browser
**Solution:**
1. Check browser console for errors
2. Verify file permissions
3. Test in incognito mode
4. Clear browser cache and cookies

#### Styling Issues
**Problem:** Card appears broken or unstyled
**Solution:**
1. Check theme compatibility
2. Verify HA version compatibility
3. Test with default HA theme
4. Check for CSS conflicts

### Entity Issues

#### Weather Data Missing
**Problem:** No weather data displayed
**Solution:**
1. Verify weather entity exists
2. Check entity attributes in Developer Tools
3. Test with different weather integration
4. Ensure entity has forecast data

#### Sensor Not Found
**Problem:** Additional sensors not working
**Solution:**
1. Check sensor names in Developer Tools
2. Verify sensors are available
3. Use entity ID exactly as shown in HA
4. Test with basic configuration first

## 💡 Pro Tips

### Performance Optimization
- Use `compact_mode: true` on slow devices
- Disable unused features
- Use local weather integrations

### Advanced Usage
- Test different entity combinations
- Use template sensors for enhanced data
- Configure automations for warnings

### Maintenance
- Keep HACS updated regularly
- Monitor card updates for new features
- Backup configurations before major updates

## 📞 Getting Help

### Before Reporting Issues
1. Check HACS installation status
2. Verify HA version compatibility  
3. Test with basic configuration
4. Clear browser cache
5. Check browser console for errors

### Support Channels
- **GitHub Issues**: Bug reports and feature requests
- **Community Forum**: General discussion and help
- **Discord**: Real-time assistance (if available)

### Information to Include
1. Home Assistant version
2. HACS version
3. Browser and version
4. Card configuration (YAML)
5. Browser console errors
6. Entity names and types used

---

**Next Steps:** See the [Configuration Guide](./configuration.md) for detailed options or [Debug Guide](./debug-guide.md) for troubleshooting.