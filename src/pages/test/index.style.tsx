import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: var(
    --gradation,
    radial-gradient(305.24% 173.78% at 164.62% 165.58%, rgba(84, 100, 242, 0.9) 0%, rgba(52, 62, 135, 0) 100%),
    #131416
  );

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.blue};
  padding: 1rem 2rem;
  border-radius: 2rem;
  color: #fff;
  font-weight: 200;
`;
