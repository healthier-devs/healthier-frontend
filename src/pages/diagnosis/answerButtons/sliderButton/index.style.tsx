import styled from "styled-components";

export const MarkLabel = styled.div<{ top: number; isSelected: boolean }>`
  display: flex;
  gap: 1.6rem;
  position: relative;
  width: 100%;
  flex: 1;

  position: absolute;
  top: ${({ top }) => top}%;

  .slider-mark-label-wrapper {
    transform: translateY(-1rem);
    .slider-mark-label {
      font-size: 1.6rem;
      font-weight: 200;
      line-height: 150%;
      margin-right: 1.6rem;
      color: ${({ theme, isSelected }) => (isSelected ? theme.color.grey_200 : theme.color.grey_400)};
      white-space: pre-line;
    }
  }
`;

export const MarkLabelContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const Dash = styled.div`
  height: 1px;
  background: linear-gradient(to right, #3f444f 55%, transparent 50% 100%);
  background-repeat: repeat;
  background-size: 8px 1px;
  flex: 1;
`;

export const SliderContainer = styled.div`
  display: flex;

  padding: 6.6rem 4rem 0 4rem;

  min-height: 44rem;
  height: 100%;
  width: 100%;

  box-sizing: border-box;
`;

export const NumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .slider-mark-number {
    color: ${({ theme }) => theme.color.grey_400};
    font-size: 1.4rem;
    font-weight: 200;
    line-height: 140%;
  }
`;
