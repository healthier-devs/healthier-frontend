import { useNavigate } from "react-router-dom";
import { accountFetcher } from "src/api/account/fetcher";
import { validateToken, logout } from "src/api/account/service";
import * as Styled from "./index.style";

function Test() {
  const navigate = useNavigate();
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

  const handleClickFCM = async () => {
    const data = await accountFetcher.getFCMToken();

    console.log(data);
  };

  return (
    <Styled.Container>
      <Styled.Button onClick={handleClickTokenTest} style={{ color: "#fff" }}>
        토큰 테스트
      </Styled.Button>

      <Styled.Button onClick={handleClickLogout}>로그아웃</Styled.Button>
      <Styled.Button onClick={handleClickFCM}>fcm</Styled.Button>

      <Styled.Button
        onClick={() =>
          navigate("/login", {
            state: {
              type: "local",
            },
          })
        }
      >
        중복 가입
      </Styled.Button>
    </Styled.Container>
  );
}

export default Test;
