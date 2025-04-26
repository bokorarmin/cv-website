import { createTheme, ThemeOptions } from '@mui/material';

import { fontFamily, getTypography } from '../typography.ts';

import { lightPalette } from './lightPalette.ts';

// export const lightTheme = createTheme({
//   shape: {
//     borderRadius: 2,
//   },
//   typography: {
//     ...fontFamily,
//     ...getTypography(),
//   },
//   palette: lightPalette,
// } as ThemeOptions);

export const lightTheme = createTheme({
  palette: lightPalette,
  typography: {
    ...fontFamily,
    ...getTypography(),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.grey[800],
          color: 'rgba(255, 255, 255, 0.85)',
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.palette.grey[50],
          borderRight: 0,
        }),
      },
    },
  },
} as ThemeOptions);
