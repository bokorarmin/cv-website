import { IconButton, useTheme } from '@mui/material';

interface IconLinkProps {
  href: string;
  icon: React.ReactNode;
}

export const IconLink = ({ href, icon }: IconLinkProps) => {
  const theme = useTheme();

  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        width: 50,
        height: 50,
        backgroundColor: `${theme.palette.primary.main}10`,
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}30`,
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          transform: 'translateY(-4px)',
          boxShadow: `0 8px 20px ${theme.palette.primary.main}40`,
        },
        '& svg': {
          fontSize: 24,
        },
      }}
    >
      {icon}
    </IconButton>
  );
};
