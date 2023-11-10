import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import Dialog from "src/components/dialog";
import Divider from "src/components/divider";
import FlexBox from "src/components/flexBox";
import Modal from "src/components/navigationBar/modal";
import { useGetChallengeById } from "src/hooks/challenge/useGetChallengeById";
import { usePostChallengeJoin } from "src/hooks/challenge/usePostChallengeJoin";
import useModal from "src/hooks/useModal";
import theme from "src/lib/theme";
import { useAppSelector } from "src/state";
import ChallengeDescription from "./challenge-description";
import ChallengeModal from "./challenge-modal";
import ChallengeNotification from "./challenge-notification";
import * as Styled from "./index.style";
import { processText } from "./text-decoration";

interface IQueryID {
  id?: string;
}

const ChallengeDetail = () => {
  const { id = "" }: IQueryID = useParams();
  const challengeID = Number(id);

  const {
    modalRef: confirmDialogRef,
    isOpenModal: confirmDialogIsOpen,
    closeModal: confirmDialogClose,
    openModal: confirmDialogOpen,
  } = useModal();
  const {
    modalRef: todayJoinModalRef,
    isOpenModal: todayJoinModalIsOpen,
    closeModal: todayJoinModalClose,
    openModal: todayJoinModalOpen,
  } = useModal();
  const {
    modalRef: nextDayJoinModalRef,
    isOpenModal: nextDayJoinModalIsOpen,
    closeModal: nextDayJoinModalClose,
    openModal: nextDayJoinModalOpen,
  } = useModal();

  const { authenticated } = useAppSelector((state) => state.auth);

  const { postChallengeJoin } = usePostChallengeJoin({ challengeId: challengeID });

  const navigate = useNavigate();

  const { challengeData } = useGetChallengeById(challengeID);
  const { challenge } = challengeData;
  const canParticipate = !challengeData.challengeRetryBlocked && !challengeData.participationStatus;
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);

  const handleClickParticipateButton = () => {
    if (!authenticated) {
      setLoginModalOpen(true);

      return;
    }
    if (canParticipate) {
      confirmDialogOpen();
    } else if (challengeData.participationStatus) {
      navigate(`/challenge/stamp/${id}`);
    }
  };

  const handleTodayJoin = () => {
    if (!authenticated) {
      confirmDialogClose();

      return;
    }

    postChallengeJoin({ isToday: 0 });
    confirmDialogClose();
    todayJoinModalOpen();
  };

  const handleNextDayJoin = () => {
    if (!authenticated) {
      confirmDialogClose();

      return;
    }

    postChallengeJoin({ isToday: 1 });
    confirmDialogClose();
    nextDayJoinModalOpen();
  };

  const processButtonText = () => {
    if (challengeData.challengeRetryBlocked) {
      return "참여 불가";
    }
    if (challengeData.participationStatus) {
      return "인증하기";
    }

    return "참여하기";
  };

  return (
    <>
      <ContentHeader back={true} exit={false} borderBottom={false} />
      {loginModalOpen && (
        <Modal
          onClickBackDrop={() => setLoginModalOpen(false)}
          onClickConfirm={() => {
            setLoginModalOpen(false);
            navigate("/onboard");
          }}
        />
      )}
      <Styled.Container>
        <Styled.Image
          src={`${
            challenge.basicImage === "s3_url"
              ? "https://images.unsplash.com/photo-1607077792448-17b60bcca65f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3456&q=80"
              : challenge.basicImage
          }`}
        >
          <Styled.ImageShadow />
        </Styled.Image>

        <Styled.Section>
          <FlexBox flexDirection="column" mt="4rem" mb="3.2rem" alignItems="center">
            <Styled.Typography>
              <span className="highlight">
                {challenge.category === "SLEEP"
                  ? "수면"
                  : challenge.category === "DIET"
                  ? "식습관"
                  : challenge.category === "SUPPLEENT"
                  ? "영양제"
                  : "운동"}{" "}
                챌린지
              </span>
            </Styled.Typography>

            <Styled.Title>{challenge.title}</Styled.Title>

            <FlexBox flexDirection="row" gap="1rem">
              <Styled.Chip variant="sub">{challenge.times}</Styled.Chip>
              <Styled.Chip variant="sub">{challenge.duration}</Styled.Chip>
              <Styled.Chip variant="sub">{challenge.method}</Styled.Chip>
            </FlexBox>
          </FlexBox>

          <FlexBox flexDirection="column" gap="1.2rem" mt="3.2rem" mb="1.6rem">
            <FlexBox gap="1.2rem" alignItems="center">
              <Styled.Chip variant="secondary">Midterm 보상</Styled.Chip>
              <Styled.Typography color="300" lineHeight="150%">
                {challenge.midtermGift / 1000}천원 상품권
              </Styled.Typography>
            </FlexBox>

            <FlexBox gap="1.2rem" alignItems="center">
              <Styled.Chip variant="secondary">Final 보상</Styled.Chip>
              <Styled.Typography color="300" lineHeight="150%">
                {challenge.finalGift / 10000}만원 상품권
              </Styled.Typography>
            </FlexBox>
          </FlexBox>

          <Styled.Typography fontSize="1.2rem" color="500" mb="3.6rem">
            상품권 제휴사는 금액에 따라 상이하며, 네이버페이/백화점상품권/스타벅스/편의점(CU, GS25, 7-Eleven)/영화관람권 등이 있습니다.
          </Styled.Typography>
        </Styled.Section>

        <Divider />

        <Styled.Section>
          <ChallengeDescription highlight="WHAT : " title="무엇을 하는 챌린지인가요?">
            <Styled.Typography color="300" lineHeight="150%">
              {challenge.whatContent}
            </Styled.Typography>
          </ChallengeDescription>
          <ChallengeDescription highlight="WHY : " title="왜 이 챌린지를 해야하나요?">
            {processText(challenge.whyContent)}
          </ChallengeDescription>

          <ChallengeDescription highlight="TIP : " title={`${challenge.tipSubtitle}`}>
            <Styled.Typography color="300" lineHeight="150%">
              {processText(challenge.tipContent)}
            </Styled.Typography>
          </ChallengeDescription>
        </Styled.Section>
        <Styled.Section>
          <ChallengeDescription highlight="인증 가이드">
            <Styled.Typography color="200" lineHeight="150%" mb="12rem">
              {challenge.guide}
            </Styled.Typography>
          </ChallengeDescription>
        </Styled.Section>
        <ChallengeNotification />
      </Styled.Container>
      <Styled.ButtonWrapper>
        <Styled.Button onClick={handleClickParticipateButton} isEnabled={!challengeData.challengeRetryBlocked}>
          {processButtonText()}
        </Styled.Button>
      </Styled.ButtonWrapper>

      {confirmDialogIsOpen && (
        <Dialog
          ref={confirmDialogRef}
          title="챌린지를 오늘부터 시작할까요?"
          description={
            <>
              챌린지 인증은 <span style={{ color: theme.color.blue }}>당일 12시 마감</span>이에요
            </>
          }
          cancelText="내일부터 할래요"
          confirmText="네, 오늘부터 할래요"
          onClickCancel={handleNextDayJoin}
          onClickConfirm={handleTodayJoin}
        />
      )}

      {todayJoinModalIsOpen && (
        <ChallengeModal
          ref={todayJoinModalRef}
          title="챌린지를 시작했어요!"
          description="챌린지는 최대 3개까지 참여 가능해요"
          subDescription="나의 챌린지 현황"
          cancelText="다른 챌린지 둘러보기"
          confirmText="챌린지 인증 하러 가기"
          onClickCancel={() => {
            todayJoinModalClose();
            navigate(`/challenge-list`);
          }}
          onClickConfirm={() => {
            todayJoinModalClose();
            navigate(`/challenge/stamp/${challengeID}`);
          }}
        />
      )}
      {nextDayJoinModalIsOpen && (
        <ChallengeModal
          ref={nextDayJoinModalRef}
          title="내일부터 챌린지를 함께해요!"
          description="챌린지는 최대 3개까지 참여 가능해요"
          subDescription="나의 챌린지 현황"
          cancelText="홈으로 돌아가기"
          confirmText="다른 챌린지 둘러보기"
          onClickCancel={() => {
            nextDayJoinModalClose();
            navigate(`/`);
          }}
          onClickConfirm={() => {
            nextDayJoinModalClose();
            navigate(`/challenge-list`);
          }}
        />
      )}
    </>
  );
};

export default ChallengeDetail;
