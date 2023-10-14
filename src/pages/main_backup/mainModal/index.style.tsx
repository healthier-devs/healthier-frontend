import styled from "styled-components";
import { Heading_5 } from "src/lib/fontStyle";

export const Title = styled(Heading_5)`
  color: ${({ theme }) => theme.color.grey_200};
  text-align: center;

  font-size: 2rem;

  margin: 1.2rem 3rem 0 3rem;

  .highlight {
    font-weight: 500;

    color: ${({ theme }) => theme.color.green};
  }
`;
