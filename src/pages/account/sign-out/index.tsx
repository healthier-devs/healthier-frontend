import { useState } from "react";
import Box from "src/components/box";
import Divider from "src/components/divider";
import FlexBox from "src/components/flexBox";
import { DATA_DELETION_TERM, SIGNOUT_TERM } from "src/data/member_agreement";
import { Checkbox, NextButton } from "src/pages/signUp/lib";
import { RootContainer, Container, Title, TitleWrapper, Typography, List, Button, NextButtonWrapper } from "./index.style";

function SignOut() {
  const [signoutAgreed, setSignoutAgreed] = useState<boolean>(false);

  return (
    <RootContainer>
      <Container padding="32px 24px 24px">
        <TitleWrapper>
          <Title>{"헬시어를 떠나기\n전에 확인해주세요"}</Title>
        </TitleWrapper>

        <List>
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
          <List>
            {SIGNOUT_TERM.map((st, idx) => (
              <li className="signout__term__desc" key={idx}>
                {st}
              </li>
            ))}
          </List>
        </Box>
      </Container>

      <Divider />

      <Container padding="20px 24px">
        <FlexBox justifyContent="space-between" alignItems="center">
          <Typography className="signout__reason">탈퇴 사유를 선택해 주세요</Typography>
          <Button>선택</Button>
        </FlexBox>
      </Container>

      <Divider />

      <Container padding="24px 24px 168px 24px">
        <FlexBox alignItems="center" gap="16px" className="signout__agree__box">
          <Checkbox id="signout_agreed" defaultChecked={signoutAgreed} onClick={() => setSignoutAgreed((a) => !a)} />
          <Typography className="signout__agree">유의사항 숙지 후 탈퇴에 동의합니다.</Typography>
        </FlexBox>
      </Container>

      <NextButton isEnabled={signoutAgreed} onClick={() => null} isGradient />
    </RootContainer>
  );
}

export default SignOut;
