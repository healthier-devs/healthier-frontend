import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  overflow-y: auto;

  padding-bottom: 10rem;
`;

export const TopContainer = styled.div`
  position: fixed;
  top: 0;

  width: calc(var(--vw, 1vw) * 100);
  padding-bottom: 3rem;

  background-color: ${({ theme }) => theme.color.grey_800};
  border-radius: 0 0 3.2rem 3.2rem;

  z-index: 10;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 24rem;
`;

export const HeaderContainer = styled.div`
  width: inherit;

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

export const TopContents = styled.div`
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

export const InviteContainer = styled.div`
  width: calc(100% - 4rem);
  box-sizing: border-box;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.grey_850};
  padding: 1.6rem;

  margin-top: 3rem;

  cursor: pointer;

  .top-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const InviteTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.3px;

  color: ${({ theme }) => theme.color.grey_200};
`;

export const InviteDescription = styled.p`
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.3px;

  color: ${({ theme }) => theme.color.grey_400};

  margin-top: 0.7rem;
`;

export const CTAContainer = styled.div`
  position: fixed;
  bottom: 0;
  height: 186px;
  width: calc(var(--vw, 1vw) * 100);
  box-sizing: border-box;

  background: linear-gradient(180deg, rgba(19, 20, 22, 0) 0%, rgba(19, 20, 22, 0.95) 78.13%, #131416 100%);

  padding: 0 2rem 3.3rem;

  display: flex;
  align-items: flex-end;
`;

export const StampContainer = styled.div`
  width: calc(100% - 4.8rem);
  margin: 5rem 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 5.4rem;
`;

export const StampRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
