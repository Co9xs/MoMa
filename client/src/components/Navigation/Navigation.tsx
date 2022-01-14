import { Logo } from '@components/Logo';
import { NavigationItem } from '@components/NavigationItem';
import { ReactIcon } from '@components/ReactIcon';

import { User } from '../../types';

interface Props {
  activeUser: User | null;
  onRequestLogout: () => void;
  onRequestLogin: () => void;
}

export const Navigation: React.VFC<Props> = ({ activeUser, onRequestLogout, onRequestLogin }) => {
  return (
    <div className='flex flex-col w-64 h-screen'>
      <div className='bg-moma-80 py-5'>
        <Logo icon={<ReactIcon iconType='money-stack' />} />
      </div>
      <nav className='bg-moma-80 w-full h-full'>
        <ul className='bg-moma-80 grid grid-flow-row grid-col-1 gap-2 pb-4 w-full h-full auto-rows-min'>
          {activeUser !== null ? (
            <NavigationItem icon={<ReactIcon iconType='money-circle' />} href='/dashboard' text='予算管理' />
          ) : null}
          {activeUser !== null ? (
            <NavigationItem icon={<ReactIcon iconType='subscription' />} href='/subscriptions' text='サブスク管理' />
          ) : null}
          {activeUser !== null ? (
            <NavigationItem icon={<ReactIcon iconType='signout' />} onClick={onRequestLogout} text='ログアウト' />
          ) : null}
          {activeUser === null ? (
            <NavigationItem icon={<ReactIcon iconType='signin' />} onClick={onRequestLogin} text='ログイン' />
          ) : null}
        </ul>
      </nav>
    </div>
  );
};
