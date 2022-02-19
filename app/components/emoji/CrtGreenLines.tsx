import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCrtGreenLines = ({
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
    <clipPath id="crt_green_lines_svg__a">
      <path d="M0 0h32v32H0z" />
    </clipPath>
    <path d="M0 0h32v32H0z" fill="none" />
    <g clipPath="url(#crt_green_lines_svg__a)">
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
      <path d="m24 4 1 .501L26 4h.002C27.105 4 28 4.895 28 5.998V8l-.157.23.037 8.55.12.205V20a2 2 0 0 1-2 2h-6l-1-.239L18 22h-6l-1-.211L10 22H6l-1.664-2 .014-6.683L4 13V6a2 2 0 0 1 1-1.732l1 .304L7 4h5l1 .376L14 4h2l1 .535L18 4z" />
      <path d="M6 4h1v4H5V4.268A2 2 0 0 1 6 4zM8 7h2v7H8z" fill="#060" />
      <path d="M8 13h2v3H8z" fill="#0f0" />
      <path d="M10 14h2v7h-2z" fill="#060" />
      <path d="M10 20h2v2h-2z" fill="#0f0" />
      <path d="M12 4h2v5h-2z" fill="#060" />
      <path d="M12 8h2v3h-2z" fill="#0f0" />
      <path d="M18 15h2v7h-2z" fill="#060" />
      <path d="M18 21h2v1h-2z" fill="#0f0" />
      <path d="M16 4h2v2h-2z" fill="#060" />
      <path d="M16 5h2v3h-2z" fill="#0f0" />
      <path d="M22 12h2v7h-2z" fill="#060" />
      <path d="M22 18h2v3h-2zM5 7h2v3H5z" fill="#0f0" />
      <path d="M24 4h2v5h-2z" fill="#060" />
      <path d="M24 8h2v3h-2z" fill="#0f0" />
      <path d="M15 11h2v7h-2z" fill="#060" />
      <path d="M15 17h2v3h-2z" fill="#0f0" />
      <path d="M27 8h1v7h-1z" fill="#060" />
      <path d="M27 14h1v3h-1z" fill="#0f0" />
      <path d="M4 13h2v7H4z" fill="#060" />
      <path d="M6 19H4v1a2 2 0 0 0 2 2z" fill="#0f0" />
      <path d="M20 5h2v7h-2z" fill="#060" />
      <path d="M20 11h2v3h-2z" fill="#0f0" />
    </g>
  </svg>
);

export default SvgCrtGreenLines;
