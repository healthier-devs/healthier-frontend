import * as Styled from "./index.style";

interface IChallengeDescription {
  title?: string;
  highlight: string;
  children?: React.ReactNode;
}

function ChallengeDescription({ title, highlight, children }: IChallengeDescription) {
  return (
    <Styled.Container>
      <Styled.Divider />
      <Styled.Title>
        <span className="highlight">{highlight}</span>
        {title}
      </Styled.Title>
      {children}
    </Styled.Container>
  );
}

export default ChallengeDescription;
