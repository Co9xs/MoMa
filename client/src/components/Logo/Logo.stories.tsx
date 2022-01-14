import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactIcon } from '../ReactIcon';
import { Logo } from './Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <ReactIcon iconType='money-stack' />,
};
