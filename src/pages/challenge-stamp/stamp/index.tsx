import * as Styled from "./index.style";

interface IStampProps {
  stamps: any;
  rowIdx: number;
  isLast: boolean;
}

const STAMP_WIDTH = 86;
const STAMP_HEIGHT = 86;

function Stamp({ stamps, rowIdx, isLast }: IStampProps) {
  const stampArr = [
    ...stamps.map((stamp: any, dayIdx: number) => {
      /* TODO: key 수정 필요 */
      return (
        <Styled.Stamp key={stamp.dayCnt}>
          {stamp.status === "SUCCESS" ? (
            <>
              <img alt="success stamp" src="/images/stamp/success.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.StatusText status={stamp.status}>{rowIdx + dayIdx + 1}일차</Styled.StatusText>
            </>
          ) : stamp.status === "FAILURE" ? (
            <>
              <img alt="failure stamp" src="/images/stamp/failure.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.StatusText status={stamp.status}>인증실패</Styled.StatusText>
            </>
          ) : stamp.status === "NOTHING" ? (
            <>
              <img alt="nothing stamp" src="/images/stamp/lock.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.StatusText status={stamp.status}>8월 27일</Styled.StatusText>
            </>
          ) : stamp.status === "MIDTERM" ? (
            <>
              <img alt="nothing stamp" src="/images/stamp/mid-final.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.TermText>
                MIDTERM
                <br />
                인증
              </Styled.TermText>
            </>
          ) : stamp.status === "FINAL" ? (
            <>
              <img alt="nothing stamp" src="/images/stamp/mid-final.png" width={STAMP_WIDTH} height={STAMP_HEIGHT} />
              <Styled.TermText>
                FINAL
                <br />
                인증
              </Styled.TermText>
            </>
          ) : stamp.status === "CURRENT" ? (
            <Styled.CurrentDayStamp>
              챌린지
              <br />
              인증하기
            </Styled.CurrentDayStamp>
          ) : (
            <></>
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
  }, []);

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

  return (rowIdx / 3) % 2 === 0 ? dottedStampArr : dottedStampArr.reverse();
}

export default Stamp;
