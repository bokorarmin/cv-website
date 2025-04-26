import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Footer } from './Footer.tsx';
import { Header } from './Header.tsx';

export const PublicLayout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Container component={'header'}>
        <Header />
      </Container>
      <Container maxWidth="xl" component="main" sx={{ py: 4 }}>
        <Outlet />
      </Container>
      <Box component="footer" sx={{ mt: 'auto' }}>
        <Footer />
      </Box>
    </Box>
  );
};
