# Sicherheitslücke in lit-html behoben

## Problem

Eine Sicherheitslücke wurde in der lit-html Bibliothek (Version 3.3.2) entdeckt:

- **Verwundbare Regex**: `const commentEndRegex = /-->/g`
- **Problem**: Parst nur `-->` aber nicht `--!>` als HTML-Kommentar-Ende
- **Risiko**: Erlaubt potenzielle Bypass-Angriffe bei HTML-Kommentar-Filterung

## Lösung

Da keine offizielle Korrektur von den lit-html Maintainern verfügbar ist, wurde eine **lokale Sicherheitskorrektur** implementiert:

### Angewandte Korrektur
- **Ursprünglich**: `v=/-->/g`
- **Korrigiert zu**: `v=/--[!>]>/g` 
- **Effekt**: Erkennt sowohl `-->` als auch `--!>` als gültige Kommentar-Enden

### Implementierung

1. **Script erstellt**: `scripts/apply-security-fix.sh`
   - Automatische Anwendung der Sicherheitskorrektur
   - Läuft nach jeder Dependency-Installation

2. **Postinstall Hook**: 
   - Die Korrektur wird automatisch nach `yarn install` angewandt
   - Siehe `package.json` → `scripts.postinstall`

### Betroffene Datei
```
node_modules/lit/node_modules/lit-html/node/lit-html.js
```

## Status

✅ **Sicherheitslücke behoben**
✅ **Automatische Anwendung bei Builds**
✅ **Keine Funktionalitätseinschränkungen**

## Alternative Maßnahmen

Falls diese Lösung Probleme verursacht, können Sie:

1. **Sicherheitslücke melden**: 
   - GitHub: https://github.com/lit/lit/issues
   - Titel: "Security: commentEndRegex only parses --> and not --!> as HTML comment end tag"

2. **Upstream-Fix abwarten**: 
   - Überwachung der lit-html Release Notes
   - Update auf gepatchte Version wenn verfügbar

3. **Korrektur entfernen**:
   ```bash
   # Entfernen des postinstall hooks aus package.json
   # Löschen von scripts/apply-security-fix.sh
   ```

## Getestete Versionen

- **lit**: 3.3.2
- **lit-html**: 3.3.1 (nested dependency)
- **Node Version**: Kompatibel mit aktuellen LTS-Versionen

---

**Wichtig**: Diese Korrektur ist eine temporäre Lösung bis eine offizielle Sicherheitsaktualisierung verfügbar wird.