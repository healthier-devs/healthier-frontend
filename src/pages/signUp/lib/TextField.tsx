import styled from "styled-components";

interface ITextFieldProps {
  label?: string;
  id: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  errorText?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
}

function TextField({ label = "", id, value, onChange, isError = false, errorText, placeholder = "", type = "text" }: ITextFieldProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} placeholder={placeholder} value={value} onChange={onChange} isError={isError} type={type} />
      {isError && <ErrorText>{errorText}</ErrorText>}
    </div>
  );
}

export default TextField;

const Label = styled.label`
  display: block;
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.color.grey_300};
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 150%;
`;

const Input = styled.input<{ isError: boolean }>`
  width: 100%;
  padding: 0 0 0.8rem 0;

  color: ${({ theme }) => theme.color.grey_400};
  font-size: 1.6rem;
  font-weight: 200;

  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey_600};
  border-radius: 0;

  &:focus {
    border-bottom: 1px solid ${({ theme, isError }) => (isError ? theme.color.red : theme.color.blue)};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.grey_600};
  }
`;

const ErrorText = styled.p`
  margin-top: 1rem;

  color: ${({ theme }) => theme.color.red_600};
  font-size: 1.3rem;
  font-weight: 100;
`;
