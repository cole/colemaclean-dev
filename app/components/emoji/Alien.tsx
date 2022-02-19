import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAlien = ({
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
    <clipPath id="alien_svg__a">
      <path d="M0 .017h32v32H0z" />
    </clipPath>
    <clipPath id="alien_svg__b">
      <path d="M18.46 19.556v-.433a6.646 6.646 0 0 1 6.646-6.646h.434v.433a6.65 6.65 0 0 1-6.646 6.646z" />
    </clipPath>
    <clipPath id="alien_svg__c">
      <path d="M13.625 19.642v-.604a6.646 6.646 0 0 0-6.646-6.646h-.604v.604a6.643 6.643 0 0 0 6.646 6.646z" />
    </clipPath>
    <path d="M0 .017h32v32H0z" fill="none" />
    <g clipPath="url(#alien_svg__a)">
      <path
        d="M3.812 11.317a13.001 13.001 0 0 0 4.194 12.848l5.391 4.62a4 4 0 0 0 5.206 0l5.391-4.62a13.001 13.001 0 0 0 4.194-12.848l-.011-.049a12.001 12.001 0 0 0-11.681-9.251h-.992a12.001 12.001 0 0 0-11.681 9.251l-.011.049z"
        fill="none"
        stroke="#000"
        strokeWidth={4}
      />
      <path
        d="M3.812 11.317a13.001 13.001 0 0 0 4.194 12.848l5.391 4.62a4 4 0 0 0 5.206 0l5.391-4.62a13.001 13.001 0 0 0 4.194-12.848l-.011-.049a12.001 12.001 0 0 0-11.681-9.251h-.992a12.001 12.001 0 0 0-11.681 9.251l-.011.049z"
        fill="#89c794"
      />
      <path d="M18.46 19.556v-.433a6.646 6.646 0 0 1 6.646-6.646h.434v.433a6.65 6.65 0 0 1-6.646 6.646z" />
      <g clipPath="url(#alien_svg__b)">
        <path d="M17 19.017h1a5 5 0 0 0 5-5v-4h-6z" fill="#666" />
      </g>
      <path d="M13.625 19.642v-.604a6.646 6.646 0 0 0-6.646-6.646h-.604v.604a6.643 6.643 0 0 0 6.646 6.646z" />
      <g clipPath="url(#alien_svg__c)">
        <path
          d="M6 13.017h.002A4.998 4.998 0 0 1 11 18.015v3.002H6z"
          fill="#666"
        />
      </g>
      <path d="M19.354 20.017H18v-1.354a6.646 6.646 0 0 1 6.646-6.646H26v1.354a6.647 6.647 0 0 1-6.646 6.646zm5.646-7h-.354A5.646 5.646 0 0 0 19 18.663v.354h.354A5.646 5.646 0 0 0 25 13.371zM7.354 12.017A6.646 6.646 0 0 1 14 18.663v1.354h-1.354A6.647 6.647 0 0 1 6 13.371v-1.354zm0 1H7v.354a5.646 5.646 0 0 0 5.646 5.646H13v-.354a5.646 5.646 0 0 0-5.646-5.646z" />
      <path
        d="m13 25.017 3-3 3 3"
        fill="none"
        stroke="#3f854b"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgAlien;
