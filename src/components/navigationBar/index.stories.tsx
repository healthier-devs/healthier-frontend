import { Meta, Story } from "@storybook/react";
import NavigationBar from ".";
import type { TMenu } from ".";

export default {
  component: NavigationBar,
  title: "NavigationBar",
  argTypes: {
    menu: {
      description: "선택된 메뉴",
    },
  },
} as Meta;

const Template: Story<{ menu: TMenu }> = (args) => <NavigationBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  menu: "home",
};
