import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAlienMonster = ({
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
    <clipPath id="alien_monster_svg__a">
      <path d="M0 .017h32v32H0z" />
    </clipPath>
    <path d="M0 .017h32v32H0z" fill="none" />
    <g clipPath="url(#alien_monster_svg__a)">
      <g fill="none">
        <path
          d="M6.816 19.74a4.677 4.677 0 0 1 .12-5.363l4.226-5.762a5.997 5.997 0 0 1 9.676 0l4.226 5.762a4.677 4.677 0 0 1 .12 5.363l-.001.002a4.73 4.73 0 0 1-5.801 1.724l-1.806-.774a4.004 4.004 0 0 0-3.152 0l-1.806.774a4.73 4.73 0 0 1-5.801-1.724l-.001-.002z"
          stroke="#000"
          strokeWidth={4}
        />
        <path
          d="m9.5 20.017-2.586 2.585a1.996 1.996 0 0 1-2.828 0 1.999 1.999 0 0 1-.586-1.414v-5.272a7 7 0 0 1 2.05-4.95l1.95-1.95a2.824 2.824 0 0 0 0-3.999M22.5 20.017l2.586 2.585a1.996 1.996 0 0 0 2.828 0c.375-.375.586-.883.586-1.414v-5.272a7 7 0 0 0-2.05-4.95l-1.95-1.95a2.824 2.824 0 0 1 0-3.999M13 21.017v2.666c0 .217-.07.427-.2.6l-2.2 2.934c-.378.503-.97.8-1.6.8H7M19 21.017v2.666c0 .217.07.427.2.6l2.2 2.934c.378.503.97.8 1.6.8h2"
          stroke="#000"
          strokeLinecap="square"
          strokeWidth={7}
        />
        <path
          d="m9.5 20.017-2.586 2.585a1.996 1.996 0 0 1-2.828 0 1.999 1.999 0 0 1-.586-1.414v-5.272a7 7 0 0 1 2.05-4.95l1.95-1.95a2.824 2.824 0 0 0 0-3.999M22.5 20.017l2.586 2.585a1.996 1.996 0 0 0 2.828 0c.375-.375.586-.883.586-1.414v-5.272a7 7 0 0 0-2.05-4.95l-1.95-1.95a2.824 2.824 0 0 1 0-3.999M13 21.017v2.666c0 .217-.07.427-.2.6l-2.2 2.934c-.378.503-.97.8-1.6.8H7M19 21.017v2.666c0 .217.07.427.2.6l2.2 2.934c.378.503.97.8 1.6.8h2"
          stroke="#2336af"
          strokeLinecap="square"
          strokeWidth={3}
        />
      </g>
      <path
        d="M6.816 19.74a4.677 4.677 0 0 1 .12-5.363l4.226-5.762a5.997 5.997 0 0 1 9.676 0l4.226 5.762a4.677 4.677 0 0 1 .12 5.363l-.001.002a4.73 4.73 0 0 1-5.801 1.724l-1.806-.774a4.004 4.004 0 0 0-3.152 0l-1.806.774a4.73 4.73 0 0 1-5.801-1.724l-.001-.002z"
        fill="#334cec"
      />
      <circle cx={11.5} cy={13.517} fill="#3ae07c" r={1.5} />
      <circle cx={20.5} cy={13.517} fill="#3ae07c" r={1.5} />
      <path
        d="M18 10.017a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1z"
        fill="#3ae07c"
      />
      <path
        d="m12 16.517 2 2 2-3 2 3 2-2"
        fill="none"
        stroke="#1cb356"
        strokeWidth={1.5}
      />
    </g>
  </svg>
);

export default SvgAlienMonster;
