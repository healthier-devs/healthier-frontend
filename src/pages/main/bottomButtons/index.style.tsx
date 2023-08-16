import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  height: 10.9rem;
  width: inherit;

  background-image: url("/images/main-tab.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  justify-content: space-evenly;
`;

export const ButtonContainer = styled.button<{ gap: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ gap }) => gap}rem;
  width: 6.3rem;

  box-sizing: content-box;

  background: none;
  cursor: pointer;
`;

export const Diagnose = styled.div`
  border-radius: 6rem;
  width: 5.8rem;
  height: 5.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.blue};
`;

export const ButtonText = styled.p`
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 200;
  line-height: 140%;
  letter-spacing: -0.035px;

  color: ${({ theme }) => theme.color.grey_400};
`;
