import type { HomeAssistant } from '../types/home-assistant';

export interface EntityChoice {
  value: string;
  label: string;
}

export function suggestedEntityTerms(name: string): string[] {
  const terms: Record<string, string[]> = {
    uv: ['uv', 'ultraviolet'],
    wind: ['wind', 'gust', 'breeze'],
    sunshine: ['sunshine', 'sunlight', 'sonnenschein'],
    warning: ['warning', 'warnung', 'alert'],
    birch: ['birch', 'birke'],
    grasses: ['grass', 'grasses', 'graeser', 'gräser'],
    alder: ['alder', 'erle'],
    hazel: ['hazel', 'hasel'],
    beech: ['beech', 'buche'],
    ash: ['ash', 'esche'],
    oak: ['oak', 'eiche'],
  };
  return Object.entries(terms).find(([key]) => name.split('_').includes(key))?.[1] || [];
}

export function prioritizeEntityChoices(options: EntityChoice[], terms: string[]): EntityChoice[] {
  if (!terms.length) return options;
  const preferred: EntityChoice[] = [];
  const other: EntityChoice[] = [];
  for (const option of options) {
    const text = `${option.value} ${option.label}`.toLowerCase();
    (terms.some(term => text.includes(term.toLowerCase())) ? preferred : other).push(option);
  }
  return [...preferred, ...other];
}

let lastStates: HomeAssistant['states'] | undefined;
let choices: EntityChoice[] = [];
const filteredChoices = new Map<string, EntityChoice[]>();

export function getEntityChoices(
  states: HomeAssistant['states'],
  domain?: string | string[]
): EntityChoice[] {
  if (states !== lastStates) {
    lastStates = states;
    const ids = Object.keys(states);
    if (
      ids.length !== choices.length ||
      choices.some(
        option =>
          !states[option.value] ||
          option.label !==
            `${states[option.value].attributes.friendly_name || option.value} (${option.value})`
      )
    ) {
      choices = ids.sort().map(id => ({
        value: id,
        label: `${states[id].attributes.friendly_name || id} (${id})`,
      }));
      filteredChoices.clear();
    }
  }
  const domains = typeof domain === 'string' ? [domain] : domain;
  if (!domains) return choices;
  const key = JSON.stringify([...domains].sort());
  let filtered = filteredChoices.get(key);
  if (!filtered) {
    filtered = choices.filter(option => domains.includes(option.value.split('.')[0]));
    filteredChoices.set(key, filtered);
  }
  return filtered;
}
