import { RefObject } from "react";
import Dialog from "src/components/dialog";
import theme from "src/lib/theme";

interface IInviteCodeCopyDialog {
  modalRef: RefObject<HTMLDivElement>;
  closeModal: () => void;
}

export const InviteCodeCopyDialog = ({ modalRef, closeModal }: IInviteCodeCopyDialog) => {
  return (
    <Dialog
      ref={modalRef}
      title="추천코드가 복사되었어요!"
      description={
        <>
          회원가입 시, 친구가 추천인 코드를
          <br />
          입력하면 <span style={{ color: theme.color.blue }}>하루를 만회</span>할 수 있어요.
        </>
      }
      imageUrl="/images/challenge/revival-ticket.png"
      cancelText="취소"
      onClickCancel={closeModal}
      confirmText="친구 초대할래요"
      onClickConfirm={closeModal}
    />
  );
};
