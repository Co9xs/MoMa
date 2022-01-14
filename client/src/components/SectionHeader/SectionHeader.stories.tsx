import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SectionHeader } from './SectionHeader';

export default {
  title: 'Components/SectionHeader',
  component: SectionHeader,
} as ComponentMeta<typeof SectionHeader>;

const Template: ComponentStory<typeof SectionHeader> = (args) => <SectionHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '銀行口座',
};
