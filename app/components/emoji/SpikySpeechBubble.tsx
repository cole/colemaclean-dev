import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSpikySpeechBubble = ({
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
    <clipPath id="spiky_speech_bubble_svg__a">
      <path d="M0 0v32h32V0z" />
    </clipPath>
    <path d="M0 0v32h32V0z" fill="none" />
    <g clipPath="url(#spiky_speech_bubble_svg__a)">
      <path
        d="m6 3 7 3 3-4 3 4 7-3v2l-1.5 5.25L30 13v2l-5.429 2.714L26 22v2l-6-2-3 5-2.609-3.914a35.576 35.576 0 0 1-7.743 5.972L5 30v-2l.563-.703a30.862 30.862 0 0 0 3.676-5.827L5 22v-2l1.231-2.462L2 15v-2l5.5-2.75L6 5z"
        fill="none"
        stroke="#000"
        strokeWidth={4}
      />
      <path
        d="M10.167 21.354 5 22v-2l2-2-5-3v-2l6-1-2-7V3l7 5h6l7-5v2l-2 7 6 1v2l-6 3 2 4v2l-6-2-3 5-2.609-3.914a35.576 35.576 0 0 1-7.743 5.972L5 30v-2l3-3v.774a30.873 30.873 0 0 0 2.167-4.42z"
        fill="#747474"
      />
      <path
        d="M10.167 19.354 5 20l2-4-5-3 6-3-2-7 7 3 3-4 3 4 7-3-2 7 6 3-6 3 2 6-6-2-3 5-2.609-3.914a35.576 35.576 0 0 1-7.743 5.972L5 28l.563-.703a30.862 30.862 0 0 0 4.604-7.943z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default SvgSpikySpeechBubble;
