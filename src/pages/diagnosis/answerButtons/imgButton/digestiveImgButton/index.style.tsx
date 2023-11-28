import BodyImage from "src/assets/images/body.png";
import { IBodyPartStyle } from "src/interfaces/assets";
import theme from "src/lib/theme";
import styled from "styled-components";

export const RootContainer = styled.div`
  background: transparent;
  width: inherit;
`;

export const Container = styled.div`
  position: relative;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${BodyImage});
`;

export const BodyPartContainer = styled.div`
  position: absolute;
  top: 38%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  height: 40%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BodyPartRowContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;

  &.BodyPart_top,
  &.BodyPart_mid {
    height: calc((100% / 245) * 90 - 4px);
  }

  &.BodyPart_bottom {
    height: calc((100% / 245) * 65 - 4px);
  }
`;

export const defaultStyle: IBodyPartStyle = {
  mixBlendMode: "multiply",
  opacity: 0.8,
  backgroundFill: "#6D7BF2",
  fillOpacity: 0.5,
  textFill: theme.color.grey_100,
  stroke: true,
};
export const selectedStyle: IBodyPartStyle = {
  mixBlendMode: "normal",
  opacity: 1,
  backgroundFill: theme.color.sub_blue,
  fillOpacity: 1,
  textFill: theme.color.blue,
  stroke: false,
};
