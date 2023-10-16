import styled from "styled-components";

export const Container = styled.div<{ mb?: string }>`
  display: flex;

  gap: 6px;

  margin-bottom: ${({ mb }) => mb};
`;

export const Button = styled.button`
  height: 60px;
  width: 100%;

  border-radius: 8px;
  background: ${({ theme }) => theme.color.grey_750};

  color: ${({ theme }) => theme.color.grey_200};
  font-size: 14px;
  font-weight: 200;
  line-height: 150%;
`;
