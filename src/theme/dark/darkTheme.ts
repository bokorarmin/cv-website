import { createTheme, ThemeOptions } from '@mui/material';

import { fontFamily, getTypography } from '../typography.ts';

import { darkPalette } from './darkPalette.ts';

export const darkTheme = createTheme({
  shape: {
    borderRadius: 2,
  },
  typography: {
    ...fontFamily,
    ...getTypography(),
  },
  palette: darkPalette,
} as ThemeOptions);
