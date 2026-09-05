import de from './de.json';
import en from './en.json';
import it from './it.json';

export type TranslationDict = { [lang: string]: any };

export const translations: TranslationDict = { de, en, it };

export function getTranslations(lang?: string | null): any {
  const language =
    typeof lang === 'string' ? lang.toLowerCase().replace(/_/g, '-').split('-')[0] : 'en';
  return translations[language] ?? translations.en;
}
