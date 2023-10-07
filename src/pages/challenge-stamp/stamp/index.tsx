import { ReactElement } from "react";
import Tooltip from "src/components/tooltip";
import { IStamp } from "src/interfaces/challenges";
import * as Styled from "./index.style";

interface IStampProps {
  stamps: IStamp[];
  rowIdx: number;
  duration: number;
  isLast: boolean;
  currentDayCnt: number;
  isRevivalDayLine: boolean;
  onClickRevivalTicket?: () => void;
}

const STAMP_WIDTH = 86;
const STAMP_HEIGHT = 86;

function Stamp({ stamps, rowIdx, duration, isLast, currentDayCnt, isRevivalDayLine, onClickRevivalTicket }: IStampProps) {
  let isFirstFailure = true;

  const stampArr = [
    ...stamps.map((stamp: IStamp, idx: number) => {
      const date = new Date(stamp.submitTime);
      const month = date.getMonth() + 1;
      const day = date.getDate();

      const dayCount = rowIdx + idx + 1;

      if (stamp.status === "FAILURE" && isFirstFailure && isRevivalDayLine) {
        isFirstFailure = false;
        const position = getTooltipPosition(dayCount - 1);

        return (
          <Styled.Stamp key={dayCount}>
            <div style={{ position: "relative", left: 0, top: 0 }}>
              <img alt="failure stamp" src="/images/stamp/failure.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.StatusText status={stamp.status}>인증실패</Styled.StatusText>
              <Tooltip position={position} onClick={onClickRevivalTicket}>
                부활티켓을 사용해보세요
              </Tooltip>
            </div>
          </Styled.Stamp>
        );
      }

      return (
        <Styled.Stamp key={dayCount}>
          {stamp.status === "CHECKING" ? (
            <Styled.CurrentDayStamp>
              챌린지
              <br />
              인증 확인중
            </Styled.CurrentDayStamp>
          ) : currentDayCnt === dayCount ? (
            <Styled.CurrentDayStamp>
              챌린지
              <br />
              인증하기
            </Styled.CurrentDayStamp>
          ) : stamp.status === "SUCCESS" ? (
            <>
              <img alt="success stamp" src="/images/stamp/success.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.StatusText status={stamp.status}>{dayCount}일차</Styled.StatusText>
            </>
          ) : stamp.status === "FAILURE" ? (
            <>
              <img alt="failure stamp" src="/images/stamp/failure.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.StatusText status={stamp.status}>인증실패</Styled.StatusText>
            </>
          ) : duration === dayCount * 2 ? (
            <>
              <img alt="nothing stamp" src="/images/stamp/mid-final.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.TermText>
                MIDTERM
                <br />
                인증
              </Styled.TermText>
            </>
          ) : duration === dayCount ? (
            <>
              <img alt="nothing stamp" src="/images/stamp/mid-final.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.TermText>
                FINAL
                <br />
                인증
              </Styled.TermText>
            </>
          ) : (
            <>
              <img alt="nothing stamp" src="/images/stamp/lock.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.StatusText status={stamp.status}>
                {month}월 {day}일
              </Styled.StatusText>
            </>
          )}
        </Styled.Stamp>
      );
    }),
  ];

  let dottedStampArr = stampArr.reduce((acc, val, idx) => {
    if (idx === 0) {
      return [val];
    }

    return [...acc, <Styled.StampLine key={(2 * (rowIdx + idx) + 1) / 2} />, val];
  }, [] as ReactElement[]);

  if (stampArr.length === 3) {
    dottedStampArr = [
      ...dottedStampArr,
      <Styled.StampLine
        key={(2 * (rowIdx + 3) + 1) / 2}
        position={(rowIdx / 3) % 2 === 0 ? "right-end" : "left-end"}
        style={{ opacity: isLast ? 0 : 1 }}
      />,
    ];
  }

  const restStamps = new Array(3 - stampArr.length).fill(undefined).reduce((acc, _, idx) => {
    const currentDay = rowIdx + idx + 2;

    return [
      ...acc,
      <Styled.StampLine key={currentDay} style={{ opacity: 0 }} />,
      <div key={(2 * currentDay + 1) / 2} style={{ width: "86px" }} />,
    ];
  }, []);

  dottedStampArr = [...dottedStampArr, ...restStamps];

  return <>{(rowIdx / 3) % 2 === 0 ? dottedStampArr : dottedStampArr.reverse()}</>;
}

export default Stamp;

function getTooltipPosition(idx: number) {
  if (Math.floor(idx / 3) % 2 === 0) {
    // 짝수 행
    return idx % 3 === 0 ? "left" : idx % 3 === 1 ? "center" : "right";
  } else {
    // 홀수 행
    return idx % 3 === 2 ? "left" : idx % 3 === 1 ? "center" : "right";
  }
}
