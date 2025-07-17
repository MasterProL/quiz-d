import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translation from './translation.json';

const resources = {
  en: { translation: translation.en },
  ru: { translation: translation.ru },
  tr: { translation: translation.tr },
  uz: { translation: translation.uz },
  de: { translation: translation.de },
  es: { translation: translation.es },
  pt: { translation: translation.pt },
  ar: { translation: translation.ar },
  fa: { translation: translation.fa },
  zh: { translation: translation.zh }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;