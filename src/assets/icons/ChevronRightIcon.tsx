import { IIcon } from "src/interfaces/assets";

interface IChevronRightIconProps extends IIcon {
  strokeWidth?: number;
}

export const ChevronRightIcon = ({ width = 16, height = 17, stroke = "white", strokeWidth = 1.2 }: IChevronRightIconProps) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66797 12.5723L10.668 8.57227L6.66797 4.57227" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
};
