import { ViteReactSSG } from 'vite-react-ssg/single-page';

import App from './app/App';
import { initI18n } from './i18n/i18n';

initI18n();

export const createRoot = ViteReactSSG(<App />);
