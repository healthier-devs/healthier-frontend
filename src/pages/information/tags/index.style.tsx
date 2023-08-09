import { Body_4 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3.2rem;
`;

export const Title = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_300};
`;

export const TagContainer = styled.section`
  display: -webkit-flexbox;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
`;

export const TagBox = styled.section`
  margin-top: 0.8rem;
  margin-right: 0.8rem;
`;
