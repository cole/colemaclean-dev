import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRobot = ({
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
    <clipPath id="robot_svg__a">
      <path d="M0 .017h32v32H0z" />
    </clipPath>
    <path d="M0 .017h32v32H0z" fill="none" />
    <g clipPath="url(#robot_svg__a)">
      <path
        d="M28 30.017H4v-3a2.003 2.003 0 0 1 2-2h.757c.796 0 1.559.316 2.122.878l.535.536a2 2 0 0 0 1.414.586h10.344a2 2 0 0 0 1.414-.586l.535-.536a3.004 3.004 0 0 1 2.122-.878H26a2 2 0 0 1 2 2zM27 7.731V2.017h2v6.586a2 2 0 0 1 1 1.732v8.363a2 2 0 0 1-1.212 1.838l-3.728 1.598a23.004 23.004 0 0 1-18.12 0l-3.728-1.598A2 2 0 0 1 2 18.698v-8.363a2 2 0 0 1 1.212-1.838L6.94 6.9a22.995 22.995 0 0 1 18.12 0z"
        fill="none"
        stroke="#000"
        strokeWidth={4}
      />
      <path
        d="m8.879 25.895.535.536a2 2 0 0 0 1.414.586h10.344a2 2 0 0 0 1.414-.586l.46-.46v3.546H8.879z"
        fill="#404040"
      />
      <path
        d="M28 30.017H4v-3a2.003 2.003 0 0 1 2-2h.757c.769 0 1.508.295 2.122.878l1.364 1.364a5.996 5.996 0 0 0 4.242 1.758h3.03a5.996 5.996 0 0 0 4.242-1.758l1.364-1.364a3.004 3.004 0 0 1 2.122-.878H26a2 2 0 0 1 2 2z"
        fill="#737373"
      />
      <path d="M27 2.017h2v10h-2z" fill="#4d4d4d" />
      <path
        d="m28 8.16.788.337A2 2 0 0 1 30 10.335v8.363a2 2 0 0 1-1.212 1.838l-3.728 1.598a23.004 23.004 0 0 1-18.12 0l-3.728-1.598A2 2 0 0 1 2 18.698v-8.363a2 2 0 0 1 1.212-1.838L4 8.16z"
        fill="#8a8a8a"
      />
      <path
        d="M4 8.16 6.94 6.9a22.995 22.995 0 0 1 18.12 0L28 8.16v8.523a2 2 0 0 1-1.231 1.847l-3.077 1.282a20.001 20.001 0 0 1-15.384 0L5.231 18.53A2 2 0 0 1 4 16.683z"
        fill="#333"
      />
      <path
        d="M11 9.517a1.5 1.5 0 1 0-3 0v2a1.499 1.499 0 0 0 2.561 1.06c.281-.281.439-.662.439-1.06zM24 9.517a1.5 1.5 0 1 0-3 0v2a1.499 1.499 0 0 0 2.561 1.06c.281-.281.439-.662.439-1.06z"
        fill="#58d3d7"
      />
      <path
        d="M11 16.017h.001a6.925 6.925 0 0 0 4.868 2h.303a6.83 6.83 0 0 0 4.828-2"
        fill="none"
        stroke="#58d3d7"
        strokeWidth={1.5}
      />
      <path
        d="M18 7.017a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1z"
        fill="#121212"
      />
    </g>
  </svg>
);

export default SvgRobot;
