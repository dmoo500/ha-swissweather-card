# GitHub Actions / CI/CD Troubleshooting

## Problem: "lit-html file not found at node_modules/lit/node_modules/lit-html/node/lit-html.js"

This error message can occur in GitHub Actions or other CI/CD environments when the security fix for lit-html is not correctly applied.

## Solutions

### 1. Immediate Solution (Recommended)
The improved Node.js-based implementation is already available and should work in most environments:

```bash
# Manual verification of security fix
yarn verify-security

# Manual application if needed
node scripts/apply-security-fix.js
```

### 2. In GitHub Actions
The CI/CD pipeline has been updated and automatically verifies the security fix. The corresponding step is included in `.github/workflows/ci.yml`.

### 3. Local Development
If the problem occurs locally:

```bash
# Reinstall dependencies
rm -rf node_modules yarn.lock
yarn install

# Verify security fix
yarn verify-security
```

### 4. Debug Information
The new script provides detailed debugging:

```bash
node scripts/apply-security-fix.js
```

The script shows:
- Whether the file was found
- Alternative locations for lit-html files
- Status of the security fix

## Background
This problem arose due to a security vulnerability in the lit-html library that required a local patch solution. The new Node.js-based implementation is more robust and cross-platform compatible.

For more details, see [docs/security-fix.md](../docs/security-fix.md).