import { IIcon } from "src/interfaces/assets";

export default function CheckIcon({ style = {}, width = 20, height = 20, stroke = "#5464F2" }: IIcon) {
  return (
    <svg width={width} height={height} viewBox={`0 0 20 20`} fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <path d="M18 5L7 16L2 11" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
