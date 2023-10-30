import styled from "styled-components";

export const BannerContainer = styled.div<{ image: string }>`
  position: relative;

  height: 140px;

  border-radius: 8px;
  background: ${({ theme }) => theme.color.blue};
  background-image: url(${({ image }) => image});
  background-size: cover;
`;

export const TextContainer = styled.div`
  position: absolute;
  left: 16px;
  top: 20px;
`;

export const TitleContainer = styled.div`
  width: fit-content;
  padding: 4px 6px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.blue_400};
  background: ${({ theme }) => theme.color.blue_500};

  margin-bottom: 18px;

  .title {
    color: ${({ theme }) => theme.color.grey_100};

    font-size: 2rem;
    font-weight: 300;
    letter-spacing: -0.5px;
  }
`;

export const Description = styled.p`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 150%;

  white-space: pre-line;
`;

export const Illustration = styled.img`
  position: absolute;
  right: 0;

  height: 140px;
`;
