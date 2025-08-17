#!/bin/bash

# HACS Validierung für SwissMeteo Card

echo "🔍 HACS Validation für SwissMeteo Card"
echo "======================================"

# Farben für Output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

errors=0
warnings=0

# Funktion für Erfolg
success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Funktion für Fehler
error() {
    echo -e "${RED}❌ $1${NC}"
    ((errors++))
}

# Funktion für Warnung
warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
    ((warnings++))
}

echo ""
echo "📁 Datei-Struktur Prüfung..."

# Erforderliche Dateien prüfen
required_files=(
    "hacs.json"
    "README.md"
    "LICENSE"
    "swissmeteo-card.js"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        success "Datei gefunden: $file"
    else
        error "Fehlende Datei: $file"
    fi
done

echo ""
echo "🔧 hacs.json Validierung..."

# hacs.json validieren
if [ -f "hacs.json" ]; then
    if command -v jq &> /dev/null; then
        if jq . hacs.json > /dev/null 2>&1; then
            success "hacs.json ist valides JSON"
            
            # Erforderliche Felder prüfen
            name=$(jq -r '.name // empty' hacs.json)
            filename=$(jq -r '.filename // empty' hacs.json)
            
            if [ -n "$name" ]; then
                success "Name gesetzt: $name"
            else
                error "Name fehlt in hacs.json"
            fi
            
            if [ -n "$filename" ]; then
                success "Filename gesetzt: $filename"
                if [ -f "$filename" ]; then
                    success "Datei $filename existiert"
                else
                    error "Datei $filename nicht gefunden"
                fi
            else
                error "Filename fehlt in hacs.json"
            fi
        else
            error "hacs.json ist kein valides JSON"
        fi
    else
        warning "jq nicht installiert - JSON-Validierung übersprungen"
    fi
fi

echo ""
echo "📦 Build Validierung..."

# Prüfen ob swissmeteo-card.js existiert und nicht leer ist
if [ -f "swissmeteo-card.js" ]; then
    size=$(wc -c < "swissmeteo-card.js")
    if [ "$size" -gt 1000 ]; then
        success "Build-Datei ist vorhanden und hat sinnvolle Größe ($size bytes)"
    else
        error "Build-Datei zu klein ($size bytes) - möglicherweise fehlerhaft"
    fi
    
    # Prüfen ob moderne JS-Features verwendet werden
    if grep -q "class.*extends.*LitElement" "swissmeteo-card.js"; then
        success "LitElement-Klasse gefunden"
    else
        warning "LitElement-Klasse nicht gefunden"
    fi
    
    if grep -q "customElements.define" "swissmeteo-card.js"; then
        success "Custom Element Registrierung gefunden"
    else
        error "Custom Element Registrierung nicht gefunden"
    fi
else
    error "swissmeteo-card.js nicht gefunden"
fi

echo ""
echo "📄 README Validierung..."

if [ -f "README.md" ]; then
    # Prüfen auf wichtige Abschnitte
    if grep -q "Installation" README.md; then
        success "Installation-Abschnitt gefunden"
    else
        warning "Installation-Abschnitt fehlt"
    fi
    
    if grep -q "Configuration\|Konfiguration" README.md; then
        success "Konfiguration-Abschnitt gefunden"
    else
        warning "Konfiguration-Abschnitt fehlt"
    fi
    
    if grep -qi "hacs" README.md; then
        success "HACS-Hinweise gefunden"
    else
        warning "HACS-Hinweise fehlen"
    fi
    
    # Prüfen auf Code-Beispiele  
    if grep -q '```yaml' README.md; then
        success "YAML-Konfigurationsbeispiele gefunden"
    else
        warning "Keine YAML-Beispiele gefunden"
    fi
fi

echo ""
echo "🏷️  Git Tags Prüfung..."

# Prüfen ob Git-Tags vorhanden sind
if git tag --list | grep -q "v[0-9]"; then
    latest_tag=$(git tag --list | grep "v[0-9]" | sort -V | tail -n1)
    success "Git Tags gefunden, neuester: $latest_tag"
else
    warning "Keine Git Tags gefunden - für Releases benötigt"
fi

echo ""
echo "📊 Validierung Zusammenfassung"
echo "=============================="

if [ $errors -eq 0 ] && [ $warnings -eq 0 ]; then
    echo -e "${GREEN}🎉 Alle Prüfungen bestanden! HACS-ready!${NC}"
    exit 0
elif [ $errors -eq 0 ]; then
    echo -e "${YELLOW}⚠️  $warnings Warnungen, aber HACS-kompatibel${NC}"
    exit 0
else
    echo -e "${RED}❌ $errors Fehler und $warnings Warnungen gefunden${NC}"
    echo -e "${RED}Bitte beheben Sie die Fehler vor der HACS-Einreichung${NC}"
    exit 1
fi
