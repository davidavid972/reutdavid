import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import heTranslations from '../locales/he.json';
import enTranslations from '../locales/en.json';

const LANGUAGE_KEY = 'reut-david-language';

// Get saved language or default to Hebrew
const getSavedLanguage = (): string => {
  if (typeof localStorage === 'undefined') return 'he';
  try {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    if (saved === 'en' || saved === 'he') return saved;
  } catch (error) {
    console.warn('Failed to read language from localStorage:', error);
  }
  return 'he'; // Default to Hebrew
};

const currentLanguage = getSavedLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources: {
      he: {
        translation: heTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
    lng: currentLanguage,
    fallbackLng: 'he',
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

// Update document attributes and meta when language changes
const updateDocumentAttributes = (lang: string) => {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  document.title = i18n.t('meta.title', { lng: lang });
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', i18n.t('meta.description', { lng: lang }));
  }
};

// Set initial document attributes (after init so t() is available)
updateDocumentAttributes(currentLanguage);

// Listen for language changes
i18n.on('languageChanged', (lng) => {
  updateDocumentAttributes(lng);
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LANGUAGE_KEY, lng);
    }
  } catch (error) {
    console.warn('Failed to save language to localStorage:', error);
  }
});

export default i18n;

