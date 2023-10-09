import styled from "styled-components";

export const Box = styled.div<{ padding?: string; mt?: string; mb?: string }>`
  padding: ${({ padding }) => padding};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
`;
