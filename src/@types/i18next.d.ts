import 'i18next';

import { defaultNS, type I18nResources } from '../i18n/resources';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: I18nResources;
  }
}
