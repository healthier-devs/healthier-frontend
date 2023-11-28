import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useGetStatistics } from "src/hooks/diagnosis/useGetStatistics";
import { Box } from "../index.style";
import Title from "../lib/Title";
import * as Styled from "./index.style";
import type { IAuthState } from "src/state";

function Symptoms({ authenticated }: Pick<IAuthState, "authenticated">) {
  const { statisticsData } = useGetStatistics({ authenticated });
  const navigate = useNavigate();

  const handleClickTitle = () => {
    if (authenticated) {
      return;
    }

    navigate("/onboard");
  };

  return (
    <Box>
      <Title
        text={
          authenticated
            ? `🤒 ${statisticsData.ageGroup} 헬시언들은\n다음 증상이 많아요 `
            : "🤒 로그인하면 내가 유의해야 하는 질병을 맞춤으로 알려 줘요"
        }
      />
      <Styled.BannerContainer image={statisticsData.image ?? ""}>
        <Styled.TextContainer>
          <Styled.TitleContainer onClick={handleClickTitle}>
            <span
              className={classNames("title", {
                login__button: !authenticated,
              })}
            >
              {authenticated ? statisticsData?.name : "로그인 후 확인 가능"}
            </span>
          </Styled.TitleContainer>

          <Styled.Description>
            증상이 있으신가요?{"\n"}
            5분 만에 예상질환과 병원을 빠르게 알아봐요!
          </Styled.Description>
        </Styled.TextContainer>
      </Styled.BannerContainer>
    </Box>
  );
}

export default Symptoms;
