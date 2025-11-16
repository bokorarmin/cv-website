import { createTheme, ThemeOptions } from '@mui/material';

import { ToolbarHeight } from '../commonThemeOptions.ts';
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
  mixins: {
    toolbar: {
      minHeight: ToolbarHeight.xs,
      '@media (min-width:600px)': {
        minHeight: ToolbarHeight.md,
      },
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: ToolbarHeight.xs,
        },
      },
    },
  },
} as unknown as ThemeOptions);
