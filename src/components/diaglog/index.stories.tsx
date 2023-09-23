import { Meta, Story } from "@storybook/react";
import theme from "src/lib/theme";
import Dialog, { IDialogProps } from ".";

export default {
  component: Dialog,
  title: "Dialog",
  argTypes: {
    title: {
      description: "모달 타이틀",
    },
    description: {
      description: "상위 디스크립션",
    },
    subDescription: {
      description: "하위 디스크립션",
    },
    buttonType: {
      description: "버튼 유형",
    },
    image: {
      description: "모달 이미지",
    },
    leftButton: {
      description: "좌측 버튼",
    },
    rightButton: {
      description: "우측 버튼",
    },
    singleButton: {
      description: "버튼 (하나만 있는 경우)",
    },
  },
} as Meta;

const Template: Story<IDialogProps> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "정말 포기하시겠습니까?",
  description: (
    <>
      지금 포기하면 한달 간<br />
      같은 챌린지에 참여할 수 없어요.
    </>
  ),
  buttonType: "two",
  cancelText: "네 포기할래요",
  confirmText: "계속 도전할래요",
};

export const Default2 = Template.bind({});
Default2.args = {
  title: "회원가입을 중단하실건가요?",
  description: "진행 중인 내용은 저장되지 않습니다.",
  buttonType: "two",
  cancelText: "취소",
  confirmText: "확인",
};

export const Image = Template.bind({});
Image.args = {
  title: (
    <>
      부활 티켓 적용이
      <br />
      완료되었어요!
    </>
  ),
  imageUrl: "/images/challenge/revival-ticket.png",
  buttonType: "one",
  singleButtonText: "챌린지로 돌아가기",
};

export const ImageDescription = Template.bind({});
ImageDescription.args = {
  title: (
    <>
      친구 초대하고
      <br />
      부활 티켓 얻으세요!
    </>
  ),
  description: (
    <>
      초대한 친구가 가입하면 인증 실패
      <br />
      <span style={{ color: theme.color.blue }}>하루를 만회</span>할 수 있어요.
    </>
  ),
  subDescription: "앱 설치 링크를 친구에게 보내보세요!",
  imageUrl: "/images/challenge/revival-ticket.png",
  buttonType: "two",
  cancelText: "취소",
  confirmText: "친구 초대할래요",
};

export const Highlight = Template.bind({});
Highlight.args = {
  title: (
    <>
      부활 티켓을 사용할 회차를
      <br />
      선택해주세요!
    </>
  ),
  description: (
    <>
      <span style={{ color: theme.color.blue }}>1장 당 인증 실패한 하루</span>를 제거할 수 있어요.
    </>
  ),
  buttonType: "two",
  cancelText: "취소",
  confirmText: "네 알겠어요",
};

export const SignupBackDiaglog = Template.bind({});
SignupBackDiaglog.args = {
  title: "이전 화면으로 돌아가시겠어요?",
  description: "돌아가면 약관동의부터 다시 시작돼요.",
};

export const SignupExitDiaglog = Template.bind({});
SignupExitDiaglog.args = {
  title: "회원가입을 중단하실건가요?",
  description: "진행 중인 내용은 저장되지 않습니다.",
};
