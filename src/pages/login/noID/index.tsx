import { useNavigate } from "react-router-dom";
import EmptyImageSrc from "src/assets/images/empty.png";
import ContentHeader from "src/components/contentHeader";
import RoundButton from "src/components/roundButton";
import * as Styled from "./index.style";

const NoID = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/signup/step1");
  };

  return (
    <>
      <ContentHeader back={false} exit={true} exitCallback={() => navigate("/")} />

      <Styled.RootContainer padding="0">
        <Styled.Container>
          <Styled.Message>가입 정보가 없어요</Styled.Message>
          <Styled.SubMessage>
            아직 헬시어 회원이 아니신가요?{"\n"}
            회원가입 후 다양한 건강 서비스로 만나요
          </Styled.SubMessage>
          <Styled.EmptyImage src={EmptyImageSrc} />
          <Styled.ButtonWrapper>
            <RoundButton onClick={handleClickButton} style={{ width: "100%" }}>
              회원 가입하기
            </RoundButton>
          </Styled.ButtonWrapper>
        </Styled.Container>
      </Styled.RootContainer>
    </>
  );
};

export default NoID;
