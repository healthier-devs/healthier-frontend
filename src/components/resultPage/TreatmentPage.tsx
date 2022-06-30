import styled from "styled-components";
import theme from "../../lib/theme";
import RoundButton from "../buttons/RoundButton";
import Title from "./common/Title";
import TreatmentBox from "./common/TreatmentBox";

const Container = styled.section``;
const TitleBox = styled.section`
  margin: 4rem 0 4.5rem 2.4rem;
`;
const ButtonBox = styled.section`
  position: absolute;
  bottom: 0;

  margin: 3.4rem 2rem;
`;
const TreatmentList = styled.section`
  margin: 0 2.4rem;
`;

const treatment_arr = [
  {
    title: "광치료",
    content:
      "자연광에 해당하는 빛을 내는 장치를 20~30분 쬐어서 우리 몸의 생체시계를 정상화시켜요.",
  },
  {
    title: "멜라토닌",
    content:
      "불면증 치료에 사용되는 약물로, 멜라토닌 수용체를 활성화시켜 수면을 유도해요.",
  },
];

const TreatmentPage = () => {
  return (
    <Container>
      <TitleBox>
        <Title highlight="" text={"병원에 가면\n이런 치료를 받아요"} />
      </TitleBox>
      <TreatmentList>
        {treatment_arr.map((treat, idx) => (
          <TreatmentBox
            key={idx}
            title={treat.title}
            description={treat.content}
          />
        ))}
      </TreatmentList>
      <ButtonBox>
        <RoundButton
          outline="none"
          backgroundColor={theme.color.blue}
          color={theme.color.grey_100}
          text="나의 진단기록장에 저장하기"
        />
      </ButtonBox>
    </Container>
  );
};

export default TreatmentPage;
