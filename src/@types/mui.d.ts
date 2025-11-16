export type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/material/themeCssVarsAugmentation';

declare module '@mui/material/styles' {
  interface Theme {
    ToolbarHeight: {
      xs: number;
      md: number;
    };
    GlobalCreateColor: keyof Pick<Palette, 'primary' | 'secondary'>;
  }

  interface ThemeOptions {
    ToolbarHeight: {
      xs: number;
      md: number;
    };
    GlobalCreateColor: keyof Pick<Palette, 'primary' | 'secondary'>;
  }

  interface PaletteColor {
    contrastTextForLight?: string;
  }

  interface SimplePaletteColorOptions {
    contrastTextForLight?: string;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    escalation: true;
    primaryLight: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    escalation: true;
    primaryLight: true;
  }
}
