import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 1.6rem;
`;
export const Item = styled.li<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;

  cursor: pointer;

  .label {
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 150%;
    letter-spacing: -0.5px;

    color: ${({ theme, isSelected }) => (isSelected ? theme.color.grey_300 : theme.color.grey_600)};

    text-align: center;
  }

  .background {
    border: ${({ theme, isSelected }) => `1.5px solid ${isSelected ? theme.color.grey_300 : "transparent"}`};
  }

  .img {
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6.4rem;
  height: 6.4rem;

  border-radius: 3.2rem;
  background: rgba(84, 100, 242, 0.5);
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
