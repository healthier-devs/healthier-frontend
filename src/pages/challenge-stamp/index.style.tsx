import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  width: inherit;
  top: 0;

  height: 5.6rem;
  letter-spacing: 0.015rem;

  background: transparent;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  z-index: 3;
`;

export const LeftButton = styled.section`
  width: 3.2rem;
  height: 3.2rem;

  margin-left: 1.5rem;
  margin-bottom: 0.9rem;

  cursor: pointer;
`;

export const RightButton = styled.section`
  width: 3.2rem;
  height: 3.2rem;

  margin-bottom: 0.9rem;
  margin-right: 1.5rem;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
  letter-spacing: -0.15px;

  color: ${({ theme }) => theme.color.grey_400};
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 241px;

  background-color: ${({ theme }) => theme.color.grey_800};
  border-radius: 0 0 3.2rem 3.2rem;
`;

export const TopContents = styled.div`
  margin-top: 5.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 2.4rem;

  font-size: 2.2rem;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.3px;

  color: ${({ theme }) => theme.color.grey_200};
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 1.2rem;
`;

export const Tag = styled.div`
  background: ${({ theme }) => theme.color.grey_700};
  color: ${({ theme }) => theme.color.grey_300};

  display: inline-block;

  padding: 0.8rem 1.2rem;
  border-radius: 6rem;

  font-size: 1.3rem;
  font-weight: 200;
`;

export const ProgressContainer = styled.div`
  width: calc(100% - 4.8rem);
`;

export const ProgressTextBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 0.8rem;

  font-size: 1.2rem;
  font-weight: 300;
  line-height: 140%;
  letter-spacing: -0.3px;

  color: ${({ theme }) => theme.color.grey_500};

  .highlight {
    color: ${({ theme }) => theme.color.green};
    font-weight: 500;
  }
`;

export const ProgressBar = styled.div`
  position: relative;
  box-sizing: border-box;

  height: 0.4rem;
  background-color: ${({ theme }) => theme.color.grey_600};
  border-radius: 2rem;

  margin-top: 3rem;

  overflow: hidden;
`;

export const CurrentProgress = styled.div<{ percent: number }>`
  position: absolute;
  width: ${({ percent }) => percent}%;
  height: 0.4rem;

  background-color: ${({ theme }) => theme.color.green};
`;
