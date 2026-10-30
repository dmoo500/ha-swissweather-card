import {
  html,
  svg,
  css,
  type ReactiveController,
  type ReactiveControllerHost,
  type TemplateResult,
} from 'lit';

export const chartTooltipStyles = css`
  .chart-tooltip-target:focus-visible {
    outline: none;
    stroke: var(--primary-text-color, #222);
    stroke-width: 1;
    stroke-dasharray: 3 2;
  }

  #chart-tooltip {
    position: absolute;
    z-index: 2;
    top: 4px;
    left: 4px;
    right: 4px;
    width: fit-content;
    max-width: calc(100% - 24px);
    padding: 6px 8px;
    border-radius: 6px;
    background: var(--primary-background-color, #fff);
    color: var(--primary-text-color, #222);
    box-shadow: 0 2px 8px rgb(0 0 0 / 28%);
    font-size: 12px;
    pointer-events: auto;
  }
`;

export class ChartTooltipController implements ReactiveController {
  private _label?: string;
  private _focusedLabel?: string;
  private _focusDismissed = false;
  private readonly host: ReactiveControllerHost & { ownerDocument?: HTMLElement['ownerDocument'] };
  private _escapeDocument?: HTMLElement['ownerDocument'];

  constructor(host: ReactiveControllerHost & { ownerDocument?: HTMLElement['ownerDocument'] }) {
    this.host = host;
    host.addController(this);
  }

  hostDisconnected(): void {
    this.blur();
    this._removeEscapeListener();
  }

  hostUpdated(): void {
    const document = this._label ? this.host.ownerDocument : undefined;
    if (document === this._escapeDocument) return;
    this._removeEscapeListener();
    this._escapeDocument = document;
    document?.addEventListener('keydown', this._documentKeydown, true);
  }

  private readonly _documentKeydown = (event: Event): void => {
    if (this._label && 'key' in event && event.key === 'Escape') {
      event.preventDefault();
      this.dismiss();
    }
  };

  private _removeEscapeListener(): void {
    this._escapeDocument?.removeEventListener('keydown', this._documentKeydown, true);
    this._escapeDocument = undefined;
  }

  readonly dismiss = (): void => {
    this._focusDismissed = true;
    if (this._label === undefined) return;
    this._label = undefined;
    this._removeEscapeListener();
    this.host.requestUpdate();
  };

  readonly show = (event: Event): void => {
    const target = event.target;
    const label =
      target && 'getAttribute' in target && typeof target.getAttribute === 'function'
        ? target.getAttribute('data-tooltip')
        : undefined;
    if (typeof label !== 'string') {
      this.pointerLeave();
      return;
    }
    this._label = label;
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

  readonly preserveTooltip = (event: Event): void => {
    event.stopPropagation();
  };

  readonly preserveFocus = (event: Event): void => {
    event.preventDefault();
    event.stopPropagation();
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
      class="chart-tooltip-target"
      x=${x} y=${y} width=${width} height=${height}
      fill="transparent" pointer-events="all"
      tabindex="0" role="button" aria-label=${label}
      aria-describedby="chart-tooltip" data-tooltip=${label}
    />`;
  }

  render(content: TemplateResult, containerClass = 'chart-svg-area'): TemplateResult {
    return html`<div
      class=${containerClass}
      @pointerover=${this.show}
      @pointerleave=${this.pointerLeave}
      @click=${this.activate}
      @focusin=${this.focus}
      @focusout=${this.blur}
      @keydown=${this.keydown}
    >
      ${content}
      <div
        id="chart-tooltip"
        role="tooltip"
        ?hidden=${!this._label}
        @pointerdown=${this.preserveFocus}
        @pointerover=${this.preserveTooltip}
        @click=${this.preserveTooltip}
      >
        ${this._label}
      </div>
    </div>`;
  }
}
