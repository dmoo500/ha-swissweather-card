import { LitElement, html, css, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { HomeAssistant } from '../types/home-assistant';
import {
  getEntityChoices,
  prioritizeEntityChoices,
  suggestedEntityTerms,
  type EntityChoice,
} from './entity-options';

export interface EditorField {
  name: string;
  required?: boolean;
  description?: string;
  suggested?: string[];
  selector: {
    entity?: { domain?: string | string[] };
    boolean?: object;
    number?: { min?: number; max?: number; step?: number; mode?: string };
    text?: object;
    select?: { multiple?: boolean; options: Array<string | { value: string; label: string }> };
  };
}

@customElement('swissweather-editor-form')
export class SwissWeatherEditorForm extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ attribute: false }) data: Record<string, unknown> = {};
  @property({ attribute: false }) schema: Array<EditorField | undefined> = [];
  @property({ attribute: false }) computeLabel = (field: EditorField): string => field.name;
  @property({ attribute: false }) computeHelper = (_field: EditorField): string => '';
  private readonly _entityTemplates = new Map<
    string,
    {
      options: EntityChoice[];
      value: unknown;
      suggestions: string;
      templates: TemplateResult[];
    }
  >();

  private _entityOptions(field: EditorField, value: unknown): TemplateResult[] {
    if (!this.hass) return [];
    const options = getEntityChoices(this.hass.states, field.selector.entity?.domain);
    const terms = field.suggested || suggestedEntityTerms(field.name);
    const suggestions = JSON.stringify(terms);
    const cached = this._entityTemplates.get(field.name);
    if (cached?.options === options && cached.value === value && cached.suggestions === suggestions)
      return cached.templates;
    const renderedOptions =
      typeof value === 'string' && value && !options.some(option => option.value === value)
        ? [...options, { value, label: `${value} (${value})` }].sort((a, b) =>
            a.value.localeCompare(b.value)
          )
        : options;
    const templates = prioritizeEntityChoices(renderedOptions, terms).map(
      option =>
        html`<option value=${option.value} .selected=${value === option.value}>
          ${option.label}
        </option>`
    );
    this._entityTemplates.set(field.name, { options, value, suggestions, templates });
    return templates;
  }

  static styles = css`
    :host {
      display: block;
      color: var(--primary-text-color, #222);
    }
    .field {
      display: grid;
      gap: 6px;
      margin: 12px 0;
      min-width: 0;
    }
    label {
      font-size: 14px;
      font-weight: 500;
    }
    input,
    select {
      box-sizing: border-box;
      width: 100%;
      min-width: 0;
      min-height: 44px;
      padding: 10px;
      border: 1px solid var(--divider-color, #888);
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      color: inherit;
      font: inherit;
    }
    input[type='checkbox'] {
      width: 24px;
      min-height: 24px;
      accent-color: var(--primary-color, #03a9f4);
    }
    .boolean {
      grid-template-columns: 1fr auto;
      align-items: center;
      min-height: 44px;
    }
    .helper {
      grid-column: 1 / -1;
      font-size: 12px;
      color: var(--secondary-text-color, #666);
    }
    input:focus-visible,
    select:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: 2px;
    }
  `;

  private _change(field: EditorField, event: Event): void {
    const input = event.currentTarget;
    if (!(input instanceof HTMLInputElement || input instanceof HTMLSelectElement)) return;
    if (!input.reportValidity()) return;
    let value: unknown = input.value || undefined;
    if (field.selector.boolean && input instanceof HTMLInputElement) {
      value = input.checked;
    } else if (field.selector.number && input.value !== '') {
      value = Number(input.value);
    } else if (field.selector.select?.multiple && input instanceof HTMLSelectElement) {
      value = Array.from(input.selectedOptions, option => option.value);
    }
    this.data = { ...this.data, [field.name]: value };
    this.dispatchEvent(
      new CustomEvent('value-changed', {
        detail: { value: this.data },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _field(field: EditorField): TemplateResult {
    const { name, selector, required } = field;
    const value = this.data[name];
    const helper = this.computeHelper(field);
    const change = (event: Event): void => this._change(field, event);
    let control: TemplateResult;
    if (selector.boolean) {
      control = html`<input
        id=${name}
        type="checkbox"
        aria-describedby=${helper ? `${name}-help` : ''}
        .checked=${value === true}
        @change=${change}
      />`;
    } else if (selector.entity || selector.select) {
      const options =
        selector.select?.options.map(option =>
          typeof option === 'string' ? { value: option, label: option } : option
        ) || [];
      control = html`<select
        id=${name}
        ?required=${required}
        ?multiple=${selector.select?.multiple}
        aria-describedby=${helper ? `${name}-help` : ''}
        @change=${change}
      >
        ${selector.select?.multiple ? '' : html`<option value="" .selected=${!value}>—</option>`}
        ${
          selector.entity
            ? this._entityOptions(field, value)
            : options.map(
                option =>
                  html`<option
                    value=${option.value}
                    .selected=${Array.isArray(value) ? value.includes(option.value) : value === option.value}
                  >
                    ${option.label}
                  </option>`
              )
        }
      </select>`;
    } else if (selector.number || selector.text) {
      control = html`<input
        id=${name}
        type=${selector.number ? 'number' : 'text'}
        .value=${value === undefined ? '' : String(value)}
        ?required=${required}
        min=${selector.number?.min ?? ''}
        max=${selector.number?.max ?? ''}
        step=${selector.number?.step ?? 'any'}
        aria-describedby=${helper ? `${name}-help` : ''}
        @change=${change}
      />`;
    } else {
      throw new Error(`Unsupported editor selector: ${name}`);
    }
    return html`<div class="field ${selector.boolean ? 'boolean' : ''}">
      <label for=${name}>${this.computeLabel(field)}</label>${control}
      ${helper ? html`<div class="helper" id=${`${name}-help`}>${helper}</div>` : ''}
    </div>`;
  }

  protected render(): TemplateResult {
    return html`${this.schema.filter((field): field is EditorField => !!field).map(field => this._field(field))}`;
  }
}
