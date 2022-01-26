import { useAuth0 } from '@auth0/auth0-react';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { Route, Routes } from 'react-router-dom';

import { DashboardPageContainer } from '@containers/DashboardPageContainer';
import { NotFoundPageContainer } from '@containers/NotFoundPageContainer';

import { AppPage } from '@pages/AppPage';

import { setSession } from '../../apis/user';

type ModalType = 'account' | 'credit' | 'none';

const AppPageContainer: React.VFC = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const { data, isLoading: isInitializingSession } = useQuery(['setSession', user], () => setSession(user), {
    enabled: isAuthenticated,
    useErrorBoundary: true,
  });

  const [modalType, setModalType] = useState<ModalType>('none');
  const handleRequestOpenAccountModal = useCallback(() => setModalType('account'), []);
  const handleRequestOpenCreditModal = useCallback(() => setModalType('credit'), []);
  const handleRequestCloseModal = useCallback(() => setModalType('none'), []);

  if (isLoading || isInitializingSession) {
    return <div>is Initializing Application...</div>;
  }

  return (
    <>
      <AppPage activeUserId={data ? data.auth0Id : null} onRequestLogin={loginWithRedirect} onRequestLogout={logout}>
        <Routes>
          <Route element={<DashboardPageContainer />} path='/dashboard' />
          <Route element={<NotFoundPageContainer />} path='*' />
        </Routes>
      </AppPage>

      {modalType === 'account' ? <div>account Modal</div> : null}
      {modalType === 'credit' ? <div>credit Modal</div> : null}
    </>
  );
};

export { AppPageContainer };
