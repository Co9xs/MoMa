import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AccountList } from './AccountList';

export default {
  title: 'Components/AccountList',
  component: AccountList,
} as ComponentMeta<typeof AccountList>;

const Template: ComponentStory<typeof AccountList> = (args) => <AccountList {...args} />;

export const Default = Template.bind({});
Default.args = {
  accounts: [
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
  ],
};
