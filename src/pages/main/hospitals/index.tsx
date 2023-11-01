import { useNavigate } from "react-router-dom";
import { Box } from "../index.style";
import Title from "../lib/Title";
import * as Styled from "./index.style";

function Hospitals() {
  const navigate = useNavigate();

  const handleNavigateToAppointment = (department: string) => {
    navigate("/appointment", {
      state: {
        departments: [department],
      },
    });
  };

  return (
    <Box>
      <Title text="🏥 진료과 병원 빠르게 찾기" />

      <Styled.Container mb="8px">
        <Styled.Button onClick={() => handleNavigateToAppointment("내과")}>
          <span>내과</span>
        </Styled.Button>
        <Styled.Button onClick={() => handleNavigateToAppointment("정형외과")}>
          <span>정형외과</span>
        </Styled.Button>
        <Styled.Button onClick={() => handleNavigateToAppointment("이비인후과")}>
          <span>
            이비인
            <wbr />
            후과
          </span>
        </Styled.Button>
      </Styled.Container>

      <Styled.Container>
        <Styled.Button onClick={() => handleNavigateToAppointment("신경과")}>
          <span>신경과</span>
        </Styled.Button>
        <Styled.Button onClick={() => handleNavigateToAppointment("치과")}>
          <span>치과</span>
        </Styled.Button>
        <Styled.Button onClick={() => handleNavigateToAppointment("마취통증의학과")}>
          <span>
            마취통증
            <wbr />
            의학과
          </span>
        </Styled.Button>
      </Styled.Container>
    </Box>
  );
}
export default Hospitals;
