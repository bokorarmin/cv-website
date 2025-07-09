import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { IconLink } from './IconLink';

export const Socials = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
      <IconLink
        href="https://github.com/bokorarmin"
        icon={<GitHubIcon />}
        tooltip={t('footer.socials.github')}
      />
      <IconLink
        href="http://www.linkedin.com/in/barmin"
        icon={<LinkedInIcon />}
        tooltip={t('footer.socials.linkedin')}
      />
      <IconLink
        href="mailto:bokorarmin4@gmail.com"
        icon={<EmailIcon />}
        tooltip={t('footer.socials.email')}
      />
      <IconLink
        href="tel:+36203237307"
        icon={<PhoneIcon />}
        tooltip={t('footer.socials.phone')}
      />
    </Box>
  );
};
