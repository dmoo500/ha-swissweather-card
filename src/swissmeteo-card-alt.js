// Alternative implementation without decorators for testing
import { LitElement, html, css } from 'lit';

console.log('🧪 Loading alternative SwissMeteo Card without decorators...');

class SwissMeteoCardAlt extends LitElement {
  static properties = {
    hass: { attribute: false },
    config: { attribute: false }
  };

  constructor() {
    super();
    console.log('🧪 SwissMeteoCardAlt constructor called');
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('🧪 SwissMeteoCardAlt connected to DOM');
  }

  setConfig(config) {
    console.log('🧪 SwissMeteoCardAlt setConfig called with:', config);
    this.config = config;
  }

  render() {
    if (!this.hass || !this.config) {
      return html`<div>Loading alternative card...</div>`;
    }

    return html`
      <div style="padding: 20px; border: 2px solid #dc143c; border-radius: 8px; background: white;">
        <h3 style="color: #dc143c; margin: 0 0 10px 0;">🧪 Alternative SwissMeteo Card</h3>
        <p>Entity: ${this.config.entity}</p>
        <p>Location: ${this.config.location || 'Unknown'}</p>
        <p style="color: green; font-weight: bold;">✅ Custom element working without decorators!</p>
      </div>
    `;
  }
}

// Manual registration
console.log('🧪 Manually registering swissmeteo-card-alt...');
customElements.define('swissmeteo-card-alt', SwissMeteoCardAlt);

setTimeout(() => {
  const altElement = customElements.get('swissmeteo-card-alt');
  console.log('🧪 Alternative card registration status:', altElement ? 'SUCCESS ✅' : 'FAILED ❌');
}, 50);

export { SwissMeteoCardAlt };
