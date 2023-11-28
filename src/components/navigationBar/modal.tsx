import styled from "styled-components";

interface IModal {
  onClickBackDrop: () => void;
  onClickConfirm: () => void;
}

function Modal({ onClickBackDrop, onClickConfirm }: IModal) {
  return (
    <>
      <BackDrop onClick={onClickBackDrop}>
        <Container onClick={(e) => e.stopPropagation()}>
          <TitleWrapper>
            <Title>
              로그인을 하면{"\n"}
              <span className="highlight">다양한 서비스</span>를 이용할 수 있어요
            </Title>

            <SubTitle>나에게 맞는 증상 감별부터 건강챌린지까지!</SubTitle>
          </TitleWrapper>
          <IllustrationWrapper>
            <Illustration src="/images/login/note.png" />
          </IllustrationWrapper>

          <Button onClick={onClickConfirm}>
            <span className="button-text">로그인하러 가기</span>
          </Button>
        </Container>
      </BackDrop>
    </>
  );
}

export default Modal;

const Button = styled.button`
  width: 100%;
  box-sizing: border-box;
  padding: 13px 0;
  border-radius: 30px;

  background: ${({ theme }) => theme.color.green};

  .button-text {
    color: #000;
    font-size: 15px;
    font-weight: 300;
    line-height: 150%;
    letter-spacing: -0.3px;
  }
`;

const Illustration = styled.img`
  display: block;

  width: 200px;
  height: 200px;

  margin: 0 auto;
`;
const IllustrationWrapper = styled.div`
  margin-bottom: 36px;
`;

const SubTitle = styled.p`
  color: ${({ theme }) => theme.color.grey_200};

  text-align: center;
  font-size: 14px;
  font-weight: 200;
  line-height: 150%;
  letter-spacing: -0.3px;
`;

const TitleWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.color.grey_100};

  font-size: 20px;
  font-weight: 300;
  line-height: 140%;
  letter-spacing: -0.3px;

  text-align: center;
  white-space: pre-line;

  margin-bottom: 8px;

  .highlight {
    color: ${({ theme }) => theme.color.green};
    font-weight: 500;
  }
`;

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);

  z-index: 99999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  border-radius: 8px;
  background: radial-gradient(258.31% 194.74% at -58.92% 120.58%, rgba(210, 250, 100, 0.9) 0%, rgba(84, 100, 243, 0) 100%), #5464f2;

  padding: 14px 20px;
  box-sizing: border-box;

  width: 320px;
`;
