import { IBodyPartIcon } from "src/interfaces/assets";

export function DigestBottomMid({ style, customStyle, id, onClick }: IBodyPartIcon) {
  const { mixBlendMode, opacity, fillOpacity, backgroundFill, textFill, stroke } = customStyle;

  return (
    <svg viewBox="0 0 80 65" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} id={id} onClick={onClick}>
      <g style={{ mixBlendMode }} opacity={opacity}>
        <rect x="0.5" y="0.5" width="79" height="64" rx="3.5" fill={backgroundFill} fillOpacity={fillOpacity} />
        {stroke && <rect x="0.5" y="0.5" width="79" height="64" rx="3.5" stroke="#5464F2" />}
      </g>
      <path
        d="M33.9556 20.568H31.9816V27.092H30.5396V14.436H31.9816V19.378H33.9556V20.568ZM25.5556 15.36C27.4456 15.36 28.8036 17.096 28.8036 19.826C28.8036 22.556 27.4456 24.278 25.5556 24.278C23.6656 24.278 22.3076 22.556 22.3076 19.826C22.3076 17.096 23.6656 15.36 25.5556 15.36ZM25.5556 22.99C26.6756 22.99 27.4176 21.8 27.4176 19.826C27.4176 17.852 26.6756 16.662 25.5556 16.662C24.4356 16.662 23.6936 17.852 23.6936 19.826C23.6936 21.8 24.4356 22.99 25.5556 22.99ZM42.6985 21.926H41.3545V14.674H42.6985V17.628H44.0985V14.436H45.4705V22.99H44.0985V18.804H42.6985V21.926ZM40.8085 21.422C39.2965 21.73 38.0225 21.786 36.1605 21.786H35.3065V17.978H38.6665V16.522H35.2785V15.388H40.0665V19.056H36.7065V20.624C38.2185 20.61 39.3665 20.54 40.6685 20.274L40.8085 21.422ZM41.9145 22.71C41.9145 24.208 43.6505 25.58 46.0865 25.916L45.5265 27.036C43.5525 26.714 41.9985 25.818 41.2145 24.53C40.4305 25.818 38.8485 26.714 36.8745 27.036L36.3145 25.916C38.7505 25.58 40.4865 24.208 40.4865 22.71V22.43H41.9145V22.71ZM58.1475 14.436V27.078H56.7755V20.54H55.3335V26.49H53.9755V14.674H55.3335V19.364H56.7755V14.422L58.1475 14.436ZM51.3155 15.598H52.6595V23.998H47.7735V15.598H49.1315V18.566H51.3155V15.598ZM51.3155 19.714H49.1315V22.822H51.3155V19.714ZM29.0451 39.496C31.3831 39.272 33.0211 38.25 33.2031 37.144H29.5351V35.982H38.8731V37.144H35.1771C35.3591 38.25 36.9971 39.272 39.3351 39.496L38.8311 40.63C36.6191 40.406 34.8691 39.454 34.1971 38.18C33.5111 39.482 31.8171 40.392 29.5631 40.63L29.0451 39.496ZM34.9111 42.422V43.598C37.2631 43.752 38.5231 44.494 38.5231 45.838C38.5231 47.294 36.9691 48.078 34.1691 48.078C31.3831 48.078 29.8151 47.294 29.8151 45.838C29.8151 44.494 31.1031 43.738 33.4691 43.584V42.422H28.4711V41.274H39.9091V42.422H34.9111ZM37.0671 45.838C37.0671 45.054 36.0311 44.69 34.1691 44.69C32.3071 44.69 31.2851 45.054 31.2851 45.838C31.2851 46.566 32.3071 46.972 34.1691 46.972C36.0311 46.972 37.0671 46.566 37.0671 45.838ZM52.726 38.46V39.65H50.934V42.87H49.492V35.436H50.934V38.46H52.726ZM47.952 39.174C47.952 40.952 46.524 42.198 44.578 42.198C42.66 42.198 41.218 40.952 41.218 39.174C41.218 37.382 42.66 36.164 44.578 36.164C46.524 36.164 47.952 37.382 47.952 39.174ZM42.632 39.174C42.632 40.28 43.458 40.98 44.578 40.98C45.712 40.98 46.538 40.294 46.538 39.174C46.538 38.054 45.712 37.368 44.578 37.368C43.458 37.368 42.632 38.082 42.632 39.174ZM46.86 43.22C49.464 43.22 51.074 44.144 51.074 45.656C51.074 47.168 49.464 48.078 46.86 48.078C44.27 48.078 42.646 47.168 42.646 45.656C42.646 44.144 44.27 43.22 46.86 43.22ZM46.86 46.93C48.666 46.93 49.646 46.496 49.646 45.656C49.646 44.816 48.666 44.368 46.86 44.368C45.054 44.368 44.074 44.816 44.074 45.656C44.074 46.496 45.054 46.93 46.86 46.93Z"
        fill={textFill}
      />
    </svg>
  );
}