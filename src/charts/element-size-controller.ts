import type { ReactiveController, ReactiveControllerHost } from 'lit';

type SizeControllerHost = ReactiveControllerHost & { requestUpdate: () => void };

export class ElementSizeController implements ReactiveController {
  private _observer?: ResizeObserver;
  private _observedElement?: HTMLElement;
  private _width = 0;
  private _height = 0;
  private readonly host: SizeControllerHost;
  private readonly getElement: () => HTMLElement | null;

  constructor(host: SizeControllerHost, getElement: () => HTMLElement | null) {
    this.host = host;
    this.getElement = getElement;
    host.addController(this);
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

  hostConnected(): void {
    this.host.requestUpdate();
  }

  hostUpdated(): void {
    const element = this.getElement();
    if (!element) {
      this._observer?.disconnect();
      this._observedElement = undefined;
      return;
    }
    if (element === this._observedElement) return;

    this._observer?.disconnect();
    this._observer = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      const nextWidth = Math.floor(width);
      const nextHeight = Math.floor(height);
      if (
        (nextWidth > 0 && nextWidth !== this._width) ||
        (nextHeight > 0 && nextHeight !== this._height)
      ) {
        if (nextWidth > 0) this._width = nextWidth;
        if (nextHeight > 0) this._height = nextHeight;
        this.host.requestUpdate();
      }
    });
    this._observedElement = element;
    this._observer.observe(element);
  }

  hostDisconnected(): void {
    this._observer?.disconnect();
    this._observer = undefined;
    this._observedElement = undefined;
  }
}
