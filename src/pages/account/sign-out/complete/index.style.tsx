import styled from "styled-components";

export const Text = styled.p`
  font-weight: 200;

  &.title {
    font-size: 2.4rem;
    line-height: 140%;
    color: ${({ theme }) => theme.color.grey_200};
  }

  &.sub-title {
    font-size: 1.6rem;
    line-height: 150%;
    color: ${({ theme }) => theme.color.grey_400};
    white-space: pre-line;
    text-align: center;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  margin-top: 16rem;
`;

export const Gradient = styled.div`
  height: 270px;
  width: inherit;

  position: absolute;
  bottom: 0;

  background: linear-gradient(180deg, rgba(38, 43, 85, 0) 0%, #262c56 78.12%, #282e5b 100%);
`;

export const Illustration = styled.img`
  height: 50%;

  position: absolute;
  bottom: 68px;
  right: 0px;
`;

export const Container = styled.div`
  height: 100%;
  width: inherit;

  box-sizing: border-box;
  padding-top: 16rem;

  position: relative;
`;
