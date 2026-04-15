import de from './de.json';
import en from './en.json';

export type TranslationDict = { [lang: string]: any };

export const translations: TranslationDict = { de, en };
