import { Route, Routes } from 'react-router-dom';

import { DashboardPageContainer } from '@containers/DashboardPageContainer';

import { AppPage } from '@pages/AppPage';

const AppPageContainer: React.VFC = () => {
  return (
    <>
      <AppPage activeUser={null} onRequestLogin={() => {}} onRequestLogout={() => {}}>
        <Routes>
          <Route element={<DashboardPageContainer />} path='/' />
        </Routes>
      </AppPage>
    </>
  );
};

export { AppPageContainer };
