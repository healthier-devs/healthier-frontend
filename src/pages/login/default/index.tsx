import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FlexBox from "src/components/flexBox";
import Layout from "src/components/layout";
import MainHeader from "src/components/mainHeader";
import RoundButton from "src/components/roundButton";
import UnderlinedButton from "src/components/underlinedButton";
import { useLogin } from "src/hooks/account/useLogin";
import * as Styled from "./index.style";

function DefaultLogin() {
  const navigate = useNavigate();
  const { login, isSuccess } = useLogin();

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

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

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

          <FlexBox justifyContent="center" alignItems="center" gap="12px" mt="2.4rem">
            <Styled.Typography>계정이 생각나지 않으신가요?</Styled.Typography>
            <Styled.Box>
              <UnderlinedButton text="아이디 찾기" onClick={() => navigate("/account/find-id")} />
              <UnderlinedButton text="비밀번호 찾기" onClick={() => navigate("/account/find-pw")} />
            </Styled.Box>
          </FlexBox>
        </div>
      </Layout>
    </>
  );
}

export default DefaultLogin;
