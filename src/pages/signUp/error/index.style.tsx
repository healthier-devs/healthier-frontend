import styled from "styled-components";

export const containerStyle: React.CSSProperties = {
  height: "100%",
  width: "inherit",
  paddingTop: "5.6rem",
  boxSizing: "border-box",
  background: "radial-gradient(300.02% 130.63% at 164.62% 165.58%, rgba(84, 100, 242, 0.9) 0%, rgba(52, 62, 135, 0) 100%), #131416",
};

export const TitleWrapper = styled.div`
  margin-top: 6.5rem;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 200;
  line-height: 140%;
  color: ${({ theme }) => theme.color.grey_200};

  text-align: center;
  white-space: pre-line;

  .bold {
    font-weight: 500;
  }
`;

export const SubTitleWrapper = styled.div`
  margin-top: 1.6rem;
`;

export const SubTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 200;
  line-height: 150%;
  color: ${({ theme }) => theme.color.grey_400};

  white-space: pre-line;
  text-align: center;

  & a {
    color: ${({ theme }) => theme.color.blue};
  }
`;

export const ConfirmButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: inherit;

  padding: 0 2rem 3.4rem;
  box-sizing: border-box;
`;

export const ImageWrapper = styled.div`
  width: 33%;
  margin-top: 11rem;

  .illustration {
    width: 100%;
  }
`;
