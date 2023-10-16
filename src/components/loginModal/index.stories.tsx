import { Meta, Story } from "@storybook/react";
import { ILoginModal } from "src/interfaces/modal";
import { Title } from "src/pages/main_backup/mainModal/index.style";
import { Description } from "src/pages/result/resultModal/index.style";
import LoginModal from ".";

export default {
  component: LoginModal,
  title: "LoginModal",
  argTypes: {
    title: {
      description: "모달 안내문",
    },
    continueText: {
      description: "계속 이용하기 텍스트",
    },
  },
} as Meta;

const Template: Story<ILoginModal> = (args) => <LoginModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: (
    <Title>
      로그인을 하면
      <br />
      <span className="highlight">나의 건강 기록장</span>을 이용할 수 있어요
    </Title>
  ),
  continueText: "괜찮아요, 비회원으로 이용할게요",
};

export const ResultModal = Template.bind({});
ResultModal.args = {
  title: (
    <>
      <Description>해당 감별 결과를 다시 보고 싶나요?</Description>
      <Title>
        감별진단 기록은 로그인 후
        <br />
        홈화면에서 볼 수 있어요
      </Title>
    </>
  ),
  continueText: "괜찮아요, 다음에 할게요",
};
