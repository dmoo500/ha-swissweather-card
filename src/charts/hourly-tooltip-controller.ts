import {
  html,
  svg,
  type ReactiveController,
  type ReactiveControllerHost,
  type TemplateResult,
} from 'lit';

export class HourlyTooltipController implements ReactiveController {
  private _label?: string;
  private readonly host: ReactiveControllerHost;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);
  }

  hostDisconnected(): void {
    this.dismiss();
  }

  readonly dismiss = (): void => {
    if (this._label === undefined) return;
    this._label = undefined;
    this.host.requestUpdate();
  };

  readonly show = (event: Event): void => {
    const target = event.target;
    const label =
      target && 'getAttribute' in target && typeof target.getAttribute === 'function'
        ? target.getAttribute('data-tooltip')
        : undefined;
    this._label = typeof label === 'string' ? label : undefined;
    this.host.requestUpdate();
  };

  readonly keydown = (event: Event & { key: string }): void => {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.dismiss();
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.show(event);
    }
  };

  target(x: number, y: number, width: number, height: number, label: string): TemplateResult {
    return svg`<rect
      class="hourly-tooltip-target"
      x=${x} y=${y} width=${width} height=${height}
      fill="transparent" pointer-events="all"
      tabindex="0" role="button" aria-label=${label}
      aria-describedby="hourly-chart-tooltip" data-tooltip=${label}
    />`;
  }

  render(content: TemplateResult): TemplateResult {
    return html`<div
      class="chart-svg-area"
      @pointerover=${this.show}
      @pointerleave=${this.dismiss}
      @click=${this.show}
      @focusin=${this.show}
      @focusout=${this.dismiss}
      @keydown=${this.keydown}
    >
      ${content}
      <div id="hourly-chart-tooltip" role="tooltip" ?hidden=${!this._label}>${this._label}</div>
    </div>`;
  }
}
