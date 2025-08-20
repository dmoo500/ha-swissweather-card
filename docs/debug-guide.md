# SwissWeather Card - Home Assistant Debug Anleitung

## 🔍 Schritt-für-Schritt Debugging für "Custom element doesn't exist"

### 1. Browser-Konsole öffnen
```
Chrome/Edge: F12 → Console Tab
Firefox: F12 → Konsole Tab  
Safari: Entwickler → JavaScript-Konsole
```

### 2. Nach folgenden Meldungen suchen:

#### ✅ **Erfolgreiche Registrierung:**
```
📦 SwissWeather Card module loading started...
📦 Browser support check: {customElements: true, hasReflect: true}
📦 SwissWeather Card TypeScript file imported
🎯 About to apply @customElement decorator to SwissWeatherCard
🔧 SwissWeatheroCard constructor called
🔍 SwissWeather Card registration status: SUCCESS ✅
 SWISSWEATHER-CARD  v1.0.0 
📦 SwissWeather Card module loading completed
```

#### ❌ **Fehlgeschlagene Registrierung:**
```
❌ Custom element "swissweather-card" was not registered!
🔍 SwissWeather Card registration status: FAILED ❌
```

### 3. Home Assistant Installation prüfen

#### Option A: HACS Installation
```yaml
# Automatisch registriert, keine manuelle Konfiguration nötig
# HACS → Frontend → SwissWeather Card
```

#### Option B: Manuelle Installation
```yaml
# configuration.yaml
lovelace:
  resources:
    - url: /local/swissweather-card.js
      type: module
```

### 4. Resource-URL validieren

#### In der Browser-Konsole testen:
```javascript
// Test 1: Direkte URL aufrufen
window.open('/local/swissweather-card.js', '_blank');
// oder für HACS:
window.open('/hacsfiles/swissweather-card/swissweather-card.js', '_blank');

// Test 2: Element-Check
customElements.get('swissweather-card');
// Sollte eine Funktion zurückgeben, nicht undefined
```

### 5. Häufige Lösungen

#### Cache leeren:
1. **Browser:** Strg+F5 (Windows) / Cmd+Shift+R (Mac)
2. **Home Assistant:** Neustarten

#### Resource-Pfad korrigieren:
```yaml
# HACS (automatisch):
/hacsfiles/swissweather-card/swissweather-card.js

# Manuell in config/www/:
/local/swissweather-card.js

# Manuell in config/www/community/:
/local/community/swissweather-card/swissweather-card.js
```

#### Home Assistant Version prüfen:
- **Mindestens:** Home Assistant 2025.8+
- **Browser:** Moderne Browser mit ES2022 Support

### 6. Erweiterte Debugging-Schritte

#### JavaScript-Fehler identifizieren:
```javascript
// In Browser-Konsole ausführen:
console.log('HA Version:', window.hassConnection?.config?.version);
console.log('Custom Elements Support:', !!window.customElements);
console.log('Available Cards:', window.customCards?.map(c => c.type));
```

#### Network-Tab prüfen:
1. F12 → Network Tab
2. Seite neu laden
3. Nach `swissweather-card.js` suchen
4. Status: **200 OK** = Datei lädt korrekt

### 7. Test-Konfiguration

#### Minimale funktionierende Konfiguration:
```yaml
type: custom:swissweather-card
entity: weather.openweathermap  # Ihre Wetter-Entity
location: "Test"
```

#### Debug-Konfiguration mit Konsolen-Output:
```yaml
type: custom:swissweather-card
entity: weather.openweathermap
location: "Debug Test"
debug: true  # Aktiviert zusätzliche Logs
```

### 8. Alternative Test-Methoden

#### HTML-Test-Datei erstellen:
```html
<!DOCTYPE html>
<html>
<head><title>SwissWeather Test</title></head>
<body>
    <swissweather-card></swissweather-card>
    <script type="module" src="/local/swissweather-card.js"></script>
    <script>
        setTimeout(() => {
            const el = customElements.get('swissweather-card');
            console.log('Element registered:', !!el);
        }, 1000);
    </script>
</body>
</html>
```

### 9. Kontakt für Support

Wenn alle Schritte fehlschlagen, erstellen Sie ein [GitHub Issue](https://github.com/your-username/ha-swissweather-card/issues) mit:

- ✅ **Home Assistant Version:** `Settings → About`
- ✅ **Browser & Version:** Chrome 118, Firefox 119, etc.
- ✅ **Console-Logs:** Vollständige Ausgabe aus F12 → Console
- ✅ **Installation-Methode:** HACS oder manuell
- ✅ **Konfiguration:** Ihre YAML-Card-Config (ohne sensible Daten)

### 10. Bekannte Probleme & Lösungen

| Problem | Ursache | Lösung |
|---------|---------|---------|
| `Failed to load resource` | Falsche URL | Resource-Pfad korrigieren |
| `Unexpected token` | JavaScript-Fehler | Cache leeren, HA neustarten |
| `Module not found` | Import-Fehler | Datei-Integrität prüfen |
| `Custom element already defined` | Doppelte Registrierung | Hard-Refresh (Strg+F5) |

---

**💡 Tipp:** Die meisten Probleme werden durch Cache-Leeren und Home Assistant-Neustart gelöst!
