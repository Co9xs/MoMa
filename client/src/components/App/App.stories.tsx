import { ComponentStory, ComponentMeta } from '@storybook/react';

import { App } from '@components/App';

export default {
  title: 'Example/App',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'primary',
};
