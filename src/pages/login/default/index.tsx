import { useNavigate } from "react-router-dom";
import FlexBox from "src/components/flexBox";
import Layout from "src/components/layout";
import MainHeader from "src/components/mainHeader";
import RoundButton from "src/components/roundButton";
import TextDivider from "src/components/textDivider";
import UnderlinedButton from "src/components/underlinedButton";
import * as Styled from "./index.style";

function DefaultLogin() {
  const navigate = useNavigate();

  return (
    <>
      <MainHeader />
      <Layout padding="5.6rem 2.4rem 0" style={{ boxSizing: "border-box" }}>
        <div>
          <form>
            <Styled.Box mt="5.4rem">
              <Styled.TextField placeholder="이메일 주소를 입력해주세요" mb="12px" />
              <Styled.TextField placeholder="비밀번호를 입력해주세요" />
            </Styled.Box>

            <Styled.Box mt="3.2rem">
              <RoundButton>이메일로 로그인하기</RoundButton>
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
            <Styled.Icon src="/images/signup/kakao.png" />
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
