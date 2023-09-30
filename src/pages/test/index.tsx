import { validateToken } from "src/api/account/service";
import * as Styled from "./index.style";

function Test() {
  const handleClickTokenTest = async () => {
    const data = validateToken();

    if ("message" in data && "code" in data) {
      alert("인증 실패");

      return;
    }

    alert("인증 성공");
  };

  return (
    <Styled.Container>
      <button onClick={handleClickTokenTest} style={{ color: "#fff" }}>
        토큰 테스트
      </button>
    </Styled.Container>
  );
}

export default Test;
