import { useNavigate } from "react-router-dom";
import Bookmark from "src/assets/icons/main/Bookmark";
import Diagnose from "src/assets/icons/main/Diagnose";
import Search from "src/assets/icons/main/Search";
import * as Styled from "./index.style";

const BottomButtons = ({ openModal }: { openModal: () => void }) => {
  const navigate = useNavigate();

  return (
    <Styled.Container>
      <Styled.ButtonContainer gap={0.5} style={{ marginTop: "1.7rem" }} onClick={() => navigate("/appointment")}>
        <Search />
        <Styled.ButtonText>병원 찾기</Styled.ButtonText>
      </Styled.ButtonContainer>

      <Styled.ButtonContainer gap={0.7} onClick={() => navigate("/info")}>
        <Styled.Diagnose>
          <Diagnose />
        </Styled.Diagnose>
        <Styled.ButtonText>빠른 증상감별</Styled.ButtonText>
      </Styled.ButtonContainer>

      <Styled.ButtonContainer gap={0.5} style={{ marginTop: "1.7rem" }} onClick={openModal}>
        <Bookmark />
        <Styled.ButtonText>건강 기록장</Styled.ButtonText>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};

export default BottomButtons;
