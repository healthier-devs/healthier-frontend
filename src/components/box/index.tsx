import styled from "styled-components";

interface IBox extends React.HTMLAttributes<HTMLDivElement> {
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
}

export default function Box({ children, ...props }: IBox & { children?: React.ReactNode }) {
  return <StyledBox {...props}>{children}</StyledBox>;
}

const StyledBox = styled.div<IBox>`
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
`;
