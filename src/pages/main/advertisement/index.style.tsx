import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 107px;

  background: ${({ theme }) => theme.color.grey_700};

  position: relative;
`;

export const TitleContainer = styled.div`
  position: absolute;

  left: 42px;
  top: 0px;

  padding-top: 18px;
`;

export const ImageContainer = styled.div`
  width: 160px;
  height: 107px;

  position: absolute;
  right: 24px;
  top: 0;

  background: ${({ theme }) => theme.color.grey_800};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.grey_400};

  font-size: 1.3rem;
  font-weight: 200;
  line-heightL 140%;
`;
export const Title = styled.h3`
  color: ${({ theme }) => theme.color.grey_200};

  font-size: 1.6rem;
  font-weight: 300;
  line-height: 140%;

  margin-bottom: 6px;
`;
