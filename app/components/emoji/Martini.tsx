import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMartini = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={10}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <clipPath id="martini_svg__a">
      <path d="M0 0h32v32H0z" />
    </clipPath>
    <clipPath id="martini_svg__b">
      <path d="M23.562 7.963H8.438l5.914 8.603a2.001 2.001 0 0 0 3.296 0l5.914-8.603z" />
    </clipPath>
    <clipPath id="martini_svg__c">
      <ellipse cx={16} cy={5.963} rx={9.331} ry={3.393} />
    </clipPath>
    <path d="M0 0h32v32H0z" fill="none" />
    <g clipPath="url(#martini_svg__a)">
      <path
        d="M6.409 7.098C6.143 6.738 6 6.357 6 5.963c0-2.207 4.481-4 10-4s10 1.793 10 4c0 .394-.143.775-.409 1.135L17 19.518v7.475c2.281.139 4 .745 4 1.47 0 .828-2.24 1.5-5 1.5s-5-.672-5-1.5c0-.725 1.719-1.331 4-1.47v-7.475z"
        fill="none"
        stroke="#000"
        strokeWidth={4}
      />
      <path
        d="M15 28.463v-11.5h2v11.5c0 .166-.448.3-1 .3s-1-.134-1-.3z"
        fill="#ccc"
      />
      <ellipse cx={16} cy={28.463} fill="#fff" rx={5} ry={1.5} />
      <path
        d="m6.316 6.963 8.45 12.217a1.503 1.503 0 0 0 2.468 0l8.45-12.217z"
        fill="#fff"
      />
      <path
        d="M23.562 7.963H8.438l5.914 8.603a2.001 2.001 0 0 0 3.296 0l5.914-8.603z"
        fill="#faf48f"
      />
      <g clipPath="url(#martini_svg__b)">
        <path
          d="M12.283 12.432c0 1.065 1.356 1.929 3.025 1.929 1.67 0 3.025-.864 3.025-1.929s-1.355-1.929-3.025-1.929c-1.669 0-3.025.864-3.025 1.929z"
          fill="#417d33"
        />
        <path
          d="m12.164 7.963 3.836 11H8.739v-11z"
          fill="#fff"
          fillOpacity={0.404}
        />
      </g>
      <ellipse cx={16} cy={5.963} fill="#d9d9d9" rx={9.331} ry={3.393} />
      <g clipPath="url(#martini_svg__c)">
        <ellipse cx={16} cy={8.077} fill="#ebe13b" rx={7.745} ry={2.568} />
        <ellipse cx={16} cy={9.87} fill="#faf48f" rx={7.745} ry={2.568} />
      </g>
      <path
        d="m16.258 1.965.256.003.255.007.253.009.251.011.249.014.247.017.245.019.243.021.241.023.238.026.236.028.234.031.231.032.228.035.226.037.223.039.22.041.217.043.214.045.211.048.208.049.204.051.201.053.198.055.195.056.19.059.187.06.184.062.179.064.176.065.172.067.084.035.083.034.083.035.081.035.08.036.079.036.078.037.077.036.076.038.075.037.074.038.072.039.072.038.07.039.069.04.068.039.067.041.066.04.064.041.063.041.062.041.061.042.06.042.058.042.057.043.056.043.055.043.053.044.052.044.051.044.05.044.048.045.046.045.046.045.044.046.043.046.041.046.04.046.039.046.037.047.036.047.034.048.033.047.032.048.03.048.029.048.027.049.026.049.024.048.023.05.021.049.02.049.018.05.017.05.015.05.013.051.012.05.011.051.009.051.007.051.006.051.004.051.002.052.001.051-.001.052-.002.051-.004.052-.006.051-.007.051-.009.051-.011.05-.012.051-.013.05-.015.05-.017.05-.018.05-.02.05-.021.049-.023.049-.024.049-.026.049-.027.048-.029.048-.03.048-.032.048-.033.048-.034.047-.036.047-.037.047-.039.047-.04.046-.041.046-.043.046-.044.045-.046.046-.046.045-.048.044-.05.045-.051.044-.052.044-.053.043-.055.044-.056.043-.057.042-.058.043-.06.042-.061.041-.062.042-.063.041-.064.041-.066.04-.067.04-.068.04-.069.039-.07.039-.072.039-.072.038-.074.038-.075.038-.076.037-.077.037-.078.036-.079.036-.08.036-.081.035-.083.035-.083.035-.084.034-.172.067-.176.066-.179.063-.184.062-.187.061-.19.058-.195.057-.198.055-.201.053-.204.051-.208.049-.211.047-.214.045-.217.044-.22.041-.223.039-.226.037-.228.034-.231.033-.234.03-.236.028-.238.026-.241.024-.243.021-.245.019-.247.016-.249.014-.251.012-.253.009-.255.006-.256.004-.258.001-.258-.001-.256-.004-.255-.006-.253-.009-.251-.012-.249-.014-.247-.016-.245-.019-.243-.021-.241-.024-.238-.026-.236-.028-.234-.03-.231-.033-.228-.034-.226-.037-.223-.039-.22-.041-.217-.044-.214-.045-.211-.047-.208-.049-.204-.051-.201-.053-.198-.055-.195-.057-.19-.058-.187-.061-.184-.062-.179-.063-.176-.066-.172-.067-.084-.034-.083-.035-.083-.035-.081-.035-.08-.036-.079-.036-.078-.036-.077-.037-.076-.037-.075-.038-.074-.038-.072-.038-.072-.039-.07-.039-.069-.039-.068-.04-.067-.04-.066-.04-.064-.041-.063-.041-.062-.042-.061-.041-.06-.042-.058-.043-.057-.042-.056-.043-.055-.044-.053-.043-.052-.044-.051-.044-.05-.045-.048-.044-.046-.045-.046-.046-.044-.045-.043-.046-.041-.046-.04-.046-.039-.047-.037-.047-.036-.047-.034-.047-.033-.048-.032-.048-.03-.048-.029-.048-.027-.048-.026-.049-.024-.049-.023-.049-.021-.049-.02-.05-.018-.05-.017-.05-.015-.05-.013-.05-.012-.051-.011-.05-.009-.051-.007-.051-.006-.051-.004-.052-.002-.051L6 5.963l.001-.051.002-.052.004-.051.006-.051.007-.051.009-.051.011-.051.012-.05.013-.051.015-.05.017-.05.018-.05.02-.049.021-.049.023-.05.024-.048.026-.049.027-.049.029-.048.03-.048.032-.048.033-.047.034-.048.036-.047.037-.047.039-.046.04-.046.041-.046.043-.046.044-.046.046-.045.046-.045.048-.045.05-.044.051-.044.052-.044.053-.044.055-.043.056-.043.057-.043.058-.042.06-.042.061-.042.062-.041.063-.041.064-.041.066-.04.067-.041.068-.039.069-.04.07-.039.072-.038.072-.039.074-.038.075-.037.076-.038.077-.036.078-.037.079-.036.08-.036.081-.035.083-.035.083-.034.084-.035.172-.067.176-.065.179-.064.184-.062.187-.06.19-.059.195-.056.198-.055.201-.053.204-.051.208-.049.211-.048.214-.045.217-.043.22-.041.223-.039.226-.037.228-.035.231-.032.234-.031.236-.028.238-.026.241-.023.243-.021.245-.019.247-.017.249-.014.251-.011.253-.009.255-.007.256-.003.258-.002zm-.506 1-.246.003-.244.006-.243.009-.241.011-.239.014-.237.015-.235.018-.232.021-.23.022-.228.025-.226.027-.223.029-.22.031-.217.033-.215.035-.212.037-.208.039-.206.041-.202.043-.2.044-.195.046-.193.048-.188.05-.186.051-.181.053-.177.055-.174.056-.169.057-.166.059-.161.06-.158.062-.075.03-.075.031-.075.032-.073.032-.072.032-.071.032-.07.033-.068.032-.067.033-.066.034-.065.033-.064.033-.062.034-.061.034-.059.034-.059.034-.057.034-.055.034-.055.035-.053.034-.051.035-.05.034-.049.034-.048.035-.045.034-.045.034-.043.034-.042.034-.04.034-.039.034-.037.033-.036.034-.034.033-.033.032-.031.033-.03.032-.029.032-.027.031-.026.031-.024.03-.023.031-.021.029-.02.029-.019.028-.018.028-.016.028-.015.026-.014.026-.012.026-.012.025-.01.024-.01.024-.008.023-.008.022-.006.022-.006.022-.005.021-.004.021-.004.02-.003.02-.002.02-.002.02-.001.02v.04l.001.02.002.02.002.02.003.02.004.021.004.021.005.021.006.021.006.022.008.023.008.023.01.024.01.024.012.025.012.025.014.026.015.027.016.027.018.028.019.029.02.029.021.029.023.03.024.031.026.03.027.032.029.032.03.032.031.032.033.033.034.033.036.033.037.034.039.033.04.034.042.034.043.034.045.035.045.034.048.034.049.035.05.034.051.034.053.035.055.034.055.034.057.034.059.035.059.034.061.033.062.034.064.034.065.033.066.033.067.033.068.033.07.032.071.033.072.032.073.032.075.031.075.032.075.03.158.062.161.06.166.058.169.058.174.056.177.054.181.053.186.051.188.05.193.048.195.046.2.045.202.043.206.041.208.039.212.037.215.035.217.033.22.031.223.029.226.027.228.024.23.023.232.02.235.018.237.016.239.013.241.011.243.009.244.006.246.004.248.001.248-.001.246-.004.244-.006.243-.009.241-.011.239-.013.237-.016.235-.018.232-.02.23-.023.228-.024.226-.027.223-.029.22-.031.217-.033.215-.035.212-.037.208-.039.206-.041.202-.043.2-.045.195-.046.193-.048.188-.05.186-.051.181-.053.177-.054.174-.056.169-.058.166-.058.161-.06.158-.062.075-.03.075-.032.075-.031.073-.032.072-.032.071-.033.07-.032.068-.033.067-.033.066-.033.065-.033.064-.034.062-.034.061-.033.059-.034.059-.035.057-.034.055-.034.055-.034.053-.035.051-.034.05-.034.049-.035.048-.034.045-.034.045-.035.043-.034.042-.034.04-.034.039-.033.037-.034.036-.033.034-.033.033-.033.031-.032.03-.032.029-.032.027-.032.026-.03.024-.031.023-.03.021-.029.02-.029.019-.029.018-.028.016-.027.015-.027.014-.026.012-.025.012-.025.01-.024.01-.024.008-.023.008-.023.006-.022.006-.021.005-.022.004-.02.004-.021.003-.02.002-.02.002-.02.001-.02v-.04l-.001-.02-.002-.02-.002-.02-.003-.02-.004-.02-.004-.021-.005-.021-.006-.022-.006-.022-.008-.022-.008-.023-.01-.024-.01-.024-.012-.025-.012-.026-.014-.026-.015-.026-.016-.028-.018-.028-.019-.028-.02-.029-.021-.029-.023-.031-.024-.03-.026-.031-.027-.031-.029-.032-.03-.032-.031-.033-.033-.032-.034-.033-.036-.034-.037-.033-.039-.034-.04-.034-.042-.034-.043-.034-.045-.034-.045-.034-.048-.035-.049-.034-.05-.034-.051-.035-.053-.034-.055-.035-.055-.034-.057-.034-.059-.034-.059-.034-.061-.034-.062-.034-.064-.033-.065-.033-.066-.034-.067-.033-.068-.032-.07-.033-.071-.032-.072-.032-.073-.032-.075-.032-.075-.031-.075-.03-.158-.062-.161-.06-.166-.059-.169-.057-.174-.056-.177-.055-.181-.053-.186-.051-.188-.05-.193-.048-.195-.046-.2-.044-.202-.043-.206-.041-.208-.039-.212-.037-.215-.035-.217-.033-.22-.031-.223-.029-.226-.027-.228-.025-.23-.022-.232-.021-.235-.018-.237-.015-.239-.014-.241-.011-.243-.009-.244-.006-.246-.003L16 2.963z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default SvgMartini;