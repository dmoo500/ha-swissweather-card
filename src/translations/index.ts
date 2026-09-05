import de from './de.json';
import en from './en.json';
import it from './it.json';

export type TranslationDict = { [lang: string]: any };

export const translations: TranslationDict = { de, en, it };

export function getTranslations(lang: string): any {
  const language = lang.toLowerCase().split('-')[0];
  return translations[language] ?? translations.en;
}
