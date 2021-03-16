/**
 * @file
 * Contains i18n localization configurations.
 */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import WhiteLabel from "./config/whiteLabel.config";
import en from "./public/assets/i18n/en/translations.json";

// import LanguageDetector from 'i18next-browser-languagedetector';
// || navigator.language

const resources = {
  en: { translation: en },
};

i18n.use(initReactI18next).init({
  resources,
  lng: WhiteLabel.defaultLanguage,
  debug: false,
  keySeparator: false,
});
