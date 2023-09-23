import { useEffect } from "react";
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
              <Styled.BannerContainer>
                <div className="top-box">
                  <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
                    <Styled.BannerTitle>부활티켓 사용하기</Styled.BannerTitle>
                    <Styled.BannerDescription style={{ margin: 0 }}>
                      <span className="highlight">n장</span> 보유중
                    </Styled.BannerDescription>
                  </div>
                  <ChevronRightIcon />
                </div>
                <Styled.BannerDescription>부활티켓을 사용해서 실패한 회차를 복구해보세요!</Styled.BannerDescription>
              </Styled.BannerContainer>

              <Styled.StampContainer>
                {stampChartData &&
                  stampChartData.stamps.map((_, idx) =>
                    idx % 3 === 0 ? (
                      <Styled.StampRow key={`${idx}row`}>
                        <Stamp
                          stamps={stampChartData.stamps.slice(idx, idx + 3)}
                          rowIdx={idx}
                          duration={duration}
                          isLast={Math.ceil((stampChartData.stamps.length ?? 1) / 3) === idx / 3 + 1}
                          currentDayCnt={stampChartData.currentDayCnt ?? 0}
                        />
                      </Styled.StampRow>
                    ) : (
                      <></>
                    )
                  )}
              </Styled.StampContainer>

              <Styled.BannerContainer>
                <div className="top-box">
                  <Styled.BannerTitle>친구 초대하기</Styled.BannerTitle>
                  <ChevronRightIcon />
                </div>
                <Styled.BannerDescription>친구 초대를 하면 부활권을 얻을 수 있어요!</Styled.BannerDescription>
              </Styled.BannerContainer>
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
