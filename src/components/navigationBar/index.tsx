import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChallengeIcon from "src/assets/icons/navigation/ChallengeIcon";
import ExploreIcon from "src/assets/icons/navigation/ExploreIcon";
import HomeIcon from "src/assets/icons/navigation/HomeIcon";
import MypageIcon from "src/assets/icons/navigation/MypageIcon";
import FlexBox from "../flexBox";
import * as Styled from "./index.style";

type TMenu = "home" | "explore" | "diagnosis" | "challenge" | "mypage";

export default function NavigationBar() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState<TMenu>("home");

  const handleClickMenu = (clickedMenu: TMenu) => {
    setMenu(clickedMenu);
  };

  return (
    <Styled.Container>
      <div style={{ position: "relative" }}>
        <FlexBox>
          <Styled.SideBar className="left" />
          <Styled.MidBarImg src="images/navigation/mid.svg" />
          <Styled.SideBar className="right" />
        </FlexBox>

        <FlexBox style={{ position: "absolute", left: 0, bottom: "30px", width: "100%" }} alignItems="end" justifyContent="space-between">
          <Styled.Button
            onClick={() => {
              handleClickMenu("home");
              navigate("/");
            }}
          >
            <HomeIcon isSelected={menu === "home"} />
            <Styled.Typography isSelected={menu === "home"}>홈</Styled.Typography>
          </Styled.Button>

          <Styled.Button
            onClick={() => {
              handleClickMenu("explore");
              navigate("/appointment");
            }}
          >
            <ExploreIcon isSelected={menu === "explore"} />
            <Styled.Typography isSelected={menu === "explore"}>병원찾기</Styled.Typography>
          </Styled.Button>

          <Styled.Button
            className="center"
            onClick={() => {
              handleClickMenu("diagnosis");
              navigate("/info");
            }}
          >
            <Styled.DiagnosisButton />
            <Styled.Typography isSelected={menu === "diagnosis"}>증상감별</Styled.Typography>
          </Styled.Button>

          <Styled.Button
            onClick={() => {
              handleClickMenu("challenge");
              navigate("/challenge");
            }}
          >
            <ChallengeIcon isSelected={menu === "challenge"} />

            <Styled.Typography isSelected={menu === "challenge"}>건강챌린지</Styled.Typography>
          </Styled.Button>

          <Styled.Button onClick={() => handleClickMenu("mypage")}>
            <MypageIcon isSelected={menu === "mypage"} />
            <Styled.Typography isSelected={menu === "mypage"}>마이페이지</Styled.Typography>
          </Styled.Button>
        </FlexBox>
      </div>
    </Styled.Container>
  );
}
