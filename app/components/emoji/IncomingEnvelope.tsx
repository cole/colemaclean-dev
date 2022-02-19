import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIncomingEnvelope = ({
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
    <clipPath id="incoming_envelope_svg__a">
      <path d="M0 0h32v32H0z" />
    </clipPath>
    <clipPath id="incoming_envelope_svg__b">
      <path d="M28 16a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V16z" />
    </clipPath>
    <path d="M0 0h32v32H0z" fill="none" />
    <g clipPath="url(#incoming_envelope_svg__a)">
      <g fill="none">
        <path
          d="M28 16a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V16z"
          stroke="#000"
          strokeWidth={4}
        />
        <path
          d="M8 10V5.5M24 10.5v-5M16 7.5v-4"
          stroke="#000"
          strokeWidth={7}
        />
        <path
          d="M8 10.5v-5M24 10.5v-5M16 7.5v-4"
          stroke="#fff"
          strokeWidth={3}
        />
      </g>
      <path
        d="M28 16a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V16z"
        fill="#fff"
      />
      <g clipPath="url(#incoming_envelope_svg__b)" strokeWidth={2}>
        <path d="m4 30 12-11.556L28 30" fill="none" stroke="#ccc" />
        <path
          d="m4 14 10.007 8.895a3 3 0 0 0 3.986 0L28 14"
          fill="#fff"
          stroke="#999"
        />
      </g>
    </g>
  </svg>
);

export default SvgIncomingEnvelope;
