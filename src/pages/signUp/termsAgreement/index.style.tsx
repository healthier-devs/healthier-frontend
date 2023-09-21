import styled from "styled-components";

export const Box = styled.div`
  background: ${({ theme }) => theme.color.blue_300};
  padding: 1.8rem;
  border-radius: 8px;

  margin-bottom: 2rem;
`;

export const Typography = styled.p`
  line-height: 140%;

  &.body1 {
    color: ${({ theme }) => theme.color.grey_900};
    font-size: 1.6rem;
    font-weight: 300;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li``;
