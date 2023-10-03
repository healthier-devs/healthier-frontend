import { Meta, Story } from "@storybook/react";
import TextDivider from ".";

export default {
  component: TextDivider,
  title: "TextDivider",
  argTypes: {
    text: {
      description: "구분선 텍스트",
    },
  },
} as Meta;

const Template: Story = (args) => <TextDivider text="또는 SNS 계정으로 시작하기" {...args} />;

export const Default = Template.bind({});
