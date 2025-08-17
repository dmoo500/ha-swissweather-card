# SwissMeteo Home Assistant Card

Eine benutzerdefinierte Home Assistant Card, die das Design und die Funktionen der offiziellen SwissMeteo App nachbildet. **Optimiert für Home Assistant 2025.8+ mit TypeScript und modernen Web-Standards.**

## ⭐ Features

### 🚨 **Wetterwarnungen**
- Farbcodierte Warnstufen (Grün, Gelb, Orange, Rot, Violett)
- Aktuelle Warnmeldungen für ausgewählte Regionen
- Icons für verschiedene Wettergefahren
- Automatische Anzeige bei aktiven Warnungen

### 🌧️ **Niederschlag & Prognose**
- Stündliche Niederschlagsprognose mit Balkendiagramm  
- 7-Tage-Wettervorhersage mit Icons
- Niederschlagswahrscheinlichkeit
- Radar-ähnliche Visualisierung

### ☀️ **Sonnenschein & UV**
- Tägliche Sonnenscheindauer in Stunden
- Integration mit HA Sonnenschein-Sensoren
- UV-Index Unterstützung

### 💨 **Wind & Böen**
- Windgeschwindigkeit und -richtung
- Grafischer Windkompass mit Pfeil
- Windrichtung in deutschen Bezeichnungen (N, NO, O, etc.)
- Böenvorhersage und Beaufort-Skala

### 📍 **Lokale Prognose**
- 7-Tage-Wettervorhersage
- Stündliche Details
- Min/Max Temperaturen
- Luftfeuchtigkeit und Luftdruck

## 🚀 **Home Assistant 2025.8+ Features**

- ✅ **TypeScript** für bessere Typsicherheit
- ✅ **Modern ES2022** für optimale Performance  
- ✅ **Lit Elements 3.x** mit Decorators
- ✅ **Automatische Theme-Erkennung**
- ✅ **Responsive Design** für Mobile & Desktop
- ✅ **Yarn** Package Manager
- ✅ **ESLint + Prettier** für Code-Qualität

## 📦 Installation

### HACS (Empfohlen)
1. Öffnen Sie HACS in Home Assistant
2. Gehen Sie zu "Frontend"
3. Klicken Sie auf die drei Punkte → "Custom repositories"
4. Fügen Sie diese URL hinzu: `https://github.com/your-username/ha-swissmeteo-card`
5. Suchen Sie nach "SwissMeteo Card" und installieren Sie sie

### Manuell
1. Laden Sie die neueste `swissmeteo-card.js` aus dem [Releases](https://github.com/your-username/ha-swissmeteo-card/releases) herunter
2. Kopieren Sie sie in Ihren `config/www/` Ordner
3. Fügen Sie die Ressource hinzu:

```yaml
# configuration.yaml
lovelace:
  resources:
    - url: /local/swissmeteo-card.js
      type: module  # Wichtig für HA 2025.8+
```

4. Starten Sie Home Assistant neu

## ⚙️ Konfiguration

### Basis-Konfiguration
```yaml
type: custom:swissmeteo-card
entity: weather.home
location: "Zürich"
```

### Vollständige Konfiguration
```yaml
type: custom:swissmeteo-card
entity: weather.openweathermap
location: "Zürich"
warning_entity: sensor.meteoswiss_warnings
wind_entity: sensor.wind_speed
wind_direction_entity: sensor.wind_bearing
sunshine_entity: sensor.sunshine_duration
precipitation_entity: sensor.precipitation_forecast
show_forecast: true
show_hourly: true
show_warnings: true
show_precipitation: true
compact_mode: false
theme: auto
```

### Optionen

| Option | Typ | Standard | Beschreibung |
|--------|-----|----------|--------------|
| `entity` | string | **Erforderlich** | Haupt-Wetter-Entity |
| `location` | string | `"Schweiz"` | Anzuzeigender Standort |
| `warning_entity` | string | Optional | Entity für Wetterwarnungen |
| `wind_entity` | string | Optional | Entity für Windgeschwindigkeit |
| `wind_direction_entity` | string | Optional | Entity für Windrichtung |
| `sunshine_entity` | string | Optional | Entity für Sonnenscheindauer |
| `precipitation_entity` | string | Optional | Entity für Niederschlagsprognose |
| `show_forecast` | boolean | `true` | 7-Tage-Prognose anzeigen |
| `show_hourly` | boolean | `true` | Stündliche Prognose anzeigen |
| `show_warnings` | boolean | `true` | Wetterwarnungen anzeigen |
| `show_precipitation` | boolean | `true` | Niederschlagschart anzeigen |
| `compact_mode` | boolean | `false` | Kompakte Ansicht |
| `theme` | string | `"auto"` | Theme: `light`, `dark`, `auto` |

## 🔧 Empfohlene Integrationen

### MeteoSwiss (Schweiz)
```yaml
# configuration.yaml
meteoswiss:
  locations:
    - zip_code: 8001
      name: "Zürich"
  update_interval: 300
  include_warnings: true
```

### OpenWeatherMap  
```yaml
weather:
  - platform: openweathermap
    api_key: YOUR_API_KEY
    mode: freedaily
    language: de
    name: home
```

## 🛠️ Entwicklung

### Voraussetzungen
- Node.js 18+
- Yarn 4+

### Setup
```bash
git clone https://github.com/your-username/ha-swissmeteo-card.git
cd ha-swissmeteo-card
yarn install
```

### Entwickeln
```bash
yarn dev          # Development mit Live-Reload
yarn type-check   # TypeScript-Prüfung
yarn lint         # Code-Linting
yarn format       # Code-Formatierung
yarn build        # Production Build
```

### Demo
```bash
# Demo im Browser öffnen
open demo.html
```

## 🎨 Design

Die Card orientiert sich am offiziellen SwissMeteo Design:
- **Schweizer Farbschema** (Rot #dc143c, Weiß)
- **Moderne Typography** (SF Pro, Segoe UI)
- **Glassmorphism-Effekte**
- **Responsive Grid-Layout**
- **Accessibility-Standards (WCAG 2.1)**

## 📱 Screenshots

| Desktop | Mobile | Dark Theme |
|---------|--------|------------|
| ![Desktop](docs/images/desktop.png) | ![Mobile](docs/images/mobile.png) | ![Dark](docs/images/dark.png) |

## 🤝 Beitragen

1. Fork das Repository
2. Erstellen Sie einen Feature Branch: `git checkout -b feature/amazing-feature`
3. Commit Ihre Änderungen: `git commit -m 'Add amazing feature'`
4. Push zum Branch: `git push origin feature/amazing-feature`
5. Öffnen Sie eine Pull Request

## 📋 Anforderungen

### Home Assistant
- **Home Assistant 2025.8+** (für beste Kompatibilität)
- **Modern Browser** mit ES2022-Unterstützung

### Browser-Unterstützung
- ✅ Chrome 90+
- ✅ Firefox 88+  
- ✅ Safari 14+
- ✅ Edge 90+

## � Troubleshooting

### "Custom element doesn't exist: swissmeteo-card"

**Mögliche Ursachen und Lösungen:**

1. **Resource nicht geladen**
   ```yaml
   # In Ihrer Lovelace-Konfiguration (configuration.yaml oder UI):
   lovelace:
     resources:
       - url: /hacsfiles/swissmeteo-card/swissmeteo-card.js
         type: module
   ```

2. **Cache-Problem**
   - Browser-Cache leeren (Strg+F5 oder Cmd+Shift+R)
   - Home Assistant neu starten

3. **Dateipfad prüfen**
   - HACS: `/hacsfiles/swissmeteo-card/swissmeteo-card.js`
   - Manuell: `/local/swissmeteo-card.js` (wenn in `config/www/`)

4. **Browser-Konsole prüfen**
   - F12 → Console Tab öffnen
   - Nach JavaScript-Fehlern suchen

5. **Home Assistant Version**
   - Mindestens Home Assistant 2025.8+ erforderlich
   - TypeScript-basierte Custom Cards benötigen moderne Browser

### Weitere häufige Probleme

- **Entity nicht gefunden**: Prüfen Sie, ob `entity: weather.xyz` in HA existiert
- **Keine Daten**: Wetterintegration korrekt konfiguriert?
- **Layout-Probleme**: Browser-Zoom auf 100% setzen

## �🔗 Links

- [📖 Dokumentation](docs/)
- [🐛 Bug Reports](https://github.com/your-username/ha-swissmeteo-card/issues)
- [💡 Feature Requests](https://github.com/your-username/ha-swissmeteo-card/discussions)
- [📋 Changelog](CHANGELOG.md)

## 📄 Lizenz

MIT License - siehe [LICENSE](LICENSE) Datei

## 🙏 Danksagungen

- **MeteoSchweiz** für die Inspiration
- **Home Assistant Community** für die Unterstützung
- **Lit Team** für die großartige Web Components Library

---

⭐ **Gefällt Ihnen diese Card? Geben Sie dem Repository einen Stern!**
