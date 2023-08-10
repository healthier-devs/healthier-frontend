import styled from "styled-components";

export const Container = styled.main<{ padding?: string }>`
  padding-top: 5.6rem;
  width: 100%;
  padding: ${({ padding }) => (padding ? padding : "5.6rem 0 0 ")};
`;
