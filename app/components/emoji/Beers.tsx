import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBeers = ({
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
    <clipPath id="beers_svg__a">
      <path d="M0 0h32v32H0z" />
    </clipPath>
    <clipPath id="beers_svg__b">
      <path d="M15 12h11v3h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1.977c.015.121.037.24.067.358l.599 2.399a.998.998 0 0 1-.97 1.243H15.281a.998.998 0 0 1-.97-1.243l.599-2.399c.06-.238.09-.482.09-.727zm11 12h2v-7h-2z" />
    </clipPath>
    <path d="M0 0h32v32H0z" fill="none" />
    <g clipPath="url(#beers_svg__a)">
      <g fill="none" stroke="#000">
        <path d="M18 6V3M22 7l2-2M13 7l-2-2" strokeWidth={6} />
        <path
          d="M17 12h9v3h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1.977c.015.121.037.24.067.358l.599 2.399a.998.998 0 0 1-.97 1.243H15.281a.998.998 0 0 1-.97-1.243L14.75 27H6.281a.998.998 0 0 1-.97-1.243l.599-2.399c.03-.118.052-.237.067-.358H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2V9h11zm11 5h-2v7h2zM6 14H4v7h2z"
          strokeLinecap="square"
          strokeWidth={4}
        />
      </g>
      <path d="M17 7h5v5h-5z" />
      <path
        d="M15 12h11v3h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1.977c.015.121.037.24.067.358l.599 2.399a.998.998 0 0 1-.97 1.243H15.281a.998.998 0 0 1-.97-1.243l.599-2.399c.06-.238.09-.482.09-.727zm11 12h2v-7h-2z"
        fill="#cfcfcf"
      />
      <g clipPath="url(#beers_svg__b)">
        <path d="m16 15 1-1h7l1 1v3l-1 1h-7l-1-1z" fill="#ce9002" />
        <path
          d="M16 18h9v7l-.233.233A6.034 6.034 0 0 1 20.501 27h-.002c-1.6 0-3.135-.636-4.266-1.767L16 25z"
          fill="#fdb203"
        />
        <path d="M16 12h9v3h-9z" fill="#fff" />
        <path
          d="M22 13.999c0-.552.447-.999.999-.999H23a.997.997 0 0 1 1 1v7a.997.997 0 0 1-1 1h-.001a.999.999 0 0 1-.999-.999v-7.002z"
          fill="#fff"
          fillOpacity={0.604}
        />
        <path
          d="M6 9h11v13.631c0 .245.03.489.09.727l.599 2.399a.998.998 0 0 1-.97 1.243H6.281a.998.998 0 0 1-.97-1.243l.599-2.399c.06-.238.09-.482.09-.727V9z"
          fill="none"
          stroke="#000"
          strokeLinecap="square"
          strokeOpacity={0.588}
          strokeWidth={4}
        />
      </g>
      <path
        d="M6 12V9h11v13.631c0 .245.03.489.09.727l.599 2.399a.998.998 0 0 1-.97 1.243H6.281a.998.998 0 0 1-.97-1.243l.599-2.399c.03-.118.052-.237.067-.358H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zm0 9v-7H4v7z"
        fill="#ccc"
      />
      <path d="m7 12 1-1h7l1 1v3l-1 1H8l-1-1z" fill="#ce9002" />
      <path
        d="M7 15h9v7l-.233.233A6.034 6.034 0 0 1 11.501 24h-.002c-1.6 0-3.135-.636-4.266-1.767L7 22z"
        fill="#fdb203"
      />
      <path d="M7 9h9v3H7z" fill="#fff" />
      <path
        d="M13 10.999c0-.552.447-.999.999-.999H14a.997.997 0 0 1 1 1v7a.997.997 0 0 1-1 1h-.001a.999.999 0 0 1-.999-.999v-7.002z"
        fill="#fff"
        fillOpacity={0.604}
      />
      <path
        d="M18 6V3M22 7l2-2M13 7l-2-2"
        fill="none"
        stroke="#fff"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgBeers;
