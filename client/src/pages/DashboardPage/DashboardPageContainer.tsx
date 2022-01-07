import { DashboardPage } from './presentations';
import { useActiveUser } from '../../hooks/useActiveUser';

type Props = {};

const DashboardPageContainer: React.VFC<Props> = () => {
  const { activeUser, auth0User, isLoading, loginWithRedirect, logout } = useActiveUser();
  return (
    <DashboardPage
      auth0User={auth0User}
      activeUser={activeUser}
      isLoading={isLoading}
      onRequestLogin={loginWithRedirect}
      onRequestLogout={logout}
    />
  );
};

export default DashboardPageContainer;
