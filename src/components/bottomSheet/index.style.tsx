import { motion } from "framer-motion";
import styled from "styled-components";

export const Overlay = styled.div<{ headerHeight: string; background: string }>`
  position: absolute;
  top: ${({ headerHeight }) => "-" + headerHeight};
  left: 0;
  width: 100%;
  height: ${({ headerHeight }) => `calc(100% + ${headerHeight})`};
  background: ${({ background }) => background};
  pointer-events: ${({ background }) => (background === "transparent" ? "none" : "auto")};
  z-index: 1000;
  overflow: hidden;
`;

export const Container = styled(motion.div)<{ height: string }>`
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  padding: 32px 24px;
  width: calc(var(--vw, 1vw) * 100);
  height: ${({ height }) => height};
  overflow-y: auto;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.color.grey_900};
  border-radius: 20px 20px 0px 0px;
  pointer-events: auto;
  z-index: 1500;
`;

export const Header = styled.header`
  font-family: Spoqa Han Sans Neo;
  color: ${({ theme }) => theme.color.grey_200};
  font-size: 20px;
  line-height: 140%;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const Content = styled.div``;
