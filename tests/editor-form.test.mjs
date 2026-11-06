import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
import {
  getEntityChoices,
  prioritizeEntityChoices,
  suggestedEntityTerms,
} from '../src/components/entity-options.ts';
import { html } from 'lit';

const source = await readFile(new URL('../src/components/editor-form.ts', import.meta.url), 'utf8');
const parsed = ts.createSourceFile('editor.ts', source, ts.ScriptTarget.Latest, true);
function optionProbe() {
  const card = parsed.statements.find(ts.isClassDeclaration);
  const method = card.members.find(member => member.name?.getText(parsed) === '_entityOptions');
  const { outputText } = ts.transpileModule(`class Probe { ${method.getText(parsed)} }`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  });
  let created = 0;
  const probe = new Function(
    'getEntityChoices',
    'prioritizeEntityChoices',
    'suggestedEntityTerms',
    'html',
    `${outputText}; return new Probe();`
  )(getEntityChoices, prioritizeEntityChoices, suggestedEntityTerms, (...args) => {
    created++;
    return html(...args);
  });
  probe._entityTemplates = new Map();
  return { probe, count: () => created };
}

test('matching sensor types appear first without hiding alternatives or changing selection', () => {
  const { probe, count } = optionProbe();
  probe.hass = {
    states: {
      'sensor.a_temperature': { attributes: {} },
      'sensor.z_uv': { attributes: {} },
      'sensor.other': { attributes: { friendly_name: 'UV Index' } },
      'weather.home': { attributes: {} },
    },
  };
  const field = { name: 'entity', suggested: ['uv'], selector: { entity: { domain: 'sensor' } } };
  const options = probe._entityOptions(field, 'sensor.a_temperature');
  assert.deepEqual(
    options.map(option => option.values[0]),
    ['sensor.other', 'sensor.z_uv', 'sensor.a_temperature']
  );
  assert.equal(options[2].values[1], true, 'recommendations never auto-select a sensor');
  assert.equal(probe._entityOptions(field, 'sensor.a_temperature'), options);
  assert.equal(count(), 3);
  const changed = probe._entityOptions(
    { ...field, suggested: ['temperature'] },
    'sensor.a_temperature'
  );
  assert.equal(changed[0].values[0], 'sensor.a_temperature');
  for (const name of [
    'uv_entity',
    'uv_max_entity',
    'wind_entity',
    'wind_direction_entity',
    'sunshine_entity',
    'primary_warning_entity',
    'birch_raw_entity',
    'grasses_entity',
  ]) {
    assert.ok(suggestedEntityTerms(name).length, name);
  }
});

test('bundled entity selectors filter domains and preserve missing configured entities', () => {
  const hass = {
    states: {
      'sensor.uv': { attributes: {} },
      'weather.home': { attributes: {} },
      'sun.sun': { attributes: {} },
      'sensor.max_uv': { attributes: {} },
    },
  };
  assert.deepEqual(
    getEntityChoices(hass.states, 'sensor').map(option => option.value),
    ['sensor.max_uv', 'sensor.uv']
  );
  const { probe } = optionProbe();
  probe.hass = hass;
  const options = probe._entityOptions(
    { name: 'entity', selector: { entity: { domain: 'weather' } } },
    'weather.missing'
  );
  assert.deepEqual(
    options.map(option => option.values[0]),
    ['weather.home', 'weather.missing']
  );
  assert.equal(options[1].values[1], true);
});

test('14 selectors reuse 1,000 entity options across unrelated hass updates', () => {
  const states = Object.fromEntries(
    Array.from({ length: 1000 }, (_, i) => [
      `sensor.${i}`,
      { attributes: { friendly_name: `Sensor ${i}` }, state: '0' },
    ])
  );
  const fields = Array.from({ length: 14 }, (_, i) => ({
    name: `entity_${i}`,
    selector: { entity: { domain: 'sensor' } },
  }));
  const { probe, count } = optionProbe();
  probe.hass = { states };
  const lists = fields.map(field => probe._entityOptions(field, 'sensor.1'));
  assert.equal(count(), 14000, 'first render builds each field once');
  const shared = getEntityChoices(states, 'sensor');
  for (let update = 0; update < 5; update++) {
    probe.hass = {
      states: { ...states, 'sensor.1': { ...states['sensor.1'], state: String(update) } },
    };
    assert.equal(
      getEntityChoices(probe.hass.states, ['sensor']),
      shared,
      'domain lists are shared and retain identity'
    );
    fields.forEach((field, i) => assert.equal(probe._entityOptions(field, 'sensor.1'), lists[i]));
  }
  assert.equal(count(), 14000, 'unrelated updates create zero option templates');
  const renamed = {
    ...states,
    'sensor.1': { ...states['sensor.1'], attributes: { friendly_name: 'Renamed' } },
  };
  probe.hass = { states: renamed };
  const changed = probe._entityOptions(fields[0], 'sensor.1');
  assert.notEqual(changed, lists[0]);
  assert.ok(changed.some(option => option.values.includes('Renamed (sensor.1)')));
  const selected = probe._entityOptions(fields[0], 'sensor.2');
  assert.notEqual(selected, changed, 'selection changes invalidate rendered options');
  assert.equal(selected.find(option => option.values[0] === 'sensor.2').values[1], true);
  probe.hass = { states: { ...renamed, 'sensor.new': { attributes: {} } } };
  assert.equal(
    probe._entityOptions(fields[0], 'sensor.2').length,
    1001,
    'membership additions invalidate options'
  );
  const removed = { ...renamed };
  delete removed['sensor.1'];
  probe.hass = { states: removed };
  assert.equal(
    probe._entityOptions(fields[0], undefined).length,
    999,
    'membership removals invalidate options'
  );
});

test('dropdown options bind live selection properties for parent configuration updates', () => {
  assert.doesNotMatch(source, /\?selected=/);
  assert.match(source, /<option value="" \.selected=\$\{!value\}/);
  assert.match(
    source,
    /\.selected=\$\{Array\.isArray\(value\) \? value\.includes\(option\.value\) : value === option\.value\}/
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
