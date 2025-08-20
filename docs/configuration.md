# Konfiguration für Home Assistant

Hier finden Sie Beispielkonfigurationen für verschiedene Setup-Varianten der SwissWeather Card.

## Basis-Konfiguration

type: custom:swissweather-card

```yaml
type: custom:swissweather-card
entity: weather.home
```

## Vollständige Konfiguration

type: custom:swissweather-card

```yaml
type: custom:swissweather-card
entity: weather.home
location: "Zürich"
warning_entity: sensor.meteoswiss_warnings
wind_entity: sensor.wind_speed
wind_direction_entity: sensor.wind_direction  
sunshine_entity: sensor.sunshine_duration
precipitation_entity: sensor.precipitation_forecast
show_forecast: true
show_hourly: true
show_warnings: true
compact_mode: false
```
type: custom:swissweather-card
## Empfohlene Integrationen

### MeteoSwiss Integration
```yaml
# configuration.yaml
meteoswiss:
  - zip_code: 8001  # Zürich
type: custom:swissweather-card
      - temperature
      - humidity
      - pressure
      - wind_speed
      - wind_direction
      - weather
      - forecast
      - warnings
```

### OpenWeatherMap
```yaml
# configuration.yaml  
weather:
  - platform: openweathermap
    api_key: YOUR_API_KEY
    mode: daily
    name: home
```

### Template Sensoren

Erstellen Sie Template-Sensoren für erweiterte Daten:

```yaml
# configuration.yaml
template:
  - sensor:
      - name: "Sonnenscheindauer"
        unit_of_measurement: "h"
        state: "{{ state_attr('weather.home', 'sunshine_duration') | float }}"
      
      - name: "Wind Richtung Text"
        state: >
          {% set direction = states('sensor.wind_direction') | int %}
          {% if direction >= 348.75 or direction < 11.25 %}N
          {% elif direction < 33.75 %}NNO
          {% elif direction < 56.25 %}NO
          {% elif direction < 78.75 %}ONO
          {% elif direction < 101.25 %}O
          {% elif direction < 123.75 %}OSO
          {% elif direction < 146.25 %}SO
          {% elif direction < 168.75 %}SSO
          {% elif direction < 191.25 %}S
          {% elif direction < 213.75 %}SSW
          {% elif direction < 236.25 %}SW
          {% elif direction < 258.75 %}WSW
          {% elif direction < 281.25 %}W
          {% elif direction < 303.75 %}WNW
          {% elif direction < 326.25 %}NW
          {% elif direction < 348.75 %}NNW
          {% endif %}
```

## Styling-Optionen

### Kompakte Ansicht
```yaml
type: custom:swissweather-card
entity: weather.home
compact_mode: true
show_forecast: false
```

### Nur Warnungen
```yaml
type: custom:swissweather-card
entity: weather.home
warning_entity: sensor.meteoswiss_warnings
show_forecast: false
show_precipitation: false
```

## Mehrere Standorte

Für verschiedene Standorte können Sie mehrere Cards konfigurieren:

```yaml
# Lovelace Dashboard
type: horizontal-stack
cards:
  - type: custom:swissweather-card
    entity: weather.zurich
    location: "Zürich"
  - type: custom:swissweather-card
    entity: weather.geneva
    location: "Genf"
  - type: custom:swissweather-card
    entity: weather.basel
    location: "Basel"
```

## Fehlerbehebung

### Card lädt nicht
1. Stellen Sie sicher, dass die Ressource korrekt eingebunden ist
2. Überprüfen Sie Browser-Konsole auf Fehler
3. Starten Sie Home Assistant neu

### Keine Daten angezeigt
1. Überprüfen Sie, ob die Entity existiert
2. Prüfen Sie die Entity-Attribute in Entwicklertools
3. Testen Sie mit einer anderen Wetter-Entity

### Warnungen funktionieren nicht
1. Überprüfen Sie die Struktur der Warning-Entity
2. Stellen Sie sicher, dass warnings als Array vorliegen
3. Prüfen Sie das Format der Warnstufen (0-4)
