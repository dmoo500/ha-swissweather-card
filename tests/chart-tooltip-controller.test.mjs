import assert from 'node:assert/strict';
import test from 'node:test';
import { html } from 'lit';
import { ChartTooltipController, chartTooltipStyles } from '../src/charts/chart-tooltip-controller.ts';

test('tooltip text receives pointer events without changing the displayed reading', () => {
  const controller = new ChartTooltipController({ addController() {}, requestUpdate() {} });
  const content = html`<svg></svg>`;
  controller.show({ target: { getAttribute: () => 'Selected reading' } });
  const template = controller.render(content);
  assert.equal(template.values.filter(value => value === controller.preserveTooltip).length, 2);
  assert.match(chartTooltipStyles.cssText, /#chart-tooltip\s*\{[^}]*pointer-events:\s*auto/s);
  for (const type of ['pointerover', 'click']) {
    let stopped = false;
    controller.preserveTooltip({ type, stopPropagation() { stopped = true; } });
    assert.ok(stopped);
    assert.ok(controller.render(content).values.includes('Selected reading'));
  }
  controller.keydown({ key: 'Escape', preventDefault() {} });
  assert.ok(controller.render(content).values.includes(true));
  controller.show({ target: { getAttribute: () => 'Next reading' } });
  controller.pointerLeave();
  assert.ok(controller.render(content).values.includes(true));
});

test('daily and hourly containers share accessible targets and interaction handlers', () => {
  const controller = new ChartTooltipController({ addController() {}, requestUpdate() {} });
  const target = controller.target(10, 8, 24, 80, '12:00: 15 °C');
  const markup = target.strings.join('');
  assert.match(markup, /fill="transparent"/);
  assert.match(markup, /tabindex="0" role="button" aria-label=/);
  assert.match(markup, /aria-describedby="chart-tooltip"/);
  assert.deepEqual(target.values, [10, 8, 24, 80, '12:00: 15 °C', '12:00: 15 °C']);
  const content = html`<svg></svg>`;
  const hourly = controller.render(content);
  const daily = controller.render(content, 'chart');
  assert.equal(hourly.values[0], 'chart-svg-area');
  assert.equal(daily.values[0], 'chart');
  assert.deepEqual(hourly.values.slice(1), daily.values.slice(1));
});

test('pointer exit restores focused details without reopening Escape-dismissed tooltips', () => {
  const controller = new ChartTooltipController({ addController() {}, requestUpdate() {} });
  const content = html`<svg></svg>`;
  const focused = { getAttribute: () => 'Focused reading' };
  const hovered = { getAttribute: () => 'Hovered reading' };
  const visible = label => assert.ok(controller.render(content).values.includes(label));
  const hidden = () => assert.ok(controller.render(content).values.includes(true));

  controller.show({ target: hovered });
  controller.pointerLeave();
  hidden();
  controller.focus({ target: focused });
  controller.show({ target: hovered });
  visible('Hovered reading');
  controller.pointerLeave();
  visible('Focused reading');
  controller.keydown({ key: 'Escape', preventDefault() {} });
  controller.pointerLeave();
  hidden();
  controller.show({ target: hovered });
  controller.pointerLeave();
  hidden();
  controller.keydown({ key: 'Enter', target: focused, preventDefault() {} });
  controller.pointerLeave();
  visible('Focused reading');
  controller.blur();
  controller.pointerLeave();
  hidden();
  controller.focus({ target: focused });
  controller.hostDisconnected();
  controller.pointerLeave();
  hidden();
});

test('hourly tooltips open on pointer, focus and click and dismiss with Escape or blur', () => {
  const target = {
    getAttribute(name) {
      return name === 'data-tooltip' ? '12:00: 15 °C' : null;
    },
  };
  let updates = 0;
  const controller = new ChartTooltipController({
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
