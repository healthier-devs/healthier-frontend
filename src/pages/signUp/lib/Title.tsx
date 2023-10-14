import { Heading_3, Body_4 } from "src/lib/fontStyle";
import styled from "styled-components";

interface ITitleProps {
  text: string;
  description?: string;
  mb?: string;
}

function Title({ text, description, mb }: ITitleProps) {
  return (
    <TitleWrapper mb={mb}>
      <TitleText>{text}</TitleText>
      {description && <Description>{description}</Description>}
    </TitleWrapper>
  );
}

export default Title;

const TitleWrapper = styled.div<{ mb?: string }>`
  margin-top: 3.2rem;
  margin-bottom: ${({ mb = "5.4rem" }) => mb};
`;

const TitleText = styled(Heading_3)`
  color: ${({ theme }) => theme.color.grey_200};
  white-space: pre-line;
`;

const Description = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_500};
  margin-top: 0.6rem;

  white-space: pre-line;
`;
