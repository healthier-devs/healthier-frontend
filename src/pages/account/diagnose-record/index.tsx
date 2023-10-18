import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import theme from "src/lib/theme";
import * as Styled from "./index.style";

const DiagnoseRecord = () => {
  return (
    <Styled.Container>
      <Styled.Typography className="mainTitle">
        지난 증상 감별 기록을
        <br />볼 수 있어요
      </Styled.Typography>
      <Styled.MainContent>
        <Styled.MonthWrapper>
          <Styled.MonthTitle>
            <Styled.Typography className="monthly">7월 증상감별 내역</Styled.Typography>
            <Styled.Typography className="record">
              <Styled.Typography className="highlight">3개</Styled.Typography>의 기록
            </Styled.Typography>
          </Styled.MonthTitle>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <Styled.DiagnoseCard key={index}>
                <div className="topArea">
                  <Styled.Typography className="cardMainText">7월 26일 기록</Styled.Typography>
                  <ChevronRightIcon width={24} height={24} strokeWidth={2} stroke={theme.color.grey_500} />
                </div>
                <div className="bottomArea">
                  <Styled.Chip>갑상선 기능 항진증</Styled.Chip>
                  <Styled.Chip>양안 부동시</Styled.Chip>
                  <Styled.Chip>식중독</Styled.Chip>
                </div>
              </Styled.DiagnoseCard>
            ))}
        </Styled.MonthWrapper>
      </Styled.MainContent>
    </Styled.Container>
  );
};

export default DiagnoseRecord;
