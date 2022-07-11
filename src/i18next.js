import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import BrowserLanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next) // passes i18next to react-i18next
  .use(BrowserLanguageDetector) // detect the language from diffrent resource
  .use(HttpBackend) // load the language from a source e.g(path)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'es', 'ar', 'fr', 'hi', 'zh', 'bn', 'de', 'ru', 'pt', 'ja'],
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'], // just incase we decide to change path
      caches: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/common.json'
    }
  });

export default i18next;