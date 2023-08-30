import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import * as Styled from "./index.style";

function ChallengeCard() {
  return (
    <Styled.Container>
      <Styled.CardContainer>
        <Styled.TitleContainer>
          <Styled.Icon>🛏️</Styled.Icon>
          <Styled.Title>하루 7시간 수면 달성하기</Styled.Title>
          <ChevronRightIcon stroke="#787C83" strokeWidth={2} />
        </Styled.TitleContainer>

        <Styled.TagContainer>
          <Styled.Tag>매일인증</Styled.Tag>
          <Styled.Tag>28일동안</Styled.Tag>
          <Styled.Tag>사진인증</Styled.Tag>
        </Styled.TagContainer>
      </Styled.CardContainer>

      <Styled.DescriptionContainer>
        <Styled.Description>
          최대 <span className="highlight">5,000원 상당</span>의 리워드 제공
        </Styled.Description>
      </Styled.DescriptionContainer>
    </Styled.Container>
  );
}

export default ChallengeCard;
