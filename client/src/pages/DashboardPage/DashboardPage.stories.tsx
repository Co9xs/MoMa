import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DashboardPage } from './DashboardPage';

export default {
  title: 'Pages/DashboardPage',
  component: DashboardPage,
} as ComponentMeta<typeof DashboardPage>;

const Template: ComponentStory<typeof DashboardPage> = (args) => <DashboardPage {...args} />;

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
  creditCards: [
    {
      id: 1,
      name: '楽天カード',
      budget: 50000,
    },
    {
      id: 2,
      name: '三井住友カード',
      budget: 20000,
    },
  ],
  onRequestLogin: () => {},
  onRequestLogout: () => {},
  onRequestAddAccount: () => {},
  onRequestAddCreditCard: () => {},
};
