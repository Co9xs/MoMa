import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import { Route, Routes } from 'react-router-dom';

import { DashboardPageContainer } from '@containers/DashboardPageContainer';
import { NotFoundPageContainer } from '@containers/NotFoundPageContainer';

import { AppPage } from '@pages/AppPage';

import { useActiveUserId } from '@hooks/useActiveUserId';
import { setSession } from '@utils/fetchers';

const AppPageContainer: React.VFC = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const {
    data,
    isLoading: isInitializing,
    error,
  } = useQuery(['setSession', user], () => setSession(user), {
    enabled: isAuthenticated,
  });
  const activeUserId = useActiveUserId(user);

  if (isLoading || isInitializing) {
    return <div>is Loading...</div>;
  }

  return (
    <>
      {<div>{activeUserId}</div>}
      <AppPage activeUserId={activeUserId} onRequestLogin={loginWithRedirect} onRequestLogout={logout}>
        <Routes>
          <Route element={<DashboardPageContainer />} path='/' />
          <Route element={<NotFoundPageContainer />} path='*' />
        </Routes>
      </AppPage>
    </>
  );
};

export { AppPageContainer };
