import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Socials } from './Socials';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box component="footer" sx={{ py: 4, textAlign: 'center', mt: 10 }}>
      <Socials />
      <Typography variant="body2">
        {t('footer.copyright', {
          year: new Date().getFullYear(),
        })}
      </Typography>
    </Box>
  );
};
