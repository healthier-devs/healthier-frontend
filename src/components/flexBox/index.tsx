import styled from "styled-components";

interface IStyledFlexBox {
  flexDirection?: "column" | "row";
  justifyContent?: "start" | "center" | "space-between" | "space-around" | "space-evenly";
  alignItems?: "stretch" | "center" | "start" | "end";
  gap?: string;
  mt?: string;
  mb?: string;
}

interface IFlexBoxProps extends IStyledFlexBox {
  children?: React.ReactNode;
}

function FlexBox({ children, ...props }: IFlexBoxProps) {
  return <StyledFlexBox {...props}>{children}</StyledFlexBox>;
}

export default FlexBox;

const StyledFlexBox = styled.div<IStyledFlexBox>`
  display: flex;

  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  justify-content: ${({ justifyContent = "start" }) => justifyContent};
  align-items: ${({ alignItems = "stretch" }) => alignItems};

  gap: ${({ gap }) => gap};

  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
`;
