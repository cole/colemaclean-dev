import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGrowingHeart = ({
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
    <path d="M0 0h32v32H0z" fill="none" />
    <path
      d="M16 28 4.249 16.249a6.716 6.716 0 0 1 0-9.498l.002-.002a6.715 6.715 0 0 1 9.498 0L16 9l2.251-2.251a6.715 6.715 0 0 1 9.498 0l.002.002a6.716 6.716 0 0 1 0 9.498L16 28z"
      fill="none"
      stroke="#000"
      strokeWidth={4}
    />
    <path
      d="M16 28 4.249 16.249a6.716 6.716 0 0 1 0-9.498l.002-.002a6.715 6.715 0 0 1 9.498 0L16 9l2.251-2.251a6.715 6.715 0 0 1 9.498 0l.002.002a6.716 6.716 0 0 1 0 9.498L16 28z"
      fill="#ff4586"
    />
    <path
      d="m16 25.247-8.811-8.81a4.882 4.882 0 0 1 0-6.902h.001a4.878 4.878 0 0 1 6.901 0L16 11.443l1.909-1.908a4.876 4.876 0 0 1 6.901 0h.001a4.882 4.882 0 0 1 0 6.902L16 25.247z"
      fill="#ae0b6d"
    />
    <path
      d="m16 20.884-4.927-4.927a2.452 2.452 0 0 1 0-3.467l.003-.002a2.451 2.451 0 0 1 3.466 0L16 13.946l1.458-1.458a2.451 2.451 0 0 1 3.469.002c.957.958.957 2.51 0 3.467L16 20.884z"
      fill="#670640"
    />
  </svg>
);

export default SvgGrowingHeart;
