import FlexBox from "../flexBox";
import * as Styled from "./index.style";

interface IDialogProps {
  title?: string;
  description?: string;
  onClickBackDrop: () => void;
  cancelText?: string;
  confirmText?: string;
  onClickCancel?: () => void;
  onClickConfirm?: () => void;
}

function Dialog({
  title = "",
  description = "",
  cancelText = "취소",
  confirmText = "확인",
  onClickBackDrop,
  onClickCancel,
  onClickConfirm,
}: IDialogProps) {
  return (
    <>
      <Styled.Container>
        <Styled.BackDrop onClick={onClickBackDrop} />

        <Styled.Content>
          <Styled.TitleContainer>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Description>{description}</Styled.Description>
          </Styled.TitleContainer>

          <FlexBox>
            <Styled.Button borderRight onClick={onClickCancel}>
              <span className="cancel">{cancelText}</span>
            </Styled.Button>
            <Styled.Button onClick={onClickConfirm}>
              <span className="confirm">{confirmText}</span>
            </Styled.Button>
          </FlexBox>
        </Styled.Content>
      </Styled.Container>
    </>
  );
}

export default Dialog;
