import { Box } from "../index.style";
import Title from "../lib/Title";
import * as Styled from "./index.style";

function Symptoms() {
  return (
    <Box>
      <Title text={"🤒 20대 헬시언들은\n다음 증상이 많아요 "} />
      <Styled.BannerContainer>
        <Styled.TextContainer>
          <Styled.TitleContainer>
            <span className="title">위식도 역류병</span>
          </Styled.TitleContainer>

          <Styled.Description>
            증상이 있으신가요?{"\n"}
            5분 만에 예상질환과 병원을 빠르게 알아봐요!
          </Styled.Description>
        </Styled.TextContainer>

        <Styled.Illustration></Styled.Illustration>
      </Styled.BannerContainer>
    </Box>
  );
}

export default Symptoms;
