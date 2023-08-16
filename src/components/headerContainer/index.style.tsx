import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  width: inherit;
  top: 0;

  height: 5.6rem;
  letter-spacing: 0.015rem;

  border-bottom: 0.05rem solid ${({ theme }) => theme.color.grey_800};

  background: ${({ theme }) => theme.color.grey_900};

  z-index: 3;
`;
