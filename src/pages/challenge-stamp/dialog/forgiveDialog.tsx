import { RefObject } from "react";
import { useNavigate } from "react-router-dom";
import Dialog from "src/components/dialog";
import { useDeleteStampChart } from "src/hooks/stamp/useDeleteStampChart";

interface IForgiveDialogProps {
  modalRef: RefObject<HTMLDivElement>;
  closeModal: () => void;
  id: number;
}

export const ForgiveDialog = ({ modalRef, closeModal, id }: IForgiveDialogProps) => {
  const navigate = useNavigate();

  const { deleteStamp } = useDeleteStampChart({ id, successCallback: () => navigate("/challenge-list") });

  const handleForgiveChallenge = () => {
    deleteStamp();
  };

  return (
    <Dialog
      ref={modalRef}
      title="정말 포기하시겠습니까?"
      description={
        <>
          지금 포기하면 한달 간<br />
          같은 챌린지에 참여할 수 없어요.
        </>
      }
      cancelText="포기할래요"
      confirmText="계속 도전할래요"
      onClickConfirm={closeModal}
      onClickCancel={handleForgiveChallenge}
    />
  );
};
