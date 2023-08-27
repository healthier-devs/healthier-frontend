import { useNavigate } from "react-router-dom";
import * as Styled from "./index.style";
import { ProgressContainer } from "./index.style";

function ChallengeStamp() {
  const navigate = useNavigate();

  return (
    <>
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
    </>
  );
}

export default ChallengeStamp;
