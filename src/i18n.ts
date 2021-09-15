import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";

import translation_EN from "./locales/en/translation.json";
import translation_TH from "./locales/th/translation.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: translation_EN,
      },
      th: {
        translations: translation_TH,
      },
    },
    debug: false,
    // lng: "en",
    fallbackLng: "en",

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    ns: ["translations"],
    defaultNS: "translations",

    react: {
      wait: true,
    },
  });

export default i18n;
