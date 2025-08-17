# Detaillierte Installation der SwissMeteo Card

## 🎯 Schritt-für-Schritt Installation

### Option 1: HACS Installation (Empfohlen)

1. **HACS öffnen**
   - Home Assistant → HACS → Frontend

2. **Custom Repository hinzufügen**
   - Menü → Custom repositories
   - URL: `https://github.com/your-username/ha-swissmeteo-card`
   - Kategorie: "Lovelace"
   - "Add" klicken

3. **Card installieren**
   - "SwissMeteo Card" suchen
   - "Download" klicken
   - Home Assistant neu starten

4. **Resource automatisch registriert**
   - HACS registriert die Resource automatisch
   - Keine manuelle Konfiguration nötig

### Option 2: Manuelle Installation

1. **Datei herunterladen**
   ```bash
   # Latest Release von GitHub
   wget https://github.com/your-username/ha-swissmeteo-card/releases/latest/download/swissmeteo-card.js
   ```

2. **Datei kopieren**
   ```bash
   # In Home Assistant config/www/ Verzeichnis
   cp swissmeteo-card.js /path/to/homeassistant/config/www/
   ```

3. **Resource registrieren**
   ```yaml
   # configuration.yaml
   lovelace:
     resources:
       - url: /local/swissmeteo-card.js
         type: module
   ```

4. **Home Assistant neu starten**

## 🔧 Nach der Installation

### 1. Card zu Dashboard hinzufügen

**Via UI:**
- Dashboard bearbeiten
- "Card hinzufügen"
- "Manual" auswählen
- YAML-Konfiguration eingeben

**YAML-Konfiguration:**
```yaml
type: custom:swissmeteo-card
entity: weather.openweathermap  # Ihre Wetter-Entity
location: "Zürich"              # Ihr Standort
```

### 2. Erweiterte Konfiguration

```yaml
type: custom:swissmeteo-card
entity: weather.openweathermap
location: "Zürich"

# Zusätzliche Sensoren (optional)
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

## ✅ Installation prüfen

### Browser-Konsole öffnen
1. F12 drücken (Developer Tools)
2. "Console" Tab auswählen
3. Nach folgenden Meldungen suchen:

```
✅ Erfolgreich:
%c SWISSMETEO-CARD %c v1.0.0
SwissMeteo Card registration status: SUCCESS

❌ Fehler:
Failed to load resource: swissmeteo-card.js
Custom element doesn't exist: swissmeteo-card
```

### Test-Konfiguration
```yaml
# Minimale Test-Konfiguration
type: custom:swissmeteo-card
entity: weather.openweathermap
location: "Test"
```

## 🚨 Fehlerbehebung

### Resource wird nicht geladen
```yaml
# Prüfen Sie den Pfad:
lovelace:
  resources:
    # HACS Installation:
    - url: /hacsfiles/swissmeteo-card/swissmeteo-card.js
      type: module
    
    # Manuelle Installation:
    - url: /local/swissmeteo-card.js
      type: module
```

### Cache-Probleme
```bash
# Browser-Cache leeren
Strg + F5 (Windows/Linux)
Cmd + Shift + R (Mac)

# Home Assistant Cache
# Settings → System → Restart
```

### Entity-Probleme
```yaml
# Prüfen Sie Ihre Wetter-Entity:
# Developer Tools → States → suchen Sie "weather."
entity: weather.openweathermap  # Muss existieren!
```

## 🔍 Debug-Modus

Temporär für Debugging:
```yaml
type: custom:swissmeteo-card
entity: weather.openweathermap
location: "Debug Test"
debug: true  # Zeigt zusätzliche Konsolen-Logs
```

## 📱 Mobile Optimierung

Die Card ist responsive und funktioniert auf:
- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Mobile (iOS Safari, Android Chrome)
- ✅ Home Assistant App
- ✅ Tablet-Geräte

## 🔄 Updates

### HACS Updates
- Automatische Benachrichtigung bei neuen Versionen
- Ein-Klick Update über HACS

### Manuelle Updates
1. Neue `swissmeteo-card.js` herunterladen
2. Alte Datei ersetzen
3. Browser-Cache leeren
4. Home Assistant neu starten

---

**Bei Problemen:** Öffnen Sie ein [GitHub Issue](https://github.com/your-username/ha-swissmeteo-card/issues) mit:
- Home Assistant Version
- Browser & Version
- Fehlermeldungen aus der Konsole
- Ihre Card-Konfiguration (ohne sensible Daten)
