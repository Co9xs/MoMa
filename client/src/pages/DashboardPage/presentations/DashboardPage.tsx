import { Navigation } from '../../../components/Navigation';
import { User } from '../../../types';
import { User as Auth0User } from '@auth0/auth0-react';

export interface Props {
  activeUser: User | null;
  auth0User: Auth0User | null;
  isLoading: boolean;
  onRequestLogin: () => void;
  onRequestLogout: () => void;
}

// propsで受け取ったデータの表示やイベントハンドラの設定だけ
export const Component: React.VFC<Props> = ({ activeUser, auth0User, isLoading, onRequestLogin, onRequestLogout }) => {
  if (isLoading) {
    return <div>Loading .....</div>;
  }

  return (
    <>
      <h1>ダッシュボード</h1>
      <p>auth0User: {JSON.stringify(auth0User)}</p>
      <p>activeUser: {JSON.stringify(activeUser)}</p>
      <Navigation activeUser={activeUser} onRequestLogout={onRequestLogout} onRequestLogin={onRequestLogin} />
    </>
  );
};

export default Component;
