# Contributing to SwissMeteo Card

Vielen Dank für Ihr Interesse, zur SwissMeteo Card beizutragen! 🎉

## 🚀 Entwicklungsumgebung

### Voraussetzungen
- **Node.js 18+**
- **Yarn 4+** (wird automatisch aktiviert)
- **Git**
- **Home Assistant** (für Tests)

### Setup
```bash
# Repository klonen
git clone https://github.com/your-username/ha-swissmeteo-card.git
cd ha-swissmeteo-card

# Dependencies installieren
yarn install

# Development-Server starten
yarn dev
```

## 📁 Projektstruktur

```
ha-swissmeteo-card/
├── src/
│   ├── swissmeteo-card.ts      # Haupt-Component
│   ├── index.ts                # Entry Point
│   └── types/
│       └── home-assistant.ts   # TypeScript-Typen
├── dist/                       # Build-Output (für HACS)
├── docs/                       # Dokumentation
├── .github/                    # GitHub Actions & Templates
├── demo.html                   # Live-Demo
└── hacs.json                   # HACS-Konfiguration
```

## 🛠️ Entwicklung

### Code-Standards
```bash
# TypeScript-Prüfung
yarn type-check

# Linting
yarn lint

# Code-Formatierung
yarn format

# Build
yarn build
```

### Testing
```bash
# Demo im Browser öffnen
open demo.html

# In Home Assistant testen:
# 1. `dist/swissmeteo-card.js` nach `config/www/` kopieren
# 2. Lovelace-Ressource hinzufügen
# 3. Card konfigurieren
```

## 📝 Code-Konventionen

### TypeScript
- **Strikte Typisierung** verwenden
- **Interfaces** für komplexe Objekte definieren
- **JSDoc-Kommentare** für öffentliche Methoden

### CSS
- **CSS Custom Properties** für Theming
- **Responsive Design** mit Media Queries
- **BEM-ähnliche Namenskonvention** für Klassen

### Commits
```bash
# Commit-Format
<type>(<scope>): <description>

# Beispiele:
feat(card): add wind compass visualization
fix(styles): improve mobile responsive layout
docs(readme): update installation instructions
```

### Git Workflow
1. **Fork** das Repository
2. **Feature Branch** erstellen: `git checkout -b feature/amazing-feature`
3. **Commits** mit aussagekräftigen Nachrichten
4. **Tests** ausführen: `yarn type-check && yarn lint`
5. **Pull Request** erstellen

## 🎯 Contribution-Arten

### 🐛 Bug Fixes
1. Issue erstellen oder finden
2. Bug reproduzieren
3. Fix implementieren
4. Tests hinzufügen
5. PR erstellen

### ✨ Neue Features
1. Feature Request diskutieren
2. Design/API entwerfen
3. Implementation
4. Dokumentation aktualisieren
5. Tests hinzufügen

### 📚 Dokumentation
- README verbessern
- Code-Kommentare hinzufügen
- Tutorials erstellen
- Übersetzungen

### 🌐 Lokalisierung
- Deutsche Texte verbessern
- Französische/Italienische Übersetzungen
- Regionale Anpassungen

## 🔍 Code Review

### Was wir prüfen:
- **Funktionalität**: Funktioniert der Code wie erwartet?
- **Performance**: Keine unnötigen Re-Renderings
- **Accessibility**: WCAG 2.1 Standards
- **Browser-Kompatibilität**: ES2022+ Features
- **TypeScript**: Korrekte Typisierung
- **Tests**: Ausreichende Abdeckung

### Review-Prozess:
1. **Automatische Checks** (CI/CD)
2. **Code Review** durch Maintainer
3. **Funktionstest** in HA
4. **Freigabe** und Merge

## 📋 Issue Guidelines

### Bug Reports
- **Klare Beschreibung** des Problems
- **Reproduktionsschritte** angeben
- **Erwartetes vs. tatsächliches Verhalten**
- **Browser/HA-Version** angeben
- **Konfiguration** mitteilen

### Feature Requests
- **Use Case** beschreiben
- **Mockups/Screenshots** falls möglich
- **Alternative Lösungen** erwähnen
- **Breaking Changes** vermeiden

## 🚦 Release-Prozess

### Versioning (SemVer)
- **Major** (1.0.0): Breaking Changes
- **Minor** (1.1.0): Neue Features (rückwärtskompatibel)
- **Patch** (1.0.1): Bug Fixes

### Release-Schritte:
1. **Changelog** aktualisieren
2. **Version** in package.json erhöhen
3. **Git Tag** erstellen: `git tag v1.0.0`
4. **GitHub Release** wird automatisch erstellt
5. **HACS** erkennt automatisch neue Versionen

## 🤝 Community

### Kommunikation
- **GitHub Issues**: Bug Reports & Feature Requests
- **GitHub Discussions**: Allgemeine Fragen
- **Home Assistant Community**: Integration & Support

### Verhalten
- **Respektvoll** und **hilfsbereit** sein
- **Konstruktives Feedback** geben
- **Inklusives Umfeld** fördern

## 📄 Lizenz

Alle Beiträge werden unter der **MIT-Lizenz** veröffentlicht.

---

**Danke für Ihren Beitrag zur SwissMeteo Card! 🙏**
