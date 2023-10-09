import { memo, useRef } from "react";
import { useEffect } from "react";
import { IStamp } from "src/interfaces/challenges";
import * as Styled from "./index.style";
import Stamp from "./stamp";

interface IStampGridProps {
  stampSubmissions: IStamp[];
  duration: number;
  currentDayCnt: number;
  handleClickRevivalTicket: () => void;
}

function StampGrid({ stampSubmissions, duration, currentDayCnt, handleClickRevivalTicket }: IStampGridProps) {
  const isRevivalDayLine = useRef<boolean>(true);

  useEffect(() => {
    isRevivalDayLine.current = true;
  }, []);

  return (
    <>
      {stampSubmissions.map((_, idx) => {
        if (idx % 3 === 0) {
          const isFailureLine = stampSubmissions.slice(idx, idx + 3).some((submission) => submission.status === "FAILURE");

          if (isRevivalDayLine.current && isFailureLine) {
            isRevivalDayLine.current = false;

            return (
              <Styled.StampRow key={`${idx}row`}>
                <Stamp
                  stamps={stampSubmissions.slice(idx, idx + 3)}
                  rowIdx={idx}
                  duration={duration}
                  isLast={Math.ceil((stampSubmissions.length ?? 1) / 3) === idx / 3 + 1}
                  currentDayCnt={currentDayCnt ?? 0}
                  isRevivalDayLine={true}
                  onClickRevivalTicket={handleClickRevivalTicket}
                />
              </Styled.StampRow>
            );
          }

          return (
            <Styled.StampRow key={`${idx}row`}>
              <Stamp
                stamps={stampSubmissions.slice(idx, idx + 3)}
                rowIdx={idx}
                duration={duration}
                isLast={Math.ceil((stampSubmissions.length ?? 1) / 3) === idx / 3 + 1}
                currentDayCnt={currentDayCnt ?? 0}
                isRevivalDayLine={false}
              />
            </Styled.StampRow>
          );
        }

        return <></>;
      })}
    </>
  );
}

export default memo(StampGrid);
