import { useNavigate } from "react-router-dom";
import AppleIcon from "src/assets/icons/AppleIcon";
import KakaoIcon from "src/assets/icons/KakaoIcon";
import Box from "src/components/box";
import FlexBox from "src/components/flexBox";
import RoundButton from "src/components/roundButton";
import TextDivider from "src/components/textDivider";
import UnderlinedButton from "src/components/underlinedButton";
import theme from "src/lib/theme";
import * as Styled from "./index.style";

function Onboard() {
  const navigate = useNavigate();

  const handleKakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=3283547109c01f4b0151d37037f15752&response_type=code&redirect_uri=${window.location.origin}/kakaoCallback`;
  };

  return (
    <Styled.Container>
      <Styled.Button onClick={() => navigate("/")}>홈 둘러보기</Styled.Button>

      <Styled.LogoContainer>
        <Box mb="2rem">
          <Styled.Logo src="/images/logo.png" />
        </Box>
        <Styled.Typography className="subtitle">
          현대인을 위한 온라인 증상감별 및{"\n"}
          건강관리 서비스
        </Styled.Typography>
      </Styled.LogoContainer>

      <Styled.LoginContainer>
        <Box mb="2.4rem">
          <RoundButton onClick={() => navigate("/login")}>이메일로 시작하기</RoundButton>
        </Box>

        <Box mb="2.2rem">
          <TextDivider text="또는 SNS 계정으로 시작하기" color={theme.color.grey_500} />
        </Box>

        <FlexBox gap="1.6rem" justifyContent="center" alignItems="center" mb="2rem">
          <Styled.LoginButton className="kakao" onClick={handleKakaoLogin}>
            <KakaoIcon width={30} height={30} />
          </Styled.LoginButton>

          <Styled.LoginButton className="apple">
            <AppleIcon width={30} height={30} />
          </Styled.LoginButton>
        </FlexBox>

        <FlexBox justifyContent="center" alignItems="center" gap="12px" mt="2rem">
          <Styled.Typography className="description">계정이 없으신가요?</Styled.Typography>
          <UnderlinedButton onClick={() => navigate("/signup")} text="회원가입하기" />
        </FlexBox>
      </Styled.LoginContainer>
    </Styled.Container>
  );
}

export default Onboard;
