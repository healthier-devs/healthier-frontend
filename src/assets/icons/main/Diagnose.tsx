import { IIcon } from "src/interfaces/assets";

export default function Diagnose({ style = {}, width = 24, height = 24, stroke = "#ffffff" }: IIcon) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <g id="Frame" clipPath="url(#clip0_5537_25759)">
        <path
          id="Vector"
          d="M16.6314 16.7485L22.8447 22.8183M10.3129 19.5417C5.35278 19.6276 1.24572 15.5775 1.16147 10.5175C1.07723 5.4575 5.04739 1.26771 10.0075 1.18176C14.9675 1.09582 19.0746 5.14595 19.1588 10.2059C19.2431 15.2659 15.2729 19.4557 10.3129 19.5417V19.5417Z"
          stroke={stroke}
          strokeWidth="2.24054"
          strokeLinecap="round"
        />
        <g id="Group">
          <path id="Vector_2" d="M6.25391 10.3674H14.5733" stroke={stroke} strokeWidth="2.24054" strokeLinecap="round" />
          <path id="Vector_3" d="M10.4141 6.12476V14.6118" stroke={stroke} strokeWidth="2.24054" strokeLinecap="round" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_5537_25759">
          <rect width={width} height={height} fill={stroke} />
        </clipPath>
      </defs>
    </svg>
  );
}
