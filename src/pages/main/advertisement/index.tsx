import { useGetAds } from "src/hooks/main/useGetAds";
import * as Styled from "./index.style";

function Advertisement() {
  const { adsData = [] } = useGetAds("MAIN_HOME");

  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <Styled.Title>{adsData[0]?.title}</Styled.Title>
        <Styled.Description>{adsData[0]?.subtitle}</Styled.Description>
      </Styled.TitleContainer>

      <Styled.ImageContainer>
        <Styled.Image src={adsData[0]?.image} />
      </Styled.ImageContainer>
    </Styled.Container>
  );
}

export default Advertisement;
