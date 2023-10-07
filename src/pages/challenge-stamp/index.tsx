import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import Dialog from "src/components/dialog";
import RoundButton from "src/components/roundButton";
import { useGetPresignedUrl } from "src/hooks/challenge/useGetPresignedUrl";
import { useGetStampChart } from "src/hooks/challenge/useGetStampChart";
import { usePatchRevivalTicket } from "src/hooks/challenge/usePatchRevivalTicket";
import { usePutStampImage } from "src/hooks/challenge/usePutStampImage";
import useModal from "src/hooks/useModal";
import theme from "src/lib/theme";
import * as Styled from "./index.style";
import Stamp from "./stamp";

function ChallengeStamp() {
  const navigate = useNavigate();
  const param = useParams();

  const revivalTicketDialog = useModal();

  const isRevivalDayLine = useRef<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const { stampChartData, refetch, isLoading, isSuccess } = useGetStampChart({ challengeId: parseInt(param.id ?? "0") });
  const { patchRevivalTicket } = usePatchRevivalTicket({ id: parseInt(param.id ?? "0") });
  const { presignedUrlData } = useGetPresignedUrl();
  const { putStampImage } = usePutStampImage({ id: parseInt(param.id ?? "0"), url: presignedUrlData?.url ?? "", refetch });

  const duration = parseInt(stampChartData?.duration ?? "0");

  useEffect(() => {
    if (!param.id) {
      navigate(-1);
    }
  }, []);

  const handleClickRevivalTicket = () => {
    // TODO: 부활티켓이 0개면 모달 내용 다르게
    revivalTicketDialog.openModal();
  };

  const handleClickRevival = () => {
    patchRevivalTicket();
    revivalTicketDialog.closeModal();
  };

  const handleClickCertificate = () => {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");

    input.onchange = (e) => handleImageChange(e);
    input.click();
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0];

    if (file && presignedUrlData?.url) {
      const imageUrl = URL.createObjectURL(file);

      setSelectedImage(imageUrl);
      putStampImage({ imageFile: file });
    }
  };

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
              <Styled.BannerContainer onClick={handleClickRevivalTicket}>
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
                  stampChartData.submissions.map((_, idx) => {
                    if (idx % 3 === 0) {
                      const isFailureLine = stampChartData.submissions
                        .slice(idx, idx + 3)
                        .some((submission) => submission.status === "FAILURE");

                      if (isRevivalDayLine.current && isFailureLine) {
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
                              onClickRevivalTicket={handleClickRevivalTicket}
                            />
                          </Styled.StampRow>
                        );
                      }

                      return (
                        <Styled.StampRow key={`${idx}row`}>
                          <Stamp
                            stamps={stampChartData.submissions.slice(idx, idx + 3)}
                            rowIdx={idx}
                            duration={duration}
                            isLast={Math.ceil((stampChartData.submissions.length ?? 1) / 3) === idx / 3 + 1}
                            currentDayCnt={stampChartData.currentDayCnt ?? 0}
                            isRevivalDayLine={false}
                          />
                        </Styled.StampRow>
                      );
                    }

                    return <></>;
                  })}
              </Styled.StampContainer>

              <Styled.BannerContainer>
                <div className="top-box">
                  <Styled.BannerTitle>친구 초대하기</Styled.BannerTitle>
                  <ChevronRightIcon />
                </div>
                <Styled.BannerDescription>친구 초대를 하면 부활권을 얻을 수 있어요!</Styled.BannerDescription>
              </Styled.BannerContainer>
            </Styled.ContentsContainer>
            {selectedImage && <img src={selectedImage} alt="선택된 이미지" />}
          </Styled.Container>

          <Styled.CTAContainer>
            <RoundButton onClick={handleClickCertificate} style={{ pointerEvents: "auto" }}>
              오늘의 챌린지 인증하기
            </RoundButton>
          </Styled.CTAContainer>
        </>
      )}

      {revivalTicketDialog.isOpenModal && (
        <Dialog
          ref={revivalTicketDialog.modalRef}
          title={
            <>
              부활 티켓으로
              <br />
              하루를 만회하시겠어요?
            </>
          }
          description={
            <>
              <span style={{ color: theme.color.blue }}>1장 당 인증 실패한 하루</span>를 제거할 수 있어요.
            </>
          }
          cancelText="취소"
          confirmText="네 사용할래요"
          onClickCancel={revivalTicketDialog.closeModal}
          onClickConfirm={handleClickRevival}
        />
      )}
    </>
  );
}

export default ChallengeStamp;
