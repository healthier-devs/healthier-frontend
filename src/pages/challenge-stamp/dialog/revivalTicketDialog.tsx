import { RefObject } from "react";
import Dialog from "src/components/dialog";
import { usePatchRevivalTicket } from "src/hooks/challenge/usePatchRevivalTicket";
import theme from "src/lib/theme";

interface IRevivalTicketDialogProps {
  modalRef: RefObject<HTMLDivElement>;
  closeModal: () => void;
  onSuccessRevival: () => void;
  id: number;
}

export const RevivalTicketDialog = ({ modalRef, closeModal, onSuccessRevival, id }: IRevivalTicketDialogProps) => {
  const { patchRevivalTicket } = usePatchRevivalTicket({ id, onSuccessRevival });

  const handleClickRevival = () => {
    patchRevivalTicket();
    closeModal();
  };

  return (
    <Dialog
      ref={modalRef}
      title={
        <>
          부활 티켓으로
          <br />
          하루를 만회하시겠어요?
        </>
      }
      description={
        <>
          <span style={{ color: theme.color.blue }}>1장 당 인증 실패한 하루</span>를 제거할 수 있어요.
        </>
      }
      cancelText="취소"
      confirmText="네 사용할래요"
      onClickCancel={closeModal}
      onClickConfirm={handleClickRevival}
    />
  );
};
