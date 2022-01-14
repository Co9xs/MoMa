import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AccountItem } from './AccountItem';

export default {
  title: 'Components/AccountItem',
  component: AccountItem,
} as ComponentMeta<typeof AccountItem>;

const Template: ComponentStory<typeof AccountItem> = (args) => <AccountItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  account: {
    id: 1,
    name: '楽天銀行',
    balance: 165040,
  },
};
