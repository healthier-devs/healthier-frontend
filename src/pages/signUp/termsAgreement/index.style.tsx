import styled from "styled-components";

export const Box = styled.div<{ isEnabled: boolean }>`
  background: ${({ theme, isEnabled }) => (isEnabled ? theme.color.blue_300 : theme.color.grey_800)};
  padding: 1.8rem;
  border-radius: 8px;

  margin-bottom: 2rem;

  color: ${({ theme, isEnabled }) => (isEnabled ? theme.color.grey_900 : theme.color.grey_200)};
`;

export const Typography = styled.p`
  &.body1 {
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 140%;
  }

  &.body2 {
    color: ${({ theme }) => theme.color.grey_400};
    font-size: 1.4rem;
    font-weight: 200;
    line-height: 140%;

    flex: 1;
  }

  &.link {
    color: ${({ theme }) => theme.color.sub_blue};
    font-size: 1.3rem;
    font-weight: 200;
    line-height: 150%;
    text-decoration: underline;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 1.4rem;
`;

export const ListItem = styled.li``;
