import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import RoundButton from "src/components/roundButton";
import { useGetMyChallenges } from "src/hooks/challenge/useGetMyChallenges";
import { useAppSelector } from "src/state";
import { IMyChallengeProgress, IMyChallengeFinish } from "../../interfaces/challenges";
import ChallengeCard from "./challenge-card";
import * as Styled from "./index.style";

type TTabType = "PROGRESS" | "CLOSED";

function ChallengeList() {
  const navigate = useNavigate();
  const { authenticated } = useAppSelector((state) => state.auth);

  const [selectedTab, setSelectedTab] = useState<TTabType>("PROGRESS");
  const [progressChallengeCount, setProgressChallengeCount] = useState<number>(0);

  const { myChallengesData, isLoading, isSuccess } = useGetMyChallenges({
    status: selectedTab,
    authenticated,
  });
  const isReadyData = !isLoading && isSuccess;

  useEffect(() => {
    if (selectedTab === "PROGRESS" && isReadyData) {
      setProgressChallengeCount(myChallengesData?.count ?? 0);
    }
  }, [selectedTab, isReadyData, myChallengesData]);

  return (
    <div>
      <Styled.HeaderContainer>
        <Styled.LeftButton onClick={() => navigate(-1)}>
          <img alt="back" src="/images/header/back.svg" width={32} height={32} />
        </Styled.LeftButton>
        <Styled.HeaderTitle>나의 챌린지</Styled.HeaderTitle>
        <Styled.RightButton onClick={() => navigate("/account/reward")}>
          <img alt="gift" src="/images/challenge/gift.png" width={32} height={32} />
        </Styled.RightButton>
      </Styled.HeaderContainer>

      <Styled.TabContainer>
        <Styled.Tab onClick={() => setSelectedTab("PROGRESS")}>
          <Styled.TabTitle>
            참여중인 챌린지 <span className="highlight">{progressChallengeCount}</span>
          </Styled.TabTitle>
          {selectedTab === "PROGRESS" && <Styled.SelectedLine />}
        </Styled.Tab>
        <Styled.Tab onClick={() => setSelectedTab("CLOSED")}>
          <Styled.TabTitle>완료한 챌린지</Styled.TabTitle>
          {selectedTab === "CLOSED" && <Styled.SelectedLine />}
        </Styled.Tab>
      </Styled.TabContainer>

      {selectedTab === "PROGRESS" && isReadyData && (myChallengesData?.count ?? 0) > 0 && (
        <Styled.CardList>
          {((myChallengesData?.myChallenge ?? []) as IMyChallengeProgress[]).map((challenge) => (
            <ChallengeCard
              key={challenge.challengeId}
              name={challenge.challengeName}
              days={challenge.days}
              remainDays={challenge.remainDays}
              status={`PROGRESS-${challenge.isStampForToday ? "SUCCESS" : "NOTHING"}`}
              onClick={() => navigate(`/challenge/${challenge.challengeId}`)}
            />
          ))}
          <Styled.ExtraChallengeButton onClick={() => navigate("/challenge-list")}>
            <p>다른 챌린지도 보러가기</p>
            <ChevronRightIcon stroke="#787C83" strokeWidth={2} />
          </Styled.ExtraChallengeButton>
        </Styled.CardList>
      )}
      {selectedTab === "CLOSED" && isReadyData && (myChallengesData?.count ?? 0) > 0 && (
        <Styled.CardList>
          {((myChallengesData?.myChallenge ?? []) as IMyChallengeFinish[]).map((challenge) => (
            <ChallengeCard
              key={challenge.challengeId}
              name={challenge.challengeName}
              isSuccessChallenge={challenge.isSuccess}
              percent={challenge.achievement}
              status={`FINISH-${challenge.achievement === 100 ? "SUCCESS" : "FAILURE"}`}
              onClick={() => navigate(`/challenge/${challenge.challengeId}`)}
            />
          ))}
          <Styled.DescriptionText>챌린지에 대한 리워드는 선물함에서 확인 가능해요</Styled.DescriptionText>
        </Styled.CardList>
      )}
      {(!authenticated || (isReadyData && (myChallengesData?.count ?? 0) === 0)) && (
        <Styled.EmptyContainer>
          <Styled.EmptyText>
            아직 {selectedTab === "PROGRESS" ? "도전을 시작한" : "완료한"} 챌린지가 없어요!
            <br />
            함께 챌린지를 살펴볼까요?
          </Styled.EmptyText>
          <RoundButton style={{ padding: "1.4rem 2.2rem", width: "auto" }} onClick={() => navigate("/challenge-list")}>
            모든 챌린지 보러가기
          </RoundButton>
        </Styled.EmptyContainer>
      )}
    </div>
  );
}

export default ChallengeList;
