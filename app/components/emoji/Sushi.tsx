import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSushi = ({
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
    <clipPath id="sushi_svg__a">
      <path d="M7 13.185c0 .806.455 1.543 1.177 1.903l9.455 4.728a5.297 5.297 0 0 0 4.736 0L28 17v-5L15 6.5l-8 4z" />
    </clipPath>
    <clipPath id="sushi_svg__b">
      <path d="M7.114 11.443a1.14 1.14 0 0 1-1.286-1.855l2.075-1.926a12.006 12.006 0 0 1 13.539-1.941l2.444 1.222a10.005 10.005 0 0 1 5.23 6.519l.495 1.982a2 2 0 0 1-1.046 2.273l-3.119 1.56a1.999 1.999 0 0 1-2.456-.54l-1.305-1.631a12.273 12.273 0 0 0-4.098-3.312l-4.704-2.353a6.45 6.45 0 0 0-5.769.002z" />
    </clipPath>
    <g fill="none">
      <path d="M0 0h32v32H0z" />
      <ellipse cx={9} cy={14.5} rx={6} ry={1.5} stroke="#000" strokeWidth={4} />
      <ellipse cx={9} cy={25.5} rx={6} ry={1.5} stroke="#000" strokeWidth={4} />
      <path d="M3 14.5h12v11H3z" stroke="#000" strokeWidth={4} />
      <path
        d="M7 13.185c0 .806.455 1.543 1.177 1.903l9.455 4.728a5.297 5.297 0 0 0 4.736 0l5.001-2.5c.387-.194.631-.589.631-1.022V12L15 6.5l-8 4z"
        stroke="#000"
        strokeWidth={4}
      />
      <path
        d="M7.114 11.443a1.14 1.14 0 0 1-1.286-1.855l2.075-1.926a12.006 12.006 0 0 1 13.539-1.941l2.444 1.222a10.005 10.005 0 0 1 5.23 6.519l.495 1.982a2 2 0 0 1-1.046 2.273l-3.119 1.56a1.999 1.999 0 0 1-2.456-.54l-1.305-1.631a12.273 12.273 0 0 0-4.098-3.312l-4.704-2.353a6.45 6.45 0 0 0-5.769.002z"
        stroke="#000"
        strokeWidth={4}
      />
    </g>
    <path
      d="M7 13.185c0 .806.455 1.543 1.177 1.903l9.455 4.728a5.297 5.297 0 0 0 4.736 0L28 17v-5L15 6.5l-8 4z"
      fill="#e0e0e0"
    />
    <g clipPath="url(#sushi_svg__a)">
      <path d="M3 6h17v18H3z" fill="#aaa" />
    </g>
    <ellipse cx={9} cy={25.5} fill="#33402e" rx={6} ry={1.5} />
    <path d="M3 14.5h12v11H3z" fill="#33402e" />
    <ellipse cx={9} cy={14.5} fill="#fff" rx={6} ry={1.5} />
    <ellipse cx={9} cy={14.5} fill="#e9554a" rx={3} ry={0.75} />
    <path
      d="M7.114 11.443a1.14 1.14 0 0 1-1.286-1.855l2.075-1.926a12.006 12.006 0 0 1 13.539-1.941l2.444 1.222a10.005 10.005 0 0 1 5.23 6.519l.495 1.982a2 2 0 0 1-1.046 2.273l-3.119 1.56a1.999 1.999 0 0 1-2.456-.54l-1.305-1.631a12.273 12.273 0 0 0-4.098-3.312l-4.704-2.353a6.45 6.45 0 0 0-5.769.002z"
      fill="#b84b43"
    />
    <g
      clipPath="url(#sushi_svg__b)"
      fill="none"
      stroke="#853631"
      strokeLinecap="round"
      strokeWidth={2}
    >
      <path d="m16 5.5-4 2M21 7l-4 2M25 9l-4 2" />
    </g>
  </svg>
);

export default SvgSushi;
