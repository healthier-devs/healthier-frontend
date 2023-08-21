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

export const Typography = styled.p<{
  mt?: string;
  mb?: string;
  color?: "200" | "300" | "500";
  lineHeight?: "140%" | "150%";
  fontSize?: string;
}>`
  .highlight {
    color: ${({ theme }) => theme.color.blue_500};
  }

  font-size: ${({ fontSize = "1.4rem" }) => fontSize};
  font-weight: 200;

  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  color: ${({ color = "200", theme }) =>
    color === "200" ? theme.color.grey_200 : color === "300" ? theme.color.grey_300 : theme.color.grey_500};
  line-height: ${({ lineHeight = "140%" }) => lineHeight};
`;

export const Title = styled(Heading_2)`
  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const Chip = styled.div<{ variant: "primary" | "secondary" }>`
  font-size: 1.2rem;

  font-weight: ${({ variant }) => (variant === "primary" ? "200" : "300")};
  padding: ${({ variant }) => (variant === "primary" ? "4px 8px" : "5px 10px")};
  border-radius: ${({ variant }) => (variant === "primary" ? "8px" : "4px")};
  color: ${({ variant, theme }) => (variant === "primary" ? theme.color.green_300 : theme.color.sub_blue)};
  background-color: ${({ variant }) => (variant === "primary" ? "#E6FAAF26" : "#5464F233")};
`;

export const Button = styled.button`
  width: 100%;
  padding: 1.4rem 6.2rem;

  border-radius: 8px;
  background: ${({ theme }) => theme.color.blue};

  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.grey_100};
  font-weight: 300;
  line-height: 150%;

  cursor: pointer;

  margin-bottom: 2.4rem;
`;
