import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { ReactIcon } from '../ReactIcon';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'ボタン',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: '追加',
  icon: <ReactIcon iconType='add' size='20px' />,
};
