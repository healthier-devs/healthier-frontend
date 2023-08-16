import styled from "styled-components";

export const Container = styled.main<{ padding?: string }>`
  width: 100%;
  padding: ${({ padding }) => (padding ? padding : "5.6rem 0 0 0")};
`;
