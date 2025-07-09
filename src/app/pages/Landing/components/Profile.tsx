import { Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Profile = () => {
  const { t } = useTranslation();

  return (
    <>
      <Grid container>
        <Grid sx={{ textAlign: 'center' }} size={{ xs: 12, sm: 5 }}>
          pic
        </Grid>
        <Grid sx={{ textAlign: 'center' }} size={{ xs: 12, sm: 7 }}>
          <Box maxWidth={'sm'}>{t('landing.profile.aboutMe')}</Box>
        </Grid>
      </Grid>
    </>
  );
};
