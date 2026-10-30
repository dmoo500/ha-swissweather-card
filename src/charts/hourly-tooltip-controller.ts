import {
  html,
  svg,
  type ReactiveController,
  type ReactiveControllerHost,
  type TemplateResult,
} from 'lit';

export class HourlyTooltipController implements ReactiveController {
  private _label?: string;
  private _focusedLabel?: string;
  private _focusDismissed = false;
  private readonly host: ReactiveControllerHost;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);
  }

  hostDisconnected(): void {
    this.blur();
  }

  readonly dismiss = (): void => {
    this._focusDismissed = true;
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

  readonly focus = (event: Event): void => {
    this.show(event);
    this._focusedLabel = this._label;
    this._focusDismissed = false;
  };

  readonly blur = (): void => {
    this._focusedLabel = undefined;
    this.dismiss();
  };

  readonly pointerLeave = (): void => {
    this._label = this._focusDismissed ? undefined : this._focusedLabel;
    this.host.requestUpdate();
  };

  readonly activate = (event: Event): void => {
    this._focusDismissed = false;
    this.show(event);
  };

  readonly keydown = (event: Event & { key: string }): void => {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.dismiss();
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.activate(event);
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
      @pointerleave=${this.pointerLeave}
      @click=${this.activate}
      @focusin=${this.focus}
      @focusout=${this.blur}
      @keydown=${this.keydown}
    >
      ${content}
      <div id="hourly-chart-tooltip" role="tooltip" ?hidden=${!this._label}>${this._label}</div>
    </div>`;
  }
}
