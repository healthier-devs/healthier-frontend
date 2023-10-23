import styled from "styled-components";

interface ITextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  errorText?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  adornment?: React.ReactNode;
  containerStyle?: React.CSSProperties;
}

function TextField({
  id,
  value,
  onChange,
  isError = false,
  errorText = "",
  label = "",
  placeholder = "",
  type = "text",
  adornment,
  containerStyle,
  ...props
}: ITextFieldProps) {
  return (
    <div>
      <Container style={containerStyle}>
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          isError={isError}
          type={type}
          autoComplete={type === "password" ? "off" : "on"}
          maxLength={500}
          {...props}
        />
        {adornment && <IconButton>{adornment}</IconButton>}
      </Container>
      <ErrorTextWrapper isError={isError}>
        <ErrorText>{errorText}</ErrorText>
      </ErrorTextWrapper>
    </div>
  );
}

export default TextField;

const ErrorTextWrapper = styled.div<{ isError: boolean }>`
  display: ${({ isError }) => (isError ? "block" : "hidden")};
  height: 13px;
`;

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
  padding: 0 3rem 0.8rem 0;
  box-sizing: border-box;

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

const Container = styled.div`
  position: relative;
`;

const IconButton = styled.div`
  position: absolute;
  bottom: 6px;
  right: 0;
`;
