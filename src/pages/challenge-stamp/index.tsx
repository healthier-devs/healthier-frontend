import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import RoundButton from "src/components/roundButton";
import * as Styled from "./index.style";

const mockStamps = [
  {
    dayCnt: 1,
    status: "SUCCESS",
  },
  {
    dayCnt: 2,
    status: "SUCCESS",
  },
  {
    dayCnt: 3,
    status: "FAILURE",
  },
  {
    dayCnt: 4,
    status: "SUCCESS",
  },
  {
    dayCnt: 5,
    status: "SUCCESS",
  },
  {
    dayCnt: 6,
    status: "FAILURE",
  },
  {
    dayCnt: 7,
    status: "SUCCESS",
  },
  {
    dayCnt: 8,
    status: "SUCCESS",
  },
  {
    dayCnt: 9,
    status: "FAILURE",
  },
  {
    dayCnt: 10,
    status: "SUCCESS",
  },
  {
    dayCnt: 11,
    status: "SUCCESS",
  },
  {
    dayCnt: 12,
    status: "FAILURE",
  },
  {
    dayCnt: 13,
    status: "CURRENT",
  },
  {
    dayCnt: 14,
    status: "NOTHING",
  },
  {
    dayCnt: 15,
    status: "NOTHING",
  },
  {
    dayCnt: 16,
    status: "NOTHING",
  },
  {
    dayCnt: 17,
    status: "MIDTERM",
  },
  {
    dayCnt: 18,
    status: "NOTHING",
  },
  {
    dayCnt: 19,
    status: "NOTHING",
  },
  {
    dayCnt: 20,
    status: "NOTHING",
  },
];

const renderStamp = (stamps: any, rowIdx: number, isLast: boolean) => {
  const stampArr = [
    ...stamps.map((stamp: any, dayIdx: number) => {
      /* TODO: key 수정 필요 */
      return (
        <Styled.Stamp key={stamp.dayCnt}>
          {stamp.status === "SUCCESS" ? (
            <>
              <img alt="success stamp" src="/images/stamp/success.png" width={86} height={86} />
              <Styled.StatusText status={stamp.status}>{rowIdx + dayIdx + 1}일차</Styled.StatusText>
            </>
          ) : stamp.status === "FAILURE" ? (
            <>
              <img alt="failure stamp" src="/images/stamp/failure.png" width={86} height={86} />
              <Styled.StatusText status={stamp.status}>인증실패</Styled.StatusText>
            </>
          ) : stamp.status === "NOTHING" ? (
            <>
              <img alt="nothing stamp" src="/images/stamp/lock.png" width={86} height={86} />
              <Styled.StatusText status={stamp.status}>8월 27일</Styled.StatusText>
            </>
          ) : stamp.status === "MIDTERM" ? (
            <>
              <img alt="nothing stamp" src="/images/stamp/mid-final.png" width={86} height={86} />
              <Styled.TermText>
                MIDTERM
                <br />
                인증
              </Styled.TermText>
            </>
          ) : stamp.status === "FINAL" ? (
            <>
              <img alt="nothing stamp" src="/images/stamp/mid-final.png" width={86} height={86} />
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
};

function ChallengeStamp() {
  const navigate = useNavigate();

  return (
    <>
      <Styled.Container>
        <Styled.TopContainer>
          <Styled.HeaderContainer>
            <Styled.LeftButton onClick={() => navigate(-1)}>
              <img alt="back" src="/images/header/back.svg" width={32} height={32} />
            </Styled.LeftButton>
            <section />
            <Styled.RightButton onClick={() => navigate(-1)}>관리</Styled.RightButton>
          </Styled.HeaderContainer>

          <Styled.TopContents>
            <Styled.Title>매일 아침 공복에 유산균 먹기</Styled.Title>
            <Styled.TagContainer>
              <Styled.Tag>매일인증</Styled.Tag>
              <Styled.Tag>28일동안</Styled.Tag>
              <Styled.Tag>사진인증</Styled.Tag>
            </Styled.TagContainer>

            <Styled.ProgressContainer>
              <Styled.ProgressBar>
                <Styled.CurrentProgress percent={50} />
              </Styled.ProgressBar>

              <Styled.ProgressTextBox>
                <p className="highlight">12일째 진행중</p>
                <p>총 28일</p>
              </Styled.ProgressTextBox>
            </Styled.ProgressContainer>
          </Styled.TopContents>
        </Styled.TopContainer>

        <Styled.ContentsContainer>
          <Styled.InviteContainer>
            <div className="top-box">
              <Styled.InviteTitle>친구 초대하기</Styled.InviteTitle>
              <ChevronRightIcon />
            </div>
            <Styled.InviteDescription>친구 초대를 하면 부활권을 얻을 수 있어요!</Styled.InviteDescription>
          </Styled.InviteContainer>

          <Styled.StampContainer>
            {mockStamps.map((_, idx) =>
              idx % 3 === 0 ? (
                <Styled.StampRow key={`${idx}row`}>
                  {renderStamp(mockStamps.slice(idx, idx + 3), idx, Math.ceil(mockStamps.length / 3) === idx / 3 + 1)}
                </Styled.StampRow>
              ) : (
                <></>
              )
            )}
          </Styled.StampContainer>
        </Styled.ContentsContainer>
      </Styled.Container>

      <Styled.CTAContainer>
        <RoundButton>오늘의 챌린지 인증하기</RoundButton>
      </Styled.CTAContainer>
    </>
  );
}

export default ChallengeStamp;
