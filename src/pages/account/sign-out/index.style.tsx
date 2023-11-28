import styled from "styled-components";

export const Container = styled.div<{ padding?: string }>`
  width: inherit;
  box-sizing: border-box;

  padding: ${({ padding }) => padding};

  .signout__agree__box {
    padding: 18px;

    border-radius: 8px;
    background: ${({ theme }) => theme.color.grey_800};
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-family: Spoqa Han Sans Neo;

  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.color.grey_200};
  white-space: pre-line;
`;

export const RootContainer = styled.div`
  width: inherit;
`;

export const List = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;

  &.signout__term__list {
    padding-inline-start: 20px;
  }

  .signout__term__desc {
    color: ${({ theme }) => theme.color.grey_300};
    font-family: Spoqa Han Sans Neo;
    font-size: 13px;
    font-weight: 400;
    line-height: 150%;
    list-style: disc;
  }

  .signout__reason {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0;
    cursor: pointer;
  }
`;

export const Typography = styled.p`
  &.signout__term__title {
    color: ${({ theme }) => theme.color.grey_400};
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
  }

  &.signout__reason__select {
    color: ${({ theme }) => theme.color.grey_400};
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0;
  }

  &.signout__agree {
    color: ${({ theme }) => theme.color.grey_200};
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    font-weight: 500;
  }

  &.signout__reason__desc {
    color: ${({ theme }) => theme.color.grey_400};
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    font-weight: 400;
  }
  &.reason__item__selected {
    color: ${({ theme }) => theme.color.grey_200};
    font-weight: 500;
  }

  &.reason__selected {
    color: ${({ theme }) => theme.color.blue_500};
    font-weight: 700;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.grey_800};
  border-radius: 8px;
  padding: 8px 10px;

  color: ${({ theme }) => theme.color.grey_400};
  font-family: Spoqa Han Sans Neo;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const NextButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;

  width: inherit;
`;
