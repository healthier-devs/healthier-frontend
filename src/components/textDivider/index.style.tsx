import theme from "src/lib/theme";
import styled from "styled-components";

export const Line = styled.div<{
  color?: string;
}>`
  flex: 1;
  height: 0.6px;
  background: ${({ color = theme.color.grey_600 }) => color};
`;
export const Text = styled.span`
  color: ${({ color = theme.color.grey_600 }) => color};
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 150%;
`;
