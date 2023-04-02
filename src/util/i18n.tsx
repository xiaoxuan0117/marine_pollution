import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// 設定i18n參數
i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true, // debug工具
    fallbackLng: "zh",
    defaultNS: "translation",
    lng: "zh", // 指定語言
    backend: {
      loadPath: "src/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
