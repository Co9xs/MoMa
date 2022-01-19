import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import { Route, Routes } from 'react-router-dom';

import { DashboardPageContainer } from '@containers/DashboardPageContainer';

import { AppPage } from '@pages/AppPage';

import { useActiveUserId } from '@hooks/useActiveUserId';
import { signin } from '@utils/fetchers';

const AppPageContainer: React.VFC = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const activeUserId = useActiveUserId(user);

  const { isLoading: isSignining, error, isError } = useQuery(['signin', user], () => signin(user));

  if (isLoading || isSignining) {
    return <div>is Loading...</div>;
  }

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <>
      {<div>{activeUserId}</div>}
      <AppPage activeUserId={activeUserId} onRequestLogin={loginWithRedirect} onRequestLogout={logout}>
        <Routes>
          <Route element={<DashboardPageContainer />} path='/' />
        </Routes>
      </AppPage>
    </>
  );
};

export { AppPageContainer };
