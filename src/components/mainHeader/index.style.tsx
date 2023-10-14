import styled from "styled-components";

export const Container = styled.div`
  height: inherit;

  display: flex;
  justify-content: center;

  font-size: 3rem;
  color: ${({ theme }) => theme.color.grey_100};

  .logo {
    margin-top: 1.6rem;
    cursor: pointer;
  }
`;
