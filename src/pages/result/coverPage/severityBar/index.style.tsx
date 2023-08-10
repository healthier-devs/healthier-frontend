import styled from "styled-components";

export const Container = styled.div`
  z-index: 4;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .text-box {
    display: flex;
    justify-content: space-between;
    width: 100%;

    font-size: 1.4rem;
    font-weight: 100;
    letter-spacing: -0.05rem;
    line-height: 150%;
  }
`;

export const Text = styled.div<{ type: number; severity: number }>`
  color: ${({ theme, type, severity }) =>
    type !== severity ? theme.color.grey_400 : type === 3 ? theme.color.red : type === 2 ? "#8A5FD0" : theme.color.blue};
  font-weight: ${({ type, severity }) => type === severity && 200};
  text-align: center;
`;

export const SeverityBackground = styled.div<{ severity: number }>`
  margin-top: 1rem;

  background: rgba(84, 100, 242, 0.33);
  border-radius: 10rem;

  width: calc(var(--vw, 1vw) * 100 - 6.8rem);
  height: 0.5rem;

  .highlight {
    height: 100%;
    width: ${({ severity }) => severity}%;

    border-radius: 10rem;
    background: ${({ severity }) =>
      severity === 100
        ? "linear-gradient(270deg, #DF6225 0%, #8A5FD0 52.6%, #4D5ABF 100%);"
        : severity === 48
        ? "linear-gradient(270deg, #8A5FD0 0%, #4D5ABF 100%);"
        : " #4D5ABF;"};
  }
`;
