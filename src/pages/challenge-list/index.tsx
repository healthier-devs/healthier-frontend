import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import { useGetChallengeCategory } from "src/hooks/challenge/useGetChallengeCategory";
import { useGetChallenges } from "src/hooks/challenge/useGetChallenges";
import ChallengeCard from "./challenge-card";
import * as Styled from "./index.style";

interface IPageInfo {
  page: number;
  size: number;
}

function ChallengeList() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [pageInfo, setPageInfo] = useState<IPageInfo>({ page: -1, size: 15 });

  const [ref, inView] = useInView();

  const { challengeCategoryData, isLoading: isCategoryLoading, isSuccess: isCategorySuccess } = useGetChallengeCategory();
  const { challengesData } = useGetChallenges({
    category: selectedCategory,
    enabled: !isCategoryLoading && isCategorySuccess && Boolean(selectedCategory),
    pageInfo,
  });

  useEffect(() => {
    if (challengeCategoryData && !selectedCategory) {
      setSelectedCategory(challengeCategoryData[0].name);
    }
  }, [challengeCategoryData]);
  useEffect(() => {
    if (inView) {
      setPageInfo({ ...pageInfo, page: pageInfo.page + 1 });
    }
  }, [inView]);

  return (
    <>
      <Styled.HeaderContainer>
        <Styled.LeftButton />
        <Styled.HeaderTitle>건강 챌린지</Styled.HeaderTitle>
        <Styled.RightButton onClick={() => navigate("/my-challenge")}>
          <p>나의 챌린지</p>
        </Styled.RightButton>
      </Styled.HeaderContainer>

      <Styled.Container>
        <Styled.Categories>
          {challengeCategoryData?.map(({ name, koreanName, imageUrl }) => (
            <Styled.Item key={name} isSelected={name === selectedCategory} onClick={() => setSelectedCategory(name)}>
              <Styled.ImgWrapper className="background">
                <Styled.Img className="img" src={imageUrl} alt="challenge-icon" />
              </Styled.ImgWrapper>

              <span className="label">{koreanName}</span>
            </Styled.Item>
          ))}
        </Styled.Categories>

        <Styled.CardList>
          {challengesData?.data.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} onClick={() => navigate(`/challenge/${challenge.id}`)} />
          ))}
          <div ref={ref} />
        </Styled.CardList>
      </Styled.Container>
    </>
  );
}

export default ChallengeList;
