import base from './config/i18next-parser.config.base.cjs'

export default {
  ...base,
  locales: ['hu_HU', 'en_EN'],
  output: 'src/i18n/locales/$NAMESPACE/$LOCALE.json',
};
