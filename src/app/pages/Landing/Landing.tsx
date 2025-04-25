import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Landing = () => {
  const { t } = useTranslation();

  return (
    <>
      <Button variant={'contained'}>helo</Button>
      <Typography>{t('language')}</Typography>
    </>
  );
};
