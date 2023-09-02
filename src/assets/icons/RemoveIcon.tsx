import { IIcon } from "src/interfaces/assets";

function RemoveIcon({ width = 24, height = 24 }: IIcon) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="#23272E"
      />
      <path d="M15 9L9 15" stroke="#787C83" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 9L15 15" stroke="#787C83" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default RemoveIcon;
