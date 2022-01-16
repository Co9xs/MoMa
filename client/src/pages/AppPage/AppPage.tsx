import { LayoutWithNavigation } from '@components/LayoutWithNavigation';
import { Navigation } from '@components/Navigation';

import { User } from '../../types/User';

interface Props {
  activeUser: User | null;
  onRequestLogin: () => void;
  onRequestLogout: () => void;
  children: React.ReactChild;
}

const AppPage: React.VFC<Props> = ({ activeUser, onRequestLogin, onRequestLogout, children }) => {
  return (
    <LayoutWithNavigation>
      <Navigation activeUser={activeUser} onRequestLogin={onRequestLogin} onRequestLogout={onRequestLogout} />
      {children}
    </LayoutWithNavigation>
  );
};

export { AppPage };
