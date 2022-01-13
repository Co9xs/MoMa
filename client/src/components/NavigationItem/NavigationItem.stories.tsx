import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactIcon } from '../ReactIcon';
import { NavigationItem } from './NavigationItem';

export default {
  title: 'Components/NavigationItem',
  component: NavigationItem,
} as ComponentMeta<typeof NavigationItem>;

const Template: ComponentStory<typeof NavigationItem> = (args) => <NavigationItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Link Text',
  href: 'https://example.com',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'Link with icon',
  href: 'https://example.com',
  icon: <ReactIcon iconType='money' />,
};

export const NoHref = Template.bind({});
NoHref.args = {
  text: 'Link with icon',
  icon: <ReactIcon iconType='money' />,
};
