import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GlobalHeader } from './GlobalHeader';

export default {
  title: 'Components/GlobalHeader',
  component: GlobalHeader,
} as ComponentMeta<typeof GlobalHeader>;

const Template: ComponentStory<typeof GlobalHeader> = (args) => <GlobalHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  activeUserId: 'hogehoge',
};
