import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navigation } from '@components/Navigation';

import { MainLayout } from './MainLayout';

export default {
  title: 'Layouts/MainLayout',
  component: MainLayout,
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => <MainLayout {...args} />;

export const WithNavigation = Template.bind({});
WithNavigation.args = {
  children: [
    <Navigation activeUser={{ id: 1, auth0Id: 'hogehoge' }} onRequestLogin={() => {}} onRequestLogout={() => {}} />,
    <div>main content is here</div>,
  ],
};
