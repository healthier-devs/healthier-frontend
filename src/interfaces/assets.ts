export interface IIcon {
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  stroke?: string;
}

export interface IBodyPartIcon extends IIcon {
  customStyle: IBodyPartStyle;
}

export interface IBodyPartStyle {
  mixBlendMode: "normal" | "multiply";
  opacity: number;
  fillOpacity: number;
  backgroundFill: string;
  textFill: string;
  stroke: boolean;
}
