import { RefObject } from "react";
import Dialog from "src/components/dialog";
import theme from "src/lib/theme";

interface IInviteCodeCopyDialog {
  modalRef: RefObject<HTMLDivElement>;
  closeModal: () => void;
  copyInviteCode: () => void;
}

export const InviteCodeCopyDialog = ({ modalRef, closeModal, copyInviteCode }: IInviteCodeCopyDialog) => {
  return (
    <Dialog
      ref={modalRef}
      title={
        <>
          친구 초대하고
          <br />
          부활 티켓 얻으세요!
        </>
      }
      description={
        <>
          친구가 추천인 코드를 입력하면
          <br />
          실패한 <span style={{ color: theme.color.blue }}>하루를 만회</span>할 수 있어요.
        </>
      }
      imageUrl="/images/challenge/revival-ticket.png"
      cancelText="취소"
      onClickCancel={closeModal}
      confirmText="초대 링크 복사하기"
      onClickConfirm={copyInviteCode}
    />
  );
};
