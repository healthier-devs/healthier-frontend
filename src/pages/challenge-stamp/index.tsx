import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import RoundButton from "src/components/roundButton";
import * as Styled from "./index.style";

function ChallengeStamp() {
  const navigate = useNavigate();

  return (
    <Styled.Container>
      <Styled.TopContainer>
        <Styled.HeaderContainer>
          <Styled.LeftButton onClick={() => navigate(-1)}>
            <img alt="back" src="/images/header/back.svg" width={32} height={32} />
          </Styled.LeftButton>
          <section />
          <Styled.RightButton onClick={() => navigate(-1)}>관리</Styled.RightButton>
        </Styled.HeaderContainer>

        <Styled.TopContents>
          <Styled.Title>매일 아침 공복에 유산균 먹기</Styled.Title>
          <Styled.TagContainer>
            <Styled.Tag>매일인증</Styled.Tag>
            <Styled.Tag>28일동안</Styled.Tag>
            <Styled.Tag>사진인증</Styled.Tag>
          </Styled.TagContainer>

          <Styled.ProgressContainer>
            <Styled.ProgressBar>
              <Styled.CurrentProgress percent={50} />
            </Styled.ProgressBar>

            <Styled.ProgressTextBox>
              <p className="highlight">12일째 진행중</p>
              <p>총 28일</p>
            </Styled.ProgressTextBox>
          </Styled.ProgressContainer>
        </Styled.TopContents>
      </Styled.TopContainer>

      <Styled.InviteContainer>
        <div className="top-box">
          <Styled.InviteTitle>친구 초대하기</Styled.InviteTitle>
          <ChevronRightIcon />
        </div>
        <Styled.InviteDescription>친구 초대를 하면 부활권을 얻을 수 있어요!</Styled.InviteDescription>
      </Styled.InviteContainer>

      <Styled.CTAContainer>
        <RoundButton>오늘의 챌린지 인증하기</RoundButton>
      </Styled.CTAContainer>
    </Styled.Container>
  );
}

export default ChallengeStamp;
