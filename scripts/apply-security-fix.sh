#!/bin/bash

# Script to apply security fix for lit-html commentEndRegex vulnerability
# Fixes HTML comment filtering to properly handle both --> and --!> endings

echo "Applying security fix for lit-html..."

# Find and fix the vulnerable regex in lit-html
LIT_HTML_FILE="node_modules/lit/node_modules/lit-html/node/lit-html.js"

if [ -f "$LIT_HTML_FILE" ]; then
    echo "Found lit-html file: $LIT_HTML_FILE"
    
    # Replace the vulnerable regex v=/-->/g with v=/--[!>]>/g
    if sed -i.bak 's/v=\/-->\/g/v=\/--[!>]>\/g/g' "$LIT_HTML_FILE"; then
        echo "✅ Security fix applied successfully!"
        echo "✅ HTML comment filtering now handles both --> and --!> properly"
    else
        echo "❌ Failed to apply security fix"
        exit 1
    fi
else
    echo "❌ lit-html file not found at $LIT_HTML_FILE"
    echo "Make sure dependencies are installed with 'yarn install'"
    exit 1
fi