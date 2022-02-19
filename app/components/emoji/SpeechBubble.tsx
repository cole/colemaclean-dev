import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSpeechBubble = ({
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
    <clipPath id="speech_bubble_svg__a">
      <path d="M0 0v32h32V0z" />
    </clipPath>
    <path d="M0 0v32h32V0z" fill="none" />
    <g clipPath="url(#speech_bubble_svg__a)">
      <path
        d="M7 22H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H14l-7 7z"
        fill="none"
        stroke="#000"
        strokeWidth={4}
      />
      <path
        d="M7 22H5a3 3 0 0 1-3-3v-3h28v3a3 3 0 0 1-3 3H14l-7 7z"
        fill="#747474"
        fillRule="nonzero"
      />
      <path
        d="M7 20H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H13l-6 6z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default SvgSpeechBubble;
