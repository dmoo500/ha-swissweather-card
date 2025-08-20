// TypeScript declaration for translations object to allow string index
export interface TranslationDict {
  [lang: string]: any;
}
declare module './translations.js' {
  export const translations: TranslationDict;
}
