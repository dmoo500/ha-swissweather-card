import assert from 'node:assert/strict';
import test from 'node:test';
import { html } from 'lit';
import { HourlyTooltipController } from '../src/charts/hourly-tooltip-controller.ts';

test('hourly tooltips expose invisible, labelled keyboard targets', () => {
  const controller = new HourlyTooltipController({ addController() {}, requestUpdate() {} });
  const target = controller.target(10, 8, 24, 80, '12:00: 15 °C');
  const markup = target.strings.join('');
  assert.match(markup, /fill="transparent"/);
  assert.match(markup, /tabindex="0" role="button" aria-label=/);
  assert.match(markup, /aria-describedby="hourly-chart-tooltip"/);
  assert.deepEqual(target.values, [10, 8, 24, 80, '12:00: 15 °C', '12:00: 15 °C']);
});

test('hourly tooltips open on pointer, focus and click and dismiss with Escape or blur', () => {
  const target = {
    getAttribute(name) {
      return name === 'data-tooltip' ? '12:00: 15 °C' : null;
    },
  };
  let updates = 0;
  const controller = new HourlyTooltipController({
    addController() {},
    requestUpdate() { updates++; },
  });
  const content = html`<svg></svg>`;
  assert.ok(controller.render(content).values.includes(true), 'hidden before activation');
  for (const type of ['pointerover', 'focusin', 'click']) {
    controller.show({ type, target });
    assert.ok(controller.render(content).values.includes('12:00: 15 °C'));
    let prevented = false;
    controller.keydown({ key: 'Escape', preventDefault() { prevented = true; } });
    assert.ok(prevented);
    assert.ok(controller.render(content).values.includes(true));
  }
  for (const key of ['Enter', ' ']) {
    let prevented = false;
    controller.keydown({ key, target, preventDefault() { prevented = true; } });
    assert.ok(prevented);
    assert.ok(controller.render(content).values.includes('12:00: 15 °C'));
    controller.dismiss();
    assert.ok(controller.render(content).values.includes(true));
  }
  controller.show({ target });
  controller.show({ target: null });
  assert.ok(controller.render(content).values.includes(true), 'click outside dismisses');
  controller.show({ target });
  controller.hostDisconnected();
  assert.ok(controller.render(content).values.includes(true));
  assert.ok(updates > 0);
});
