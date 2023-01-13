import styled from "styled-components";
import { Heading_3 } from "src/lib/fontStyle";

export const Container = styled.div`
  width: calc(var(--vw, 1vw) * 100);
  height: calc(var(--vh, 1vh) * 100);
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
  height: 24rem;
`;
