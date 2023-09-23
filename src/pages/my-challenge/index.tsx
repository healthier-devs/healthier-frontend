import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import { useGetMyChallenges } from "src/hooks/challenge/useGetMyChallenges";
import { IMyChallengeProgress, IMyChallengeFinish } from "../../interfaces/challenges";
import ChallengeCard from "./challenge-card";
import * as Styled from "./index.style";

type TTabType = "PROGRESS" | "CLOSED";

function ChallengeList() {
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState<TTabType>("PROGRESS");

  const { myChallengesData, isLoading, isSuccess } = useGetMyChallenges({
    status: selectedTab,
  });
  const isReadyData = !isLoading && isSuccess;

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
        <Styled.Tab onClick={() => setSelectedTab("PROGRESS")}>
          <Styled.TabTitle>
            참여중인 챌린지 <span className="highlight">{myChallengesData?.length ?? 0}</span>
          </Styled.TabTitle>
          {selectedTab === "PROGRESS" && <Styled.SelectedLine />}
        </Styled.Tab>
        <Styled.Tab onClick={() => setSelectedTab("CLOSED")}>
          <Styled.TabTitle>완료한 챌린지</Styled.TabTitle>
          {selectedTab === "CLOSED" && <Styled.SelectedLine />}
        </Styled.Tab>
      </Styled.TabContainer>

      {selectedTab === "PROGRESS" && isReadyData && (
        <Styled.CardList>
          {((myChallengesData ?? []) as IMyChallengeProgress[]).map((challenge) => (
            <ChallengeCard
              key={challenge.challengeId}
              name={challenge.challengeName}
              dayCnt={challenge.dayCnt}
              duration={challenge.duration}
              status={`PROGRESS-${challenge.status}`}
              onClick={() => navigate(`/challenge/${challenge.challengeId}`)}
            />
          ))}
          <Styled.ExtraChallengeButton onClick={() => navigate("/challenge-list")}>
            <p>다른 챌린지도 보러가기</p>
            <ChevronRightIcon stroke="#787C83" strokeWidth={2} />
          </Styled.ExtraChallengeButton>
        </Styled.CardList>
      )}
      {selectedTab === "CLOSED" && isReadyData && (
        <Styled.CardList>
          {((myChallengesData ?? []) as IMyChallengeFinish[]).map((challenge) => (
            <ChallengeCard
              key={challenge.challengeId}
              name={challenge.challengeName}
              percent={challenge.achievement}
              status={`FINISH-${challenge.achievement === 100 ? "SUCCESS" : "FAILURE"}`}
              onClick={() => navigate(`/challenge/${challenge.challengeId}`)}
            />
          ))}
        </Styled.CardList>
      )}
    </div>
  );
}

export default ChallengeList;
