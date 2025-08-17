# SwissMeteo Card - Home Assistant Debug Anleitung

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
📦 SwissMeteo Card module loading started...
📦 Browser support check: {customElements: true, hasReflect: true}
📦 SwissMeteo Card TypeScript file imported
🎯 About to apply @customElement decorator to SwissMeteoCard
🔧 SwissMeteoCard constructor called
🔍 SwissMeteo Card registration status: SUCCESS ✅
 SWISSMETEO-CARD  v1.0.0 
📦 SwissMeteo Card module loading completed
```

#### ❌ **Fehlgeschlagene Registrierung:**
```
❌ Custom element "swissmeteo-card" was not registered!
🔍 SwissMeteo Card registration status: FAILED ❌
```

### 3. Home Assistant Installation prüfen

#### Option A: HACS Installation
```yaml
# Automatisch registriert, keine manuelle Konfiguration nötig
# HACS → Frontend → SwissMeteo Card
```

#### Option B: Manuelle Installation
```yaml
# configuration.yaml
lovelace:
  resources:
    - url: /local/swissmeteo-card.js
      type: module
```

### 4. Resource-URL validieren

#### In der Browser-Konsole testen:
```javascript
// Test 1: Direkte URL aufrufen
window.open('/local/swissmeteo-card.js', '_blank');
// oder für HACS:
window.open('/hacsfiles/swissmeteo-card/swissmeteo-card.js', '_blank');

// Test 2: Element-Check
customElements.get('swissmeteo-card');
// Sollte eine Funktion zurückgeben, nicht undefined
```

### 5. Häufige Lösungen

#### Cache leeren:
1. **Browser:** Strg+F5 (Windows) / Cmd+Shift+R (Mac)
2. **Home Assistant:** Neustarten

#### Resource-Pfad korrigieren:
```yaml
# HACS (automatisch):
/hacsfiles/swissmeteo-card/swissmeteo-card.js

# Manuell in config/www/:
/local/swissmeteo-card.js

# Manuell in config/www/community/:
/local/community/swissmeteo-card/swissmeteo-card.js
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
3. Nach `swissmeteo-card.js` suchen
4. Status: **200 OK** = Datei lädt korrekt

### 7. Test-Konfiguration

#### Minimale funktionierende Konfiguration:
```yaml
type: custom:swissmeteo-card
entity: weather.openweathermap  # Ihre Wetter-Entity
location: "Test"
```

#### Debug-Konfiguration mit Konsolen-Output:
```yaml
type: custom:swissmeteo-card
entity: weather.openweathermap
location: "Debug Test"
debug: true  # Aktiviert zusätzliche Logs
```

### 8. Alternative Test-Methoden

#### HTML-Test-Datei erstellen:
```html
<!DOCTYPE html>
<html>
<head><title>SwissMeteo Test</title></head>
<body>
    <swissmeteo-card></swissmeteo-card>
    <script type="module" src="/local/swissmeteo-card.js"></script>
    <script>
        setTimeout(() => {
            const el = customElements.get('swissmeteo-card');
            console.log('Element registered:', !!el);
        }, 1000);
    </script>
</body>
</html>
```

### 9. Kontakt für Support

Wenn alle Schritte fehlschlagen, erstellen Sie ein [GitHub Issue](https://github.com/your-username/ha-swissmeteo-card/issues) mit:

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
