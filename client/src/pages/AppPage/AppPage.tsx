import { GlobalHeader } from '@components/GlobalHeader';
import { LayoutWithNavigation } from '@components/LayoutWithNavigation';
import { Navigation } from '@components/Navigation';

interface Props {
  activeUserId: string | null;
  onRequestLogin: () => void;
  onRequestLogout: () => void;
  children: React.ReactChild;
}

const AppPage: React.VFC<Props> = ({ activeUserId, onRequestLogin, onRequestLogout, children }) => {
  return (
    <LayoutWithNavigation>
      <Navigation activeUserId={activeUserId} onRequestLogin={onRequestLogin} onRequestLogout={onRequestLogout} />
      <GlobalHeader activeUserId={activeUserId} />
      {children}
    </LayoutWithNavigation>
  );
};

export { AppPage };
