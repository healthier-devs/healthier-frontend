import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4rem 2.4rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
`;

export const Title = styled.div`
  margin-top: 3.2rem;
  margin-bottom: 5.4rem;
  .Title {
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 140%;
    color: ${({ theme }) => theme.color.grey_200};
    white-space: pre-line;
  }
  .Desc {
    color: ${({ theme }) => theme.color.grey_500};
    margin-top: 0.6rem;
    white-space: pre-line;
    font-size: 1.4rem;
    font-weight: 200;
    line-height: 150%;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
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
  width: 100%;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 2rem 3.4rem 2rem;
`;
