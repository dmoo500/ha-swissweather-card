#!/bin/bash

# HACS validation script for SwissWeather Card

echo "🔍 HACS Validation for SwissWeather Card"
echo "======================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

errors=0
warnings=0

# Success function
success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Error function
error() {
    echo -e "${RED}❌ $1${NC}"
    ((errors++))
}

# Warning function
warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
    ((warnings++))
}

echo ""
echo "📁 Checking file structure..."

# Check for required files
required_files=(
    "hacs.json"
    "README.md"
    "LICENSE"
    "swissweather-card.js"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        success "File found: $file"
    else
        error "Missing file: $file"
    fi
done

echo ""
echo "🔧 Validating hacs.json..."

# Validate hacs.json
if [ -f "hacs.json" ]; then
    if command -v jq &> /dev/null; then
        if jq . hacs.json > /dev/null 2>&1; then
            success "hacs.json is valid JSON"
            
            # Check required fields
            name=$(jq -r '.name // empty' hacs.json)
            filename=$(jq -r '.filename // empty' hacs.json)
            
            if [ -n "$name" ]; then
                success "Name set: $name"
            else
                error "Name missing in hacs.json"
            fi
            
            if [ -n "$filename" ]; then
                success "Filename set: $filename"
                if [ -f "$filename" ]; then
                    success "File $filename exists"
                else
                    error "File $filename not found"
                fi
            else
                error "Filename missing in hacs.json"
            fi
        else
            error "hacs.json is not valid JSON"
        fi
    else
        warning "jq not installed - skipping JSON validation"
    fi
fi

echo ""
echo "📦 Build validation..."

# Check if swissweather-card.js exists and is not empty
if [ -f "swissweather-card.js" ]; then
    size=$(wc -c < "swissweather-card.js")
    if [ "$size" -gt 1000 ]; then
        success "Build file exists and has reasonable size ($size bytes)"
    else
        error "Build file too small ($size bytes) - possibly faulty"
    fi
    # Check for modern JS features
    if grep -q "class.*extends.*LitElement" "swissweather-card.js"; then
        success "LitElement class found"
    else
        warning "LitElement class not found"
    fi
    if grep -q "customElements.define" "swissweather-card.js"; then
        success "Custom element registration found"
    else
        error "Custom element registration not found"
    fi
else
    error "swissweather-card.js not found"
fi

echo ""
echo "📄 README validation..."

if [ -f "README.md" ]; then
    # Check for important sections
    if grep -q "Installation" README.md; then
        success "Installation section found"
    else
        warning "Installation section missing"
    fi
    if grep -q "Configuration\|Konfiguration" README.md; then
        success "Configuration section found"
    else
        warning "Configuration section missing"
    fi
    if grep -qi "hacs" README.md; then
        success "HACS notes found"
    else
        warning "HACS notes missing"
    fi
    # Check for code examples  
    if grep -q '```yaml' README.md; then
        success "YAML configuration examples found"
    else
        warning "No YAML examples found"
    fi
fi

echo ""
echo "🏷️  Git tags check..."

# Check for git tags
if git tag --list | grep -q "v[0-9]"; then
    latest_tag=$(git tag --list | grep "^[[:digit:]]" | sort -V | tail -n1)
    success "Git tags found, latest: $latest_tag"
else
    warning "No git tags found - required for releases"
fi

echo ""
echo "📊 Validation summary"
echo "=============================="

if [ $errors -eq 0 ] && [ $warnings -eq 0 ]; then
    echo -e "${GREEN}🎉 All checks passed! HACS-ready!${NC}"
    exit 0
elif [ $errors -eq 0 ]; then
    echo -e "${YELLOW}⚠️  $warnings warnings, but HACS compatible${NC}"
    exit 0
else
    echo -e "${RED}❌ $errors errors and $warnings warnings found${NC}"
    echo -e "${RED}Please fix the errors before submitting to HACS${NC}"
    exit 1
fi
