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
      name: '楽天銀行',
      balance: 165040,
    },
    {
      id: 2,
      name: 'ゆうちょ銀行',
      balance: 21040,
    },
  ],
  onRequestAddAccount: () => {},
};
