import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 4rem 2.4rem;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 300;
  line-height: 140%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_200};
`;

export const SubTitle = styled.div`
  margin-top: 5rem;

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
`;

export const ExtraRewardButton = styled.div`
  padding: 2rem;
  border-radius: 1.4rem;
  background-color: ${({ theme }) => theme.color.grey_850};

  display: flex;
  justify-content: space-between;

  margin-top: 1rem;

  p {
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 150%;
    letter-spacing: -0.03rem;
    color: ${({ theme }) => theme.color.grey_200};
  }
`;

export const CurrentChallengeList = styled.div`
  margin-top: 3.2rem;
`;

export const CurrentChallengeBox = styled.div`
  & + & {
    margin-top: 3.8rem;
  }
`;

export const ChallengeTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 140%;
  letter-spacing: -0.3px;

  color: ${({ theme }) => theme.color.grey_200};
`;

export const RewardBox = styled.div`
  background-color: ${({ theme }) => theme.color.grey_850};
  border-radius: 0.8rem;

  padding: 1rem 1.8rem;
  height: 3.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 0.8rem;
  }
`;

export const RewardDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 130%;
  letter-spacing: -0.05rem;

  color: ${({ theme }) => theme.color.grey_300};
`;

export const NotCertificatedText = styled.p`
  font-size: 1.3rem;
  font-weight: 200;
  line-height: 130%;
  letter-spacing: -0.05rem;

  color: ${({ theme }) => theme.color.grey_650};
`;

export const CertificatedButton = styled.button<{ isFinish: boolean }>`
  border-radius: 0.8rem;
  padding: 0.8rem 1rem;

  ${({ isFinish }) =>
    isFinish
      ? css`
          background-color: ${({ theme }) => theme.color.grey_750};
          color: ${({ theme }) => theme.color.grey_400};
        `
      : css`
          background-color: ${({ theme }) => theme.color.blue};
          color: ${({ theme }) => theme.color.grey_100};
        `}
`;
