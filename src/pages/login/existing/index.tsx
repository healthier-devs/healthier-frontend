import AppleLogin from "react-apple-login";
import { useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import FlexBox from "src/components/flexBox";
import { useAppleLogin } from "src/hooks/account/useAppleLogin";
import * as Styled from "./index.style";
import LoginButton from "./LoginButton";

interface IExistingAccountProps {
  type: "KAKAO" | "APPLE" | "DEFAULT";
}

function ExistingAccount({ type }: IExistingAccountProps) {
  const navigate = useNavigate();

  const { handleAppleSignInSuccess, handleAppleSignOnFailure } = useAppleLogin();
  const handleClickKakaoButton = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&response_type=code&redirect_uri=${window.location.origin}/kakaoCallback`;
  };
  const handleClickLocalButton = () => {
    navigate("/login");
  };

  return (
    <>
      <ContentHeader back={false} exit={true} exitCallback={() => navigate("/signup")} />
      <FlexBox
        flexDirection="column"
        style={{ padding: "5.6rem 2.4rem 5.2rem", width: "inherit", height: "100%", boxSizing: "border-box" }}
      >
        <Styled.TitleWrapper>
          <Styled.TitleText>본인 인증된 계정이 있어요</Styled.TitleText>
          <Styled.Description>{"이전에 헬시어에 가입된 계정이 존재합니다.\n아래 계정으로 로그인 해주세요."}</Styled.Description>
        </Styled.TitleWrapper>

        <FlexBox flexDirection="column" gap="1.2rem" style={{ flex: 1 }}>
          {type === "KAKAO" && <LoginButton type="kakao" onClick={handleClickKakaoButton} />}
          {type === "APPLE" && (
            <AppleLogin
              clientId={process.env.REACT_APP_APPLE_CLIENT_ID!}
              redirectURI={process.env.REACT_APP_APPLE_REDIRECT_URI!}
              scope={"name email"}
              responseMode={"form_post"}
              usePopup={true}
              render={({ onClick }) => <LoginButton type="apple" onClick={onClick} />}
              callback={(d) => {
                if ("error" in d) {
                  handleAppleSignOnFailure(d);

                  return;
                }
                handleAppleSignInSuccess(d);
              }}
            />
          )}
          {type === "DEFAULT" && <LoginButton type="local" onClick={handleClickLocalButton} />}
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
