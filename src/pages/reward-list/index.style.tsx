import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5.6rem;
  width: 100%;

  padding: 4rem 2.4rem;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_200};
`;

export const ListTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_400};
`;

export const ListContainer = styled.div`
  margin-top: 1.6rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.2rem;
  row-gap: 1.6rem;
`;

export const ListItem = styled.div`
  height: 16.5rem;
`;

export const RewardImage = styled.img`
  width: 16.5rem;
  height: 10rem;
  border-radius: 1rem;
`;

export const ListItemContent = styled.div`
  margin-top: 1.2rem;
`;

export const ListItemTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_400};
`;

export const ListItemPoint = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_200};
`;
