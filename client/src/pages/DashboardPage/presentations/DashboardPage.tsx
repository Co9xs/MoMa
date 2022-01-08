import { Navigation } from '../../../components/Navigation';
import { User } from '../../../types';
import { User as Auth0User } from '@auth0/auth0-react';
import { AccountList } from '../../../components/AccountList';
import { CreditCardList } from '../../../components/CreditCardList';

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
    <div className='relative h-screen'>
      <div className='absolute top-0 bottom-0 left-0'>
        <Navigation activeUser={activeUser} onRequestLogout={onRequestLogout} onRequestLogin={onRequestLogin} />
      </div>
      {/* TODO: use tailwind arbitrary values (ex: pl-[256px]) */}
      <div className='bg-white-200 h-screen' style={{ paddingLeft: '256px' }}>
        <div className='p-6 grid grid-cols-2 gap-20'>
          <div>
            <AccountList
              accounts={[
                {
                  id: 1,
                  ownerId: 3,
                  name: '楽天銀行',
                  balance: 175000,
                },
                {
                  id: 2,
                  ownerId: 3,
                  name: 'ゆうちょ銀行',
                  balance: 24600,
                },
              ]}
            />
          </div>
          <div>
            <CreditCardList
              creditCards={[
                {
                  id: 1,
                  ownerId: 3,
                  name: '楽天カード',
                  budget: 50000,
                },
                {
                  id: 2,
                  ownerId: 3,
                  name: '三井住友カード',
                  budget: 10000,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
