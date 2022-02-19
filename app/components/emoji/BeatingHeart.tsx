import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBeatingHeart = ({
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
    <clipPath id="beating_heart_svg__a">
      <path d="M0 0h32v32H0z" />
    </clipPath>
    <clipPath id="beating_heart_svg__b">
      <path d="m16 25.19-8.411-8.41a5.795 5.795 0 0 1 0-8.192l.002-.001a5.341 5.341 0 0 1 7.554 0l.855.855.855-.855a5.341 5.341 0 0 1 7.556.001 5.795 5.795 0 0 1 0 8.192L16 25.19z" />
    </clipPath>
    <path d="M0 0h32v32H0z" fill="none" />
    <g clipPath="url(#beating_heart_svg__a)">
      <g fill="none" stroke="#000">
        <path
          d="m16 26-9.25-9.25a6.01 6.01 0 0 1 8.5-8.5L16 9l.75-.75a6.01 6.01 0 0 1 8.5 8.5L16 26z"
          strokeWidth={4}
        />
        <path
          d="M27 7a7.777 7.777 0 0 1 0 11M5 7a7.777 7.777 0 0 0 0 11"
          strokeWidth={5.5}
        />
      </g>
      <path
        d="m16 25.19-8.411-8.41a5.795 5.795 0 0 1 0-8.192l.002-.001a5.341 5.341 0 0 1 7.554 0l.855.855.855-.855a5.341 5.341 0 0 1 7.556.001 5.795 5.795 0 0 1 0 8.192L16 25.19z"
        fill="#ff4586"
      />
      <g clipPath="url(#beating_heart_svg__b)">
        <path
          d="M23 1v3.858c0 2.652-1.054 5.196-2.929 7.071l-3.728 3.728A8 8 0 0 0 14 21.314V27H2V1z"
          fill="#ff8fb6"
        />
      </g>
      <path
        d="m11.072 6.49.072.001.072.002.072.003.072.004.072.005.072.005.072.007.072.007.072.008.071.009.072.01.071.011.072.012.071.012.071.013.071.015.071.015.07.016.071.016.07.018.07.018.07.02.07.02.07.021.069.022.069.023.069.023.069.025.068.025.069.026.068.027.067.028.068.029.067.03.067.03.066.032.066.032.066.033.066.034.065.035.065.036.065.036.064.037.064.039.063.039.063.04.063.041.062.041.062.043.062.043.061.044.06.046.06.046.06.046.059.048.059.049.058.049.058.05.057.052.057.052.057.052.055.054.056.055L16 9l.75-.75.056-.055.055-.054.057-.052.057-.052.057-.052.058-.05.058-.049.059-.049.059-.048.06-.046.06-.046.06-.046.061-.044.062-.043.062-.043.062-.041.063-.041.063-.04.063-.039.064-.039.064-.037.065-.036.065-.036.065-.035.066-.034.066-.033.066-.032.066-.032.067-.03.067-.03.068-.029.067-.028.068-.027.069-.026.068-.025.069-.025.069-.023.069-.023.069-.022.07-.021.07-.02.07-.02.07-.018.07-.018.071-.016.07-.016.071-.015.071-.015.071-.013.071-.012.072-.012.071-.011.072-.01.071-.009.072-.008.072-.007.072-.007.072-.005.072-.005.072-.004.072-.003.072-.002.072-.001.072-.001.072.001.072.001.072.002.072.003.072.004.072.005.072.005.072.007.072.007.072.008.071.009.072.01.071.011.072.012.071.012.071.013.071.015.071.015.07.016.071.016.07.018.07.018.07.02.07.02.07.021.069.022.069.023.069.023.069.025.068.025.069.026.068.027.067.028.068.029.067.03.067.03.066.032.066.032.066.033.066.034.065.035.065.036.065.036.064.037.064.039.063.039.063.04.063.041.062.041.062.043.062.043.061.044.06.046.06.046.06.046.059.048.059.049.058.049.058.05.057.052.057.052.057.052.055.054.056.055.055.056.054.055.052.057.052.057.052.057.05.058.049.058.049.059.048.059.046.06.046.06.046.06.044.061.043.062.043.062.041.062.041.063.04.063.039.063.039.064.037.064.036.065.036.065.035.065.034.066.033.066.032.066.032.066.03.067.03.067.029.068.028.067.027.068.026.069.025.068.025.069.023.069.023.069.022.069.021.07.02.07.02.07.018.07.018.07.016.071.016.07.015.071.015.071.013.071.012.071.012.072.011.071.01.072.009.071.008.072.007.072.007.072.005.072.005.072.004.072.003.072.002.072.001.072.001.072-.001.072-.001.072-.002.072-.003.072-.004.072-.005.072-.005.072-.007.072-.007.072-.008.072-.009.071-.01.072-.011.071-.012.072-.012.071-.013.071-.015.071-.015.071-.016.07-.016.071-.018.07-.018.07-.02.07-.02.07-.021.07-.022.069-.023.069-.023.069-.025.069-.025.068-.026.069-.027.068-.028.067-.029.068-.03.067-.03.067-.032.066-.032.066-.033.066-.034.066-.035.065-.036.065-.036.065-.037.064-.039.064-.039.063-.04.063-.041.063-.041.062-.043.062-.043.062-.044.061-.046.06-.046.06-.046.06-.048.059-.049.059-.049.058-.05.058-.052.057-.052.057-.052.057-.054.055-.055.056L16 26l-9.25-9.25-.055-.056-.054-.055-.052-.057-.052-.057-.052-.057-.05-.058-.049-.058-.049-.059-.048-.059-.046-.06-.046-.06-.046-.06-.044-.061-.043-.062-.043-.062-.041-.062-.041-.063-.04-.063-.039-.063-.039-.064-.037-.064-.036-.065-.036-.065-.035-.065-.034-.066-.033-.066-.032-.066-.032-.066-.03-.067-.03-.067-.029-.068-.028-.067-.027-.068-.026-.069-.025-.068-.025-.069-.023-.069-.023-.069-.022-.069-.021-.07-.02-.07-.02-.07-.018-.07-.018-.07-.016-.071-.016-.07-.015-.071-.015-.071-.013-.071-.012-.071-.012-.072-.011-.071-.01-.072-.009-.071-.008-.072-.007-.072-.007-.072-.005-.072L5 12.86l-.004-.072-.003-.072-.002-.072-.001-.072-.001-.072.001-.072.001-.072.002-.072.003-.072L5 12.14l.005-.072.005-.072.007-.072.007-.072.008-.072.009-.071.01-.072.011-.071.012-.072.012-.071.013-.071.015-.071.015-.071.016-.07.016-.071.018-.07.018-.07.02-.07.02-.07.021-.07.022-.069.023-.069.023-.069.025-.069.025-.068.026-.069.027-.068.028-.067.029-.068.03-.067.03-.067.032-.066.032-.066.033-.066.034-.066.035-.065.036-.065.036-.065.037-.064.039-.064.039-.063.04-.063.041-.063.041-.062.043-.062.043-.062.044-.061.046-.06.046-.06.046-.06.048-.059.049-.059.049-.058.05-.058.052-.057.052-.057.052-.057.054-.055.055-.056.056-.055.055-.054.057-.052.057-.052.057-.052.058-.05.058-.049.059-.049.059-.048.06-.046.06-.046.06-.046.061-.044.062-.043.062-.043.062-.041.063-.041.063-.04.063-.039.064-.039.064-.037.065-.036.065-.036.065-.035.066-.034.066-.033.066-.032.066-.032.067-.03.067-.03.068-.029.067-.028.068-.027.069-.026.068-.025.069-.025.069-.023.069-.023.069-.022.07-.021.07-.02.07-.02.07-.018.07-.018.071-.016.07-.016.071-.015.071-.015.071-.013.071-.012.072-.012.071-.011.072-.01.071-.009.072-.008.072-.007.072-.007.072-.005.072-.005.072-.004.072-.003.072-.002.072-.001.072-.001.072.001zm9.88 2-.048.001-.049.001-.048.002-.048.003-.048.003-.048.004-.048.004-.049.005-.047.005-.048.006-.048.007-.048.007-.048.008-.047.008-.048.009-.047.009-.047.011-.048.01-.046.011-.048.012-.046.012-.047.013-.046.014-.047.014-.046.014-.046.016-.046.015-.046.017-.045.016-.046.018-.045.018-.045.018-.045.02-.045.019-.044.021-.044.02-.044.022-.044.022-.044.023-.043.023-.043.023-.043.025-.043.024-.042.026-.042.026-.042.026-.042.028-.041.027-.042.029-.04.029-.041.029-.04.03-.041.031-.04.031-.039.032-.039.033-.039.033-.039.033-.039.035-.038.035-.038.035-.037.036-.042.042L16 11.828l-2.16-2.16-.042-.041-.037-.036-.038-.036-.038-.035-.039-.034-.039-.033-.038-.033-.04-.033-.039-.032-.04-.031-.041-.031-.04-.03-.041-.029-.041-.029-.041-.029-.041-.027-.042-.028-.042-.026-.042-.026-.042-.026-.043-.024-.043-.025-.043-.023-.043-.023-.044-.023-.044-.022-.044-.021-.044-.021-.044-.021-.045-.019-.045-.02-.045-.018-.045-.018-.046-.017-.045-.017-.046-.017-.046-.015-.046-.016-.046-.014-.047-.014-.046-.014-.047-.013-.046-.012-.047-.012-.047-.011-.048-.01-.047-.011-.047-.009-.048-.009-.047-.008-.048-.008-.048-.007-.048-.007-.048-.006-.047-.005-.049-.005-.048-.004-.048-.004-.048-.003-.048-.003-.048-.002-.049-.001-.048-.001L11 8.489l-.048.001-.048.001-.049.001-.048.002-.048.003-.048.003-.048.004-.048.004-.049.005-.047.005-.048.006-.048.007-.048.007-.048.008-.047.008-.048.009-.047.009-.047.011-.048.01-.047.011-.047.012-.046.012-.047.013-.046.014-.047.014-.046.014-.046.016-.046.015-.046.017-.045.017-.046.017-.045.018-.045.018-.045.02-.045.019-.044.021-.044.021-.044.021-.044.022-.044.022-.043.024-.043.023-.043.025-.043.024-.042.026-.042.026-.042.026-.042.028-.041.027-.041.029-.041.029-.041.029-.04.03-.041.031-.04.031-.039.032-.039.033-.039.033-.039.033-.039.034-.038.035-.038.036-.037.036-.037.036.008-.008-.046.047-.036.037-.035.038-.036.038-.034.039-.033.038-.034.04-.032.039-.032.04-.031.039-.031.04-.03.041-.029.041-.029.04-.029.042-.027.041-.028.042-.026.042-.026.042-.025.042-.025.043-.025.043-.023.043-.023.043-.023.044-.022.044-.021.044-.021.044-.021.045-.019.044-.02.045-.018.045-.018.045-.018.046-.016.045-.017.046-.015.046-.016.046-.014.046-.014.046-.014.047-.013.047-.012.046-.012.047-.011.048-.011.047-.009.047-.01.047-.009.048-.008.048-.008.047-.007.048-.007.047-.006.049-.005.048-.005.047-.004.049-.004.048-.003.047-.003.049-.002.048-.001.049-.001.048-.001.048.001.048.001.048.001.049.002.048.003.049.003.047.004.048.004.049.005.047.005.048.006.049.007.047.007.048.008.048.008.047.009.048.01.047.009.047.011.047.011.048.012.047.012.046.013.047.014.047.014.046.014.046.016.046.015.046.017.046.016.045.018.046.018.045.018.045.02.045.019.044.021.045.021.044.021.044.022.044.023.044.023.043.023.043.025.043.025.043.025.042.026.042.026.042.028.042.027.041.029.042.029.04.029.041.03.041.031.04.031.04.032.039.032.039.034.04.033.038.034.039.036.038.035.038.036.037.041.042L16 23.172l7.832-7.832.041-.042.036-.037.036-.038.035-.038.034-.039.033-.039.034-.039.032-.039.032-.04.031-.039.031-.04.03-.041.029-.041.029-.04.029-.042.027-.041.027-.042.027-.042.026-.042.026-.043.024-.042.025-.043.024-.043.022-.043.023-.044.022-.044.022-.044.02-.044.02-.044.02-.045.02-.045.018-.045.018-.045.018-.046.016-.045.017-.046.015-.046.016-.046.014-.046.014-.046.014-.047.013-.047.012-.047.012-.046.011-.047.01-.047.01-.048.01-.047.009-.048.008-.048.008-.047.007-.048.007-.048.006-.048.005-.047.005-.049.004-.048.004-.047.003-.049.003-.048.002-.048.001-.049.001-.048.001-.048-.001-.048-.001-.048-.001-.049-.002-.048-.003-.048L25 12.21l-.004-.047-.004-.048-.005-.049-.005-.047-.006-.048-.007-.048-.007-.048-.008-.047-.008-.048-.009-.048-.01-.047-.01-.048-.01-.047-.011-.047-.012-.047-.012-.046-.013-.047-.014-.047-.014-.046-.014-.046-.016-.047-.015-.045-.017-.046-.016-.045-.018-.046-.018-.045-.018-.045-.02-.045-.02-.045-.02-.044-.02-.044-.022-.044-.022-.044-.023-.044-.022-.043-.024-.043-.025-.043-.024-.042-.026-.043-.026-.042-.027-.042-.027-.042-.027-.041-.029-.042-.029-.04-.029-.041-.03-.041-.031-.04-.031-.039-.032-.04-.032-.039-.034-.039-.033-.039-.034-.039-.035-.038-.036-.038-.036-.037-.047-.047.009.008-.037-.036-.037-.036-.038-.036-.038-.034-.039-.035-.039-.033-.039-.033-.039-.033-.039-.032-.04-.031-.04-.031-.041-.03-.041-.029-.041-.029-.041-.029-.041-.027-.042-.028-.042-.026-.042-.026-.042-.026-.043-.024-.043-.025-.043-.023-.044-.024-.043-.022-.044-.022-.044-.021-.044-.021-.045-.021-.044-.019-.045-.019-.045-.019-.045-.018-.046-.018-.045-.016-.046-.017-.046-.015-.046-.016-.046-.014-.046-.014-.047-.014-.047-.013-.047-.012-.046-.012-.047-.011-.048-.01-.047-.011-.047-.009-.048-.009-.047-.008-.048-.008-.048-.007-.048-.007-.047-.006-.048-.005-.049-.005-.048-.004-.048-.004-.048-.003-.048-.003-.048-.002-.049-.001-.048-.001L21 8.489z"
        fill="#ff4586"
      />
      <path
        d="M27 7a7.777 7.777 0 0 1 0 11M5 7a7.777 7.777 0 0 0 0 11"
        fill="none"
        stroke="#ae0b6d"
        strokeWidth={1.5}
      />
    </g>
  </svg>
);

export default SvgBeatingHeart;