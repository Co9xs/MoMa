import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CreditCardItem } from './CreditCardItem';

export default {
  title: 'Components/CreditCardItem',
  component: CreditCardItem,
} as ComponentMeta<typeof CreditCardItem>;

const Template: ComponentStory<typeof CreditCardItem> = (args) => <CreditCardItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  creditCard: {
    id: 1,
    name: '楽天カード',
    budget: 50000,
  },
};
