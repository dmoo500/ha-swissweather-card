# Configuration for Home Assistant

Here you can find example configurations for different setup variants of the SwissWeather Card.

## Basic Configuration

```yaml
type: custom:swissweather-card
entity: weather.home
```

## Complete Configuration

```yaml
type: custom:swissweather-card
entity: weather.home
location: "Zurich"
show_location: true
warning_entity: sensor.meteoswiss_warnings
wind_entity: sensor.wind_speed
wind_direction_entity: sensor.wind_bearing
sunshine_entity: sensor.sunshine_duration
precipitation_entity: sensor.precipitation_forecast
sun_entity: sun.sun
show_forecast: true
forecast_hours: 12
show_warnings: true
show_temperature: true
show_precipitation: true
show_sunshine: true
show_wind: false
compact_mode: false
enable_animate_weather_icons: true
chart_order:
  - temperature
  - precipitation
  - sunshine
  - wind
  - forecast
grid_options:
  columns: 2
  rows: 2
```

## Advanced Configuration Options

### Grid Layout and Display
```yaml
type: custom:swissweather-card
entity: weather.openweathermap

# Grid configuration
grid_options:
  columns: 3        # Number of columns
  rows: 2           # Number of rows

# Compact mode for smaller screens
compact_mode: true
```

### Data Sensors
```yaml
type: custom:swissweather-card
entity: weather.met_no

# Wind sensors
wind_entity: sensor.wind_speed
wind_direction_entity: sensor.wind_bearing

# Other sensors
sunshine_entity: sensor.sunshine_duration
precipitation_entity: sensor.precipitation_forecast
warning_entity: sensor.meteoswiss_warnings

# Sun entity for sunrise/sunset in charts
sun_entity: sun.sun
```

### Chart Visibility and Order
```yaml
type: custom:swissweather-card
entity: weather.home_assistant

# Toggle individual charts
show_temperature: true
show_precipitation: true
show_sunshine: true
show_wind: false
show_forecast: true
show_warnings: true

# Number of forecast hours shown (6, 12, or 18)
forecast_hours: 12

# Chart display order
chart_order:
  - temperature
  - precipitation
  - sunshine
  - wind
  - forecast

# Animated weather icons
enable_animate_weather_icons: true
```

## Template Sensors

Create template sensors for enhanced data:

### Weather Warnings Template
```yaml
# configuration.yaml
template:
  - sensor:
      - name: "Weather Warnings Processed"
        state: >
          {% set warnings = states('sensor.meteoswiss_warnings') %}
          {% if warnings != 'unknown' and warnings != 'unavailable' %}
            {{ warnings | count }}
          {% else %}
            0
          {% endif %}
        attributes:
          warnings: >
            {% set warnings = state_attr('sensor.meteoswiss_warnings', 'warnings') %}
            {% if warnings %}
              {{ warnings }}
            {% else %}
              []
            {% endif %}
```

### Wind Speed Conversion
```yaml
template:
  - sensor:
      - name: "Wind Speed KMH"
        state: >
          {% set wind_ms = states('sensor.wind_speed') | float(0) %}
          {{ (wind_ms * 3.6) | round(1) }}
        unit_of_measurement: "km/h"
        device_class: speed
```

### Precipitation Probability
```yaml
template:
  - sensor:
      - name: "Rain Probability Next Hour"
        state: >
          {% set forecast = state_attr('weather.openweathermap', 'forecast') %}
          {% if forecast and forecast|length > 0 %}
            {{ forecast[0].precipitation_probability | default(0) }}
          {% else %}
            0
          {% endif %}
        unit_of_measurement: "%"
```

## Multi-Location Setup

For different locations, you can configure multiple cards:

### Location-Specific Cards
```yaml
# Zurich Weather
type: custom:swissweather-card
entity: weather.openweathermap_zurich
location: "Zürich"

---

# Bern Weather  
type: custom:swissweather-card
entity: weather.openweathermap_bern
location: "Bern"

---

# Geneva Weather
type: custom:swissweather-card
entity: weather.openweathermap_geneva  
location: "Geneva"
```

### Responsive Multi-Column Layout
```yaml
# Desktop: 3 columns, Mobile: 1 column
type: horizontal-stack
cards:
  - type: custom:swissweather-card
    entity: weather.zurich
    grid_options:
      columns: 1
      rows: 2
  - type: custom:swissweather-card
    entity: weather.bern
    grid_options:
      columns: 1 
      rows: 2
  - type: custom:swissweather-card
    entity: weather.geneva
    grid_options:
      columns: 1
      rows: 2
```

## Performance Optimization

### Reduced Resource Usage
```yaml
type: custom:swissweather-card
entity: weather.home

# Performance settings
performance:
  update_interval: 600        # Update every 10 minutes
  cache_duration: 1800        # Cache for 30 minutes
  lazy_loading: true          # Load components as needed
  reduced_animations: true    # Minimal animations

# Simplified display
compact_mode: true
diagram_labels: "none"
enable_animate_weather_icons: false
background_effects: false
```

### Mobile-Optimized Configuration
```yaml
type: custom:swissweather-card
entity: weather.home

# Mobile-friendly settings
grid_options:
  columns: 1
  rows: auto
  responsive: true

# Touch-optimized UI
mobile_gestures: true
swipe_navigation: true
large_touch_targets: true

# Reduced visual complexity
compact_mode: true
simplified_charts: true
minimal_forecast: true
```

## Integration Examples

### Home Assistant Automations
```yaml
# Update weather card when forecast changes
automation:
  - alias: "Refresh Weather Display"
    trigger:
      - platform: state
        entity_id: weather.openweathermap
        attribute: forecast
    action:
      - service: browser_mod.refresh
        data:
          deviceID: this
```

### Notification Integration
```yaml
# Weather warning notifications
automation:
  - alias: "Weather Warning Alert"
    trigger:
      - platform: state
        entity_id: sensor.weather_warnings
        to: 
          - "warning"
          - "watch"
          - "advisory"
    action:
      - service: notify.mobile_app
        data:
          title: "Weather Alert"
          message: >
            Weather warning issued: {{ trigger.to_state.state }}
            Details: {{ trigger.to_state.attributes.description }}
```

### Voice Assistant Integration
```yaml
# Ask about weather via voice
intent_script:
  WeatherIntent:
    speech:
      text: >
        The current temperature is {{ states('sensor.temperature') }} degrees.
        Weather conditions: {{ states('weather.home') }}.
        {% if states('sensor.weather_warnings') != '0' %}
        There are {{ states('sensor.weather_warnings') }} weather warnings active.
        {% endif %}
```

## Troubleshooting Configuration

### Debug Mode
```yaml
type: custom:swissweather-card
entity: weather.home
debug: true                    # Enable detailed console logging
performance_monitoring: true   # Monitor performance metrics
verbose_logging: true          # Extended logging information
```

### Entity Validation
```yaml
# Test configuration with minimal setup
type: custom:swissweather-card
entity: weather.home           # Verify this entity exists
# Add other options one by one to identify issues
```

### Common Configuration Issues

#### Entity Not Found
```yaml
# ❌ Incorrect
entity: weather.non_existent

# ✅ Correct - check in Developer Tools → States
entity: weather.openweathermap
```

#### Wrong Sensor Types
```yaml
# ❌ Incorrect
wind_entity: weather.home  # Wrong entity type

# ✅ Correct
wind_entity: sensor.wind_speed  # Proper sensor entity
```

#### Invalid Grid Options
```yaml
# ❌ Incorrect
grid_options:
  columns: 5  # Maximum is 4

# ✅ Correct
grid_options:
  columns: 4  # Within valid range
  rows: 2
```

---

For more detailed setup instructions, see the [Installation Guide](./installation-guide.md) or [HACS Installation](./hacs-installation.md).