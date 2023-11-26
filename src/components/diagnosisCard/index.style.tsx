import { Heading_5 } from "src/lib/fontStyle";
import styled from "styled-components";
import type { TSeverity } from "src/interfaces/diagnoseApi/diagnosis";

export const Container = styled.section<{ severity: TSeverity; isSquare: boolean; imgsrc: string }>`
  position: relative;
  width: 100%;
  //height: ${({ isSquare }) => (isSquare ? "calc(var(--vw, 1vw) * 100 - 4.8rem)" : "16rem")};
  padding-top: ${({ isSquare }) => (isSquare ? "100%" : "50%")};
  background: ${({ theme, severity }) => (severity === 1 ? theme.color.blue_300 : severity === 2 ? theme.color.blue_500 : "#2745A9")};
  background-size: cover;
  border-radius: 0.8rem;

  cursor: pointer;

  & + & {
    margin-top: 1rem;
  }

  ::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ imgsrc }) => `url(${imgsrc})`};
    border-radius: 0.8rem;
    background-size: cover;
  }
`;

export const Box = styled.div<{ isDate: Date | null }>`
  position: absolute;
  bottom: 0;

  box-sizing: border-box;
  padding: 2rem 1.8rem;

  display: flex;
  flex-direction: column;
  justify-content: ${({ isDate }) => (isDate ? "space-between" : "flex-end")};
  align-items: flex-start;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 0.6rem;
`;

export const Title = styled(Heading_5)<{ severity: TSeverity; isSquare?: boolean }>`
  color: ${({ theme, severity, isSquare = false }) =>
    isSquare ? theme.color.grey_200 : severity === 1 ? theme.color.blue_800 : theme.color.grey_200};

  width: 12rem;

  font-size: 2rem;
  line-height: 140%;
  font-weight: 300;
`;

export const Chip = styled.div<{ severity: TSeverity }>`
  background-color: ${({ theme, severity }) =>
    severity === 1 ? theme.color.blue : severity === 2 ? theme.color.blue_700 : theme.color.sub_blue};
  color: ${({ theme, severity }) => (severity === 3 ? theme.color.blue : theme.color.grey_100)};

  font-weight: 300;
  font-size: 1.3rem;
  line-height: 150%;
  letter-spacing: -0.05rem;

  padding: 0.6rem 1rem;
  border-radius: 3rem;
`;

export const IllustrationShadow = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  height: 80%;
  width: 100%;

  background: linear-gradient(180deg, rgba(19, 20, 22, 0.35) 0%, rgba(19, 20, 22, 0) 100%);
  transform: rotate(-180deg);
`;
