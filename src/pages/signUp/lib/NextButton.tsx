import RoundButton from "src/components/roundButton";
import theme from "src/lib/theme";
import styled from "styled-components";
import { css } from "styled-components";

interface INextButtonProps {
  isEnabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
  isGradient?: boolean;
  className?: string;
}

function NextButton({ isEnabled, onClick, text = "다음 단계", isGradient = false, className }: INextButtonProps) {
  return (
    <NextButtonWrapper isGradient={isGradient} className={className}>
      <RoundButton
        onClick={onClick}
        backgroundColor={isEnabled ? theme.color.blue : theme.color.grey_650}
        color={isEnabled ? theme.color.grey_100 : theme.color.grey_500}
      >
        {text}
      </RoundButton>
    </NextButtonWrapper>
  );
}

export default NextButton;

const NextButtonWrapper = styled.div<{ isGradient: boolean }>`
  position: fixed;
  bottom: 0;

  width: inherit;
  padding: 0 2rem 3.4rem;
  box-sizing: border-box;

  ${({ isGradient }) =>
    isGradient &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      background: linear-gradient(180deg, rgba(19, 20, 22, 0) 0%, #131416 49.48%);
      height: 200px;

      pointer-events: none;
    `}
`;
