import { Body_4 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3.2rem;

  .gender-container {
    display: flex;
  }

  div {
    width: calc(var(--vw, 1vw) * 100 - 5.8rem);

    + div {
      margin-left: 1rem;
    }
  }
`;

export const Title = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_300};

  margin-bottom: 0.8rem;
`;
