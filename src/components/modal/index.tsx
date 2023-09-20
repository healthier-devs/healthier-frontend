import { forwardRef, ReactNode } from "react";
import * as Styled from "./index.style";

export interface IModalProps {
  title: ReactNode;
  titleDescription?: ReactNode;
  description?: ReactNode;
  imageUrl?: string;
  buttonType?: "one" | "two";
  leftButton?: ReactNode;
  rightButton?: ReactNode;
  singleButton?: ReactNode;
  closeModal?: () => void;
  confirm: () => void;
}

const Modal = forwardRef<HTMLDivElement, IModalProps>(function Modal(
  { title, titleDescription, description, imageUrl, buttonType = "one", leftButton, rightButton, singleButton, closeModal, confirm },
  ref
) {
  return (
    <Styled.Wrapper>
      <Styled.Container ref={ref}>
        <Styled.ContentContainer>
          <Styled.Title>{title}</Styled.Title>
          {titleDescription && <Styled.TitleDescription>{titleDescription}</Styled.TitleDescription>}
          {imageUrl && <Styled.Image src={imageUrl} />}
          {description && <Styled.Description>{description}</Styled.Description>}
        </Styled.ContentContainer>
        <Styled.ButtonContainer>
          {buttonType === "one" ? (
            <Styled.SingleButton onClick={confirm}>{singleButton}</Styled.SingleButton>
          ) : (
            <>
              <Styled.DoubleButton position="left" onClick={closeModal}>
                {leftButton}
              </Styled.DoubleButton>
              <Styled.DoubleButton position="right" onClick={confirm}>
                {rightButton}
              </Styled.DoubleButton>
            </>
          )}
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.Wrapper>
  );
});

export default Modal;
