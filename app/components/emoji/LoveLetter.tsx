import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLoveLetter = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={1.5}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <clipPath id="love_letter_svg__a">
      <path d="M0 0h32v32H0z" />
    </clipPath>
    <clipPath id="love_letter_svg__b">
      <path d="M30 14a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V14z" />
    </clipPath>
    <path d="M0 0h32v32H0z" fill="none" />
    <g clipPath="url(#love_letter_svg__a)">
      <path
        d="m11.002 12-1.98-1.987a4.239 4.239 0 0 1 .005-5.988l.002-.002a4.243 4.243 0 0 1 6.007.008L16 5l1.049-1.035a4.237 4.237 0 0 1 5.965.012 4.247 4.247 0 0 1 .009 6.016L21.017 12H28a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2z"
        fill="none"
        stroke="#000"
        strokeWidth={4}
      />
      <path
        d="M30 14a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V14z"
        fill="#fff"
      />
      <g clipPath="url(#love_letter_svg__b)" strokeWidth={2}>
        <path d="m2 30 14-13 14 13" fill="none" stroke="#ccc" />
        <path
          d="m2 12 11.397 9.769a4 4 0 0 0 5.206 0L30 12"
          fill="#fff"
          stroke="#999"
        />
      </g>
      <path
        d="m16 17.017-6.977-7.003a4.24 4.24 0 0 1 .008-5.992 4.238 4.238 0 0 1 6.003.007L16 5l1.046-1.032a4.242 4.242 0 0 1 7.223 3.015 4.239 4.239 0 0 1-1.243 3.007L16 17.017z"
        fill="#d92020"
      />
    </g>
  </svg>
);

export default SvgLoveLetter;
