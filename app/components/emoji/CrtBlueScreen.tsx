import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCrtBlueScreen = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={1.414}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <clipPath id="crt_blue_screen_svg__a">
      <path d="M0 0h32v32H0z" />
    </clipPath>
    <path d="M0 0h32v32H0z" fill="none" />
    <g clipPath="url(#crt_blue_screen_svg__a)">
      <path d="M0 0h32v32H0z" />
      <path d="M30 2H2v22l1 .5-1 .5v5h28v-5l-1-.5 1-.5z" fill="#4d4d4d" />
      <path d="M2 24h28v1H2z" fill="#333" />
      <g fill="gray">
        <path d="M4 26h2v1H4zM4 28h2v1H4zM7 26h2v1H7zM7 28h2v1H7zM10 26h2v1h-2zM10 28h2v1h-2z" />
      </g>
      <path d="M25 26h3v3h-3z" fill="#219555" />
      <circle cx={14.5} cy={27.5} fill="#333" r={1.5} />
      <circle cx={18.5} cy={27.5} fill="#333" r={1.5} />
      <circle cx={22.5} cy={27.5} fill="#333" r={1.5} />
      <path
        d="M28 6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6z"
        fill="#2243fd"
      />
      <path d="M17 18h6v2h-6zM24 18h2v2h-2z" fill="#fff" />
    </g>
  </svg>
);

export default SvgCrtBlueScreen;
