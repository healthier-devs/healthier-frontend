import styled from "styled-components";
import theme from "../../../lib/theme";
import BottomNumber from "./BottomNumber";
import RoundButton from "../../buttons/RoundButton";

const BottomContainer = styled.section<{ curIndex: number }>`
  z-index: 5;

  position: fixed;
  bottom: 0;
  width: 100%;

  padding-top: 14.6rem;
  padding-bottom: 4rem;

  background: linear-gradient(
    180deg,
    rgba(19, 20, 22, 0) 0%,
    rgba(19, 20, 22, 0.947917) 78.12%,
    #131416 100%
  );
`;
const BottomButton = styled.section`
  z-index: 5;

  position: fixed;
  margin: 0 2rem;
  bottom: 3rem;
`;

const BottomBar = ({ curIndex }: { curIndex: number }) => {
  return (
    <BottomContainer curIndex={curIndex}>
      {curIndex !== 5 ? (
        <BottomNumber curNum={curIndex} />
      ) : (
        <BottomButton>
          <RoundButton
            outline="none"
            backgroundColor={theme.color.blue}
            color={theme.color.grey_100}
            text="나의 진단기록장에 저장하기"
          />
        </BottomButton>
      )}
    </BottomContainer>
  );
};

export default BottomBar;