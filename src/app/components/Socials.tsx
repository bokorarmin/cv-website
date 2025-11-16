import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box } from '@mui/material';

import { IconLink } from './IconLink';

export const Socials = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <IconLink href="https://github.com/bokorarmin" icon={<GitHubIcon />} />
      <IconLink
        href="http://www.linkedin.com/in/barmin"
        icon={<LinkedInIcon />}
      />
      <IconLink href="mailto:bokorarmin4@gmail.com" icon={<EmailIcon />} />
      <IconLink href="tel:+36203237307" icon={<PhoneIcon />} />
    </Box>
  );
};
