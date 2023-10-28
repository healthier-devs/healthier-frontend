import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FlexBox from "src/components/flexBox";
import { useLogin } from "src/hooks/account/useLogin";
import { NextButton } from "../lib";
import * as Styled from "./index.style";
import type { ILoginRequest } from "src/interfaces/account";

function SignUpComplete() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { login } = useLogin();

  useEffect(() => {
    if ("username" in state && "password" in state) {
      const { username, password } = state as ILoginRequest;

      login({
        username,
        password,
      });
    }
  }, [state, login]);

  return (
    <Styled.Container>
      <FlexBox flexDirection="column" justifyContent="center" alignItems="center" gap="1.6rem">
        <Styled.Text className="title">회원가입을 완료했어요!</Styled.Text>
        <Styled.Text className="sub-title">앞으로 헬시어와 함께{"\n"}더 건강한 습관을 만들어보아요!</Styled.Text>
      </FlexBox>
      <Styled.Illustration src="/images/signup/stethoscope.png" />
      <Styled.Gradient />
      <NextButton isEnabled text="헬시어 시작하기" onClick={() => navigate("/")} />
    </Styled.Container>
  );
}

export default SignUpComplete;
