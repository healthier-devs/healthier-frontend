import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 3.2rem 2.4rem;
  flex-direction: column;
`;

export const Typography = styled.div`
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  letter-spacing: -0.3px;

  &.mainTitle {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.color.grey_200};
  }
  &.monthly {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.grey_400};
  }
  &.record {
    display: flex;
    flex-direction: row;
    font-weight: 200;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.color.grey_500};
    .highlight {
      color: ${({ theme }) => theme.color.sub_green};
    }
  }
  &.cardMainText {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.grey_200};
  }
`;

export const MainContent = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 4.2rem;
  padding-top: 0.8rem;
`;

export const MonthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const MonthTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.6rem;
`;

export const DiagnoseCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 18px;
  gap: 1.2rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.grey_850};
  .topArea {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .bottomArea {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 0.6rem;
  }
`;

export const Chip = styled.div`
  background-color: rgba(84, 100, 242, 0.2);
  border-radius: 0.8rem;
  padding: 0.4rem 0.8rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color.sub_blue};
  font-weight: 200;
`;

export const BottomShadowArea = styled.div`
  height: 13rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: linear-gradient(0deg, #131416 46.82%, rgba(19, 20, 22, 0) 100%);
`;
