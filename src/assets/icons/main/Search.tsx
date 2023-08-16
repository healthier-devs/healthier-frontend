import { IIcon } from "src/interfaces/assets";

export default function Diagnose({ style = {}, width = 24, height = 24, stroke = "#999DA4" }: IIcon) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <g id="school">
        <path
          id="Vector"
          d="M18 12.5H22V20.5C22 21.0304 21.7893 21.5391 21.4142 21.9142C21.0391 22.2893 20.5304 22.5 20 22.5H4C3.46957 22.5 2.96086 22.2893 2.58579 21.9142C2.21071 21.5391 2 21.0304 2 20.5V12.5H6M14 22.5V18.5C14 17.9696 13.7893 17.4609 13.4142 17.0858C13.0391 16.7107 12.5304 16.5 12 16.5C11.4696 16.5 10.9609 16.7107 10.5858 17.0858C10.2107 17.4609 10 17.9696 10 18.5V22.5M18 22.5V5.5V3H15.5H8.5H6V5.5V22.5"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path id="Vector_2" d="M12 7V11M10 9H14" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
