import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.color.grey_200};
  text-align: center;
  font-size: 1.4rem;
  font-weight: 300;

  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-thickness: 0.8px;
  text-decoration-color: ${({ theme }) => theme.color.green};
`;
