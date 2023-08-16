import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  width: 100%;

  background: radial-gradient(300.02% 130.63% at 164.62% 165.58%, rgba(84, 100, 242, 0.9) 0%, rgba(52, 62, 135, 0) 100%), #131416;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.section<{ marginBottom: number }>`
  margin: 2rem 5rem ${({ marginBottom }) => marginBottom}rem 5rem;
`;

export const TitleContainer = styled.h1`
  text-align: center;

  font-size: 2.4rem;
  line-height: 140%;
  font-weight: 200;

  white-space: pre-line;
`;

export const SubtitleContainer = styled.div`
  margin-top: 1.5rem;
  .subtitle {
    color: ${({ theme }) => theme.color.grey_400};
    text-align: center;
    font-size: 1.6rem;
    font-weight: 200;
    line-height: 150%;
    white-space: pre-line;
  }
`;
