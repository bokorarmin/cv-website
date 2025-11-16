import common from './locales/common/hu_HU.json';

const defaultNS = 'common';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const resources = {
  hu_HU: {
    common,
  },
} as const;

type I18nResources = (typeof resources)['hu_HU'];

export { defaultNS, type I18nResources };
