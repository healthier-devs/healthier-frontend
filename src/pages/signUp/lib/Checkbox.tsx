import { useEffect } from "react";
import { preloadImage } from "src/utils/image";
import styled from "styled-components";

interface IIcon {
  variant?: "primary" | "secondary";
  checked?: boolean;
}

interface ICheckboxProps extends IIcon, React.HTMLAttributes<HTMLInputElement> {}

function Icon({ variant, checked }: IIcon) {
  if (variant === "primary" && checked) {
    return <IconImage className={variant} src="/images/signup/checkbox_primary_selected.svg" />;
  } else if (variant === "primary" && !checked) {
    return <IconImage className={variant} src="/images/signup/checkbox_primary_unselected.svg" />;
  } else if (variant === "secondary" && checked) {
    return <IconImage className={variant} src="/images/signup/checkbox_primary_selected.svg" />;
  }

  return <IconImage className={variant} src="/images/signup/checkbox_secondary_unselected.svg" />;
}

function Checkbox({ variant = "primary", defaultChecked = false, onClick, id }: ICheckboxProps) {
  useEffect(() => {
    preloadImage([
      "signup/checkbox_primary_selected.svg",
      "signup/checkbox_primary_unselected.svg",
      "signup/checkbox_primary_selected.svg",
      "signup/checkbox_secondary_unselected.svg",
    ]);
  }, []);

  return (
    <div>
      <Input type="checkbox" onClick={onClick} id={id} defaultChecked={defaultChecked} />
      <Label htmlFor={id}>
        <Icon variant={variant} checked={defaultChecked} />
      </Label>
    </div>
  );
}

export default Checkbox;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
`;

const IconImage = styled.img`
  &.primary {
    width: 24px;
    height: 24px;
  }

  &.secondary {
    width: 20px;
    height: 20px;
  }
`;
