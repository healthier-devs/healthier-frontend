import { ReactElement } from "react";
import { IStamp } from "src/interfaces/challenges";
import * as Styled from "./index.style";

interface IStampProps {
  stamps: IStamp[];
  rowIdx: number;
  duration: number;
  isLast: boolean;
}

const STAMP_WIDTH = 86;
const STAMP_HEIGHT = 86;

function Stamp({ stamps, rowIdx, duration, isLast }: IStampProps) {
  const stampArr = [
    ...stamps.map((stamp: IStamp) => {
      /* TODO: key 수정 필요 */
      return (
        <Styled.Stamp key={stamp.dayCnt}>
          {stamp.status === "SUCCESS" ? (
            <>
              <img alt="success stamp" src="/images/stamp/success.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.StatusText status={stamp.status}>{stamp.dayCnt}일차</Styled.StatusText>
            </>
          ) : stamp.status === "FAILURE" ? (
            <>
              <img alt="failure stamp" src="/images/stamp/failure.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.StatusText status={stamp.status}>인증실패</Styled.StatusText>
            </>
          ) : stamp.status === "NOTHING" ? (
            // TODO: 챌린지 날짜 처리
            <>
              <img alt="nothing stamp" src="/images/stamp/lock.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.StatusText status={stamp.status}>8월 27일</Styled.StatusText>
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
          ) : (
            // TODO: 현재 날짜 처리
            <Styled.CurrentDayStamp>
              챌린지
              <br />
              인증하기
            </Styled.CurrentDayStamp>
          )}
        </Styled.Stamp>
      );
    }),
  ];

  const isAdded = stampArr.length === 2;

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

  if (isAdded) {
    dottedStampArr = [
      ...dottedStampArr,
      <Styled.StampLine key={rowIdx * 3 + 2} style={{ opacity: 0 }} />,
      <div key={rowIdx + 2} style={{ width: "86px" }} />,
    ];
  }

  return <>{(rowIdx / 3) % 2 === 0 ? dottedStampArr : dottedStampArr.reverse()}</>;
}

export default Stamp;
