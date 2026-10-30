import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('all supported languages provide forecast status and retry messages', async () => {
  for (const lang of ['en', 'de', 'it']) {
    const { hourly_charts: messages } = JSON.parse(
      await readFile(new URL(`../src/translations/${lang}.json`, import.meta.url), 'utf8')
    );
    for (const key of ['forecast_loading', 'forecast_request_failed', 'no_forecast_data', 'retry_forecast', 'precipitation', 'precipitation_probability']) {
      assert.equal(typeof messages[key], 'string', `${lang}: ${key}`);
      assert.ok(messages[key].length > 0, `${lang}: ${key} must not be empty`);
    }
  }
});
