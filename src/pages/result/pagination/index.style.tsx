import theme from "src/lib/theme";
import styled from "styled-components";

export const RootContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: calc(var(--vw) * 100);

  display: flex;
  justify-content: center;
  background: transparent;

  z-index: 5;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;

  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
`;

export const PaginationWrapper = styled.div`
  height: 186px;
  width: 100%;

  background: linear-gradient(180deg, rgba(19, 20, 22, 0) 0%, rgba(19, 20, 22, 0.95) 78.12%, #131416 100%);
  position: relative;
`;

export const Button = styled.button<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 1.3rem;

  background-color: ${({ isSelected }) => (isSelected ? theme.color.sub_blue : theme.color.grey_700)};
  color: ${({ isSelected }) => (isSelected ? theme.color.blue : theme.color.grey_300)};

  font-size: 1.2rem;
  font-weight: 200;
  line-height: 150%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonWrapper = styled.div`
  width: 2.6rem;
  height: 2.6rem;
`;

export const ReserveButtonWrapper = styled.div`
  width: 100%;

  padding: 4rem 2.4rem;

  box-sizing: border-box;
`;
