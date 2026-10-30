import assert from 'node:assert/strict';
import test from 'node:test';
import { ElementSizeController } from '../src/charts/element-size-controller.ts';

test('tracks element dimensions and requests a host update when the size changes', () => {
  const originalResizeObserver = globalThis.ResizeObserver;
  const element = {};
  let resizeCallback;
  let requestedUpdates = 0;
  let observedElement;
  let observedCount = 0;
  let disconnected = false;

  globalThis.ResizeObserver = class {
    constructor(callback) {
      resizeCallback = callback;
    }

    observe(target) {
      observedElement = target;
      observedCount++;
    }

    disconnect() {
      disconnected = true;
    }
  };

  try {
    const host = {
      addController() {},
      requestUpdate() {
        requestedUpdates++;
      },
    };
    const controller = new ElementSizeController(host, () => element);

    controller.hostUpdated();
    assert.equal(observedElement, element);

    resizeCallback([{ contentRect: { width: 120.8, height: 45.9 } }]);
    assert.equal(controller.width, 120);
    assert.equal(controller.height, 45);
    assert.equal(requestedUpdates, 1);

    controller.hostDisconnected();
    assert.equal(disconnected, true);

    controller.hostConnected();
    assert.equal(requestedUpdates, 2);
    controller.hostUpdated();
    assert.equal(observedElement, element);
    assert.equal(observedCount, 2);
  } finally {
    globalThis.ResizeObserver = originalResizeObserver;
  }
});
