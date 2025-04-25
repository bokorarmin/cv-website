import { createTheme, ThemeOptions } from '@mui/material';

import { darkPalette } from './darkPalette.ts';
import { fontFamily, getTypography } from '../typography.ts';

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
