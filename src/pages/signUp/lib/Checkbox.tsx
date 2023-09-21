import styled from "styled-components";

interface ICheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary";
  checked?: boolean;
}

function Checkbox({ variant = "primary", checked = false, onClick, id }: ICheckboxProps) {
  return (
    <div>
      <Input type="checkbox" onClick={onClick} id={id} checked={checked} />
      <Label htmlFor={id} />
    </div>
  );
}

export default Checkbox;

const Input = styled.input``;

const Label = styled.label``;
