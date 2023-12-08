import styled from "styled-components";

export const RootContainer = styled.div`
  position: absolute;
  top: 0;

  width: inherit;
  height: 100%;

  background-color: ${({ theme }) => theme.color.grey_900};
  z-index: 99;
`;

export const Container = styled.div`
  position: absolute;
  top: 56px;

  width: inherit;
  height: calc(100% - 56px);

  padding: 20px 24px;
  box-sizing: border-box;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Decorator = styled.div`
  width: 24px;
  height: 2px;
  background-color: #d2fa64;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  color:${({ theme }) => theme.color.grey_200}
  font-size: 22px;
  font-weight: 300;

  margin-top: 12px;
`;

export const SubTitle = styled.h5`
  color: ${({ theme }) => theme.color.grey_300};

  font-size: 13px;
  font-weight: 500;
  line-height: 150%;

  margin-bottom: 6px;
`;

export const Typography = styled.p`
  color: ${({ theme }) => theme.color.grey_300};

  font-size: 12px;
  font-weight: 200;
  line-height: 150%;
  white-space: pre-line;

  &.indentation-1 {
    padding-left: 16px;
  }

  &.indentation-2 {
    padding-left: 32px;
  }
`;
