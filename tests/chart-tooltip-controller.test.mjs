import assert from 'node:assert/strict';
import test from 'node:test';
import { html } from 'lit';
import { ChartTooltipController, chartTooltipStyles } from '../src/charts/chart-tooltip-controller.ts';

test('hover-only tooltips handle document Escape and clean up listeners', () => {
  const document = new EventTarget();
  let added = 0;
  let removed = 0;
  const ownerDocument = {
    addEventListener(...args) { added++; document.addEventListener(...args); },
    removeEventListener(...args) { removed++; document.removeEventListener(...args); },
  };
  const controller = new ChartTooltipController({ ownerDocument, addController() {}, requestUpdate() {} });
  const content = html`<svg></svg>`;
  const key = value => {
    const event = new Event('keydown', { cancelable: true });
    Object.defineProperty(event, 'key', { value });
    document.dispatchEvent(event);
    return event;
  };
  controller.hostUpdated();
  assert.equal(added, 0);
  controller.show({ target: { getAttribute: () => 'Hovered' } });
  controller.hostUpdated();
  controller.hostUpdated();
  assert.equal(added, 1, 'no duplicate listener during renders');
  assert.equal(key('Enter').defaultPrevented, false);
  assert.ok(controller.render(content).values.includes('Hovered'));
  assert.equal(key('Escape').defaultPrevented, true);
  assert.ok(controller.render(content).values.includes(true));
  assert.equal(removed, 1);
  controller.show({ target: { getAttribute: () => 'Hovered again' } });
  controller.hostUpdated();
  controller.hostDisconnected();
  assert.equal(removed, 2);
  assert.equal(key('Escape').defaultPrevented, false);
  controller.show({ target: { getAttribute: () => 'Reconnected' } });
  controller.hostUpdated();
  assert.equal(key('Escape').defaultPrevented, true);
  assert.equal(added, removed);
});

test('tooltip pointerdown prevents focus loss while genuine blur dismisses it', () => {
  const controller = new ChartTooltipController({ addController() {}, requestUpdate() {} });
  const content = html`<svg></svg>`;
  controller.focus({ target: { getAttribute: () => 'Focused' } });
  assert.ok(controller.render(content).values.includes(controller.preserveFocus));
  const event = new Event('pointerdown', { cancelable: true });
  controller.preserveFocus(event);
  assert.equal(event.defaultPrevented, true);
  controller.preserveTooltip(new Event('click'));
  controller.pointerLeave();
  assert.ok(controller.render(content).values.includes('Focused'));
  controller.blur();
  assert.ok(controller.render(content).values.includes(true));
});

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
  const target = controller.target(10, 8, 24, 80, '12:00: 15 °C', 'interval-1');
  const markup = target.strings.join('');
  assert.match(markup, /fill="transparent"/);
  assert.match(markup, /tabindex="0" role="button" aria-label=/);
  assert.match(markup, /aria-describedby="chart-tooltip"/);
  assert.deepEqual(target.values, ['chart-tooltip-target', 10, 8, 24, 80, '12:00: 15 °C', '12:00: 15 °C', 'interval-1']);
  const content = html`<svg></svg>`;
  const hourly = controller.render(content);
  const daily = controller.render(content, 'chart');
  assert.equal(hourly.values[0], 'chart-svg-area');
  assert.equal(daily.values[0], 'chart');
  assert.deepEqual(hourly.values.slice(1), daily.values.slice(1));
});

test('active interval marker follows the tooltip through pointer, click, focus and dismissal', () => {
  const controller = new ChartTooltipController({ addController() {}, requestUpdate() {} });
  const label = '12:00: 15 °C';
  const first = () => controller.target(10, 8, 24, 80, label, '10');
  const second = () => controller.target(34, 8, 24, 80, label, '34');
  const event = (x, type = 'pointerover') => ({
    type,
    target: { getAttribute: name => name === 'data-tooltip' ? label : String(x) },
  });
  const active = target => target().values[0].includes('is-active');
  assert.equal(active(first), false);
  controller.activate(event(10, 'click'));
  assert.equal(active(first), true);
  assert.equal(active(second), false, 'identical labels do not select a different interval');
  controller.show({ type: 'pointerover', target: null });
  assert.equal(active(first), true, 'moving toward tooltip preserves the marker');
  controller.preserveTooltip({ stopPropagation() {} });
  assert.equal(active(first), true);
  controller.pointerLeave();
  assert.equal(active(first), false);
  controller.focus(event(10, 'focusin'));
  controller.show(event(34));
  assert.equal(active(second), true);
  assert.equal(active(first), false);
  controller.pointerLeave();
  assert.equal(active(first), true, 'restore focused interval with its tooltip');
  assert.ok(controller.target(20, 16, 48, 160, label, '10').values[0].includes('is-active'), 'focused highlight survives new pixel geometry');
  controller.show(event(34));
  assert.ok(controller.target(68, 16, 48, 160, label, '34').values[0].includes('is-active'), 'hover highlight survives resizing');
  controller.pointerLeave();
  assert.ok(controller.target(20, 16, 48, 160, label, '10').values[0].includes('is-active'), 'focused restoration uses the stable interval ID');
  controller.keydown({ key: 'Escape', preventDefault() {} });
  controller.pointerLeave();
  assert.equal(active(first), false);
  controller.keydown({ ...event(10), key: 'Enter', preventDefault() {} });
  assert.equal(active(first), true);
  controller.blur();
  assert.equal(active(first), false);
  controller.activate(event(10, 'click'));
  controller.hostDisconnected();
  assert.equal(active(first), false);
  assert.match(chartTooltipStyles.cssText, /\.chart-tooltip-target\.is-active\s*\{[^}]*fill-opacity:\s*0\.16;/s);
  assert.doesNotMatch(chartTooltipStyles.cssText, /\.chart-tooltip-target\.is-active\s*\{[^}]*stroke/s);
});

test('updated forecast labels do not highlight stale hover or restored focused readings', () => {
  const controller = new ChartTooltipController({ addController() {}, requestUpdate() {} });
  const content = html`<svg></svg>`;
  const key = '2026-10-31T12:00:00Z';
  const oldLabel = '12:00: 15 °C';
  const newLabel = '12:00: 16 °C';
  const event = label => ({
    target: { getAttribute: name => name === 'data-tooltip' ? label : key },
  });
  const active = label => controller.target(20, 16, 48, 160, label, key).values[0].includes('is-active');
  const reading = () => controller.render(content).values.at(-1);

  controller.show(event(oldLabel));
  assert.equal(active(oldLabel), true, 'geometry-only resizing keeps the selection');
  assert.equal(active(newLabel), false, 'updated value must not match a stale hover tooltip');
  assert.equal(reading(), oldLabel);
  controller.focus(event(oldLabel));
  controller.show(event(newLabel));
  assert.equal(active(newLabel), true, 'a new interaction selects the updated value');
  assert.equal(active(oldLabel), false);
  controller.pointerLeave();
  assert.equal(reading(), oldLabel, 'pointer leave restores the cached focused reading');
  assert.equal(active(newLabel), false, 'restored stale focus must not highlight the updated value');
  assert.equal(active(oldLabel), true, 'unchanged focused reading still survives resizing');
  controller.focus(event(newLabel));
  controller.pointerLeave();
  assert.equal(reading(), newLabel);
  assert.equal(active(newLabel), true, 'refocusing restores the current reading and highlight');
});

test('non-target pointer movement preserves hover or focused details and honors dismissal', () => {
  const controller = new ChartTooltipController({ addController() {}, requestUpdate() {} });
  const content = html`<svg></svg>`;
  const focused = { getAttribute: () => 'Focused reading' };
  const hovered = { getAttribute: () => 'Hovered reading' };
  const nonTargets = [{ getAttribute: () => null }, {}, null];
  const reading = () => controller.render(content).values.at(-1);
  const moveAcrossBackground = expected => {
    for (const target of nonTargets) {
      controller.show({ type: 'pointerover', target });
      assert.equal(reading(), expected);
    }
  };

  controller.show({ target: hovered });
  moveAcrossBackground('Hovered reading');
  controller.preserveTooltip({ stopPropagation() {} });
  assert.equal(reading(), 'Hovered reading', 'tooltip is reachable across non-target areas');
  controller.pointerLeave();
  moveAcrossBackground(undefined);
  controller.show({ target: hovered });
  controller.activate({ type: 'click', target: nonTargets[0] });
  moveAcrossBackground(undefined);
  controller.show({ target: hovered });
  controller.keydown({ key: 'Escape', preventDefault() {} });
  moveAcrossBackground(undefined);
  controller.focus({ target: focused });
  moveAcrossBackground('Focused reading');
  controller.show({ target: hovered });
  assert.equal(reading(), 'Hovered reading');
  moveAcrossBackground('Focused reading');
  controller.keydown({ key: 'Escape', preventDefault() {} });
  moveAcrossBackground(undefined);
  controller.show({ target: hovered });
  assert.equal(reading(), 'Hovered reading');
  moveAcrossBackground(undefined);
  controller.keydown({ key: 'Enter', target: focused, preventDefault() {} });
  moveAcrossBackground('Focused reading');
  controller.activate({ type: 'click', target: nonTargets[0] });
  moveAcrossBackground(undefined);
  controller.pointerLeave();
  assert.equal(reading(), undefined, 'background click must not restore focused text');
  controller.focus({ target: focused });
  controller.blur();
  moveAcrossBackground(undefined);
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
