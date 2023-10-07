import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  bottom: -2px;

  width: inherit;
  background: transparent;
`;

export const MidBarImg = styled.img`
  height: 100px;
`;

export const MidBar = styled.div`
  position: relative;
  width: 130px;
  height: 100px;
`;

export const SideBar = styled.div`
  flex: 1;
  height: 100px;
  background: ${({ theme }) => theme.color.grey_900};

  padding-bottom: 30px;

  box-sizing: border-box;
  border-top: 1.5px solid ${({ theme }) => theme.color.grey_800};

  display: flex;

  &.left {
    border-radius: 12px 0 0 0;
  }

  &.right {
    border-radius: 0 12px 0 0;
  }
`;

export const DiagnosisButton = styled.div`
  background: url("/images/navigation/diagnose.svg");
  position: absolute;

  width: 58px;
  height: 58px;

  bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;

export const Typography = styled.span<{ isSelected: boolean }>`
  letter-spacing: -0.035px;
  color: ${({ theme }) => theme.color.grey_400};

  font-size: 11px;
  line-height: 140%; /* 15.4px */
  font-weight: ${({ isSelected }) => (isSelected ? 300 : 200)};
`;

export const IconWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const DiagnosisTextWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;

  &.center {
    position: relative;
  }
`;

export const CenterButton = styled.button``;
