import { Route, Routes } from 'react-router-dom';

import { DashboardPageContainer } from '@containers/DashboardPageContainer';

import { AppPage } from '@pages/AppPage';
import { useAuth0 } from '@auth0/auth0-react';

const AppPageContainer: React.VFC = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  return (
    <>
      {isAuthenticated && <div>{user.sub}</div>}
      <AppPage activeUser={null} onRequestLogin={loginWithRedirect} onRequestLogout={logout}>
        <Routes>
          <Route element={<DashboardPageContainer />} path='/' />
        </Routes>
      </AppPage>
    </>
  );
};

export { AppPageContainer };
