import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

test('configured class fields preserve Lit reactive property setters', async () => {
  const configPath = new URL('../tsconfig.json', import.meta.url);
  const { config, error } = ts.parseConfigFileTextToJson(
    configPath.pathname,
    await readFile(configPath, 'utf8')
  );
  assert.equal(error, undefined);
  const { options, errors } = ts.convertCompilerOptionsFromJson(config.compilerOptions, '.');
  assert.deepEqual(errors, []);

  const source = `
    import { ReactiveElement } from ${JSON.stringify(import.meta.resolve('lit'))};
    import { state } from ${JSON.stringify(import.meta.resolve('lit/decorators.js'))};
    export class ForecastProbe extends ReactiveElement {
      @state() forecast = [];
      updates = 0;
      requestUpdate(...args) {
        super.requestUpdate(...args);
        this.updates = (this.updates || 0) + 1;
      }
    }
  `;
  const { outputText } = ts.transpileModule(source, { compilerOptions: options });
  const { ForecastProbe } = await import(
    `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`
  );
  const card = new ForecastProbe();
  const updates = card.updates;
  assert.equal(Object.hasOwn(card, 'forecast'), false, 'must not shadow the Lit setter');
  card.forecast = [{ temperature: 12 }];
  assert.equal(card.updates, updates + 1, 'forecast arrival must request a render');
});
