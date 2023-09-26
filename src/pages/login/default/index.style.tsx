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

export const LoginButton = styled.button<{ mb?: string }>`
  display: flex;

  width: 100%;
  padding: 1.4rem 2.4rem;
  margin-bottom: ${({ mb }) => mb};

  border-radius: 38px;

  &.kakao {
    background: #ffeb3b;

    > span {
      color: ${({ theme }) => theme.color.grey_900};
    }
  }

  &.apple {
    background: ${({ theme }) => theme.color.grey_700};

    > span {
      color: ${({ theme }) => theme.color.grey_100};
    }
  }
`;

export const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export const LoginText = styled.span`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 150%;

  flex: 1;
`;
