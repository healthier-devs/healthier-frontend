import { Heading_3, Body_4 } from "src/lib/fontStyle";
import styled, { css } from "styled-components";
import type { CSSObject } from "styled-components";

export const TitleWrapper = styled.div`
  margin: 4rem 0;
`;

export const TitleText = styled(Heading_3)`
  color: ${({ theme }) => theme.color.grey_200};
`;

export const Description = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_500};
  margin-top: 0.8rem;

  white-space: pre-line;
`;

export const LoginButtonsContainer = styled.div`
  flex: 1;
`;

export const ResetPasswordContainer = styled.div``;

export const Typography = styled.p<{
  variant: "body1" | "body2" | "body3";
  color: "grey_200" | "grey_400" | "grey_500";
  underline?: boolean;
  style?: CSSObject;
}>`
  ${({ variant }) =>
    variant === "body1"
      ? css`
          font-size: 1.4rem;
          font-weight: 200;
        `
      : variant === "body2"
      ? css`
          font-size: 1.4rem;
          font-weight: 300;
        `
      : css`
          font-size: 1.3rem;
          font-weight: 200;
        `}
  color: ${({ color, theme }) =>
    color === "grey_200" ? theme.color.grey_200 : color === "grey_400" ? theme.color.grey_400 : theme.color.grey_500};
  line-height: 150%;
  ${({ style }) => style};
  ${({ underline, theme }) =>
    underline &&
    css`
      text-decoration: underline;
      text-decoration-color: ${theme.color.green};
      text-underline-offset: 4px;

      font-weight: 300;
      line-height: normal;
    `};
`;
