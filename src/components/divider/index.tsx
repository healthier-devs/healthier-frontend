import { StyledDivider } from "./index.style";

type TDivider = React.HTMLAttributes<HTMLDivElement>;

function Divider(props: TDivider) {
  return <StyledDivider {...props} />;
}

export default Divider;
