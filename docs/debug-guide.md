# SwissWeather Card - Home Assistant Debug Guide

## 🔍 Step-by-Step Debugging for "Custom element doesn't exist"

### 1. Open Browser Console
```
Chrome/Edge: F12 → Console Tab
Firefox: F12 → Console Tab
Safari: Developer → JavaScript Console
```

### 2. Look for the following messages:

#### ✅ **Successful Registration:**
```
📦 SwissWeather Card module loading started...
📦 Browser support check: {customElements: true, hasReflect: true}
📦 SwissWeather Card TypeScript file imported
🎯 About to apply @customElement decorator to SwissWeatherCard
🔧 SwissWeatherCard constructor called
✅ Custom element registered: swissweather-card
✅ Lovelace resource loading completed
```

#### ❌ **Common Error Messages:**
```
❌ Error: Resource not found: /local/swissweather-card.js
❌ TypeError: Cannot read property 'define' of undefined
❌ SyntaxError: Unexpected token 'import'
❌ Custom element doesn't exist: swissweather-card
❌ Error loading HA entity data
❌ Component not ready: SwissWeatherCard mounting deferred
```

### 3. Verification Steps

#### ✅ Check File Accessibility
```bash
# URL should be accessible:
http://YOUR-HA-URL:8123/local/swissweather-card.js
```

#### ✅ Lovelace Resource Configuration
```yaml
resources:
  - url: /local/swissweather-card.js
    type: module
```

**Important:** Use `type: module`, not `type: js`

#### ✅ Card Configuration
```yaml
type: custom:swissweather-card
entity: weather.your_weather_entity
```

### 4. Common Problems and Solutions

#### Problem 1: "Custom element doesn't exist"
**Cause:** JavaScript file not loaded or not executed
**Solutions:**
1. Check if the file exists in `/config/www/swissweather-card.js`
2. Clear browser cache (Ctrl+F5)
3. Verify Lovelace resource configuration
4. Check browser console for error messages

#### Problem 2: "Resource not found"
**Cause:** Wrong file path or file not accessible
**Solutions:**
1. HACS installation: File should be automatically placed
2. Manual installation: Place file in `/config/www/`
3. Verify file permissions
4. Check Home Assistant logs

#### Problem 3: Module Loading Errors
**Cause:** ES6 modules not supported or wrong configuration
**Solutions:**
1. Use `type: module` in resource configuration
2. Ensure modern browser (ES6 support)
3. Check for adblocking software
4. Test in incognito mode

#### Problem 4: Weather Entity Issues
**Cause:** Weather entity not available or wrong name
**Solutions:**
1. Check entity name in Developer Tools → States
2. Search for entities starting with `weather.`
3. Verify weather integration is working
4. Test with different weather entities

### 5. Debug Configuration

For debugging, check the browser console (F12) for detailed loading messages. The card logs its initialization status automatically — no special config option is required.

### 6. Browser Compatibility Check

#### ✅ **Fully Supported:**
- Chrome 61+
- Firefox 63+
- Safari 12+
- Edge 79+

#### ⚠️ **Limited Support:**
- Internet Explorer: Not supported
- Samsung Internet: Check console for ES6 support

### 7. Network and Performance Issues

#### Check Loading Performance:
1. Open Developer Tools → Network tab
2. Reload the page
3. Look for `swissweather-card.js` in the list
4. Check loading time and status code

#### Common Network Issues:
- **DNS problems:** Entity lookups fail
- **Slow loading:** Large bundle size or slow connection
- **CORS errors:** Proxy or reverse proxy misconfiguration

### 8. Home Assistant Specific Issues

#### Entity Access Problems:
```yaml
# Check if these entities exist:
weather.your_weather          # Main weather entity
sensor.precipitation_forecast # Optional
sensor.wind_speed            # Optional
sensor.sunshine_duration     # Optional
```

#### Lovelace Mode Issues:
- **Storage Mode:** Editing via UI - resource configuration in UI
- **YAML Mode:** Editing via YAML files - resource configuration in `configuration.yaml`

### 9. Advanced Debugging

#### Enable Debug Logging in Home Assistant:
```yaml
# configuration.yaml
logger:
  default: info
  logs:
    custom_components.frontend: debug
```

#### Check Home Assistant Logs:
```bash
# In Home Assistant log viewer or
tail -f /config/home-assistant.log | grep -i swissweather
```

### 10. Getting Help

If all steps fail, create a [GitHub Issue](https://github.com/dmoo500/ha-swissweather-card/issues) with:

1. **Browser Console Output** (complete error messages)
2. **Home Assistant Version**
3. **Installation Method** (HACS/Manual)
4. **Card Configuration** (YAML)
5. **Entity Names** used
6. **Network Tab Screenshots** (if loading issues)

### 11. Quick Fix Checklist

Before creating an issue, try these quick fixes:

- [ ] Clear browser cache (Ctrl+F5)
- [ ] Check file exists: `/config/www/swissweather-card.js`
- [ ] Verify resource type: `type: module`
- [ ] Test entity in Developer Tools → States
- [ ] Try incognito mode (disable browser extensions)
- [ ] Check Home Assistant logs for errors
- [ ] Restart Home Assistant
- [ ] Test with a simple card configuration

---

**Need more help?** Check the [Installation Guide](./installation-guide.md) or [Configuration Guide](./configuration.md) for additional information.