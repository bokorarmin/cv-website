import { useTranslation } from 'react-i18next';

import { Profile } from './components/Profile';

export const Landing = () => {
  const { t } = useTranslation();

  return (
    <>
      <Profile />
    </>
  );
};
