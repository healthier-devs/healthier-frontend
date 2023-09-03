import styled from "styled-components";

function Container({ children }: { children: React.ReactNode }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;

const StyledContainer = styled.div`
  width: inherit;
  padding: 0 2rem;
  box-sizing: border-box;
`;
