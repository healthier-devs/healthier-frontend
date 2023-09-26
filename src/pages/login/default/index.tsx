import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlexBox from "src/components/flexBox";
import Layout from "src/components/layout";
import MainHeader from "src/components/mainHeader";
import RoundButton from "src/components/roundButton";
import TextDivider from "src/components/textDivider";
import UnderlinedButton from "src/components/underlinedButton";
import { useLogin } from "src/hooks/account/useLogin";
import * as Styled from "./index.style";

function DefaultLogin() {
  const navigate = useNavigate();
  const { login } = useLogin();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleClickLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!email) {
      alert("이메일을 입력해 주세요");

      return;
    }

    if (!password) {
      alert("비밀번호를 입력해 주세요");

      return;
    }

    login({
      username: email,
      password,
    });
  };

  return (
    <>
      <MainHeader />
      <Layout padding="5.6rem 2.4rem 0" style={{ boxSizing: "border-box" }}>
        <div>
          <form>
            <Styled.Box mt="5.4rem">
              <Styled.TextField
                placeholder="이메일 주소를 입력해주세요"
                mb="12px"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Styled.TextField
                placeholder="비밀번호를 입력해주세요"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Styled.Box>

            <Styled.Box mt="3.2rem">
              <RoundButton onClick={handleClickLogin}>이메일로 로그인하기</RoundButton>
            </Styled.Box>
          </form>

          <Styled.Box mt="2rem">
            <UnderlinedButton text="로그인 없이 둘러보기" onClick={() => navigate("/")} />
          </Styled.Box>
        </div>

        <Styled.Box mt="5rem">
          <TextDivider text="또는 SNS 계정으로 시작하기" />
        </Styled.Box>

        <Styled.Box mt="2.4rem">
          <Styled.LoginButton mb="10px" className="kakao">
            <Styled.Icon src="/images/signup/kakao.svg" />
            <Styled.LoginText>카카오톡으로 로그인하기</Styled.LoginText>
          </Styled.LoginButton>

          <Styled.LoginButton className="apple">
            <Styled.Icon src="/images/signup/apple.svg" />
            <Styled.LoginText>Apple ID로 로그인하기</Styled.LoginText>
          </Styled.LoginButton>
        </Styled.Box>

        <FlexBox justifyContent="center" alignItems="center" gap="12px" mt="2rem">
          <Styled.Typography>계정이 없으신가요?</Styled.Typography>
          <UnderlinedButton text="회원가입하기" onClick={() => navigate("/signup")} />
        </FlexBox>
      </Layout>
    </>
  );
}

export default DefaultLogin;
