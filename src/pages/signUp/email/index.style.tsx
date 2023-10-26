import styled from "styled-components";

export const ButtonWrapper = styled.div`
  padding-bottom: 21px;
`;

export const Button = styled.button<{ isEnabled: boolean }>`
  width: 80px;
  height: 30px;
  border-radius: 8px;
  background: ${({ theme, isEnabled }) => (isEnabled ? theme.color.blue : theme.color.grey_650)};

  color: ${({ theme, isEnabled }) => (isEnabled ? theme.color.grey_100 : theme.color.grey_500)};
  font-size: 9.3px;
  font-weight: 300;
`;

export const TextFieldWrapper = styled.div`
  flex: 1;
`;

export const Typography = styled.p`
  font-size: 12.5px;
  font-weight: 200;
  color: ${({ theme }) => theme.color.grey_400};
`;
