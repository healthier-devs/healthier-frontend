import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import FlexBox from "src/components/flexBox";
import styled from "styled-components";
import { Typography } from "./index.style";

interface ILoginButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: "local" | "kakao" | "apple";
}

function LoginButton({ type, ...props }: ILoginButtonProps) {
  return (
    <div>
      <Button {...props} className={type}>
        <FlexBox gap="1.6rem" alignItems="center">
          <Image src={`images/login/${type}.png`} />
          <LoginTextWrapper>
            <p
              className={classNames("login__text", {
                local: type === "local",
              })}
            >
              {type === "kakao" ? "카카오로 로그인" : type === "local" ? "이메일로 로그인" : "Apple로 로그인"}
            </p>
          </LoginTextWrapper>
        </FlexBox>
      </Button>
      {type === "local" && (
        <FlexBox gap="1.2rem" justifyContent="center" mt="2.4rem">
          <Typography variant="body3" color="grey_200">
            비밀번호를 잊으셨나요?
          </Typography>
          {/* TODO: 비밀번호 찾기 페이지 연결 */}
          <Link to="/account/find-pw">
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

const LoginTextWrapper = styled.div`
  flex: 1;

  .login__text {
    color: ${({ theme: { color } }) => color.grey_900};

    text-align: center;
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    font-weight: 500;
  }

  .local {
    color: ${({ theme: { color } }) => color.grey_200};
  }
`;

const Button = styled.button`
  width: 100%;
  height: 56px;

  padding: 0 22px;
  border-radius: 58px;

  cursor: pointer;

  &.apple {
    background: #fff;
  }

  &.kakao {
    background: #fee500;
  }

  &.local {
    background: ${({ theme: { color } }) => color.grey_800};
  }
`;

const Image = styled.img`
  width: 24px;
  height: 24px;

  position: absolute;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 140%;
  color: ${({ theme: { color } }) => color.grey_200};
  text-align: left;
`;
