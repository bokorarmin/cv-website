import i18n from 'i18next';
import Backend from 'i18next-http-backend/cjs';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

export type SupportedI18nLng = 'hu_HU' | 'en_EN' | 'fr_FR' | 'de_DE';
export const supportedLngs: SupportedI18nLng[] = [
  'hu_HU',
  'en_EN',
  'fr_FR',
  'de_DE',
];
const fallbackLng: SupportedI18nLng = 'en_EN';

export const initI18n = () => {
  void i18n
    .use(Backend)
    .use(initReactI18next)
    .use(
      resourcesToBackend((language, namespace, callback) => {
        import(`./locales/${namespace}/${language}.json`)
          .then(({ default: resources }) => {
            callback(null, resources);
          })
          .catch((error) => {
            callback(error, null);
          });
      })
    )
    .init({
      partialBundledLanguages: true,
      supportedLngs,
      fallbackLng,
      ns: ['common'],
      defaultNS: 'common',
    });
};

export { i18n };
