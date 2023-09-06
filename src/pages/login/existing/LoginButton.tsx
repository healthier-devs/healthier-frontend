import { Link } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import FlexBox from "src/components/flexBox";
import theme from "src/lib/theme";
import styled from "styled-components";
import { Typography } from "./index.style";

interface ILoginButtonProps {
  type: "email" | "kakao" | "apple";
  email: string;
}

function LoginButton({ type, email }: ILoginButtonProps) {
  const titleText = type === "email" ? "이메일로 로그인하기" : type === "kakao" ? "카카오 계정으로 로그인하기" : "애플 계정으로 로그인하기";

  return (
    <div>
      <Button>
        <FlexBox gap="1.6rem">
          <Image src={`images/login/${type}.png`} />
          <FlexBox flexDirection="column" style={{ flex: 1 }}>
            <Title>{titleText}</Title>
            <Typography variant="body1" color="grey_500" style={{ textAlign: "left" }}>
              {email}
            </Typography>
          </FlexBox>
          <ChevronRightIcon width={24} height={24} stroke={theme.color.grey_500} strokeWidth={2} d="M9 18L15 12L9 6" />
        </FlexBox>
      </Button>
      {type === "email" && (
        <FlexBox gap="1.2rem" justifyContent="center" mt="2.4rem">
          <Typography variant="body3" color="grey_200">
            비밀번호를 잊으셨나요?
          </Typography>
          {/* TODO: 비밀번호 찾기 페이지 연결 */}
          <Link to="/login/findPassword">
            <Typography variant="body3" color="grey_200" underline>
              비밀번호 재설정하기
            </Typography>
          </Link>
        </FlexBox>
      )}
    </div>
  );
}

export default LoginButton;

const Button = styled.button`
  width: 100%;
  padding: 2rem 1.8rem 1.6rem;
  border-radius: 8px;

  background: ${({ theme: { color } }) => color.grey_800};

  cursor: pointer;
`;

const Image = styled.img`
  width: 4.2rem;
  height: 4.2rem;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 140%;
  color: ${({ theme: { color } }) => color.grey_200};
  text-align: left;
`;
