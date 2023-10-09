import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import Backend from 'i18next-locize-backend';
//i18next-locize-backend是一个用于从locize获取翻译的插件。

const locizeOptions = {
  projectId: process.env.REACT_APP_LOCIZE_PROJECTID,
  apiKey: process.env.REACT_APP_LOCIZE_APIKEY, // The API key should only be used in development, not in production. You should not =expose your apps API key to production!!!
  referenceLng: process.env.REACT_APP_LOCIZE_REFLNG,
  version: process.env.REACT_APP_LOCIZE_VERSION,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'zh',
    fallbackLng: 'zh',
    interpolation: {
      // not needed for react as it escapes by default
      escapeValue: false,
    },
    // backend: { //for i18next-http-backend
    //   //loadPath：要加载翻译资源的 URL。
    //   //addPath：要添加翻译资源的 URL。
    //   //allowMultiLoading：是否允许多个请求同时发出，默认为 false。
    //   //parse：一个自定义解析函数，用于解析服务器响应内容。

    //   allowMultiLoading: true,
    //   backendOption: {
    //     loadPath: '/locales/{{lng}}/{{ns}}.json',
    //     addPath: '/locales/add/{{lng}}/{{ns}}',
    //   },
    // },
    backend: locizeOptions, //for i18next-locize-backend
    locizeLastUsed: locizeOptions,
  });

export default i18n;
