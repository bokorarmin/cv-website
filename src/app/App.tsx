import '../theme/style/background.css';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { RouterProvider } from 'react-router-dom';

import { darkTheme } from '../theme/dark/darkTheme.ts';

import { router } from './router.tsx';

const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

function App() {
  return (
    <AppThemeProvider>
      <GlobalStyles
        styles={(theme) => ({
          html: {
            WebkitFontSmoothing: 'auto',
            backgroundColor: theme.palette.background.default,
          },
          body: {
            margin: 0,
            fontFamily: theme.typography.fontFamily,
            backgroundColor: theme.palette.background.default,
          },
          [`& input:-webkit-autofill,
              input:-internal-autofill-selected,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              input:-webkit-autofill:active`]: {
            transition: 'background-color 1000s ease-in-out 0s',
            boxShadow: 'inherit !important',
            textFillColor: `${theme.palette.text.primary}`,
          },
        })}
      />
      <RouterProvider router={router} />
    </AppThemeProvider>
  );
}

export default App;
