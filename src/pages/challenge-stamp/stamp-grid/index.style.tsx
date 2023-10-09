import styled, { css } from "styled-components";

export const StampRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CurrentDayStamp = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.color.blue};
  border: 1px solid ${({ theme }) => theme.color.sub_blue};
  border-radius: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 1.3rem;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: -0.5px;

  color: ${({ theme }) => theme.color.grey_200};
`;

export const Stamp = styled.div`
  position: relative;
  width: 86px;
  height: 86px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const StatusText = styled.p<{ status: string }>`
  position: absolute;
  left: 50%;
  bottom: 1.6rem;
  transform: translate(-50%, 0);

  color: ${({ theme, status }) =>
    status === "SUCCESS" ? theme.color.sub_blue : status === "FAILURE" ? theme.color.red_300 : theme.color.grey_400};

  font-size: 1.3rem;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.5px;

  white-space: nowrap;
`;

export const TermText = styled.p`
  position: absolute;

  font-size: 1.3rem;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.5px;

  color: ${({ theme }) => theme.color.grey_200};
`;

export const StampLine = styled.div<{ position?: string }>`
  height: 1px;
  background-image: ${({ theme }) => `linear-gradient(to right, ${theme.color.grey_500} 33%, transparent 0%)`};
  background-position: bottom;
  background-size: 6px 8px;
  background-repeat: repeat-x;

  ${({ position }) =>
    position === "right-end"
      ? css`
          width: 5.4rem;
          position: absolute;
          right: 43px;
          top: 86px;
          transform: rotate(-90deg);
          transform-origin: right;
        `
      : position === "left-end"
      ? css`
          width: 5.4rem;
          position: absolute;
          left: 43px;
          top: 86px;
          transform: rotate(90deg);
          transform-origin: left;
        `
      : css`
          flex: 1;
        `}
`;
