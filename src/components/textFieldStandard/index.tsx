import { forwardRef } from "react";
import * as Styled from "./index.style";

type TTextFieldStandardType = "number" | "text";

export interface ITextFieldStandardProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: TTextFieldStandardType;
  value: string | number;
  name?: string;
  isError?: boolean;
  errorHelperText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldStandard = forwardRef<HTMLInputElement, ITextFieldStandardProps>(function TextFieldStandard(
  { label, placeholder, type = "text", isError = false, errorHelperText = "", value, name, onChange, style },
  ref
) {
  return (
    <>
      <Styled.Container>
        {label && <Styled.Label>{label}</Styled.Label>}
        <Styled.Input
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
          style={style}
          isError={isError}
        />
      </Styled.Container>
      {isError && <Styled.HelperText>{errorHelperText}</Styled.HelperText>}
    </>
  );
});

export default TextFieldStandard;
