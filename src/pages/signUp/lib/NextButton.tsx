import RoundButton from "src/components/roundButton";
import theme from "src/lib/theme";
import styled from "styled-components";

interface INextButtonProps {
  isEnabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
}

function NextButton({ isEnabled, onClick, text = "다음 단계" }: INextButtonProps) {
  return (
    <NextButtonWrapper>
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

const NextButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;

  width: inherit;
  padding: 0 2rem 3.4rem;
  box-sizing: border-box;
`;
