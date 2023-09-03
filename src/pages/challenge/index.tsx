import { useState } from "react";
import ContentHeader from "src/components/contentHeader";
import { CHALLENGE_CATEGORIES } from "src/data/challenge";
import { useGetChallenges } from "src/hooks/challenge/useGetChallenges";
import ChallengeCard from "./challenge-card";
import * as Styled from "./index.style";
import type { TChallengeCategory } from "src/interfaces/challenges";

function Challenge() {
  const [selectedCategory, setSelectedCategory] = useState<TChallengeCategory | null>(null);
  const { challengesData } = useGetChallenges();

  const challengeList = challengesData?.filter(({ category }) => (selectedCategory ? category === selectedCategory : true));

  return (
    <>
      <ContentHeader back={true} exit={false} label="건강 챌린지" />
      <Styled.Container>
        <Styled.Categories>
          {CHALLENGE_CATEGORIES.map((category) => (
            <Styled.Item key={category} isSelected={category === selectedCategory} onClick={() => setSelectedCategory(category)}>
              <Styled.ImgWrapper className="background">
                <Styled.Img className="img" src={"/images/challenge/pill.png"} alt="challenge-icon" />
              </Styled.ImgWrapper>

              <span className="label">{category}</span>
            </Styled.Item>
          ))}
        </Styled.Categories>

        <Styled.CardList>
          {challengeList?.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </Styled.CardList>
      </Styled.Container>
    </>
  );
}

export default Challenge;
