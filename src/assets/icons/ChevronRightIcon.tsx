import { IIcon } from "src/interfaces/assets";

interface IChevronRightIconProps extends IIcon {
  strokeWidth?: number;
  d?: string;
}

export const ChevronRightIcon = ({ width = 16, height = 16, stroke = "white", strokeWidth = 1.2 }: IChevronRightIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path d="M9 18L15 12L9 6" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" stroke-linejoin="round" />
    </svg>
  );
};
