import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box component={'footer'} sx={{ py: 4, textAlign: 'center', mt: 10 }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} {t('footer.rights')}
      </Typography>
    </Box>
  );
};
