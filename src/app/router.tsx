import { createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { Landing } from './pages/Landing';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
]);
