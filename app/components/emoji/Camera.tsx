import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCamera = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={1.5}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <clipPath id="camera_svg__a">
      <path d="M0 0h32v32H0z" />
    </clipPath>
    <clipPath id="camera_svg__b">
      <circle cx={18} cy={20} r={8} />
    </clipPath>
    <path d="M0 0h32v32H0z" fill="none" />
    <g clipPath="url(#camera_svg__a)">
      <path
        d="M10 8h.146a3 3 0 0 0 2.683-1.658l.618-1.236A2 2 0 0 1 15.236 4h5.528a2 2 0 0 1 1.789 1.106l.618 1.236A3 3 0 0 0 25.854 8H26c1.061 0 2.078.421 2.828 1.172A3.995 3.995 0 0 1 30 12v15a3 3 0 0 1-3 3H4a2 2 0 0 1-2-2V12a4 4 0 0 1 4-4V6h4z"
        fill="none"
        stroke="#000"
        strokeWidth={4}
      />
      <path d="M6 6h4v3H6z" fill="#2f2f2f" />
      <path
        d="M5 30h22a3 3 0 0 0 3-3V12a3.995 3.995 0 0 0-1.172-2.828A3.995 3.995 0 0 0 26 8h-.146a3 3 0 0 1-2.683-1.658l-.618-1.236A2 2 0 0 0 20.764 4h-5.528a2 2 0 0 0-1.789 1.106l-.618 1.236A3 3 0 0 1 10.146 8H6L5 24z"
        fill="#323232"
      />
      <circle cx={18} cy={20} fill="#1a1a1a" r={10} />
      <circle cx={18} cy={20} fill="#585858" r={8} />
      <g clipPath="url(#camera_svg__b)">
        <circle cx={18} cy={20} fill="#618f77" r={6} />
        <circle cx={18} cy={20} fill="#25362d" r={4} />
      </g>
      <ellipse
        cx={18}
        cy={17}
        fill="#eff4f1"
        fillOpacity={0.34}
        rx={3.316}
        ry={2}
      />
      <path
        d="M2 12a4 4 0 0 1 4-4h3v2.757a3 3 0 0 1-.879 2.122l-.242.242A3 3 0 0 0 7 15.243V28a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12z"
        fill="#595959"
      />
      <path d="M15 5h6v1h-6z" fill="#8b8b8b" />
      <path
        d="M8 10.5A1.503 1.503 0 0 0 6.5 9h-1A1.503 1.503 0 0 0 4 10.5 1.503 1.503 0 0 0 5.5 12h1A1.503 1.503 0 0 0 8 10.5z"
        fill="#1d1d1d"
      />
    </g>
  </svg>
);

export default SvgCamera;
