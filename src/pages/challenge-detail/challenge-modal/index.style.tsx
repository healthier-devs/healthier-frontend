import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;

  width: 32rem;
  background: ${({ theme }) => theme.color.grey_850};

  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Space = styled.div<{ height: number }>`
  height: ${({ height }) => height}rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_200};
`;

export const Description = styled.div`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_400};
`;

export const Image = styled.img`
  width: 16rem;
  height: 16rem;
`;
