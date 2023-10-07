import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5.6rem;
  width: 100%;

  padding: 3.2rem 0;
  box-sizing: border-box;

  overflow: hidden;
`;

export const Title = styled.h1`
  padding: 0 2rem;

  font-size: 2.4rem;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_200};
`;

export const TextfieldContainer = styled.div`
  margin-top: 5rem;
  padding: 0 2.4rem;
`;

export const BottomDescription = styled.p`
  position: absolute;
  bottom: 10.6rem;
  left: 2rem;
  width: calc(100% - 4rem);

  font-size: 1.4rem;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_500};
`;

export const BottomCTA = styled.div`
  position: fixed;
  bottom: 3.4rem;
  width: calc(var(--vw, 1vw) * 100);
  box-sizing: border-box;

  padding: 0 2rem;
`;
