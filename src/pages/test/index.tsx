import { validateToken, logout } from "src/api/account/service";
import * as Styled from "./index.style";

function Test() {
  const handleClickTokenTest = async () => {
    const data = await validateToken();

    if ("message" in data && "code" in data) {
      alert("인증 실패");

      return;
    }

    alert("인증 성공");
  };

  const handleClickLogout = async () => {
    await logout();

    alert("로그아웃이 완료되었습니다.");

    return;
  };

  return (
    <Styled.Container>
      <Styled.Button onClick={handleClickTokenTest} style={{ color: "#fff" }}>
        토큰 테스트
      </Styled.Button>

      <Styled.Button onClick={handleClickLogout}>로그아웃</Styled.Button>
    </Styled.Container>
  );
}

export default Test;
