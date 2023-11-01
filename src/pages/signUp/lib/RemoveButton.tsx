import RemoveIcon from "src/assets/icons/RemoveIcon";
import styled from "styled-components";

type TRemoveButton = React.HTMLAttributes<HTMLButtonElement>;

function RemoveButton({ onClick }: TRemoveButton) {
  return (
    <Button onClick={onClick} type="button">
      <RemoveIcon />
    </Button>
  );
}

export default RemoveButton;

const Button = styled.button`
  background: transparent;

  padding: 0 0 0 6px;

  cursor: pointer;
`;
