import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import FlexBox from "src/components/flexBox";
import * as Styled from "./index.style";
import LoginButton from "./LoginButton";

interface IExistingAccountProps {
  email: string;
}

function ExistingAccount({ email }: IExistingAccountProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email, navigate]);

  return (
    <>
      <ContentHeader back={false} exit={true} exitCallback={() => navigate("/signup")} />
      <FlexBox flexDirection="column" style={{ padding: "5.6rem 2.4rem 5.2rem", width: "inherit" }}>
        <Styled.TitleWrapper>
          <Styled.TitleText>본인 인증된 계정이 있어요</Styled.TitleText>
          <Styled.Description>{"이전에 헬시어에 가입된 계정이 존재합니다.\n아래 계정으로 로그인 해주세요."}</Styled.Description>
        </Styled.TitleWrapper>

        <FlexBox flexDirection="column" gap="1.2rem" style={{ flex: 1 }}>
          <LoginButton type="kakao" email={email} />
          <LoginButton type="apple" email={email} />
          <LoginButton type="email" email={email} />
        </FlexBox>

        <Styled.ResetPasswordContainer>
          <Styled.Typography variant="body2" color="grey_200" style={{ marginBottom: "6px" }}>
            비밀번호 재설정 안내
          </Styled.Typography>
          <Styled.Typography variant="body3" color="grey_400">
            • 이메일 가입 회원만 비밀번호 재설정이 가능합니다.
          </Styled.Typography>
          <Styled.Typography variant="body3" color="grey_400">
            • SNS 연동 계정은 해당 사이트에서 확인하세요.
          </Styled.Typography>
        </Styled.ResetPasswordContainer>
      </FlexBox>
    </>
  );
}

export default ExistingAccount;
