import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CreditCardList } from './CreditCardList';

export default {
  title: 'Components/CreditCardList',
  component: CreditCardList,
} as ComponentMeta<typeof CreditCardList>;

const Template: ComponentStory<typeof CreditCardList> = (args) => <CreditCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
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
  onRequestAddCreditCard: () => {},
};
