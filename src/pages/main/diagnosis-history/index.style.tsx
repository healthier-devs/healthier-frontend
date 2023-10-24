import styled from "styled-components";

export const Chip = styled.div`
  background: rgba(84, 100, 242, 0.2);

  padding: 4px 8px;
  border-radius: 8px;

  font-size: 1.2rem;
  font-weight: 200;
  color: ${({ theme }) => theme.color.sub_blue};
`;
