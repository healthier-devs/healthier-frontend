import { Heading_3 } from "src/lib/fontStyle";
import styled from "styled-components";

interface ITitleProps {
  text: string;
}

function Title({ text }: ITitleProps) {
  return (
    <TitleWrapper>
      <TitleText>{text}</TitleText>
    </TitleWrapper>
  );
}

export default Title;

const TitleWrapper = styled.div`
  margin-top: 3.2rem;
  margin-bottom: 5.4rem;
`;

const TitleText = styled(Heading_3)`
  color: ${({ theme }) => theme.color.grey_200};
`;
