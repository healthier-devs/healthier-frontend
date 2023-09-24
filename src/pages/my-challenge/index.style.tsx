import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: calc(var(--vw, 1vw) * 100);

  height: 5.6rem;
  letter-spacing: 0.015rem;

  background: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 3;

  border-bottom: 0.5px solid ${({ theme }) => theme.color.grey_800};
`;

export const HeaderTitle = styled.p`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 200;
  line-height: 120%;
  letter-spacing: 0.015rem;

  color: ${({ theme }) => theme.color.grey_200};
`;

export const LeftButton = styled.section`
  width: 3.2rem;
  height: 3.2rem;

  margin-left: 1.5rem;

  cursor: pointer;
`;

export const RightButton = styled.section`
  width: 3.2rem;
  height: 3.2rem;

  margin-right: 1.5rem;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2.4rem;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TabTitle = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_200};

  .highlight {
    color: ${({ theme }) => theme.color.green};
  }
`;

export const SelectedLine = styled.div`
  height: 0.2rem;
  width: 7.2rem;
  background-color: ${({ theme }) => theme.color.blue};

  margin-top: 1.2rem;
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  margin: 2.4rem;
`;

export const ExtraChallengeButton = styled.div`
  padding: 2rem;
  border-radius: 1.4rem;
  background-color: ${({ theme }) => theme.color.grey_850};

  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.03rem;
    color: ${({ theme }) => theme.color.grey_200};
  }
`;

export const EmptyText = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_300};
  text-align: center;
`;

export const EmptyContainer = styled.ul`
  height: calc(100% - 20rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3.6rem;
`;
