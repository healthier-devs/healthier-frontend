import styled from "styled-components";

interface ITitle {
  text: string;
}

function Title({ text }: ITitle) {
  return (
    <Container>
      <H1>{text}</H1>
    </Container>
  );
}

export default Title;

const Container = styled.div`
  margin-top: 70px;
  margin-bottom: 38px;
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.color.grey_200};
  text-align: center;
  font-size: 24px;
  font-weight: 300;

  white-space: pre-line;
  height: 68px;
`;
