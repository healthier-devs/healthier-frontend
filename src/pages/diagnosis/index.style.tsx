import { Heading_3 } from "src/lib/fontStyle";
import styled from "styled-components";

// NOTE: Layout 공통 컴포넌트를 사용하면 상하 스크롤이 생기는 문제
export const Layout = styled.main`
  width: 100%;
  height: 100%;

  padding: 5.6rem 0 0 0;
  box-sizing: border-box;
`;

export const Container = styled.section`
  height: 100%;
  background: radial-gradient(300.02% 130.63% at 164.62% 165.58%, rgba(84, 100, 242, 0.9) 0%, rgba(52, 62, 135, 0) 100%) #131416;
  background-attachment: fixed;

  overflow: auto;
  overflow-y: overlay;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;

export const Question = styled(Heading_3)`
  text-align: center;

  color: ${({ theme }) => theme.color.grey_200};

  padding: 0 3rem;

  white-space: pre-line;
`;

export const SubContent = styled.p`
  padding: 0 2rem;

  font-size: 1.6rem;
  line-height: 140%;
  font-weight: 200;

  text-align: center;
  white-space: pre-line;

  color: ${({ theme }) => theme.color.grey_500};

  & span {
    color: ${({ theme }) => theme.color.blue_500};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;

  margin-top: 7rem;

  gap: 0.6rem;
`;
