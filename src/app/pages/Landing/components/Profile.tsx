import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Profile = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 3, md: 6 }}
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: '1200px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Grid
          size={{ xs: 12, sm: 7 }}
          sx={{
            textAlign: { xs: 'center', sm: 'left' },
            order: { xs: 2, sm: 1 },
          }}
        >
          <Box sx={{ maxWidth: 600, mx: { xs: 'auto', sm: 0 } }}>
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                letterSpacing: 2,
                fontSize: { xs: '0.75rem', md: '0.875rem' },
                mb: { xs: 0.5, md: 1 },
                display: 'block',
              }}
            >
              {t('landing.profile.label', 'Get to know me')}
            </Typography>

            <Typography
              variant="h3"
              component="h1"
              sx={{
                color: theme.palette.text.primary,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.75rem' },
                fontWeight: 700,
                mb: { xs: 1.5, md: 2 },
                lineHeight: 1.2,
                background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('landing.profile.title', 'About Me')}
            </Typography>

            <Divider
              sx={{
                mb: { xs: 2, md: 3 },
                width: { xs: '50px', sm: '60px', md: '80px' },
                height: { xs: 3, md: 4 },
                backgroundColor: theme.palette.primary.main,
                borderRadius: 2,
                mx: { xs: 'auto', sm: 0 },
                border: 'none',
              }}
            />

            <Typography
              variant="body1"
              component={'h2'}
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.8,
                mb: { xs: 2, md: 3 },
                px: { xs: 2, md: 0 },
                fontSize: { xs: '0.95rem', md: '1rem' },
              }}
            >
              {t('landing.profile.aboutMe')}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: { xs: 1.5, md: 2 },
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', sm: 'flex-start' },
                mt: { xs: 2.5, md: 4 },
              }}
            >
              {[
                t('landing.profile.traits.creative', 'Creative'),
                t('landing.profile.traits.innovative', 'Innovative'),
              ].map((trait, index) => (
                <Box
                  key={index}
                  sx={{
                    px: { xs: 2, md: 2.5 },
                    py: { xs: 0.75, md: 1 },
                    borderRadius: { xs: 2, md: 3 },
                    backgroundColor: `${theme.palette.primary.main}15`,
                    border: `1px solid ${theme.palette.primary.main}30`,
                    color: theme.palette.primary.main,
                    fontSize: { xs: '0.8rem', md: '0.875rem' },
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: `${theme.palette.primary.main}25`,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 4px 12px ${theme.palette.primary.main}20`,
                    },
                  }}
                >
                  {trait}
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid
          size={{ xs: 12, sm: 5 }}
          sx={{
            textAlign: 'center',
            order: { xs: 1, sm: 2 },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'inline-block',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: { xs: '-6px', md: '-10px' },
                left: { xs: '-6px', md: '-10px' },
                right: { xs: '6px', md: '10px' },
                bottom: { xs: '6px', md: '10px' },
                borderRadius: '50%',
                border: {
                  xs: `2px solid ${theme.palette.primary.main}`,
                  md: `3px solid ${theme.palette.primary.main}`,
                },
                opacity: 0.3,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: { xs: '6px', md: '10px' },
                left: { xs: '6px', md: '10px' },
                right: { xs: '-6px', md: '-10px' },
                bottom: { xs: '-6px', md: '-10px' },
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, transparent 100%)`,
                zIndex: -1,
              },
            }}
          >
            <Box
              component="img"
              src="/profile.jpg"
              alt={t('landing.profile.alt')}
              sx={{
                width: { xs: '180px', sm: '260px', md: '280px' },
                height: { xs: '180px', sm: '260px', md: '280px' },
                objectFit: 'cover',
                borderRadius: '50%',
                boxShadow: `0 20px 60px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.15)'}`,
                border: {
                  xs: `3px solid ${theme.palette.background.paper}`,
                  md: `4px solid ${theme.palette.background.paper}`,
                },
                transition: 'transform 0.3s ease',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
