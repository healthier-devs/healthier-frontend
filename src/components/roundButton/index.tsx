import React, { memo } from "react";
import theme from "src/lib/theme";
import { CSSProperties } from "styled-components";
import { Container, ButtonText } from "./index.style";

export interface IRoundButton {
  outline?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  children: string;
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RoundButton = ({
  outline = "none",
  backgroundColor = theme.color.blue,
  color = theme.color.grey_100,
  fontSize = 1.6,
  children,
  style,
  onClick,
}: IRoundButton) => {
  return (
    <Container backgroundColor={backgroundColor} outline={outline} style={style} onClick={onClick}>
      <ButtonText color={color} fontSize={fontSize}>
        {children}
      </ButtonText>
    </Container>
  );
};

export default memo(RoundButton);
