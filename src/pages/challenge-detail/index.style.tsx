import { Heading_2 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
`;

export const Image = styled.div<{ src: string }>`
  position: relative;

  width: 100%;
  padding-top: 80%;
  background-size: cover;

  ::before {
    content: "";

    display: block;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-image: ${({ src }) => `url(${src})`};
    background-size: cover;
  }
`;

export const ImageShadow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 50%;

  background: linear-gradient(0deg, #131416 0%, rgba(19, 20, 22, 0) 100%);
`;

export const Section = styled.section`
  padding: 0 2rem;
`;

export const Highlighted = styled.span`
  color: ${({ theme }) => theme.color.secondary_green};
`;

export const Typography = styled.p<{
  mt?: string;
  mb?: string;
  color?: "200" | "300" | "500";
  lineHeight?: "140%" | "150%" | "160%" | "180%";
  fontSize?: string;
  thickness?: string;
}>`
  .highlight {
    color: ${({ theme }) => theme.color.blue_500};
  }

  font-size: ${({ fontSize = "1.4rem" }) => fontSize};
  font-weight: ${({ thickness = "200" }) => thickness};

  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  color: ${({ color = "200", theme }) =>
    color === "200" ? theme.color.grey_200 : color === "300" ? theme.color.grey_300 : theme.color.grey_500};
  line-height: ${({ lineHeight = "140%" }) => lineHeight};
  letter-spacing: -0.3px;
  white-space: pre-wrap;
  word-break: break-all;
`;

export const Frame = styled.ul<{
  px?: string;
  py?: string;
  mt?: string;
  mb?: string;
}>`
  padding: ${({ px = "1.6rem", py = "1.6rem" }) => `${py} ${px}`};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  background-color: ${({ theme }) => theme.color.grey_800};
  border-radius: 2rem;
`;

export const FrameText = styled.li<{
  color: "200" | "300";
  lineHeight: "150%" | "180%";
  fontSize: string;
  fontWeight: string;
}>`
  color: ${({ color, theme }) => (color === "200" ? theme.color.grey_200 : theme.color.grey_300)};
  line-height: ${({ lineHeight }) => lineHeight};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  list-style: decimal;
  list-style-position: inside;
  text-indent: -1.4rem;
  padding-left: 1.4rem;
`;

export const Title = styled(Heading_2)`
  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 1rem;
  margin-bottom: 1rem;

  text-align: center;
`;

export const Chip = styled.div<{ variant: "primary" | "secondary" | "sub" }>`
  font-size: ${({ variant }) => (variant === "sub" ? "1.3rem" : "1.2rem")};

  font-weight: ${({ variant }) => (variant === "sub" ? "200" : "300")};
  padding: ${({ variant }) => (variant === "primary" ? "4px 8px" : variant === "secondary" ? "5px 10px" : "8px 10px")};
  border-radius: ${({ variant }) => (variant === "primary" ? "8px" : variant === "secondary" ? "4px" : "100px")};
  color: ${({ variant, theme }) =>
    variant === "primary" ? theme.color.green_300 : variant === "secondary" ? theme.color.sub_blue : theme.color.grey_300};
  background-color: ${({ variant }) => (variant === "primary" ? "#E6FAAF26" : variant === "secondary" ? "#5464F233" : "#23272E")};
`;

export const ButtonWrapper = styled.div`
  width: inherit;
  padding: 2rem;
  position: fixed;
  bottom: 0;
  box-sizing: border-box;

  background: linear-gradient(180deg, rgba(19, 20, 22, 0) 0%, rgba(19, 20, 22, 0.95) 78.12%, #131416 100%);
`;

export const Button = styled.button<{ canJoin: boolean }>`
  width: 100%;
  padding: 1.4rem 6.2rem;

  border-radius: 3rem;
  background: ${({ theme, canJoin }) => (canJoin ? theme.color.blue : theme.color.grey_600)};

  font-size: 1.4rem;
  color: ${({ theme, canJoin }) => (canJoin ? theme.color.grey_100 : theme.color.grey_500)};
  font-weight: 300;
  line-height: 150%;

  cursor: pointer;
`;
