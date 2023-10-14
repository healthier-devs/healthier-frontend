import { Box } from "../index.style";
import Title from "../lib/Title";
import * as Styled from "./index.style";

function Hospitals() {
  return (
    <Box>
      <Title text="🏥 진료과 병원 빠르게 찾기" />

      <Styled.Container mb="8px">
        <Styled.Button>내과</Styled.Button>
        <Styled.Button>정형외과</Styled.Button>
        <Styled.Button>이비인후과</Styled.Button>
      </Styled.Container>

      <Styled.Container>
        <Styled.Button>신경과</Styled.Button>
        <Styled.Button>치과</Styled.Button>
        <Styled.Button>마취통증의학과</Styled.Button>
      </Styled.Container>
    </Box>
  );
}
export default Hospitals;
