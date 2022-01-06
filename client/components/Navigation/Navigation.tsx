import React from 'react';

import { NavigationItem } from '../NavigationItem';
import { ReactIcon } from '../ReactIcon';

interface Props {
  activeUser: any;
}

export const Navigation: React.VFC<Props> = ({ activeUser }) => {
  return (
    <nav className='relative bg-black-200 w-300 h-full'>
      <ul className='bg-black-200 grid grid-flow-row gap-2 justify-start items-center fixed py-2 w-300 h-full auto-rows-min'>
        <NavigationItem icon={<ReactIcon iconType='home' />} href='/' text='ホーム' />
        {activeUser !== null ? (
          <NavigationItem icon={<ReactIcon iconType='account' />} href='/dashboard' text='お金の管理' />
        ) : null}
        {activeUser !== null ? (
          <NavigationItem icon={<ReactIcon iconType='subscription' />} href='/subscriptions' text='サブスク管理' />
        ) : null}
        {activeUser === null ? (
          <NavigationItem icon={<ReactIcon iconType='signin' />} href='/signin' text='サインイン' />
        ) : null}
      </ul>
    </nav>
  );
};
