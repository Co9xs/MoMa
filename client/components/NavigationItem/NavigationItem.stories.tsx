import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavigationItem } from './NavigationItem';
import { ReactIcon } from '../ReactIcon';

export default {
  title: 'Components/NavigationItem',
  component: NavigationItem,
} as ComponentMeta<typeof NavigationItem>;

const Template: ComponentStory<typeof NavigationItem> = (args) => <NavigationItem {...args} />;

Template.story = {
  parameters: {
    nextRouter: {
      path: '/profile/[id]',
      asPath: '/profile/lifeiscontent',
      query: {
        id: 'lifeiscontent',
      },
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  text: 'Link Text',
  href: 'https://example.com',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'Link with icon',
  href: 'https://example.com',
  icon: <ReactIcon iconType='account' />,
};
