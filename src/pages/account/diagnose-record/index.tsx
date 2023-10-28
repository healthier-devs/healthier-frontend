import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import { useGetRecords } from "src/hooks/diagnosis/useGetRecords";
import theme from "src/lib/theme";
import { useAppSelector } from "src/state";
import * as Styled from "./index.style";

const DiagnoseRecord = () => {
  const { authenticated } = useAppSelector((state) => state.auth);

  const [intersectionRef, inView] = useInView();

  const { recordsData, fetchNextPage, hasNextPage } = useGetRecords({ size: 15, authenticated });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      <Styled.Container>
        <Styled.Typography className="mainTitle">
          지난 증상 감별 기록을
          <br />볼 수 있어요
        </Styled.Typography>
        <Styled.MainContent>
          {recordsData.map(({ data }) =>
            data.map(({ month, records }) => (
              <Styled.MonthWrapper key={month}>
                <Styled.MonthTitle>
                  <Styled.Typography className="monthly">{month.split("-").at(-1)}월 증상감별 내역</Styled.Typography>
                  <Styled.Typography className="record">
                    <Styled.Typography className="highlight">{records.length}개</Styled.Typography>의 기록
                  </Styled.Typography>
                </Styled.MonthTitle>
                {records.map(({ createdAt, dxList }) => (
                  <Styled.DiagnoseCard key={createdAt}>
                    <div className="topArea">
                      <Styled.Typography className="cardMainText">
                        {new Date(createdAt).getMonth() + 1}월 {new Date(createdAt).getDate()}일 증상 감별 내역
                      </Styled.Typography>
                      <ChevronRightIcon width={24} height={24} strokeWidth={2} stroke={theme.color.grey_500} />
                    </div>

                    <div className="bottomArea">
                      {dxList.map(({ dxId, dxName }) => (
                        <Styled.Chip key={dxId}>{dxName}</Styled.Chip>
                      ))}
                    </div>
                  </Styled.DiagnoseCard>
                ))}
              </Styled.MonthWrapper>
            ))
          )}
          <div ref={intersectionRef}></div>
        </Styled.MainContent>
      </Styled.Container>
      <Styled.BottomShadowArea />
    </>
  );
};

export default DiagnoseRecord;
