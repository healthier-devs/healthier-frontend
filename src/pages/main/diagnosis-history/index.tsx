import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import FlexBox from "src/components/flexBox";
import { useGetRecords } from "src/hooks/diagnosis/useGetRecords";
import theme from "src/lib/theme";
import { Card, CardTitle } from "../challenges/index.style";
import { Box } from "../index.style";
import StartContents from "../lib/StartContents";
import Title from "../lib/Title";
import * as Styled from "./index.style";
import type { IAuthState } from "src/state";

function DiagnosisHistory({ authenticated }: IAuthState) {
  const { recordsData } = useGetRecords({
    page: 0,
    size: 15,
    authenticated,
  });

  return (
    <Box>
      <Title text="🗂 나의 건강기록장" />
      {recordsData.total === 0 ? (
        <StartContents
          text={"증상 감별 내역이 없어요.\n빠른 증상감별로 예상질환을 확인해보세요!"}
          buttonText="증상 감별하러 가기"
          buttonHref={authenticated ? "/symptom-type" : "/info"}
        />
      ) : (
        /* TODO: 건강 기록 API 연결 */
        <Card>
          <FlexBox alignItems="center" justifyContent="space-between" mb="12px">
            <CardTitle>7월 26일 기록</CardTitle>
            <ChevronRightIcon width={24} height={24} strokeWidth={2} stroke={theme.color.grey_500} />
          </FlexBox>
          <FlexBox gap="6px">
            <Styled.Chip>갑상선 기능 항진증</Styled.Chip>
            <Styled.Chip>안양 부동시</Styled.Chip>
            <Styled.Chip>검사</Styled.Chip>
          </FlexBox>
        </Card>
      )}
    </Box>
  );
}

export default DiagnosisHistory;
