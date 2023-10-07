import { RefObject } from "react";
import Dialog from "src/components/dialog";

interface ICertificateImageUploadDialogProps {
  modalRef: RefObject<HTMLDivElement>;
  closeModal: () => void;
}

export const CertificateImageUploadDialog = ({ modalRef, closeModal }: ICertificateImageUploadDialogProps) => {
  return (
    <Dialog
      ref={modalRef}
      title="사진이 업로드 되었어요!"
      description={
        <>
          가이드에 맞게 사진을 업로드했는지
          <br />
          3시간 내로 확인할 예정이에요
        </>
      }
      buttonType="one"
      imageUrl="/images/challenge/check.svg"
      imageStyle={{ padding: "2.4rem", width: "10rem", height: "10rem" }}
      singleButtonText="챌린지로 돌아가기"
      onClickConfirm={closeModal}
    />
  );
};
