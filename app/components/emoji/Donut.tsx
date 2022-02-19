import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDonut = ({
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
    <clipPath id="donut_svg__a">
      <path d="M0 0h32v32H0z" />
    </clipPath>
    <path d="M0 0h32v32H0z" fill="none" />
    <g clipPath="url(#donut_svg__a)">
      <path
        d="M30 18.5C30 24.847 23.727 30 16 30S2 24.847 2 18.5v-4C2 8.153 8.273 3 16 3s14 5.153 14 11.5z"
        fill="none"
        stroke="#000"
        strokeWidth={4}
      />
      <path
        d="M2 14.5h28v4C30 24.847 23.727 30 16 30S2 24.847 2 18.5z"
        fill="#d19747"
      />
      <ellipse cx={16} cy={14.5} fill="#daad6d" rx={14} ry={11.5} />
      <path
        d="M16 4c7.055 0 12.783 4.705 12.783 10.5S23.055 25 16 25 3.217 20.295 3.217 14.5 8.945 4 16 4zm0 6c3.024 0 5.478 2.016 5.478 4.5S19.024 19 16 19s-5.478-2.016-5.478-4.5S12.976 10 16 10z"
        fill="#fff"
      />
      <path
        d="M12.114 15.282A2.76 2.76 0 0 1 12 14.5c0-1.813 1.792-3.286 4-3.286s4 1.473 4 3.286c0 .269-.04.531-.114.782-.993-.821-6.779-.821-7.772 0z"
        fill="#d19747"
      />
      <path d="M12.114 15.282c.993-.821 2.368-1.33 3.886-1.33s2.893.509 3.886 1.33c-.427 1.436-2.006 2.504-3.886 2.504s-3.459-1.068-3.886-2.504z" />
      <g fill="none" stroke="#ec79cc" strokeWidth={1.5}>
        <path d="M21 10h2M11 10l3-1M18 23l3-1M20 19.5h2M15 21l-2 1M8 16l-3-1M8 13l-1-2M25 15l-2-1M25 20v-2M12 7V6M25 12l1-1M21 7l-1-1M8 19l1 2M11 20h1M17 7l-2-1M9 9 8 8" />
      </g>
    </g>
  </svg>
);

export default SvgDonut;
