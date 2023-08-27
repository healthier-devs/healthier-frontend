import styled from "styled-components";

export const RootContainer = styled.header<{ borderBottom: boolean }>`
  position: fixed;
  width: inherit;
  top: 0;

  height: 5.6rem;
  letter-spacing: 0.015rem;

  border-bottom: ${({ theme, borderBottom }) => (borderBottom ? `0.5px solid ${theme.color.grey_800}` : "none")};

  background: transparent;

  z-index: 3;
`;

export const Container = styled.section`
  color: ${({ theme }) => theme.color.grey_200};
  height: inherit;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  position: relative;

  .title {
    font-size: 1.6rem;
    font-weight: 200;

    margin-bottom: 1.6rem;
  }
`;

export const BackButton = styled.section<{ visible: boolean }>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};

  width: 3.2rem;
  height: 3.2rem;

  margin-left: 1.5rem;
  margin-bottom: 0.9rem;

  cursor: pointer;
`;

export const ExitButton = styled.section<{ visible: boolean }>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};

  width: 3.2rem;
  height: 3.2rem;

  margin-bottom: 0.9rem;
  margin-right: 1.5rem;

  cursor: pointer;
`;
