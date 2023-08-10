import { Body_3 } from "src/lib/fontStyle";
import styled from "styled-components";
import { RootContainer, Title as TitleLib } from "../lib/index.style";

export const Container = styled(RootContainer)`
  padding-top: 5.6rem;

  padding-left: 2.4rem;
  padding-right: 2.4rem;
`;

export const Description = styled(Body_3)`
  color: ${({ theme }) => theme.color.grey_300};

  margin-top: 0.6rem;
`;

export const TitleWrapper = styled.div`
  margin-top: 2rem;
`;

export const Title = styled(TitleLib)`
  margin-bottom: 0.8rem;
`;
