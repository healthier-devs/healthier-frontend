import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 12rem);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_200};

  text-align: center;
`;

export const Description = styled.h3`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_400};

  text-align: center;

  margin-top: 1.6rem;
`;

export const Icon = styled.img`
  width: 14.2rem;
  height: 14.2rem;

  margin-top: 7.8rem;
`;

export const BottomDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_200};

  text-align: center;

  margin-top: 3.2rem;
`;

export const BottomBackground = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 27rem;
  background: radial-gradient(305.24% 173.78% at 164.62% 165.58%, rgba(84, 100, 242, 0.9) 0%, rgba(52, 62, 135, 0) 100%);
`;

export const BottomCTA = styled.div`
  position: fixed;
  bottom: 3.4rem;
  left: 2rem;

  width: calc(100% - 4rem);
`;
