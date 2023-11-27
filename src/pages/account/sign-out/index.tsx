import cn from "classnames";
import { useState } from "react";
import CheckIcon from "src/assets/icons/CheckIcon";
import BottomSheet from "src/components/bottomSheet";
import Box from "src/components/box";
import Divider from "src/components/divider";
import FlexBox from "src/components/flexBox";
import { DATA_DELETION_TERM, SIGNOUT_TERM, SIGNOUT_REASONS } from "src/data/member_agreement";
import { Checkbox, NextButton } from "src/pages/signUp/lib";
import { RootContainer, Container, Title, TitleWrapper, Typography, List, Button } from "./index.style";

function SignOut() {
  const [signoutAgreed, setSignoutAgreed] = useState<boolean>(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const [signoutReasonIdx, setSignoutReasonIdx] = useState<number | null>(null);

  const handleClickReasonItem = (reasonIdx: number) => {
    setSignoutReasonIdx(reasonIdx);
    setIsBottomSheetOpen(false);
  };

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

      <NextButton isEnabled={signoutAgreed && signoutReasonIdx !== null} onClick={() => null} isGradient />
    </RootContainer>
  );
}

export default SignOut;
