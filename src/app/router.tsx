import { createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { PublicLayout } from './components/PublicLayout.tsx';
import { Landing } from './pages/Landing';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <PublicLayout />,
        children: [
          {
            index: true,
            element: <Landing />,
          },
        ],
      },
    ],
  },
]);
