import styled, { css } from "styled-components";

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

  width: 28rem;
  background: ${({ theme }) => theme.color.grey_850};

  border-radius: 1.2rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3.2rem 0 2.8rem 0;
`;

export const ButtonContainer = styled.div`
  border-radius: 0 0 1.2rem 1.2rem;
  border-top: 0.6px solid ${({ theme }) => theme.color.grey_700};
  display: flex;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_200};

  text-align: center;
`;

export const TitleDescription = styled.h3`
  margin-top: 0.8rem;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_400};

  text-align: center;
`;

export const Image = styled.img`
  object-fit: contain;

  width: 13rem;
  height: 13rem;

  margin-top: 1.3rem;
`;

export const Description = styled.h4`
  margin-top: 1.2rem;

  font-size: 1.3rem;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_400};

  text-align: center;
`;

export const SingleButton = styled.button`
  flex: 1;
  padding: 1.4rem 0;

  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;

  color: ${({ theme }) => theme.color.blue};
`;

export const DoubleButton = styled.button<{ position: "left" | "right" }>`
  flex: 1;
  padding: 1.4rem 0;

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;

  color: ${({ theme, position }) => (position === "left" ? theme.color.grey_400 : theme.color.grey_100)};

  ${({ position }) =>
    position === "right" &&
    css`
      border-left: 0.6px solid ${({ theme }) => theme.color.grey_700};
    `}
`;
