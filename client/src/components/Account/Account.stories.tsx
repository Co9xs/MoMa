import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AccountInfo } from './Account';

export default {
  title: 'Components/Account',
  component: AccountInfo,
} as ComponentMeta<typeof AccountInfo>;

const Template: ComponentStory<typeof AccountInfo> = (args) => <AccountInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  account: {
    id: 1,
    ownerId: 3,
    name: '楽天銀行',
    balance: 175000,
  },
};
