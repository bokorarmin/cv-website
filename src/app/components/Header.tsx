import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { DesktopAppBar } from './app-bar/DesktopAppBar';
import { MobileAppBar } from './app-bar/MobileAppBar';

export interface NavItem {
  title: string;
  section: 'bio' | 'experience' | 'skills' | 'footer';
}

interface HeaderProps {
  sectionRefs: {
    bio: React.RefObject<HTMLDivElement | null>;
    experience: React.RefObject<HTMLDivElement | null>;
    skills: React.RefObject<HTMLDivElement | null>;
    footer: React.RefObject<HTMLDivElement | null>;
  };
  window?: () => Window;
}

export const Header = ({ sectionRefs, window }: HeaderProps) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language || 'hu_HU');

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  const navItems: NavItem[] = [
    {
      title: t('header.navItems.title.profile'),
      section: 'bio' as const,
    },
    {
      title: t('header.navItems.title.experience'),
      section: 'experience' as const,
    },
    { title: t('header.navItems.title.footer'), section: 'footer' as const },
  ];

  const handleNavClick = (section: keyof typeof sectionRefs) => {
    const ref = sectionRefs[section];
    if (ref?.current) {
      const currentWindow = window ? window() : globalThis.window;
      const top =
        ref.current.getBoundingClientRect().top + currentWindow.pageYOffset;
      currentWindow.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return isMobile ? (
    <MobileAppBar
      onNavClick={handleNavClick}
      window={window}
      navItems={navItems}
      language={language}
      handleLanguageChange={handleLanguageChange}
    />
  ) : (
    <DesktopAppBar
      onNavClick={handleNavClick}
      window={window}
      navItems={navItems}
      language={language}
      handleLanguageChange={handleLanguageChange}
    />
  );
};
