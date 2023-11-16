import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopNavigation = styled.div`
  height: 9.6rem;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  padding-bottom: 0.9rem;
  padding-right: 1.5rem;
  box-sizing: border-box;
`;

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  letter-spacing: -0.3px;
  padding: 4rem 2.4rem;
  .mainText {
    color: ${({ theme }) => theme.color.grey_200};
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 140%;
    margin-bottom: 1rem;
  }
  .subText {
    color: ${({ theme }) => theme.color.grey_500};
    font-size: 1.4rem;
    font-weight: 200;
    line-height: 150%;
  }
`;

export const CardArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 4rem;
  & > div {
    box-sizing: border-box;
    display: flex;
    height: 7.8rem;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 0.8rem;
    padding: 1.8rem;
    align-items: center;
    gap: 1.6rem;
    background-color: ${({ theme }) => theme.color.grey_800};
    > span {
      width: 100%;
      color: ${({ theme }) => theme.color.grey_200};
      font-size: 1.5rem;
      font-weight: 300;
      line-height: 140%;
      letter-spacing: -0.3px;
    }
  }

  .symptom__button {
    cursor: pointer;
  }
`;
