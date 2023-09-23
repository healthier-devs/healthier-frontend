import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import { IProgressChallenge, IFinishChallenge } from "../../interfaces/challenges";
import ChallengeCard from "./challenge-card";
import * as Styled from "./index.style";

interface IPageInfo {
  page: number;
  size: number;
}

type TTabType = "참여중" | "완료";

const myChallengeData: { data: IProgressChallenge[] } = {
  data: [
    {
      id: "1",
      name: "하루 7시간 수면 달성하기",
      dayCnt: 5,
      duration: 23,
      status: "NOTHING",
    },
    {
      id: "2",
      name: "하루 7시간 수면 달성하기",
      dayCnt: 5,
      duration: 23,
      status: "NOTHING",
    },
    {
      id: "3",
      name: "매일 유산소운동 30분 하기",
      dayCnt: 3,
      duration: 25,
      status: "SUCCESS",
    },
  ],
};

const finishChallengeData: { data: IFinishChallenge[] } = {
  data: [
    {
      id: "1",
      name: "하루 7시간 수면 달성하기",
      percent: 100,
      status: "SUCCESS",
    },
    {
      id: "2",
      name: "매일 유산소운동 30분 하기",
      percent: 50,
      status: "FAILURE",
    },
  ],
};

function ChallengeList() {
  const navigate = useNavigate();

  const [pageInfo, setPageInfo] = useState<IPageInfo>({ page: -1, size: 15 });
  const [selectedTab, setSelectedTab] = useState<TTabType>("참여중");

  const [ref, inView] = useInView();

  // TODO: 참여중인 challenge API 연동
  // const { myChallengesData } = useGetMyChallenges({
  //   pageInfo,
  // });

  useEffect(() => {
    if (inView) {
      setPageInfo({ ...pageInfo, page: pageInfo.page + 1 });
    }
  }, [inView]);

  return (
    <div>
      <Styled.HeaderContainer>
        <Styled.LeftButton onClick={() => navigate(-1)}>
          <img alt="back" src="/images/header/back.svg" width={32} height={32} />
        </Styled.LeftButton>
        <Styled.HeaderTitle>나의 챌린지</Styled.HeaderTitle>
        <Styled.RightButton onClick={() => navigate(-1)}>
          <img alt="gift" src="/images/challenge/gift.png" width={32} height={32} />
        </Styled.RightButton>
      </Styled.HeaderContainer>

      <Styled.TabContainer>
        <Styled.Tab onClick={() => setSelectedTab("참여중")}>
          <Styled.TabTitle>
            참여중인 챌린지 <span className="highlight">{myChallengeData.data.length}</span>
          </Styled.TabTitle>
          {selectedTab === "참여중" && <Styled.SelectedLine />}
        </Styled.Tab>
        <Styled.Tab onClick={() => setSelectedTab("완료")}>
          <Styled.TabTitle>완료한 챌린지</Styled.TabTitle>
          {selectedTab === "완료" && <Styled.SelectedLine />}
        </Styled.Tab>
      </Styled.TabContainer>

      {selectedTab === "참여중" && (
        <Styled.CardList>
          {myChallengeData?.data.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              name={challenge.name}
              dayCnt={challenge.dayCnt}
              duration={challenge.duration}
              status={`PROGRESS-${challenge.status}`}
              onClick={() => navigate(`/challenge/${challenge.id}`)}
            />
          ))}
          <Styled.ExtraChallengeButton onClick={() => navigate("/challenge-list")}>
            <p>다른 챌린지도 보러가기</p>
            <ChevronRightIcon stroke="#787C83" strokeWidth={2} />
          </Styled.ExtraChallengeButton>
          <div ref={ref} />
        </Styled.CardList>
      )}
      {selectedTab === "완료" && (
        <Styled.CardList>
          {finishChallengeData?.data.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              name={challenge.name}
              percent={challenge.percent}
              status={`FINISH-${challenge.status}`}
              onClick={() => navigate(`/challenge/${challenge.id}`)}
            />
          ))}
          <div ref={ref} />
        </Styled.CardList>
      )}
    </div>
  );
}

export default ChallengeList;
