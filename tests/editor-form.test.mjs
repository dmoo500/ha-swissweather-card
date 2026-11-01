import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

const source = await readFile(new URL('../src/components/editor-form.ts', import.meta.url), 'utf8');
const parsed = ts.createSourceFile('editor.ts', source, ts.ScriptTarget.Latest, true);
const entityFunction = parsed.statements.find(
  node => ts.isFunctionDeclaration(node) && node.name.text === 'entityOptions'
);
const { outputText } = ts.transpileModule(entityFunction.getText(parsed).replace('export ', ''), {
  compilerOptions: { target: ts.ScriptTarget.ES2022 },
});
const entityOptions = new Function(`${outputText}; return entityOptions;`)();

test('bundled entity selectors filter domains and preserve missing configured entities', () => {
  const hass = {
    states: { 'sensor.uv': {}, 'weather.home': {}, 'sun.sun': {}, 'sensor.max_uv': {} },
  };
  assert.deepEqual(entityOptions(hass, { selector: { entity: { domain: 'sensor' } } }, undefined), [
    'sensor.max_uv',
    'sensor.uv',
  ]);
  assert.deepEqual(
    entityOptions(hass, { selector: { entity: { domain: 'weather' } } }, 'weather.missing'),
    ['weather.home', 'weather.missing']
  );
});

test('bundled form emits booleans, numeric values, cleared optionals and preserves unrelated data', () => {
  const card = parsed.statements.find(ts.isClassDeclaration);
  const method = card.members.find(member => member.name?.getText(parsed) === '_change');
  const { outputText } = ts.transpileModule(`class Probe { ${method.getText(parsed)} }`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  });
  class Input {
    constructor(value, checked = false, valid = true) {
      Object.assign(this, { value, checked, valid });
    }
    reportValidity() {
      return this.valid;
    }
  }
  class Select extends Input {}
  const probe = new Function(
    'HTMLInputElement',
    'HTMLSelectElement',
    `${outputText}; return new Probe();`
  )(Input, Select);
  probe.data = { entity: 'weather.home', forecast_hours: 12, custom_option: 'keep' };
  const events = [];
  probe.dispatchEvent = event => events.push(event);
  probe._change(
    { name: 'show_uv', selector: { boolean: {} } },
    { currentTarget: new Input('', false) }
  );
  assert.equal(events.at(-1).detail.value.show_uv, false);
  probe._change(
    { name: 'forecast_hours', selector: { number: {} } },
    { currentTarget: new Input('18') }
  );
  assert.equal(events.at(-1).detail.value.forecast_hours, 18);
  probe._change({ name: 'uv_entity', selector: { entity: {} } }, { currentTarget: new Select('') });
  assert.equal(events.at(-1).detail.value.uv_entity, undefined);
  assert.equal(events.at(-1).detail.value.custom_option, 'keep');
  assert.equal(events.at(-1).bubbles, true);
  assert.equal(events.at(-1).composed, true);
  probe._change(
    { name: 'forecast_hours', selector: { number: {} } },
    { currentTarget: new Input('100', false, false) }
  );
  assert.equal(events.length, 3, 'invalid numbers do not emit success-shaped config changes');
});

test('all existing visual editors use the bundled form rather than internal HA controls', async () => {
  const paths = [
    'full-card/swissweather-card-editor',
    'animated-background/swissweather-bg-card-editor',
    'forecast-diagram/forecast-diagram-card-editor',
    'pollen/pollen-card-editor',
    'warnings/warning-card-editor',
    ...['temperature', 'precipitation', 'sunshine', 'wind'].map(
      name => `hourly-charts/${name}-card-editor`
    ),
  ];
  for (const path of paths) {
    const editor = await readFile(new URL(`../src/cards/${path}.ts`, import.meta.url), 'utf8');
    assert.match(editor, /<swissweather-editor-form/, path);
    assert.doesNotMatch(editor, /<ha-(form|switch)/, path);
  }
});

test('production build matches the documented ES2022 syntax target', async () => {
  const { default: config } = await import('../vite.config.js');
  assert.equal(config.build.target, 'es2022');
  assert.equal(config.esbuild.target, 'es2022');
});

test('background editor controls reflect the card defaults and preserve explicit false values', async () => {
  const source = await readFile(
    new URL('../src/cards/animated-background/swissweather-bg-card-editor.ts', import.meta.url),
    'utf8'
  );
  const parsed = ts.createSourceFile('background-editor.ts', source, ts.ScriptTarget.Latest, true);
  const card = parsed.statements.find(ts.isClassDeclaration);
  const render = card.members.find(member => member.name?.getText(parsed) === 'render');
  const declaration = render.body.statements
    .filter(ts.isVariableStatement)
    .flatMap(statement => [...statement.declarationList.declarations])
    .find(declaration => declaration.name.getText(parsed) === 'data');
  const getData = new Function(`return ${declaration.initializer.getText(parsed)};`);
  const defaults = getData.call({ _config: {} });
  assert.equal(defaults.show_sun_times, true);
  assert.equal(defaults.show_day_temps, true);
  assert.equal(defaults.forecast_mode, 'daily');
  assert.equal(defaults.temperature_font_size, 36);
  assert.equal(defaults.photo_mode, false);
  const explicit = getData.call({
    _config: { show_sun_times: false, show_day_temps: false, photo_mode: true },
  });
  assert.equal(explicit.show_sun_times, false);
  assert.equal(explicit.show_day_temps, false);
  assert.equal(explicit.photo_mode, true);
});
