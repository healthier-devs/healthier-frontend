import styled from "styled-components";

export const Line = styled.div`
  flex: 1;
  height: 0.6px;
  background: ${({ theme }) => theme.color.grey_600};
`;
export const Text = styled.span`
  color: ${({ theme }) => theme.color.grey_600};
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 150%;
`;
