import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DashboardPage } from '.';

export default {
  title: 'Pages/Dashboard',
  component: DashboardPage,
} as ComponentMeta<typeof DashboardPage>;

const Template: ComponentStory<typeof DashboardPage> = (args) => <DashboardPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};
