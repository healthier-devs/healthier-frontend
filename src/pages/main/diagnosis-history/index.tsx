import { Box } from "../index.style";
import StartContents from "../lib/StartContents";
import Title from "../lib/Title";

function DiagnosisHistory() {
  return (
    <Box>
      <Title text="🗂 나의 건강기록장"></Title>
      <StartContents
        text={"증상 감별 내역이 없어요.\n빠른 증상감별로 예상질환을 확인해보세요!"}
        buttonText="증상 감별하러 가기"
        buttonHref="/info"
      />
    </Box>
  );
}

export default DiagnosisHistory;
