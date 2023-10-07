import { HTMLAttributes, ReactNode } from "react";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import theme from "src/lib/theme";
import * as Styled from "./index.style";

export interface ITooltip extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  selected?: boolean;
  position?: "left" | "center" | "right";
}

const Tooltip = ({ children, position = "left", ...props }: ITooltip) => {
  return (
    <Styled.Wrapper position={position}>
      <Styled.Container {...props}>
        <Styled.Text>{children}</Styled.Text>
        <ChevronRightIcon stroke={theme.color.grey_400} />
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Tooltip;
