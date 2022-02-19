import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgThoughtBubble = ({
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
    <path d="M0 0v32h32V0z" fill="none" />
    <path
      d="M11.476 5.702a7.002 7.002 0 0 1 11.677.959A4.502 4.502 0 0 1 30 10.5v2a4.482 4.482 0 0 1-1.101 2.948c.066.34.101.692.101 1.052V18.5c0 3.036-2.464 5.5-5.5 5.5a5.484 5.484 0 0 1-3.954-1.679A6.97 6.97 0 0 1 15 24c-.754 0-1.48-.119-2.16-.34a16.549 16.549 0 0 1-6.351 5.595L5 30v-2a21.053 21.053 0 0 0 2.47-6.136A3.501 3.501 0 0 1 3 18.5v-2c0-.513.111-1 .309-1.44A5.477 5.477 0 0 1 2 11.5v-2C2 6.464 4.464 4 7.5 4a5.48 5.48 0 0 1 3.976 1.702z"
      fill="none"
      stroke="#000"
      strokeWidth={4}
    />
    <path
      d="M7 25.58c.4-1.251.683-2.54.843-3.847A3.501 3.501 0 0 1 3 18.5v-2l.769-.961A5.483 5.483 0 0 1 2 11.5v-2L4 8h24l2 2.5v2a4.49 4.49 0 0 1-1.51 3.362l.51.638v2c0 3.036-2.464 5.5-5.5 5.5a5.484 5.484 0 0 1-3.954-1.679A6.97 6.97 0 0 1 15 24c-.754 0-1.48-.119-2.16-.34a16.549 16.549 0 0 1-6.351 5.595L5 30v-2z"
      fill="#747474"
    />
    <path
      d="M11.476 5.702a7.002 7.002 0 0 1 11.677.959A4.502 4.502 0 0 1 30 10.5a4.49 4.49 0 0 1-1.622 3.458A5.502 5.502 0 0 1 23.5 22a5.484 5.484 0 0 1-3.954-1.679A6.97 6.97 0 0 1 15 22c-.754 0-1.48-.119-2.16-.34a16.549 16.549 0 0 1-6.351 5.595L5 28a21.043 21.043 0 0 0 2.843-8.267 3.501 3.501 0 0 1-3.665-5.851A5.492 5.492 0 0 1 2 9.5C2 6.464 4.464 4 7.5 4a5.48 5.48 0 0 1 3.976 1.702z"
      fill="#fff"
    />
  </svg>
);

export default SvgThoughtBubble;
