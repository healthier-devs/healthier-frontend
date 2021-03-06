import styled from "styled-components";
import HeaderContainer from "./HeaderContainer";
import { useNavigate } from "react-router-dom";
import { IContentHeader } from "../../interfaces/component";

const Container = styled.section`
  color: ${({ theme }) => theme.color.grey_200};
  height: inherit;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  position: relative;
`;
const Title = styled.section`
  font-size: 1.6rem;
  font-weight: 200;

  margin-bottom: 1.6rem;
`;
const BackButton = styled.section<{ back: boolean }>`
  opacity: ${({ back }) => (back ? 1 : 0)};

  width: 3.2rem;
  height: 3.2rem;

  margin-left: 1.5rem;
  margin-bottom: 0.9rem;
`;
const QuitButton = styled.section`
  margin-bottom: 0.9rem;
  margin-right: 1.5rem;
`;

const ContentHeader = ({ text, back }: IContentHeader) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Container>
        <BackButton back={back} onClick={() => navigate(-1)}>
          <img
            alt="back"
            src="/images/header/back.svg"
            width={32}
            height={32}
          />
        </BackButton>
        <Title>{text}</Title>
        <QuitButton onClick={() => navigate("/")}>
          <img
            alt="quit"
            src="/images/header/quit.svg"
            width={32}
            height={32}
          />
        </QuitButton>
      </Container>
    </HeaderContainer>
  );
};

export default ContentHeader;
