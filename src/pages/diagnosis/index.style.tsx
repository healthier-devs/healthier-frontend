import styled from "styled-components";
import { Heading_3, Body_1, Body_3 } from "src/lib/fontStyle";

export const Container = styled.section`
  height: 100%;
  background: radial-gradient(300.02% 130.63% at 164.62% 165.58%, rgba(84, 100, 242, 0.9) 0%, rgba(52, 62, 135, 0) 100%) #131416;
  background-attachment: fixed;

  overflow: auto;
  overflow-y: overlay;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;

export const Question = styled(Heading_3)`
  text-align: center;

  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 7rem;
  padding: 0 5rem;

  white-space: pre-line;
`;

export const LoadingTitle = styled(Heading_3)`
  font-weight: 200;
  text-align: center;
  word-break: keep-all;
  color: ${({ theme }) => theme.color.grey_200};

  .highlight {
    font-weight: 500;
  }
`;

export const LoadingIcon = styled.img`
  width: 26rem;
  height: 24.8rem;
`;

export const LoadingBottomText = styled.section`
  text-align: center;
`;

export const Tips = styled(Body_3)`
  font-weight: 200;
  letter-spacing: -0.05rem;

  color: ${({ theme }) => theme.color.grey_300};
`;

export const Description = styled(Body_1)`
  margin-top: 0.8rem;
  width: 17.2rem;

  color: ${({ theme }) => theme.color.grey_400};
`;
