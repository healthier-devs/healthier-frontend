import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import RoundButton from "src/components/roundButton";
import { useGetStampChart } from "src/hooks/challenge/useGetStampChart";
import * as Styled from "./index.style";
import Stamp from "./stamp";

function ChallengeStamp() {
  const navigate = useNavigate();
  const param = useParams();

  const { stampChartData, isLoading, isSuccess } = useGetStampChart({ challengeId: param.id ?? "" });

  const isRevivalDayLine = useRef<boolean>(true);

  const duration = parseInt(stampChartData?.duration ?? "0");

  useEffect(() => {
    if (!param.id) {
      navigate(-1);
    }
  }, []);

  return (
    <>
      {!isLoading && isSuccess && (
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
                  <Styled.Tag>{stampChartData?.times}</Styled.Tag>
                  <Styled.Tag>{stampChartData?.duration}</Styled.Tag>
                  <Styled.Tag>{stampChartData?.method}</Styled.Tag>
                </Styled.TagContainer>

                <Styled.ProgressContainer>
                  <Styled.ProgressBar>
                    <Styled.CurrentProgress percent={((stampChartData?.currentDayCnt ?? 1) / (duration === 0 ? 1 : duration)) * 100} />
                  </Styled.ProgressBar>

                  <Styled.ProgressTextBox>
                    <p className="highlight">{stampChartData?.currentDayCnt}일째 진행중</p>
                    <p>총 {duration}일</p>
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
                {stampChartData &&
                  stampChartData.submissions.map((stamp, idx) => {
                    if (isRevivalDayLine.current && stamp.status === "FAILURE") {
                      isRevivalDayLine.current = false;

                      return (
                        <Styled.StampRow key={`${idx}row`}>
                          <Stamp
                            stamps={stampChartData.submissions.slice(idx, idx + 3)}
                            rowIdx={idx}
                            duration={duration}
                            isLast={Math.ceil((stampChartData.submissions.length ?? 1) / 3) === idx / 3 + 1}
                            currentDayCnt={stampChartData.currentDayCnt ?? 0}
                            isRevivalDayLine={true}
                          />
                        </Styled.StampRow>
                      );
                    }

                    if (idx % 3 === 0) {
                      return (
                        <Styled.StampRow key={`${idx}row`}>
                          <Stamp
                            stamps={stampChartData.submissions.slice(idx, idx + 3)}
                            rowIdx={idx}
                            duration={duration}
                            isLast={Math.ceil((stampChartData.submissions.length ?? 1) / 3) === idx / 3 + 1}
                            currentDayCnt={stampChartData.currentDayCnt ?? 0}
                            isRevivalDayLine={isRevivalDayLine.current}
                          />
                        </Styled.StampRow>
                      );
                    }

                    return <></>;
                  })}
              </Styled.StampContainer>
            </Styled.ContentsContainer>
          </Styled.Container>

          <Styled.CTAContainer>
            <RoundButton>오늘의 챌린지 인증하기</RoundButton>
          </Styled.CTAContainer>
        </>
      )}
    </>
  );
}

export default ChallengeStamp;
