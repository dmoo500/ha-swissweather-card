# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| Latest  | ✅        |
| Older   | ❌        |

Only the latest release receives security fixes.

## Reporting a Vulnerability

Please **do not** report security vulnerabilities via public GitHub issues.

Instead, use [GitHub Private Security Advisories](https://github.com/dmoo500/ha-swissweather-card/security/advisories/new) to report them confidentially.

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (optional)

## Response Timeline

This is a single-maintainer open-source project. I will do my best to:

- **Acknowledge** your report within **7 days**
- **Assess and respond** with a plan within **14 days**
- **Release a fix** within **30 days** where technically feasible

## Scope

This project is a **frontend-only Home Assistant custom card**. It:
- runs entirely in the browser
- reads data from Home Assistant entities
- makes no external network requests
- stores no user data

Relevant vulnerability classes: XSS via injected entity data, dependency vulnerabilities (reported via Dependabot).

## Dependencies

Dependency vulnerabilities are tracked automatically via GitHub Dependabot. For known issues, check the [Security tab](https://github.com/dmoo500/ha-swissweather-card/security).
