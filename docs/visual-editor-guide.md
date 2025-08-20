# SwissWeather Card - Visual Editor Guide

## 🎨 Überblick

Der SwissWeather Card Visual Editor ermöglicht eine benutzerfreundliche Konfiguration direkt in der Home Assistant Lovelace UI. Keine YAML-Kenntnisse erforderlich!

## 🚀 Schnellstart

### 1. Card hinzufügen
1. **Dashboard öffnen** → **Bearbeiten-Modus aktivieren**
2. **"Card hinzufügen"** klicken
3. **"Benutzerdefiniert: SwissWeather Card"** auswählen

### 2. Basis-Konfiguration
1. **Wetter Entity** auswählen (erforderlich)
   - Dropdown öffnet sich automatisch
   - Zeigt alle verfügbaren `weather.*` Entities
   - Beispiel: `weather.openweathermap`

2. **Standort eingeben** (optional)
   - Angezeigter Name in der Card
   - Beispiel: "Zürich", "Bern", "Basel"

### 3. Erweiterte Sensoren (Optional)

#### 💨 Wind-Sensoren
- **Windgeschwindigkeit**: `sensor.wind_speed`
- **Windrichtung**: `sensor.wind_bearing`
- **Einheiten**: km/h und Grad (0-360°)

#### ☀️ Weitere Wetterdaten
- **Sonnenscheindauer**: `sensor.sunshine_duration` (Stunden)
- **Niederschlag**: `sensor.precipitation_forecast`
- **Wetterwarnungen**: `sensor.meteoswiss_warnings`

### 4. Anzeigeoptionen
- ✅ **Wettervorhersage**: 7-Tage-Prognose anzeigen
- ✅ **Niederschlagsdiagramm**: Stündliche Regenvorhersage
- ✅ **Wetterwarnungen**: Schweizer Warnungen hervorheben
- ⬜ **Kompakter Modus**: Kleinere Card für mobile Geräte

## 🔧 Editor-Features

### Entity Picker
```typescript
// Automatische Filterung nach Domain
<ha-entity-picker
  .includeDomains=${['weather']}        // Nur Wetter-Entities
  .includeDomains=${['sensor']}         // Nur Sensor-Entities
  allow-custom-entity                   // Manuelle Eingabe möglich
/>
```

### Live-Vorschau
- **Sofortige YAML-Generierung** bei jeder Änderung
- **Fehlervalidierung** für ungültige Entities
- **Konfigurations-Preview** im unteren Bereich

### Responsive Design
- **Desktop**: Zweispalten-Layout mit Sidebar
- **Mobile**: Gestapeltes Layout für bessere Bedienbarkeit
- **Touch-optimiert**: Große Buttons und Eingabefelder

## 📋 Generierte YAML-Konfiguration

### Minimale Konfiguration
```yaml
type: custom:swissweather-card
entity: weather.openweathermap
location: "Zürich"
```

### Vollständige Konfiguration
```yaml
type: custom:swissweather-card
entity: weather.openweathermap
location: "Zürich"

# Zusätzliche Sensoren
wind_entity: sensor.wind_speed
wind_direction_entity: sensor.wind_bearing
sunshine_entity: sensor.sunshine_duration
precipitation_entity: sensor.precipitation_forecast
warning_entity: sensor.meteoswiss_warnings

# Anzeigeoptionen
show_forecast: true
show_precipitation: true
show_warnings: true
compact_mode: false
```

## 🎯 Entity-Zuordnung

### Wetter-Integrationen
| Integration | Entity | Beschreibung |
|-------------|--------|--------------|
| OpenWeatherMap | `weather.openweathermap` | Kostenlose API, weltweite Abdeckung |
| Met.no | `weather.home` | Norwegischer Wetterdienst |
| AccuWeather | `weather.accuweather` | Kommerzielle API |
| DarkSky | `weather.dark_sky` | ⚠️ Eingestellt seit 2023 |

### Schweizer Sensoren
| Sensor | Quelle | Beispiel-Entity |
|--------|--------|-----------------|
| MeteoSchweiz | HACS Integration | `sensor.meteoswiss_temperature` |
| Swiss Weather | Custom Component | `sensor.swiss_weather_warnings` |
| Local Station | DIY/Hardware | `sensor.local_wind_speed` |

## 🔍 Troubleshooting

### Häufige Probleme

#### ❌ "Entity nicht gefunden"
**Ursache**: Entity existiert nicht oder ist falsch geschrieben
**Lösung**: 
1. **Developer Tools** → **States** → Nach Entity suchen
2. **Exakter Name** verwenden (case-sensitive)
3. **Entity-Status** überprüfen (available/unavailable)

#### ❌ "Keine Wetter-Entities verfügbar"
**Ursache**: Keine Wetter-Integration installiert
**Lösung**:
1. **Settings** → **Devices & Services** → **Add Integration**
2. **"Weather"** suchen und installieren (z.B. OpenWeatherMap)
3. **API-Key** konfigurieren falls erforderlich

#### ❌ "Zusätzliche Sensoren werden nicht angezeigt"
**Ursache**: Sensoren optional, Entity möglicherweise nicht verfügbar
**Lösung**:
1. **Sensor-Integration** installieren (z.B. MeteoSchweiz via HACS)
2. **Entity-Namen** in Developer Tools überprüfen
3. **Fallback auf Wetter-Entity** - Card funktioniert ohne zusätzliche Sensoren

### Debug-Modus
```javascript
// Browser-Konsole (F12)
// Prüfe verfügbare Entities
Object.keys(hass.states).filter(id => id.startsWith('weather.'));
Object.keys(hass.states).filter(id => id.startsWith('sensor.wind'));

// Prüfe Entity-Attribute
console.log(hass.states['weather.openweathermap']);
```

## 🎨 Anpassungen

### Custom CSS
```css
/* Card-Container anpassen */
swissweather-card {
  --swissweather-primary-color: #dc143c;
  --swissweather-background: #ffffff;
  --swissweather-border-radius: 16px;
}

/* Kompakter Modus erzwingen */
swissweather-card[compact] {
  --swissweather-padding: 10px;
  --swissweather-font-size: 14px;
}
```

### Theme-Integration
```yaml
# In themes.yaml
swissweather_theme:
  swissweather-primary-color: "#2196f3"
  swissweather-warning-color: "#ff9800"
  swissweather-success-color: "#4caf50"
```

## 📚 Weiterführende Links

- **[HACS Installation](hacs-installation.md)** - HACS-Integration einrichten
- **[Entity Mapping](entity-mapping.md)** - Sensor-Zuordnungen für verschiedene Systeme
- **[Theming Guide](theming.md)** - Card-Design anpassen
- **[Home Assistant 2025.8](ha-2025-8.md)** - Kompatibilitäts-Guide

---

💡 **Tipp**: Beginnen Sie mit der minimalen Konfiguration und fügen Sie schrittweise weitere Sensoren hinzu!
