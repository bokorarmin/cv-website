import { Box } from '@mui/material';
import { RefObject } from 'react';

import { Experiences } from './components/Experiences';
import { Profile } from './components/Profile';

interface LandingProps {
  sectionRefs: {
    bio: RefObject<HTMLDivElement | null>;
    experience: RefObject<HTMLDivElement | null>;
    skills: RefObject<HTMLDivElement | null>;
  };
}

export const Landing = ({ sectionRefs }: LandingProps) => {
  return (
    <Box className="cursor-effect-active">
      <Box
        my={{ xs: 10, md: 0 }}
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        ref={sectionRefs.bio}
      >
        <Profile />
      </Box>
      <Box ref={sectionRefs.experience}>
        <Experiences />
      </Box>
    </Box>
  );
};
