import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import * as Styled from "./index.style";
import type { IChallenge } from "src/interfaces/challenges";

interface IChallengeCardProps {
  challenge: IChallenge;
}

function ChallengeCard({ challenge }: IChallengeCardProps) {
  return (
    <Styled.Container>
      <Styled.CardContainer>
        <Styled.TitleContainer>
          <Styled.Title>{challenge.title}</Styled.Title>
          <ChevronRightIcon stroke="#787C83" strokeWidth={2} />
        </Styled.TitleContainer>

        <Styled.TagContainer>
          <Styled.Tag>{challenge.method}</Styled.Tag>
          <Styled.Tag>{challenge.duration}일동안</Styled.Tag>
        </Styled.TagContainer>
      </Styled.CardContainer>

      <Styled.DescriptionContainer>
        <Styled.Description>
          최대 <span className="highlight">{challenge.finalGift}원 상당</span>의 리워드 제공
        </Styled.Description>
      </Styled.DescriptionContainer>
    </Styled.Container>
  );
}

export default ChallengeCard;
