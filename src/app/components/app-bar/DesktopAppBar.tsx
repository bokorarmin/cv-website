import LanguageIcon from '@mui/icons-material/Language';
import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  Select,
  MenuItem,
  useTheme,
  Box,
} from '@mui/material';
import { useState, useEffect } from 'react';

import { ToolbarHeight } from '../../../theme/commonThemeOptions';
import { NavItem } from '../Header';

const defaultToolbarHeight = 120;

interface DesktopAppBarProps {
  onNavClick: (section: 'bio' | 'experience' | 'skills' | 'footer') => void;
  navItems: NavItem[];
  window?: () => Window;
  handleLanguageChange: (lang: string) => void;
  language: string;
}

export const DesktopAppBar = ({
  onNavClick,
  navItems,
  handleLanguageChange,
  language,
}: DesktopAppBarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    section: 'bio' | 'experience' | 'skills' | 'footer'
  ) => {
    onNavClick(section);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
        backdropFilter: scrolled
          ? 'blur(18px) saturate(180%) brightness(110%)'
          : 'none',
        WebkitBackdropFilter: scrolled
          ? 'blur(18px) saturate(180%) brightness(110%)'
          : 'none',

        borderBottom: scrolled
          ? `1px solid rgba(${theme.palette.mode === 'dark' ? '255,255,255' : '0,0,0'}, 0.08)`
          : 'none',

        boxShadow: scrolled
          ? theme.palette.mode === 'dark'
            ? '0 4px 30px rgba(0, 0, 0, 0.4)'
            : '0 4px 30px rgba(0, 0, 0, 0.08)'
          : 'none',

        transition: 'all 0.4s ease',
        backgroundImage: scrolled
          ? `
        linear-gradient(
          115deg,
          rgba(255, 255, 255, ${theme.palette.mode === 'dark' ? 0.05 : 0.25}) 0%,
          rgba(255, 255, 255, 0) 40%
        ),
        linear-gradient(
          to bottom right,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0) 70%
        )
      `
          : 'none',

        backgroundBlendMode: 'overlay, normal',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'right',
          minHeight: scrolled
            ? `${ToolbarHeight.xs}px !important`
            : `${defaultToolbarHeight}px !important`,
          height: scrolled
            ? `${ToolbarHeight.xs}px`
            : `${defaultToolbarHeight}px`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          px: { xs: 2, md: 4 },
          '@media (min-width: 600px)': {
            minHeight: scrolled
              ? `${ToolbarHeight.xs}px !important`
              : `${defaultToolbarHeight}px !important`,
            height: scrolled
              ? `${ToolbarHeight.xs}px`
              : `${defaultToolbarHeight}px`,
          },
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          {navItems.map((item) => (
            <Button
              key={item.title}
              onClick={() => handleNavClick(item.section)}
              sx={{
                textTransform: 'none',
                color: theme.palette.text.primary,
                fontSize: scrolled ? '0.9rem' : '0.95rem',
                px: 2,
                py: 1,
                position: 'relative',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: theme.palette.primary.main,
                  '&::after': {
                    width: '60%',
                  },
                },
              }}
            >
              {item.title}
            </Button>
          ))}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              ml: 1,
              px: 1.5,
              py: 0.5,
              borderRadius: 2,
              backgroundColor: `${theme.palette.primary.main}10`,
              border: `1px solid ${theme.palette.primary.main}30`,
            }}
          >
            <LanguageIcon
              sx={{
                fontSize: '1.1rem',
                color: theme.palette.primary.main,
              }}
            />
            <Select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              variant="standard"
              disableUnderline
              sx={{
                fontSize: scrolled ? '0.85rem' : '0.9rem',
                fontWeight: 500,
                color: theme.palette.primary.main,
                transition: 'font-size 0.3s ease',
                '& .MuiSelect-select': {
                  py: 0,
                  pr: '24px !important',
                },
                '& .MuiSvgIcon-root': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <MenuItem value="en_EN">EN</MenuItem>
              <MenuItem value="hu_HU">HU</MenuItem>
              <MenuItem value="fr_FR">FR</MenuItem>
              <MenuItem value="de_DE">DE</MenuItem>
            </Select>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
