import { es } from './es';
import { en } from './en';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export type Localized<T> = Record<Locale, T>;
export interface LocaleProps { locale: Locale }

// La misma estructura se exige a ambos diccionarios, sin traducciones de respaldo.
export type Messages = typeof es;
export const messages: Localized<Messages> = { es, en };
