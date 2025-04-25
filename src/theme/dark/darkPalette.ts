import { PaletteOptions } from '@mui/material';

export const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#8C9EFF', // Indigo A200
    light: '#B6BFFF',
    dark: '#5C6BC0',
    contrastText: '#1E1E1E',
  },
  secondary: {
    main: '#B388FF', // Deep Purple A200
    light: '#E4C2FF',
    dark: '#7E57C2',
    contrastText: '#1E1E1E',
  },
  background: {
    default: '#121212',
    paper: '#1E1E1E',
  },
  success: {
    main: '#66BB6A',
    light: '#98EE99',
    dark: '#338a3e',
    contrastText: '#121212',
  },
  error: {
    main: '#EF5350',
    light: '#FF867C',
    dark: '#B61827',
    contrastText: '#121212',
  },
  warning: {
    main: '#FFA726',
    light: '#FFD95B',
    dark: '#C77800',
    contrastText: '#121212',
  },
  info: {
    main: '#29B6F6',
    light: '#4FC3F7',
    dark: '#0288D1',
    contrastText: '#121212',
  },
  divider: '#333333',
  text: {
    primary: '#E0E0E0',
    secondary: '#BDBDBD',
    disabled: '#757575',
  },
  grey: {
    50: '#212121',
    100: '#2C2C2C',
    200: '#333333',
    300: '#424242',
    400: '#616161',
    500: '#757575',
    600: '#9E9E9E',
    700: '#BDBDBD',
    800: '#E0E0E0',
    900: '#FFFFFF',
  },
};
