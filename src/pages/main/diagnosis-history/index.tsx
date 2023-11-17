import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import FlexBox from "src/components/flexBox";
import { useGetRecords } from "src/hooks/diagnosis/useGetRecords";
import theme from "src/lib/theme";
import { Card, CardTitle } from "../challenges/index.style";
import { Box } from "../index.style";
import StartContents from "../lib/StartContents";
import Title from "../lib/Title";
import * as Styled from "./index.style";
import type { IDiagnosisRecord } from "src/interfaces/diagnoseApi/records";
import type { IAuthState } from "src/state";

function DiagnosisHistory({ authenticated }: Pick<IAuthState, "authenticated">) {
  const navigate = useNavigate();
  const { recordsData } = useGetRecords({ size: 15, authenticated });

  const [record, setRecord] = useState<IDiagnosisRecord>({
    createdAt: "",
    dxList: [],
    dxRecordId: "",
  });

  useEffect(() => {
    if (!authenticated || recordsData.length === 0 || recordsData[0].total === 0) {
      return;
    }

    const latestMonthData = recordsData[0].data[0].records;
    const { createdAt, dxList, dxRecordId } = latestMonthData[latestMonthData.length - 1];

    setRecord({
      createdAt: new Date(createdAt).getMonth() + 1 + "월 " + new Date(createdAt).getDate() + "일",
      dxList,
      dxRecordId,
    });
  }, [recordsData, authenticated]);

  return (
    <Box>
      <Title text="🗂 나의 건강기록장" />
      {!authenticated || recordsData[0].total === 0 ? (
        <StartContents
          text={"증상 감별 내역이 없어요.\n빠른 증상감별로 예상질환을 확인해보세요!"}
          buttonText="증상 감별하러 가기"
          buttonHref={authenticated ? "/symptom-type" : "/info"}
        />
      ) : (
        <>
          <Card
            onClick={() =>
              navigate("/result-list", {
                state: {
                  dxRecordId: record.dxRecordId,
                },
              })
            }
          >
            <FlexBox alignItems="center" justifyContent="space-between" mb="12px">
              <CardTitle>{record.createdAt} 기록</CardTitle>
              <ChevronRightIcon width={24} height={24} strokeWidth={2} stroke={theme.color.grey_500} />
            </FlexBox>
            <FlexBox gap="6px" flexWrap="wrap">
              {record.dxList.map(({ dxId, dxName }) => (
                <Styled.Chip key={dxId}>{dxName}</Styled.Chip>
              ))}
            </FlexBox>
          </Card>
          <Link to="/account/diagRecord">
            <Styled.Box>
              <FlexBox alignItems="center" justifyContent="space-between">
                <p className="view-history">이전 기록 보러 가기</p>
                <ChevronRightIcon width={24} height={24} strokeWidth={2} stroke={theme.color.grey_500} />
              </FlexBox>
            </Styled.Box>
          </Link>
        </>
      )}
    </Box>
  );
}

export default DiagnosisHistory;
