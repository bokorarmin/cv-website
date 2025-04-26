import '../theme/style/background.css';
import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import {
  CommonGlobalStyles,
  darkTheme,
  lightTheme,
  ThemeProvider,
} from '../theme';

const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider
    lightTheme={lightTheme}
    darkTheme={darkTheme}
    children={children}
  />
);

function App() {
  return (
    <AppThemeProvider>
      <CommonGlobalStyles />
      <Outlet />
    </AppThemeProvider>
  );
}

export default App;
