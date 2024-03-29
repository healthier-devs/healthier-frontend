import cn from "classnames";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CheckIcon from "src/assets/icons/CheckIcon";
import BottomSheet from "src/components/bottomSheet";
import Box from "src/components/box";
import Dialog from "src/components/dialog";
import Divider from "src/components/divider";
import FlexBox from "src/components/flexBox";
import { DATA_DELETION_TERM, SIGNOUT_TERM, SIGNOUT_REASONS } from "src/data/member_agreement";
import { useWithdrawal } from "src/hooks/account/useWithdrawal";
import useModal from "src/hooks/useModal";
import { Checkbox, NextButton } from "src/pages/signUp/lib";
import { useAppSelector } from "src/state";
import { RootContainer, Container, Title, TitleWrapper, Typography, List, Button } from "./index.style";

function SignOut() {
  const navigate = useNavigate();

  const [signoutAgreed, setSignoutAgreed] = useState<boolean>(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const [signoutReasonIdx, setSignoutReasonIdx] = useState<number | null>(null);
  const { isOpenModal: isDialogOpen, modalRef: dialogRef, closeModal: closeDialog, openModal: openDialog } = useModal();
  const { withdrawal } = useWithdrawal();
  const { authenticated } = useAppSelector((state) => state.auth);

  const isNextButtonEnabled = signoutAgreed && signoutReasonIdx !== null;

  const handleClickReasonItem = (reasonIdx: number) => {
    setSignoutReasonIdx(reasonIdx);
    setIsBottomSheetOpen(false);
  };

  const handleClickNextButton = () => {
    if (!isNextButtonEnabled) {
      return;
    }
    openDialog();
  };

  const handleClickWithdrawalButton = () => {
    if (signoutReasonIdx === null) {
      return;
    }
    withdrawal({
      reason: SIGNOUT_REASONS[signoutReasonIdx],
    });
    closeDialog();
  };

  useEffect(() => {
    if (!authenticated) {
      alert("로그인 후 이용해 주세요");
      navigate("/");

      return;
    }
  }, [authenticated, navigate]);

  return (
    <RootContainer>
      <Container padding="32px 24px 24px">
        <TitleWrapper>
          <Title>{"헬시어를 떠나기\n전에 확인해주세요"}</Title>
        </TitleWrapper>

        <List className="signout__term__list">
          {DATA_DELETION_TERM.map((ddt, idx) => (
            <li className="signout__term__desc" key={idx}>
              {ddt}
            </li>
          ))}
        </List>

        <Box mt="24px">
          <Box mb="6px">
            <Typography className="signout__term__title">탈퇴 약관</Typography>
          </Box>
          <List className="signout__term__list">
            {SIGNOUT_TERM.map((st, idx) => (
              <li className="signout__term__desc" key={idx} onClick={() => setSignoutReasonIdx(idx)}>
                {st}
              </li>
            ))}
          </List>
        </Box>
      </Container>

      <Divider />

      <Container padding="20px 24px">
        <FlexBox justifyContent="space-between" alignItems="center">
          <Typography
            className={cn("signout__reason__select", {
              reason__selected: signoutReasonIdx !== null,
            })}
          >
            {signoutReasonIdx === null ? "탈퇴 사유를 선택해주세요" : SIGNOUT_REASONS[signoutReasonIdx]}
          </Typography>
          <Button onClick={() => setIsBottomSheetOpen((bso) => !bso)}>선택</Button>
        </FlexBox>
      </Container>

      <Divider />

      <Container padding="24px 24px 168px 24px">
        <FlexBox alignItems="center" gap="16px" className="signout__agree__box">
          <Checkbox id="signout_agreed" defaultChecked={signoutAgreed} onClick={() => setSignoutAgreed((a) => !a)} />
          <Typography className="signout__agree">유의사항 숙지 후 탈퇴에 동의합니다.</Typography>
        </FlexBox>
      </Container>

      <BottomSheet
        isBottomSheetOpen={isBottomSheetOpen}
        onClickOverlay={() => setIsBottomSheetOpen(false)}
        header="탈퇴 사유를 선택해 주세요"
      >
        <List>
          {SIGNOUT_REASONS.map((sr, idx) => (
            <li className="signout__reason" key={idx} onClick={() => handleClickReasonItem(idx)}>
              <Typography
                className={cn("signout__reason__desc", {
                  reason__item__selected: signoutReasonIdx === idx,
                })}
              >
                {sr}
              </Typography>

              {signoutReasonIdx === idx && <CheckIcon />}
            </li>
          ))}
        </List>
      </BottomSheet>

      {isDialogOpen && (
        <Dialog
          ref={dialogRef}
          title="정말 탈퇴하시겠습니까?"
          description={"탈퇴 후 14일간 재가입이 제한되며,\n동일 계정으로 가입이 불가합니다"}
          onClickCancel={closeDialog}
          onClickConfirm={handleClickWithdrawalButton}
        />
      )}
      <NextButton isEnabled={isNextButtonEnabled} onClick={handleClickNextButton} isGradient />
    </RootContainer>
  );
}

export default SignOut;
