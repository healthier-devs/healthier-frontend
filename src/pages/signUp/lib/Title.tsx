import { Heading_3, Body_4 } from "src/lib/fontStyle";
import styled from "styled-components";

interface ITitleProps {
  text: string;
  description?: string;
}

function Title({ text, description }: ITitleProps) {
  return (
    <TitleWrapper>
      <TitleText>{text}</TitleText>
      {description && <Description>{description}</Description>}
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

const Description = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_500};
  margin-top: 0.6rem;

  white-space: pre-line;
`;
