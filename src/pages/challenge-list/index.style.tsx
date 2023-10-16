import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
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

  border-bottom: ${({ theme }) => `0.5px solid ${theme.color.grey_800}`};
`;

export const LeftButton = styled.div`
  width: 3.2rem;
  height: 3.2rem;

  margin-left: 1.5rem;
  margin-bottom: 0.9rem;
`;

export const HeaderTitle = styled.div`
  margin-bottom: 1.8rem;

  font-size: 1.6rem;
  font-weight: 200;
  line-height: 120%;
  letter-spacing: 0.015rem;

  color: ${({ theme }) => theme.color.grey_200};
`;

export const RightButton = styled.div`
  width: 3.2rem;
  height: 3.2rem;

  margin-bottom: 0.9rem;
  margin-right: 2.3rem;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  p {
    position: absolute;
    right: 0;

    font-size: 1.4rem;
    font-weight: 300;
    line-height: 120%;
    letter-spacing: -0.15px;

    color: ${({ theme }) => theme.color.grey_400};

    white-space: nowrap;
  }
`;

export const Categories = styled.ul`
  display: flex;
  gap: 1.6rem;
  padding: 2rem 2.4rem;
  overflow-x: auto;
`;

export const Item = styled.li<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  .label {
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 150%;
    letter-spacing: -0.5px;

    color: ${({ theme, isSelected }) => (isSelected ? theme.color.grey_200 : theme.color.grey_500)};
  }

  .background {
    background: ${({ theme, isSelected }) => (isSelected ? theme.color.blue : theme.color.sub_blue)};
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0.6)};
    border: ${({ theme, isSelected }) => `1.5px solid ${isSelected ? theme.color.sub_blue : "transparent"}`};
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6.4rem;
  height: 6.4rem;

  border-radius: 3.2rem;
`;

export const Img = styled.img`
  width: 4.9rem;
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  margin: 1.2rem 2.4rem;
`;
