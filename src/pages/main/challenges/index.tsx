import FlexBox from "src/components/flexBox";
import { useGetMyChallenges } from "src/hooks/challenge/useGetMyChallenges";
import { IMyChallengeProgress } from "src/interfaces/challenges";
import { Box } from "../index.style";
import StartContents from "../lib/StartContents";
import Title from "../lib/Title";
import * as Styled from "./index.style";

function Challenges() {
  const { myChallengesData, isLoading } = useGetMyChallenges({ status: "PROGRESS" });

  return (
    <Box>
      <Title text="💪 건강 챌린지" />
      {!isLoading && myChallengesData ? (
        myChallengesData?.count === 0 ? (
          <StartContents
            text={"아직 시작한 챌린지가 없어요.\n챌린지에 도전하며 리워드를 받아보세요!"}
            buttonText="모든 챌린지 보러가기"
            buttonHref="/challenge-list"
          ></StartContents>
        ) : (
          (myChallengesData.myChallenge as IMyChallengeProgress[]).map((challenge) => (
            <FlexBox key={challenge.challengeId} flexDirection="column" gap="12px">
              <div>
                <Styled.Typography className="grey-300">
                  아직 <span className="highlight">오늘의 챌린지</span>를 인증하지 않았어요!
                </Styled.Typography>
              </div>
              <Styled.Card>
                <FlexBox alignItems="center" gap="8px" mb="12px">
                  <Styled.CardTitle>{challenge.challengeName}</Styled.CardTitle>
                </FlexBox>
                <FlexBox alignItems="center" gap="6px">
                  <Styled.DayChip>
                    <span className="chip-text highlight">{challenge.days}일</span>
                    <span className="chip-text">째 도전</span>
                  </Styled.DayChip>

                  <Styled.Typography className="grey-400">챌린지 완료까지 {challenge.remainDays}일 남았어요</Styled.Typography>
                </FlexBox>
              </Styled.Card>
            </FlexBox>
          ))
        )
      ) : (
        <></>
      )}
    </Box>
  );
}

export default Challenges;
