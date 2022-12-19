import styled from "styled-components";

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

export const BackButton = styled.section<{ back: boolean }>`
  opacity: ${({ back }) => (back ? 1 : 0)};

  width: 3.2rem;
  height: 3.2rem;

  margin-left: 1.5rem;
  margin-bottom: 0.9rem;

  cursor: pointer;
`;

export const QuitButton = styled.section<{ exit: boolean }>`
  opacity: ${({ exit }) => (exit ? 1 : 0)};

  margin-bottom: 0.9rem;
  margin-right: 1.5rem;

  cursor: pointer;
`;