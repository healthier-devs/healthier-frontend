import styled from "styled-components";

export const InputsContainer = styled.div`
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  padding: 0 2.4rem;
`;

export const InputsWrapper = styled.div<{ gap: string }>`
  display: flex;
  gap: ${({ gap }) => gap};
`;

export const GenderButton = styled.button<{ isSelected: boolean }>`
  width: 100%;
  padding: 1.4rem 0;

  border-radius: 0.8rem;
  border: 1px solid ${({ theme, isSelected }) => (isSelected ? theme.color.sub_blue : theme.color.grey_600)};

  background: ${({ theme, isSelected }) => (isSelected ? theme.color.sub_blue : "transparent")};
  color: ${({ theme, isSelected }) => (isSelected ? theme.color.blue : theme.color.grey_600)};

  font-size: 1.4rem;
  line-height: 150%;
  font-weight: 200;

  cursor: pointer;
`;

export const NextButtonContainer = styled.div`
  position: fixed;
  bottom: 0;

  width: calc(var(--vw) * 100);
  box-sizing: border-box;
  padding: 0 2rem 3.4rem 2rem;
`;
