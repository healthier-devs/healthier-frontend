import styled from "styled-components";

export const ListItem = styled.div`
  height: 18rem;
`;

export const RewardImage = styled.img`
  width: 100%;
  aspect-ratio: 165 / 100;
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
