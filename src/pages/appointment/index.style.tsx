import { Heading_3 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .sort {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
    letter-spacing: -0.03rem;
    color: ${({ theme }) => theme.color.grey_500};
  }

  .filter-tags {
    display: flex;
    gap: 0.8rem;
  }
`;

export const CardContainer = styled.div`
  margin-top: 1.6rem;
`;

export const LoadingTitle = styled(Heading_3)`
  text-align: center;
  word-break: keep-all;
  color: ${({ theme }) => theme.color.grey_200};
`;

export const MoreSearchContainer = styled.div<{ isBottomSheetOpen: boolean }>`
  position: absolute;
  left: 50%;
  bottom: ${({ isBottomSheetOpen }) => (isBottomSheetOpen ? "39rem" : "14.2rem")};
  transform: translate(-50%, 0);

  z-index: 1000;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 14rem;
  box-sizing: border-box;
  padding: 1.1rem 1.6rem;

  background-color: ${({ theme }) => theme.color.grey_850};
  border: 0.1rem solid ${({ theme }) => theme.color.blue};
  border-radius: 6rem;

  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.05rem;
  color: ${({ theme }) => theme.color.grey_400};
`;

export const BackButton = styled.div`
  position: absolute;
  left: 1.6rem;
  top: 4.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  border-radius: 6rem;
  background-color: ${({ theme }) => theme.color.grey_850};
`;
