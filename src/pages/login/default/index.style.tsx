import styled from "styled-components";

export const TextField = styled.input<{ mb?: string }>`
  width: 100%;
  padding: 1.4rem 1.6rem;
  box-sizing: border-box;

  border-radius: 8px;
  margin-bottom: ${({ mb }) => mb};

  background: ${({ theme }) => theme.color.grey_800};
  color: ${({ theme }) => theme.color.grey_200};

  font-size: 1.4rem;
  font-weight: 200;
  line-height: 150%;

  ::placeholder {
    color: ${({ theme }) => theme.color.grey_600};
  }
`;

export const EmailLoginContainer = styled.div`
  margin-top: 5.4rem;
`;

export const Box = styled.div<{ mt?: string; mb?: string; margin?: string }>`
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin: ${({ margin }) => margin};

  text-align: center;
`;

export const Typography = styled.p`
  font-size: 1.3rem;
  font-weight: 200;
  line-height: 150%;
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
