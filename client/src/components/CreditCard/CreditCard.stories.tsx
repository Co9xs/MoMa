import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CreditCardInfo } from './CreditCard';

export default {
  title: 'Components/CreditCard',
  component: CreditCardInfo,
} as ComponentMeta<typeof CreditCardInfo>;

const Template: ComponentStory<typeof CreditCardInfo> = (args) => <CreditCardInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  creditCard: {
    id: 1,
    ownerId: 3,
    name: '楽天カード',
    budget: 50000,
  },
};
