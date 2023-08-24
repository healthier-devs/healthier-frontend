import { Heading_5 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
`;

export const Divider = styled.div`
  width: 24px;
  height: 2px;
  background-color: #d2fa64;
  margin-bottom: 1.2rem;
`;

export const Title = styled(Heading_5)`
  .highlight {
    color: #d2fa64;
    font-weight: 500;
  }

  color: ${({ theme }) => theme.color.grey_200};
  font-weight: 300;
  margin-bottom: 1.2rem;
`;
