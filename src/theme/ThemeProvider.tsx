import {
  createTheme,
  Theme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

enum LOCAL_STORAGE_KEYS {
  UI_THEME = 'ui_theme',
}

enum THEME_ID {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextType = {
  themeId: THEME_ID;
  toggleTheme: () => void;
};

interface ThemeProviderProps {
  children: ReactNode;
  lightTheme: Theme;
  darkTheme: Theme;
  locale?: object[];
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const ThemeProvider = ({
  children,
  lightTheme,
  darkTheme,
  locale = [],
}: ThemeProviderProps) => {
  const [themeId, setThemeId] = useState<THEME_ID>(() => {
    const savedThemeId = localStorage.getItem(
      LOCAL_STORAGE_KEYS.UI_THEME
    ) as THEME_ID;
    const isSystemPreferenceDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    return (
      savedThemeId || (isSystemPreferenceDark ? THEME_ID.LIGHT : THEME_ID.LIGHT)
    );
  });

  const theme = useMemo(
    () =>
      createTheme(
        themeId === THEME_ID.LIGHT ? lightTheme : darkTheme,
        ...locale
      ),
    [darkTheme, lightTheme, locale, themeId]
  );

  const toggleTheme = () => {
    setThemeId(themeId === THEME_ID.LIGHT ? THEME_ID.DARK : THEME_ID.LIGHT);
  };

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEYS.UI_THEME, themeId);
  }, [themeId]);

  return (
    <ThemeContext.Provider
      value={{
        themeId,
        toggleTheme,
      }}
    >
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
