import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppleIcon from "src/assets/icons/AppleIcon";
import KakaoIcon from "src/assets/icons/KakaoIcon";
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
                autoComplete="true"
              />
            </Styled.Box>

            <Styled.Box mt="3.2rem">
              <RoundButton onClick={handleClickLogin}>이메일로 로그인하기</RoundButton>
            </Styled.Box>
          </form>

          <Styled.Box mt="10px">
            <RoundButton onClick={() => navigate("/")} backgroundColor="#D2FA64" color="#000">
              로그인 없이 둘러보기
            </RoundButton>
          </Styled.Box>
        </div>

        <div>
          <Styled.Box mt="5rem">
            <TextDivider text="또는 SNS 계정으로 시작하기" />
          </Styled.Box>

          <Styled.Box mt="2.4rem">
            <Styled.LoginButton mr="16px" className="kakao">
              <KakaoIcon width={30} height={30} />
            </Styled.LoginButton>

            <Styled.LoginButton className="apple">
              <AppleIcon width={30} height={30} />
            </Styled.LoginButton>
          </Styled.Box>

          <FlexBox justifyContent="center" alignItems="center" gap="12px" mt="2rem">
            <Styled.Typography>계정이 없으신가요?</Styled.Typography>
            <UnderlinedButton text="회원가입하기" onClick={() => navigate("/signup")} />
          </FlexBox>
        </div>
      </Layout>
    </>
  );
}

export default DefaultLogin;
