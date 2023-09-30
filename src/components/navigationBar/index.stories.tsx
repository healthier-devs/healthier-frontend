import { Meta, Story } from "@storybook/react";
import NavigationBar from ".";

export default {
  component: NavigationBar,
  title: "NavigationBar",
} as Meta;

const Template: Story = (args) => <NavigationBar {...args} />;

export const Default = Template.bind({});
