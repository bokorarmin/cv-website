import shared from '@terc/shared/i18n/locales/hu_HU.json';

import common from './locales/common/hu_HU.json';
import info from './locales/info/hu_HU.json';
import privacy from './locales/privacy-policy/hu_HU.json';

const defaultNS = 'common';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const resources = {
  hu_HU: {
    common,
    info,
    ['privacy-policy']: privacy,
    shared,
  },
} as const;

type I18nResources = (typeof resources)['hu_HU'];

export { defaultNS, type I18nResources };
