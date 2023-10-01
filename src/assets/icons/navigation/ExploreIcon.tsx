import { IIcon } from "src/interfaces/assets";

export default function ExploreIcon({ isSelected }: { isSelected: boolean } & IIcon) {
  return isSelected ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
      <g clipPath="url(#clip0_6908_49344)">
        <path
          d="M17.6364 17.7543L23.8575 23.8318L17.6364 17.7543ZM11.3098 20.551C6.34346 20.6371 2.23118 16.5818 2.14683 11.5154C2.06247 6.44901 6.03767 2.2539 11.004 2.16785C15.9704 2.08179 20.0827 6.13707 20.167 11.2035C20.2514 16.2699 16.2762 20.465 11.3098 20.551Z"
          fill="#999DA4"
        />
        <path
          d="M17.6364 17.7543L23.8575 23.8318M11.3098 20.551C6.34346 20.6371 2.23118 16.5818 2.14683 11.5154C2.06247 6.44901 6.03767 2.2539 11.004 2.16785C15.9704 2.08179 20.0827 6.13707 20.167 11.2035C20.2514 16.2699 16.2762 20.465 11.3098 20.551Z"
          stroke="#999DA4"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path d="M6.82324 11.3652H15.9991" stroke="#131416" strokeWidth="2.22857" strokeLinecap="round" />
        <path d="M11.4109 6.68579V16.0465" stroke="#131416" strokeWidth="2.22857" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_6908_49344">
          <rect width="26" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
      <g clipPath="url(#clip0_6908_49257)">
        <path
          d="M17.6364 17.7543L23.8575 23.8318L17.6364 17.7543ZM11.3098 20.551C6.34346 20.6371 2.23118 16.5818 2.14683 11.5154C2.06247 6.44901 6.03767 2.2539 11.004 2.16785C15.9704 2.08179 20.0827 6.13707 20.167 11.2035C20.2514 16.2699 16.2762 20.465 11.3098 20.551Z"
          fill="#3F444F"
        />
        <path
          d="M17.6364 17.7543L23.8575 23.8318M11.3098 20.551C6.34346 20.6371 2.23118 16.5818 2.14683 11.5154C2.06247 6.44901 6.03767 2.2539 11.004 2.16785C15.9704 2.08179 20.0827 6.13707 20.167 11.2035C20.2514 16.2699 16.2762 20.465 11.3098 20.551Z"
          stroke="#3F444F"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path d="M6.82324 11.3652H15.9991" stroke="#131416" strokeWidth="2.22857" strokeLinecap="round" />
        <path d="M11.4109 6.68579V16.0465" stroke="#131416" strokeWidth="2.22857" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_6908_49257">
          <rect width="26" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
