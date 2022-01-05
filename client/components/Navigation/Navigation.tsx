import React from 'react';

import { NavigationItem } from '../NavigationItem';
import { ReactIcon } from '../ReactIcon';

interface Props {
  activeUser: any;
}

export const Navigation: React.VFC<Props> = ({ activeUser }) => {
  return (
    <nav className='fixed z-10 bottom-0 left-0 right-0 h-12 bg-white border-t border-gray-300 lg:relative lg:w-300 lg:h-full lg:border-r lg:border-t-0'>
      <ul className='relative grid grid-flow-col items-center justify-evenly lg:fixed lg:gap-2 lg:grid-flow-row lg:justify-start lg:p-2 lg:w-300 lg:h-full lg:auto-rows-min'>
        <NavigationItem href='/' icon={<ReactIcon iconType='home' />} text='ホーム' />
        {activeUser !== null ? <NavigationItem icon={<ReactIcon iconType='account' />} text='お金の管理' /> : null}
        {activeUser !== null ? (
          <NavigationItem icon={<ReactIcon iconType='subscription' />} href='/subscriptions' text='サブスク管理' />
        ) : null}
        {activeUser === null ? (
          <NavigationItem href='/signin' icon={<ReactIcon iconType='signin' />} text='サインイン' />
        ) : null}
      </ul>
    </nav>
  );
};
