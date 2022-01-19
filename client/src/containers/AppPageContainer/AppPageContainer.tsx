import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { DashboardPageContainer } from '@containers/DashboardPageContainer';

import { AppPage } from '@pages/AppPage';

const AppPageContainer: React.VFC = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    void (async () => {
      await fetch('https://moma-v1.herokuapp.com/api/v1/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: user.sub }),
      });
    })();
  }, [user]);

  if (isLoading) {
    return <div>is Loading...</div>;
  }

  return (
    <>
      {isAuthenticated && <div>{user.sub}</div>}
      <AppPage
        activeUserId={isAuthenticated ? user.sub : null}
        onRequestLogin={loginWithRedirect}
        onRequestLogout={logout}
      >
        <Routes>
          <Route element={<DashboardPageContainer />} path='/' />
        </Routes>
      </AppPage>
    </>
  );
};

export { AppPageContainer };
