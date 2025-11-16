import { Box, Container, Stack } from '@mui/material';
import { ReactNode, RefObject } from 'react';

import { Footer } from './Footer.tsx';
import { Header } from './Header.tsx';

interface LayoutProps {
  children: ReactNode;
  sectionRefs: {
    bio: RefObject<HTMLDivElement | null>;
    experience: RefObject<HTMLDivElement | null>;
    skills: RefObject<HTMLDivElement | null>;
    footer: RefObject<HTMLDivElement | null>;
  };
}

export const Layout = ({ children, sectionRefs }: LayoutProps) => {
  return (
    <Stack flexDirection="column" minHeight="100vh">
      <Container component={'header'}>
        <Header sectionRefs={sectionRefs} />
      </Container>
      <Container maxWidth="xl" component="main">
        {children}
      </Container>
      <Box component="footer" ref={sectionRefs.footer} sx={{ mt: 'auto' }}>
        <Footer />
      </Box>
    </Stack>
  );
};
