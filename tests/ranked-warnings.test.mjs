import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
import { html } from 'lit';

async function loadRenderRankedSlot() {
  const source = await readFile(new URL('../src/utils/warnings/ranked.ts', import.meta.url), 'utf8');
  const parsed = ts.createSourceFile('ranked.ts', source, ts.ScriptTarget.Latest, true);
  const declaration = parsed.statements.find(
    statement =>
      ts.isFunctionDeclaration(statement) && statement.name?.text === 'renderRankedSlot'
  );
  const { outputText } = ts.transpileModule(declaration.getText(parsed).replace(/^export\s+/, ''), {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  });
  return new Function(
    'html',
    '_t',
    'sanitizeHtml',
    'rankedIconColorToCSS',
    `${outputText}; return renderRankedSlot;`
  )(html, key => key, value => value, value => value);
}

function createEntity() {
  return {
    entity_id: 'sensor.warning_primary',
    state: 'drought',
    attributes: {
      has_warning: true,
      warning_type: 'drought',
      level_name: 'red',
      icon_color: 'red',
    },
  };
}

test('ranked warning labels use Home Assistant formatted entity states', async () => {
  const entity = createEntity();
  const hass = {
    formatEntityState: formattedEntity => {
      assert.equal(formattedEntity, entity);
      return 'Trockenheit';
    },
  };

  const renderRankedSlot = await loadRenderRankedSlot();
  const template = renderRankedSlot(entity, 'primary', {}, () => {}, hass);

  assert.ok(template.values.includes('Trockenheit'));
  assert.ok(!template.values.includes('drought'));
});

test('ranked warning labels keep the entity state when no translation is available', async () => {
  const entity = createEntity();
  const hass = { formatEntityState: formattedEntity => formattedEntity.state };

  const renderRankedSlot = await loadRenderRankedSlot();
  const template = renderRankedSlot(entity, 'primary', {}, () => {}, hass);

  assert.ok(template.values.includes('drought'));
});
