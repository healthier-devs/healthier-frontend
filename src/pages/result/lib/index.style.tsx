import { Heading_2 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Separator = styled.div`
  width: 2.4rem;
  height: 0.2rem;

  background: ${({ theme }) => theme.color.green};

  margin-bottom: 1.2rem;
`;

export const Title = styled(Heading_2)`
  color: ${({ theme }) => theme.color.grey_200};

  margin-bottom: 2rem;

  white-space: pre-line;
`;

export const RootContainer = styled.section`
  padding-bottom: 10.6rem;
`;
