import { createTheme, ThemeOptions } from '@mui/material';

import { fontFamily, getTypography } from '../typography.ts';

import { lightPalette } from './lightPalette.ts';

export const lightTheme = createTheme({
  shape: {
    borderRadius: 2,
  },
  typography: {
    ...fontFamily,
    ...getTypography(),
  },
  palette: lightPalette,
} as ThemeOptions);
