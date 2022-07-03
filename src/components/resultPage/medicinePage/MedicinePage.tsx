import { useState } from "react";
import styled from "styled-components";
import Title from "../common/Title";
import Medicine from "./Medicine";
import Tooltip from "./Tooltip";
import MedicineDetail from "./MedicineDetail";

const Container = styled.section`
  padding-top: 9.6rem;
`;
const Contents = styled.section`
  margin: 2rem 2.4rem;
`;
const Description = styled.section`
  font-size: 1.4rem;
  line-height: 150%;

  color: ${({ theme }) => theme.color.grey_300};

  margin-top: 0.6rem;
`;
const TooltipContainer = styled.section`
  margin-top: 1.3rem;
`;

const MedicinePage = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <Contents>
        <Title highlight="" text="증상에 맞는 약을 추천해 드려요" />
        <Description>해당 의약품은 처방없이 구매할 수 있어요</Description>
        <Medicine selected={selected} setSelected={setSelected} />
        {selected === 0 ? (
          <TooltipContainer>
            <Tooltip />
          </TooltipContainer>
        ) : (
          <MedicineDetail />
        )}
      </Contents>
    </Container>
  );
};

export default MedicinePage;