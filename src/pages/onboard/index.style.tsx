import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: inherit;

  background: radial-gradient(305.24% 173.78% at 164.62% 165.58%, rgba(84, 100, 242, 0.9) 0%, rgba(52, 62, 135, 0) 100%), #131416;

  position: relative;
`;

export const Button = styled.button`
  position: absolute;
  top: 6rem;
  right: 2rem;

  color: ${({ theme }) => theme.color.grey_400};
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 150%;

  padding: 0;
`;

export const Logo = styled.img`
  width: 245px;
  height: 42px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 20rem;
  left: 0;
  right: 0;

  margin-left: auto;
  margin-right: auto;

  text-align: center;
`;

export const Typography = styled.p`
  white-space: pre-line;

  &.subtitle {
    color: ${({ theme }) => theme.color.grey_200};
    font-size: 1.6rem;
    font-weight: 200;
    line-height: 150%;
  }

  &.description {
    font-size: 1.3rem;
    font-weight: 200;
    line-height: 150%;
  }
`;

export const LoginContainer = styled.div`
  position: absolute;
  bottom: 4.2rem;

  width: inherit;
  padding: 0 2rem;
  box-sizing: border-box;
`;

export const LoginButton = styled.button<{ mr?: string }>`
  width: 54px;
  height: 54px;

  margin-right: ${({ mr }) => mr};

  border-radius: 27px;

  &.kakao {
    background: #fee500;
  }

  &.apple {
    background: ${({ theme }) => theme.color.grey_100};
  }
`;
