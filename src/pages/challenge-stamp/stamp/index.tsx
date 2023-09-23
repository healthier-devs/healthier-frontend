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
}

const STAMP_WIDTH = 86;
const STAMP_HEIGHT = 86;

function Stamp({ stamps, rowIdx, duration, isLast, currentDayCnt }: IStampProps) {
  let isFirstFailure = true;
  const stampArr = [
    ...stamps.map((stamp: IStamp) => {
      const [_, month, day] = stamp.date.split("-").map(Number);

      if (stamp.status === "FAILURE" && isFirstFailure) {
        isFirstFailure = false;

        return (
          <Styled.Stamp key={stamp.dayCnt}>
            <div style={{ position: "relative", left: 0, top: 0 }}>
              <img alt="failure stamp" src="/images/stamp/failure.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.StatusText status={stamp.status}>인증실패</Styled.StatusText>
              <Tooltip>부활티켓을 사용해보세요</Tooltip>
            </div>
          </Styled.Stamp>
        );
      }

      return (
        <Styled.Stamp key={stamp.dayCnt}>
          {currentDayCnt === stamp.dayCnt ? (
            <Styled.CurrentDayStamp>
              챌린지
              <br />
              인증하기
            </Styled.CurrentDayStamp>
          ) : stamp.status === "SUCCESS" ? (
            <>
              <img alt="success stamp" src="/images/stamp/success.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.StatusText status={stamp.status}>{stamp.dayCnt}일차</Styled.StatusText>
            </>
          ) : stamp.status === "FAILURE" ? (
            <>
              <img alt="failure stamp" src="/images/stamp/failure.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.StatusText status={stamp.status}>인증실패</Styled.StatusText>
            </>
          ) : duration === stamp.dayCnt * 2 ? (
            <>
              <img alt="nothing stamp" src="/images/stamp/mid-final.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.TermText>
                MIDTERM
                <br />
                인증
              </Styled.TermText>
            </>
          ) : duration === stamp.dayCnt ? (
            <>
              <img alt="nothing stamp" src="/images/stamp/mid-final.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.TermText>
                FINAL
                <br />
                인증
              </Styled.TermText>
            </>
          ) : stamp.status === "NOTHING" ? (
            <>
              <img alt="nothing stamp" src="/images/stamp/lock.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.StatusText status={stamp.status}>
                {month}월 {day}일
              </Styled.StatusText>
            </>
          ) : (
            <></>
          )}
        </Styled.Stamp>
      );
    }),
  ];

  let dottedStampArr = stampArr.reduce((acc, val, idx) => {
    if (idx === 0) {
      return [val];
    }

    return [...acc, <Styled.StampLine key={rowIdx * 3 + idx} />, val];
  }, [] as ReactElement[]);

  if (stampArr.length === 3) {
    dottedStampArr = [
      ...dottedStampArr,
      <Styled.StampLine
        key={rowIdx * 3 + 3}
        position={(rowIdx / 3) % 2 === 0 ? "right-end" : "left-end"}
        style={{ opacity: isLast ? 0 : 1 }}
      />,
    ];
  }

  const restStamps = new Array(3 - stampArr.length).fill(undefined).reduce((acc) => {
    return [...acc, <Styled.StampLine key={rowIdx * 3 + 2} style={{ opacity: 0 }} />, <div key={rowIdx + 2} style={{ width: "86px" }} />];
  }, []);

  dottedStampArr = [...dottedStampArr, ...restStamps];

  return <>{(rowIdx / 3) % 2 === 0 ? dottedStampArr : dottedStampArr.reverse()}</>;
}

export default Stamp;
