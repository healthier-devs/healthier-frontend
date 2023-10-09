import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 2rem;
  bottom: 10rem;

  background-color: ${({ theme }) => theme.color.grey_750};
  border-radius: 0.8rem;

  padding: 1rem 1.6rem;
  box-sizing: border-box;

  width: calc(100% - 4rem);
`;

export const Text = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_400};

  text-align: center;
`;
