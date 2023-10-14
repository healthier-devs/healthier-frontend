import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import ContentHeader from "src/components/contentHeader";
import RewardCard from "src/components/rewardCard";
import { useGetMyRewardRecords } from "src/hooks/rewards/useGetMyRewardRecords";
import { useGetRewards } from "src/hooks/rewards/useGetRewards";
import theme from "src/lib/theme";
import * as Styled from "./index.style";

function Reward() {
  const navigate = useNavigate();

  const { myRewardRecordsData } = useGetMyRewardRecords();

  const { rewardsData: midtermRewards } = useGetRewards({ point: 3000 }); // MIDTERM
  const { rewardsData: finalRewards } = useGetRewards({ point: 10000 }); // FINAL

  const rewards = [...(midtermRewards ? midtermRewards.slice(0, 2) : []), ...(finalRewards ? finalRewards.slice(0, 2) : [])];

  return (
    <>
      <ContentHeader back={true} exit={false} label="리워드" style={{ backgroundColor: theme.color.grey_900 }} />
      <Styled.Container>
        <Styled.Title>
          챌린지 인증을 통해
          <br />
          받을 수 있는 리워드예요
        </Styled.Title>

        <Styled.CurrentChallengeList>
          {myRewardRecordsData &&
            myRewardRecordsData.map((challenge, idx) => (
              <Styled.CurrentChallengeBox key={idx}>
                <Styled.ChallengeTitle>{challenge.challengeTitle}</Styled.ChallengeTitle>
                <div style={{ marginTop: "1.2rem" }}>
                  <Styled.RewardBox>
                    <Styled.RewardDescription>Midterm 완료 리워드</Styled.RewardDescription>
                    {challenge.midtermReward ? (
                      <Styled.CertificatedButton
                        isFinish={challenge.midtermReward.sent}
                        {...(!challenge.midtermReward.sent && {
                          onClick: () =>
                            navigate("/challenge/reward/list", {
                              state: {
                                status: "midterm",
                                userRewardId: challenge.midtermReward?.userRewardId,
                              },
                            }),
                        })}
                      >
                        {challenge.midtermReward.sent ? "받기 완료" : "리워드 받기"}
                      </Styled.CertificatedButton>
                    ) : (
                      <Styled.NotCertificatedText>아직 인증 전이에요</Styled.NotCertificatedText>
                    )}
                  </Styled.RewardBox>
                  <Styled.RewardBox>
                    <Styled.RewardDescription>Final 완료 리워드</Styled.RewardDescription>
                    {challenge.finalReward ? (
                      <Styled.CertificatedButton
                        isFinish={challenge.finalReward.sent}
                        {...(!challenge.finalReward.sent && {
                          onClick: () =>
                            navigate("/challenge/reward/list", {
                              state: {
                                status: "final",
                                userRewardId: challenge.finalReward?.userRewardId,
                              },
                            }),
                        })}
                      >
                        {challenge.finalReward.sent ? "받기 완료" : "리워드 받기"}
                      </Styled.CertificatedButton>
                    ) : (
                      <Styled.NotCertificatedText>아직 인증 전이에요</Styled.NotCertificatedText>
                    )}
                  </Styled.RewardBox>
                </div>
              </Styled.CurrentChallengeBox>
            ))}
        </Styled.CurrentChallengeList>

        <Styled.SubTitle>
          챌린지 인증 시<br />
          다음과 같은 리워드를 받을 수 있어요!
        </Styled.SubTitle>
        <Styled.ListContainer>
          {rewards.map((item) => (
            <RewardCard key={item.rewardId} item={item} />
          ))}
        </Styled.ListContainer>

        <Styled.ExtraRewardButton onClick={() => navigate("/challenge/reward/list", { state: { status: "all" } })}>
          <p>리워드 전체보기</p>
          <ChevronRightIcon stroke="#787C83" strokeWidth={2} />
        </Styled.ExtraRewardButton>
      </Styled.Container>
    </>
  );
}

export default Reward;
