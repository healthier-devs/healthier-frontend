import styled from "styled-components";

export const Box = styled.div<{ padding?: string; mt?: string; mb?: string }>`
  padding: ${({ padding }) => padding};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
`;

export const Typography = styled.p`
  &.title-1 {
    color: ${({ theme }) => theme.color.grey_500};
    font-size: 1.4rem;
    font-weight: 300;
  }

  &.title-2 {
    color: ${({ theme }) => theme.color.grey_200};
    font-size: 1.6rem;
    font-weight: 200;
    line-height: 150%;
  }

  &.description {
    color: ${({ theme }) => theme.color.grey_400};
    font-size: 1.4rem;
    font-weight: 200;
    line-height: 150%;
  }
`;
