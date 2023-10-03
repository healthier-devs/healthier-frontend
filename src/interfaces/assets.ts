export interface IIcon extends React.HTMLAttributes<HTMLOrSVGElement> {
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
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

export type TImage = React.HTMLAttributes<HTMLImageElement>;
