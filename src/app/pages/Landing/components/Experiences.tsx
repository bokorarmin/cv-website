import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Divider, Typography, useTheme, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const Experiences = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const experiences: Experience[] = [
    {
      id: '1',
      company: t('landing.experience.exp1.company', 'Tech Solutions Inc.'),
      position: t(
        'landing.experience.exp1.position',
        'Senior Full Stack Developer'
      ),
      period: t('landing.experience.exp1.period', '2022 - Present'),
      description: t(
        'landing.experience.exp1.description',
        'Leading development of enterprise web applications and mentoring junior developers.'
      ),
      responsibilities: [
        t(
          'landing.experience.exp1.resp1',
          'Architected and developed scalable web applications'
        ),
        t(
          'landing.experience.exp1.resp2',
          'Led a team of 5 developers in agile environment'
        ),
        t(
          'landing.experience.exp1.resp3',
          'Improved application performance by 40%'
        ),
      ],
      technologies: [
        'TypeScript',
        'React',
        'NestJS',
        'Kotlin',
        'Ktor',
        'PostgreSQL',
        'MySQL',
      ],
    },
    {
      id: '2',
      company: t('landing.experience.exp2.company', 'Digital Agency Co.'),
      position: t('landing.experience.exp2.position', 'Full Stack Developer'),
      period: t('landing.experience.exp2.period', '2020 - 2022'),
      description: t(
        'landing.experience.exp2.description',
        'Developed custom web solutions for various clients across different industries.'
      ),
      responsibilities: [
        t(
          'landing.experience.exp2.resp1',
          'Built responsive web applications from scratch'
        ),
        t(
          'landing.experience.exp2.resp2',
          'Collaborated with design team for optimal UX'
        ),
        t(
          'landing.experience.exp2.resp3',
          'Maintained and optimized existing codebases'
        ),
      ],
      technologies: ['JavaScript', 'Java', 'React', 'PostgreSQL', 'Docker'],
    },
    {
      id: '3',
      company: t('landing.experience.exp3.company', 'StartUp Ventures'),
      position: t('landing.experience.exp3.position', 'Junior Developer'),
      period: t('landing.experience.exp3.period', '2018 - 2020'),
      description: t(
        'landing.experience.exp3.description',
        'Started my professional journey building features for a growing SaaS platform.'
      ),
      responsibilities: [
        t(
          'landing.experience.exp3.resp1',
          'Implemented new features based on user feedback'
        ),
        t(
          'landing.experience.exp3.resp2',
          'Fixed bugs and improved code quality'
        ),
        t(
          'landing.experience.exp3.resp3',
          'Participated in code reviews and pair programming'
        ),
      ],
      technologies: [
        'JavaScript',
        'React',
        'Node.js',
        'PostgreSQL',
        'Git',
        'Java',
        'Docker',
        'Spring Boot',
        'MongoDB',
      ],
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 4, md: 10 },
        px: { xs: 2, md: 6 },
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background decorations */}
      {/* Geometric shapes scattered */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '8px',
          height: '8px',
          borderRadius: '2px',
          backgroundColor: `${theme.palette.primary.main}20`,
          animation: 'drift1 15s ease-in-out infinite',
          '@keyframes drift1': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(20px, -15px)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          right: '8%',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: `${theme.palette.secondary.main}25`,
          animation: 'drift2 12s ease-in-out infinite',
          '@keyframes drift2': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(-15px, 20px)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '45%',
          left: '12%',
          width: '10px',
          height: '10px',
          borderRadius: '2px',
          border: `2px solid ${theme.palette.primary.main}15`,
          animation: 'drift3 18s ease-in-out infinite',
          '@keyframes drift3': {
            '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
            '50%': { transform: 'translate(25px, -20px) rotate(45deg)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          backgroundColor: `${theme.palette.primary.main}18`,
          animation: 'drift4 14s ease-in-out infinite',
          '@keyframes drift4': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(-20px, -25px)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '18%',
          width: '8px',
          height: '8px',
          borderRadius: '1px',
          border: `1px solid ${theme.palette.secondary.main}20`,
          animation: 'drift5 16s ease-in-out infinite',
          '@keyframes drift5': {
            '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
            '50%': { transform: 'translate(18px, 22px) rotate(90deg)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '35%',
          right: '10%',
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: `${theme.palette.primary.main}22`,
          animation: 'drift6 13s ease-in-out infinite',
          '@keyframes drift6': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(-18px, 18px)' },
          },
        }}
      />

      {/* Subtle gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}05 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.main}04 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <Box
        sx={{ maxWidth: '1000px', mx: 'auto', position: 'relative', zIndex: 1 }}
      >
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              letterSpacing: 2,
              fontSize: '0.875rem',
              mb: 1,
              display: 'block',
            }}
          >
            {t('landing.experience.label', 'Career Journey')}
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.2,
              background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t('landing.experience.title', 'Work Experience')}
          </Typography>

          <Divider
            sx={{
              width: '80px',
              height: 4,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
              mx: 'auto',
              border: 'none',
              mb: 2,
            }}
          />

          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: '1.1rem',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            {t(
              'landing.experience.subtitle',
              'My professional experience and career highlights'
            )}
          </Typography>
        </Box>

        {/* Timeline */}
        <Box sx={{ position: 'relative' }}>
          {/* Vertical line with gradient */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              top: 0,
              bottom: 0,
              width: '3px',
              background: `linear-gradient(to bottom, 
                ${theme.palette.primary.main}00 0%, 
                ${theme.palette.primary.main}60 20%,
                ${theme.palette.primary.main}60 80%, 
                ${theme.palette.primary.main}00 100%)`,
              transform: { md: 'translateX(-50%)' },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                height: '100%',
                background: `linear-gradient(to bottom, 
                  ${theme.palette.primary.main} 0%, 
                  ${theme.palette.secondary.main} 100%)`,
                opacity: 0.3,
                animation: 'shimmerLine 3s ease-in-out infinite',
                '@keyframes shimmerLine': {
                  '0%, 100%': { opacity: 0.3 },
                  '50%': { opacity: 0.6 },
                },
              },
            }}
          />

          {experiences.map((exp, index) => (
            <Box
              key={exp.id}
              sx={{
                position: 'relative',
                mb: 6,
                pl: { xs: 6, md: 0 },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '11px', md: '50%' },
                  top: '30px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: theme.palette.primary.main,
                  border: `4px solid ${theme.palette.background.default}`,
                  boxShadow: `0 0 0 4px ${theme.palette.primary.main}30`,
                  transform: { md: 'translateX(-50%)' },
                  zIndex: 2,
                }}
              />
              {/* Content box */}
              <Box
                sx={{
                  ml: { xs: 0, md: index % 2 === 0 ? 0 : 'auto' },
                  mr: { xs: 0, md: index % 2 === 0 ? 'auto' : 0 },
                  width: { xs: '100%', md: 'calc(50% - 40px)' },
                  textAlign: {
                    xs: 'left',
                    md: index % 2 === 0 ? 'right' : 'left',
                  },
                }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.main}03 100%)`,
                    border: `1px solid ${theme.palette.divider}`,
                    boxShadow: `0 4px 20px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.08)'}`,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: index % 2 === 0 ? 'auto' : 0,
                      right: index % 2 === 0 ? 0 : 'auto',
                      width: '4px',
                      height: '0%',
                      background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      transition: 'height 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: `0 12px 40px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.15)'}`,
                      borderColor: `${theme.palette.primary.main}40`,
                      '&::before': {
                        height: '100%',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}10 100%)`,
                      border: `1px solid ${theme.palette.primary.main}30`,
                      color: theme.palette.primary.main,
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      mb: 2,
                    }}
                  >
                    <CalendarTodayIcon sx={{ fontSize: '0.875rem' }} />
                    {exp.period}
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 0.5,
                      color: theme.palette.text.primary,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      justifyContent: {
                        xs: 'flex-start',
                        md: index % 2 === 0 ? 'flex-end' : 'flex-start',
                      },
                    }}
                  >
                    <WorkIcon sx={{ color: theme.palette.primary.main }} />
                    {exp.position}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      mb: 2,
                      color: theme.palette.primary.main,
                      fontSize: '1.1rem',
                    }}
                  >
                    {exp.company}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.7,
                      mb: 2.5,
                    }}
                  >
                    {exp.description}
                  </Typography>

                  <Box sx={{ mb: 2.5 }}>
                    {exp.responsibilities.map((resp, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 1.5,
                          mb: 1,
                          flexDirection: {
                            xs: 'row',
                            md: index % 2 === 0 ? 'row-reverse' : 'row',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            minWidth: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: theme.palette.primary.main,
                            mt: 1,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            lineHeight: 1.6,
                            fontSize: { xs: '0.85rem', md: '0.95rem' },
                          }}
                        >
                          {resp}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Technologies */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      justifyContent: {
                        xs: 'flex-start',
                        md: index % 2 === 0 ? 'flex-end' : 'flex-start',
                      },
                    }}
                  >
                    {exp.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}12 0%, ${theme.palette.secondary.main}08 100%)`,
                          color: theme.palette.primary.main,
                          fontWeight: 500,
                          fontSize: '0.75rem',
                          border: `1px solid ${theme.palette.primary.main}30`,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            background: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            transform: 'translateY(-2px)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
