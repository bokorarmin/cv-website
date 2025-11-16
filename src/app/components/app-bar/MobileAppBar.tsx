import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import React from 'react';

import { NavItem } from '../Header';

interface MobileAppBarProps {
  onNavClick: (section: 'bio' | 'experience' | 'skills' | 'footer') => void;
  window?: () => Window;
  navItems: NavItem[];
  handleLanguageChange: (lang: string) => void;
  language: string;
}

function HideOnScroll(props: {
  children: React.ReactElement;
  window?: () => Window;
}) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const MobileAppBar = ({
  onNavClick,
  window,
  navItems,
  handleLanguageChange,
  language,
}: MobileAppBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <>
      <HideOnScroll window={window}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: 'background.default',
            boxShadow: 'none',
            px: { xs: 2, sm: 4 },
          }}
        >
          <Toolbar
            sx={{
              height: '100%',
              py: 0,
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <IconButton
              edge="end"
              onClick={handleMenuToggle}
              sx={{
                color: 'text.primary',
                '&:hover': { bgcolor: 'action.hover' },
              }}
              aria-label="menu"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="top"
        open={isMenuOpen}
        onClose={handleMenuClose}
        slotProps={{
          paper: {
            sx: {
              bgcolor: 'background.default',
              backdropFilter: 'blur(6px)',
              p: 2,
            },
          },
        }}
      >
        <List>
          {navItems.map((item, index) => (
            <ListItem
              key={item.title}
              disablePadding
              sx={{
                animation: `fadeIn 0.3s ease ${(index + 1) * 0.05}s both`,
                '@keyframes fadeIn': {
                  from: { opacity: 0, transform: 'translateY(-10px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              <ListItemButton
                onClick={() => {
                  onNavClick(item.section);
                  handleMenuClose();
                }}
                sx={{
                  borderRadius: 2,
                  py: 1.5,
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              >
                <ListItemText
                  primary={item.title}
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2, borderBottomWidth: 2, opacity: 0.6 }} />

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          {['en_EN', 'hu_HU', 'fr_FR', 'de_DE'].map((lang) => (
            <Typography
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              sx={{
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: language === lang ? 'bold' : 500,
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                transition: 'all 0.2s ease',
                color: 'text.primary',
                bgcolor: language === lang ? 'action.selected' : 'transparent',
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              {lang.split('_')[0].toUpperCase()}
            </Typography>
          ))}
        </Box>
      </Drawer>
    </>
  );
};
