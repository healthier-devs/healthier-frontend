import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import RoundButton from "src/components/roundButton";
import { useGetStampChart } from "src/hooks/challenge/useGetStampChart";
import { IStamp } from "src/interfaces/challenges";
import * as Styled from "./index.style";
import Stamp from "./stamp";

function ChallengeStamp() {
  const navigate = useNavigate();
  const param = useParams();

  // TODO: userId 처리
  const { stampChartData } = useGetStampChart({ userId: "64f87356d626021b19434f36", challengeId: param.id ?? "" });

  useEffect(() => {
    if (!param.id) {
      navigate(-1);
    }
  }, []);

  const makeStampChart = (stamps: IStamp[], duration: number) => {
    const lastDayCnt = stamps.length !== 0 ? stamps[stamps.length - 1].dayCnt : 0;
    const restStamps = [...Array(duration - stamps.length)].map((_, i) => ({ dayCnt: lastDayCnt + i + 1, status: "NOTHING" }));

    return [...stamps, ...restStamps];
  };

  return (
    <>
      <Styled.Container>
        <Styled.TopContainer>
          <Styled.HeaderContainer>
            <Styled.LeftButton onClick={() => navigate(-1)}>
              <img alt="back" src="/images/header/back.svg" width={32} height={32} />
            </Styled.LeftButton>
            <Styled.RightButton onClick={() => navigate(-1)}>관리</Styled.RightButton>
          </Styled.HeaderContainer>

          <Styled.TopContents>
            <Styled.Title>{stampChartData?.title}</Styled.Title>
            <Styled.TagContainer>
              <Styled.Tag>{stampChartData?.method}</Styled.Tag>
              <Styled.Tag>{stampChartData?.duration}일동안</Styled.Tag>
            </Styled.TagContainer>

            <Styled.ProgressContainer>
              <Styled.ProgressBar>
                <Styled.CurrentProgress percent={stampChartData?.currentDayCnt ?? 1 / (stampChartData?.duration ?? 1)} />
              </Styled.ProgressBar>

              <Styled.ProgressTextBox>
                <p className="highlight">{stampChartData?.currentDayCnt}일째 진행중</p>
                <p>총 {stampChartData?.duration}일</p>
              </Styled.ProgressTextBox>
            </Styled.ProgressContainer>
          </Styled.TopContents>
        </Styled.TopContainer>

        <Styled.ContentsContainer>
          <Styled.InviteContainer>
            <div className="top-box">
              <Styled.InviteTitle>친구 초대하기</Styled.InviteTitle>
              <ChevronRightIcon />
            </div>
            <Styled.InviteDescription>친구 초대를 하면 부활권을 얻을 수 있어요!</Styled.InviteDescription>
          </Styled.InviteContainer>

          <Styled.StampContainer>
            {makeStampChart(stampChartData?.stamps ?? [], stampChartData?.duration ?? 0).map((_, idx) =>
              idx % 3 === 0 ? (
                <Styled.StampRow key={`${idx}row`}>
                  <Stamp
                    stamps={(stampChartData?.stamps ?? []).slice(idx, idx + 3)}
                    rowIdx={idx}
                    duration={stampChartData?.duration ?? 0}
                    isLast={Math.ceil((stampChartData?.stamps.length ?? 1) / 3) === idx / 3 + 1}
                  />
                </Styled.StampRow>
              ) : (
                <></>
              )
            )}
          </Styled.StampContainer>
        </Styled.ContentsContainer>
      </Styled.Container>

      <Styled.CTAContainer>
        <RoundButton>오늘의 챌린지 인증하기</RoundButton>
      </Styled.CTAContainer>
    </>
  );
}

export default ChallengeStamp;
