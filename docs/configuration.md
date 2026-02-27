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
warning_entity: sensor.meteoswiss_warnings
wind_entity: sensor.wind_speed
wind_direction_entity: sensor.wind_direction  
sunshine_entity: sensor.sunshine_duration
precipitation_entity: sensor.precipitation_forecast
show_forecast: true
show_hourly: true
show_warnings: true
compact_mode: false
grid_options:
  columns: 2
  rows: 2
diagram_labels: "compact"
enable_animate_weather_icons: true
```

## Advanced Configuration Options

### Grid Layout Options
```yaml
type: custom:swissweather-card
entity: weather.openweathermap

# Grid configuration
grid_options:
  columns: 3        # Number of columns (1-4)
  rows: 2          # Number of rows (1-4)
  responsive: true  # Auto-adjust based on content

# Display settings
standalone: false   # Use as part of larger dashboard
compact_mode: true  # Reduced spacing for smaller displays
```

### Weather Sensors Configuration
```yaml
type: custom:swissweather-card
entity: weather.met_no

# Additional weather sensors
weather_date_sensors:
  - sensor.weather_warnings_zurich
  - sensor.severe_weather_alerts

# Precipitation forecasting
precipitation_forecast:
  - sensor.rain_1h
  - sensor.rain_3h
  - sensor.rain_6h
  - sensor.snow_forecast

# Wind information
wind_entity: sensor.wind_speed_kmh
wind_direction_entity: sensor.wind_bearing
wind_gust_entity: sensor.wind_gust

# Environmental sensors
sunshine_entity: sensor.sunshine_duration_hours
uv_index_entity: sensor.uv_index
visibility_entity: sensor.visibility_km
pressure_entity: sensor.atmospheric_pressure
```

### Visual Customization
```yaml
type: custom:swissweather-card
entity: weather.home_assistant

# Animation settings
enable_animate_weather_icons: true
background_effects: true
lightning_effects: true

# Chart and diagram options
diagram_labels: "full"    # Options: "none", "compact", "full"
chart_type: "modern"      # Chart styling
date_format: "locale"     # Date display format

# Theme integration
theme_mode: "auto"        # Follow HA theme automatically
color_scheme: "adaptive"  # Adapt colors to weather conditions
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
title: "Zurich Weather"

---

# Bern Weather  
type: custom:swissweather-card
entity: weather.openweathermap_bern
location: "Bern"
title: "Bern Weather"

---

# Geneva Weather
type: custom:swissweather-card
entity: weather.openweathermap_geneva  
location: "Geneva"
title: "Geneva Weather"
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