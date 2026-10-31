import de from './de.json';
import en from './en.json';
import fr from './fr.json';
import it from './it.json';

export type TranslationDict = { [lang: string]: any };

export const translations: TranslationDict = { de, en, fr, it };

export function getTranslations(lang?: string | null): any {
  const language =
    typeof lang === 'string' ? lang.toLowerCase().replace(/_/g, '-').split('-')[0] : 'en';
  return translations[language] ?? translations.en;
}

export function getEnglishTranslation(key: string): string {
  let value: unknown = en;
  for (const part of key.split('.')) {
    value = typeof value === 'object' && value !== null ? Reflect.get(value, part) : undefined;
  }
  if (typeof value === 'string' && value.length > 0) return value;
  console.warn(`[SwissWeather] Missing English translation: ${key}`);
  return `[${key}]`;
}
