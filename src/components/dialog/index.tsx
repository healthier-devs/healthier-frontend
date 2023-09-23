import { forwardRef, ReactNode } from "react";
import * as Styled from "./index.style";

export interface IDialogProps {
  title?: ReactNode;
  description?: ReactNode;
  subDescription?: ReactNode;
  onClickBackDrop?: () => void;
  imageUrl?: string;
  buttonType?: "one" | "two";
  cancelText?: string;
  confirmText?: string;
  onClickCancel?: () => void;
  onClickConfirm?: () => void;
  singleButtonText?: ReactNode;
}

const Dialog = forwardRef<HTMLDivElement, IDialogProps>(function Dialog(
  {
    title = "",
    description,
    subDescription,
    imageUrl,
    buttonType = "two",
    cancelText = "취소",
    confirmText = "확인",
    singleButtonText = "확인",
    onClickCancel,
    onClickConfirm,
  },
  ref
) {
  return (
    <Styled.Wrapper>
      <Styled.Container ref={ref}>
        <Styled.ContentContainer>
          <Styled.Title>{title}</Styled.Title>
          {description && <Styled.Description>{description}</Styled.Description>}
          {imageUrl && <Styled.Image src={imageUrl} />}
          {subDescription && <Styled.SubDescription>{subDescription}</Styled.SubDescription>}
        </Styled.ContentContainer>
        <Styled.ButtonContainer>
          {buttonType === "one" ? (
            <Styled.SingleButton onClick={onClickConfirm}>{singleButtonText}</Styled.SingleButton>
          ) : (
            <>
              <Styled.DoubleButton position="left" onClick={onClickCancel}>
                {cancelText}
              </Styled.DoubleButton>
              <Styled.DoubleButton position="right" onClick={onClickConfirm}>
                {confirmText}
              </Styled.DoubleButton>
            </>
          )}
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.Wrapper>
  );
});

export default Dialog;
