import { GlobalStyles } from '@mui/material';

export const CommonGlobalStyles = () => (
  <GlobalStyles
    styles={(theme) => ({
      html: { WebkitFontSmoothing: 'auto' },
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
);
