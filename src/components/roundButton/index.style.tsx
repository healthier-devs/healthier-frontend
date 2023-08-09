import styled from "styled-components";

export const Container = styled.button<{
  backgroundColor: string;
  outline: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 5.2rem;

  background: ${({ backgroundColor }) => backgroundColor};

  border: ${({ outline }) => (outline === "none" ? "none" : `0.1rem solid ${outline}`)};
  border-radius: 3rem;
  box-sizing: border-box;
  cursor: pointer;
`;

export const ButtonText = styled.section<{ color: string }>`
  color: ${({ color }) => color};

  font-size: 1.6rem;
  font-weight: 300;
  line-height: 150%;

  text-align: center;
`;
