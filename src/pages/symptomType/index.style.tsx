import { Heading_3 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.section`
  height: calc(100%);

  background: radial-gradient(300.02% 130.63% at 164.62% 165.58%, rgba(84, 100, 242, 0.9) 0%, rgba(52, 62, 135, 0) 100%) #131416;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;

export const Title = styled(Heading_3)`
  color: ${({ theme }) => theme.color.grey_200};
  text-align: center;

  margin-top: 7rem;
  margin-bottom: 6.6rem;
  white-space: pre-line;
`;

export const SymptomContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;

  & + & {
    margin-top: 1.2rem;
  }
`;

export const SymptomCategoryContainer = styled.ul`
  width: 100%;
  box-sizing: border-box;
  padding: 0 2rem;

  &: last-child {
    padding-bottom: 10rem;
  }
`;

export const NextButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;

  width: calc(var(--vw, 1vw) * 100);
  height: 18.6rem;
  box-sizing: border-box;

  position: fixed;
  bottom: 0;
  padding: 0rem 2rem 3.4rem 2rem;

  background: linear-gradient(180deg, rgba(38, 43, 85, 0) 0%, #262c56 78.13%, #282e5b 100%);
  pointer-events: none;
`;
