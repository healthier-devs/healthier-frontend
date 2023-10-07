import { useNavigate } from "react-router-dom";
import RoundButton from "src/components/roundButton";
import * as Styled from "./index.style";

function RewardFinish() {
  const navigate = useNavigate();

  return (
    <Styled.Container>
      <Styled.ContentContainer>
        <Styled.Title>리워드 신청이 완료되었어요</Styled.Title>
        <Styled.Description>
          기프티콘은 3일 내 입력한 휴대폰 번호로
          <br />
          문자로 전송될 예정이에요
        </Styled.Description>
        <Styled.Icon src="/images/challenge/reward-check.svg" />

        <Styled.BottomDescription>
          앞으로도 헬시어와 함께
          <br />
          꾸준히 건강챌린지를 해볼까요?
        </Styled.BottomDescription>
      </Styled.ContentContainer>

      <Styled.BottomBackground />
      <Styled.BottomCTA>
        <RoundButton onClick={() => navigate("/challenge/reward")}>리워드로 돌아가기</RoundButton>
      </Styled.BottomCTA>
    </Styled.Container>
  );
}

export default RewardFinish;
