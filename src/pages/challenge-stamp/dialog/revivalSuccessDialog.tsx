import { RefObject } from "react";
import Dialog from "src/components/dialog";
import theme from "src/lib/theme";

interface IRevivalSuccessDialog {
  modalRef: RefObject<HTMLDivElement>;
  closeModal: () => void;
}

export const RevivalSuccessDialog = ({ modalRef, closeModal }: IRevivalSuccessDialog) => {
  return (
    <Dialog
      ref={modalRef}
      buttonType="one"
      title={
        <>
          부활 티켓 적용이
          <br />
          완료되었어요!
        </>
      }
      imageUrl="/images/challenge/revival-ticket.png"
      singleButtonText="챌린지로 돌아가기"
      onClickConfirm={closeModal}
    />
  );
};
