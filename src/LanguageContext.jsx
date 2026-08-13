import React, { createContext, useContext, useEffect, useState } from 'react';
import { copy, LANGS, DEFAULT_LANG } from './i18n';

const STORAGE_KEY = 'fiba-lang';

const LanguageContext = createContext(null);

// Resolution order: a language the visitor previously picked wins, then the
// browser's own languages, then Spanish. Spanish is the fallback on purpose:
// most inbound traffic is Chile/LATAM, so an undeclared visitor should land in
// Spanish rather than English.
const detectLang = () => {
  if (typeof window === 'undefined') return DEFAULT_LANG;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(stored)) return stored;
  } catch {
    // Private mode / storage blocked. Fall through to browser detection.
  }

  const browser = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of browser) {
    const base = String(tag || '').toLowerCase().split('-')[0];
    if (LANGS.includes(base)) return base;
  }

  return DEFAULT_LANG;
};

export const LanguageProvider = ({ children }) => {
  // Lazy initialiser so detection runs once, before first paint.
  const [lang, setLang] = useState(detectLang);

  // Keep the document in sync: <html lang>, title, and meta description all
  // need to follow the active language for SEO and for screen readers.
  useEffect(() => {
    const t = copy[lang];
    document.documentElement.lang = t.htmlLang;
    document.title = t.meta.title;

    const setMeta = (selector, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', value);
    };
    setMeta('meta[name="description"]', t.meta.description);
    setMeta('meta[property="og:title"]', t.meta.title);
    setMeta('meta[property="og:description"]', t.meta.description);

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage blocked: the choice just won't persist across visits.
    }
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: copy[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside a LanguageProvider');
  return ctx;
};
