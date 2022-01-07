import React from 'react';
import { User } from '../../types';
import { Logo } from '../Logo';

import { NavigationItem } from '../NavigationItem';
import { ReactIcon } from '../ReactIcon';

interface Props {
  activeUser: User | null;
  onRequestLogout: () => void;
  onRequestLogin: () => void;
}

export const Navigation: React.VFC<Props> = ({ activeUser, onRequestLogout, onRequestLogin }) => {
  return (
    <div className='flex flex-col w-64 h-screen'>
      <Logo icon={<ReactIcon iconType='money' />} />
      <nav className='bg-black-200 w-full h-full'>
        <ul className='bg-black-200 grid grid-flow-row grid-col-1 gap-2 py-4 w-full h-full auto-rows-min'>
          <NavigationItem icon={<ReactIcon iconType='home' />} href='/' text='ホーム' />
          {activeUser !== null ? (
            <NavigationItem icon={<ReactIcon iconType='account' />} href='/dashboard' text='お金の管理' />
          ) : null}
          {activeUser !== null ? (
            <NavigationItem icon={<ReactIcon iconType='subscription' />} href='/subscriptions' text='サブスク管理' />
          ) : null}
          {activeUser !== null ? (
            <NavigationItem icon={<ReactIcon iconType='user' />} onClick={onRequestLogout} text='ログアウト' />
          ) : null}
          {activeUser === null ? (
            <NavigationItem icon={<ReactIcon iconType='signin' />} onClick={onRequestLogin} text='ログイン' />
          ) : null}
        </ul>
      </nav>
    </div>
  );
};
