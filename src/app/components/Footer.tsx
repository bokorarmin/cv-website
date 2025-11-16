import DownloadIcon from '@mui/icons-material/Download';
import { Box, Typography, useTheme, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Socials } from './Socials';

export const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 6 },
        backgroundColor:
          theme.palette.mode === 'dark'
            ? theme.palette.background.paper
            : theme.palette.grey[100],
        borderTop: `1px solid ${theme.palette.divider}`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 50% 0%, ${theme.palette.primary.main}05 0%, transparent 50%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 1,
            }}
          >
            {t('footer.name', 'Bokor Ármin')}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: '0.95rem',
            }}
          >
            {t('footer.tagline', 'Full Stack Developer')}
          </Typography>
        </Box>

        <Divider
          sx={{
            width: '100px',
            height: 3,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
            mx: 'auto',
            border: 'none',
            mb: 4,
          }}
        />

        <Socials />

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Box
            component="a"
            href="/cv.pdf"
            onClick={(e) => {
              e.preventDefault();
              window.open('/cv.pdf', '_blank');
              const link = document.createElement('a');
              link.href = '/cv.pdf';
              link.download = 'Bokor_Armin_CV.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.75,
              color: theme.palette.text.secondary,
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'all 0.2s ease',
              '&:hover': {
                color: theme.palette.primary.main,
                '& .download-icon': {
                  transform: 'translateY(2px)',
                },
              },
            }}
          >
            <DownloadIcon
              className="download-icon"
              sx={{
                fontSize: '1.125rem',
                transition: 'transform 0.2s ease',
              }}
            />
            {t('footer.downloadCV', 'Download CV')}
          </Box>
        </Box>

        <Divider
          sx={{
            my: 4,
            backgroundColor: theme.palette.divider,
            opacity: 0.5,
          }}
        />

        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              flexWrap: 'wrap',
            }}
          >
            {t('footer.copyright', {
              year: new Date().getFullYear(),
            })}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
