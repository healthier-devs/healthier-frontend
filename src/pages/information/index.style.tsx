import { Heading_3 } from "src/lib/fontStyle";
import styled from "styled-components";

export const ButtonBackground = styled.div`
  width: calc(var(--vw, 1vw) * 100);

  position: fixed;
  bottom: 0;
  font-size: 1.3rem;
  box-sizing: border-box;

  padding: 10.4rem 2rem 3rem 2rem;

  background: linear-gradient(180deg, rgba(19, 20, 22, 0) 0%, rgba(19, 20, 22, 0.947917) 78.12%, #131416 100%);

  pointer-events: none;
`;

export const Title = styled(Heading_3)`
  color: ${({ theme }) => theme.color.grey_200};

  padding-top: 4rem;
  white-space: pre-line;
`;
