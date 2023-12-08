import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import NavigationBar from "src/components/navigationBar";
import { useGetChallengeCategory } from "src/hooks/challenge/useGetChallengeCategory";
import { useGetChallenges } from "src/hooks/challenge/useGetChallenges";
import { useAppSelector } from "src/state";
import { useAppDispatch } from "src/state";
import { saveChallengeCategory } from "src/state/challengeSlice";
import { IChallenge } from "../../interfaces/challenges";
import ChallengeCard from "./challenge-card";
import * as Styled from "./index.style";

interface IPageInfo {
  page: number;
  size: number;
}

function ChallengeList() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { challengeCategory } = useAppSelector((state) => state.challenge);

  const [selectedCategory, setSelectedCategory] = useState<string>(challengeCategory);
  const [pageInfo, setPageInfo] = useState<IPageInfo>({ page: 0, size: 15 });
  const [challengeList, setChallengeList] = useState<IChallenge[]>([]);

  const [ref, inView] = useInView();

  const { challengeCategoryData, isLoading: isCategoryLoading, isSuccess: isCategorySuccess } = useGetChallengeCategory();
  const { challengesData } = useGetChallenges({
    category: selectedCategory,
    enabled: !isCategoryLoading && isCategorySuccess && Boolean(selectedCategory),
    pageInfo,
  });

  useEffect(() => {
    setChallengeList([]);
    setPageInfo({ page: 0, size: 15 });
  }, [selectedCategory]);

  useEffect(() => {
    if (challengeCategoryData && !selectedCategory) {
      setSelectedCategory(challengeCategoryData[0].name);
    }
  }, [challengeCategoryData]);

  useEffect(() => {
    if (challengesData) {
      setChallengeList((prev) => [...prev, ...challengesData.data]);
    }
  }, [challengesData]);

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
          {challengeCategoryData?.map(({ name, koreanName }) => (
            <Styled.Item
              key={name}
              isSelected={name === selectedCategory}
              onClick={() => {
                setSelectedCategory(name);
                dispatch(saveChallengeCategory({ challengeCategory: name }));
              }}
            >
              <Styled.ImgWrapper className="background">
                <Styled.Img className="img" src={`/images/challenge/${name}.svg`} alt="challenge-icon" />
              </Styled.ImgWrapper>

              <span className="label">{koreanName}</span>
            </Styled.Item>
          ))}
        </Styled.Categories>

        <Styled.CardList>
          {challengeList.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} onClick={() => navigate(`/challenge/${challenge.id}`)} />
          ))}
          {challengeList.length !== 0 && <div ref={ref} />}
        </Styled.CardList>
      </Styled.Container>

      <NavigationBar menu="challenge" />
    </>
  );
}

export default ChallengeList;
