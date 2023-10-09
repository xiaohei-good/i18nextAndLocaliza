import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import translation_en from './locales/en/translation.json';
// import translation_zh from './locales/zh/translation.json';
import LanguageDetector from 'i18next-browser-languagedetector';

import Backend from 'i18next-http-backend';
//i18next-http-backend 使用本地文件夹public/locales i18next-http-backend是一个用于从服务器获取翻译的插件

// const resources = {
//   en: {
//     translation: translation_en,
//   },
//   zh: {
//     translation: translation_zh,
//   },
// };

i18n
  // i18next-http-backend
  // loads translations from your server
  // https://github.com/i18next/i18next-http-backend
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    // resources,
    lng: 'zh',
    fallbackLng: 'zh',
    interpolation: {
      // not needed for react as it escapes by default
      escapeValue: false,
    },
    backend: {
      //for i18next-http-backend
      //loadPath：要加载翻译资源的 URL。
      //addPath：要添加翻译资源的 URL。
      //allowMultiLoading：是否允许多个请求同时发出，默认为 false。
      //parse：一个自定义解析函数，用于解析服务器响应内容。

      allowMultiLoading: true,
      backendOption: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
        addPath: '/locales/add/{{lng}}/{{ns}}',
      },
    },
  });

export default i18n;
