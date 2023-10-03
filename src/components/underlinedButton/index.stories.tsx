import { Meta, Story } from "@storybook/react";
import UnderlinedButton from ".";

export default {
  component: UnderlinedButton,
  title: "UnderlinedButton",
  argTypes: {
    text: {
      description: "text",
    },
  },
} as Meta;

const Template: Story = (args) => <UnderlinedButton text="로그인 없이 둘러보기" {...args} />;

export const Default = Template.bind({});
