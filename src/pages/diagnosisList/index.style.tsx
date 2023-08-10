import { Heading_3 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Title = styled(Heading_3)<{ padding: string }>`
  color: ${({ theme }) => theme.color.grey_200};

  padding: ${({ padding }) => padding};

  white-space: pre-line;

  .highlight {
    color: ${({ theme }) => theme.color.green};
  }
`;

export const List = styled.div`
  margin-top: 0.6rem;
`;

export const ExtraResultsTitle = styled(Heading_3)<{ padding?: string }>`
  color: ${({ theme }) => theme.color.grey_200};

  padding: ${({ padding }) => padding};
  white-space: pre-line;
`;
