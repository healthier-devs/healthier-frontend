import { useNavigate } from "react-router-dom";
import FlexBox from "src/components/flexBox";
import { NextButton } from "src/pages/signUp/lib";
import * as Styled from "./index.style";

function SignoutComplete() {
  const navigate = useNavigate();

  return (
    <Styled.Container>
      <FlexBox flexDirection="column" justifyContent="center" alignItems="center" gap="1.6rem">
        <Styled.Text className="title">탈퇴가 완료되었습니다.</Styled.Text>
        <Styled.Text className="sub-title">회원탈퇴 처리가 완료되었습니다.{"\n"} 그동안 이용해 주셔서 감사합니다. </Styled.Text>
      </FlexBox>
      <Styled.Illustration src="/images/signup/stethoscope.png" />
      <Styled.Gradient />
      <NextButton isEnabled text="메인 홈으로 가기" onClick={() => navigate("/")} />
    </Styled.Container>
  );
}

export default SignoutComplete;
