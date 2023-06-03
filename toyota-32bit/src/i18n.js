import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import trTranslation from "./language/tr/translation.json";
import enTranslation from "./language/en/translation.json";
import jaTranslation from "./language/ja/translation.json";

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            tr: { translation: trTranslation },
            en: { translation: enTranslation },
            ja: { translation: jaTranslation },
        },
        fallbackLng: "en",
        detection: {
            order: ["navigator"],
        },
        interpolation: {
            escapeValue: false, 
        },
    });

export default i18n;
