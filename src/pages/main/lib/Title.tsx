import { Box } from "src/lib/layoutStyle";
import styled from "styled-components";

interface ITitleProps {
  text: string;
}

function Title({ text }: ITitleProps) {
  return (
    <Box mb="12px">
      <StyledTitle>{text}</StyledTitle>
    </Box>
  );
}

export default Title;

const StyledTitle = styled.h1`
  color: #fff;

  font-size: 2rem;
  font-weight: 300;
  line-height: 140%;

  white-space: pre-line;
`;
