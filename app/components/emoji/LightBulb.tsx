import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLightBulb = ({
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
    <clipPath id="light_bulb_svg__a">
      <path d="M0 0h32v32H0z" />
    </clipPath>
    <clipPath id="light_bulb_svg__b">
      <path d="M12 22.172a5.998 5.998 0 0 0-1.391-3.841l-1.606-1.928A8.64 8.64 0 0 1 7 10.872v-.002A8.87 8.87 0 0 1 15.87 2h.26A8.87 8.87 0 0 1 25 10.87v.002a8.64 8.64 0 0 1-2.003 5.531l-1.606 1.928A5.998 5.998 0 0 0 20 22.172v1a2 2 0 0 1-.586 1.414L18 26h-4l-1.414-1.414A2 2 0 0 1 12 23.172v-1z" />
    </clipPath>
    <clipPath id="light_bulb_svg__c">
      <path d="M12 22.172a5.998 5.998 0 0 0-1.391-3.841l-1.606-1.928A8.64 8.64 0 0 1 7 10.872v-.002A8.87 8.87 0 0 1 15.87 2h.26A8.87 8.87 0 0 1 25 10.87v.002a8.64 8.64 0 0 1-2.003 5.531l-1.606 1.928A5.998 5.998 0 0 0 20 22.172v1a2 2 0 0 1-.586 1.414L18 26h-4l-1.414-1.414A2 2 0 0 1 12 23.172v-1z" />
    </clipPath>
    <clipPath id="light_bulb_svg__d">
      <path d="M6 12h20v14H6z" />
    </clipPath>
    <path d="M0 0h32v32H0z" fill="none" />
    <g clipPath="url(#light_bulb_svg__a)">
      <path
        d="M12 22.172a5.998 5.998 0 0 0-1.391-3.841l-1.606-1.928A8.64 8.64 0 0 1 7 10.872v-.002A8.87 8.87 0 0 1 15.87 2h.26A8.87 8.87 0 0 1 25 10.87v.002a8.64 8.64 0 0 1-2.003 5.531l-1.606 1.928A5.998 5.998 0 0 0 20 22.172v1a2 2 0 0 1-.586 1.414L18 26h-4l-1.414-1.414A2 2 0 0 1 12 23.172v-1z"
        fill="none"
      />
      <g clipPath="url(#light_bulb_svg__b)">
        <path d="M6 12h20v14H6z" fill="#c8c8c8" />
      </g>
      <path
        d="M12 22.172a5.998 5.998 0 0 0-1.391-3.841l-1.606-1.928A8.64 8.64 0 0 1 7 10.872v-.002A8.87 8.87 0 0 1 15.87 2h.26A8.87 8.87 0 0 1 25 10.87v.002a8.64 8.64 0 0 1-2.003 5.531l-1.606 1.928A5.998 5.998 0 0 0 20 22.172v1a2 2 0 0 1-.586 1.414L18 26h-4l-1.414-1.414A2 2 0 0 1 12 23.172v-1z"
        fill="none"
        stroke="#000"
        strokeWidth={4}
      />
      <path
        d="M19 25h-6v3.586a1 1 0 0 0 .293.707l.414.414a1 1 0 0 0 .707.293h3.172a1 1 0 0 0 .707-.293l.414-.414a1 1 0 0 0 .293-.707V25z"
        fill="none"
        stroke="#000"
        strokeWidth={4}
      />
      <path
        d="M12 22.172a5.998 5.998 0 0 0-1.391-3.841l-1.606-1.928A8.64 8.64 0 0 1 7 10.872v-.002A8.87 8.87 0 0 1 15.87 2h.26A8.87 8.87 0 0 1 25 10.87v.002a8.64 8.64 0 0 1-2.003 5.531l-1.606 1.928A5.998 5.998 0 0 0 20 22.172v1a2 2 0 0 1-.586 1.414L18 26h-4l-1.414-1.414A2 2 0 0 1 12 23.172v-1z"
        fill="#ededed"
      />
      <g clipPath="url(#light_bulb_svg__c)">
        <path d="M23 14H9v-3a7 7 0 1 1 14 0z" fill="#fff" />
        <path d="M6 12h20v14H6z" fill="#c8c8c8" />
        <g clipPath="url(#light_bulb_svg__d)">
          <path
            d="M9 9v2.183a6.8 6.8 0 0 0 1.992 4.809l.781.781A4.188 4.188 0 0 1 13 19.735v3.631c0 .35.284.634.634.634h.732a.632.632 0 0 0 .634-.634v-4.412c0-1.274-.377-2.52-1.084-3.58A5.457 5.457 0 0 1 13 12.349V9z"
            fill="#fff"
            fillOpacity={0.48}
          />
        </g>
      </g>
      <path
        d="M19 25h-6v3.586a1 1 0 0 0 .293.707l.414.414a1 1 0 0 0 .707.293h3.172a1 1 0 0 0 .707-.293l.414-.414a1 1 0 0 0 .293-.707V25z"
        fill="#7d7d7d"
      />
      <path
        d="M16 26.5a.504.504 0 0 0-.146-.354A.504.504 0 0 0 15.5 26h-1a.504.504 0 0 0-.354.146.504.504 0 0 0-.146.354v2c0 .133.053.26.146.354A.504.504 0 0 0 14.5 29h1c.133 0 .26-.053.354-.146A.504.504 0 0 0 16 28.5v-2z"
        fill="#fff"
        fillOpacity={0.39}
      />
    </g>
  </svg>
);

export default SvgLightBulb;
