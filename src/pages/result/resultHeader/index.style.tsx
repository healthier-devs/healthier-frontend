import styled from "styled-components";

export const HeaderContainer = styled.header<{ isCover: boolean }>`
  position: fixed;

  height: 5.6rem;
  width: inherit;
  letter-spacing: 0.015rem;

  border-bottom: ${({ isCover, theme }) => !isCover && `0.05rem solid ${theme.color.grey_800}`};

  z-index: 3;

  background-color: ${({ isCover, theme }) => (isCover ? "transparent" : theme.color.grey_900)};
`;

export const Container = styled.div`
  height: inherit;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  position: relative;

  .back-button {
    width: 3.2rem;
    height: 3.2rem;

    margin-left: 1.5rem;
    margin-bottom: 0.9rem;

    cursor: pointer;
  }

  .exit-button {
    margin-bottom: 0.9rem;
    margin-right: 1.5rem;

    cursor: pointer;
  }
`;

export const Title = styled.span<{ isCover: boolean }>`
  color: ${({ theme }) => theme.color.grey_200};
  font-size: 1.6rem;
  font-weight: 200;

  margin-bottom: 1.6rem;

  opacity: ${({ isCover }) => isCover && 0};
`;
