import { Heading_3 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Title = styled(Heading_3)`
  padding: 4rem 2.4rem 0 2.4rem;

  color: ${({ theme }) => theme.color.grey_100};

  .strong {
    font-weight: 500;
  }
`;

export const MainImage = styled.div`
  padding: 4.5rem 7.5rem 15.4rem 7.5rem;
  box-sizing: border-box;
  margin: auto;
  overflow-y: hidden;

  .image {
    width: 100%;
    object-fit: contain;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
