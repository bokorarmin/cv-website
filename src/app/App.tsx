import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRef } from 'react';

import '../theme/index.css';

import { CommonGlobalStyles } from '../theme/CommonGlobalStyles';
import { lightTheme } from '../theme/light/ligthTheme';

import { Layout } from './components/Layout';
import { Landing } from './pages/Landing';

function App() {
  const bioRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  return (
    <ThemeProvider theme={lightTheme}>
      <CommonGlobalStyles />
      <CssBaseline />
      <Layout
        sectionRefs={{
          bio: bioRef,
          experience: experienceRef,
          skills: skillsRef,
          footer: footerRef,
        }}
      >
        <Landing
          sectionRefs={{
            bio: bioRef,
            experience: experienceRef,
            skills: skillsRef,
          }}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
