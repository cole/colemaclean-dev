import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMatchaTea = ({
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
    <clipPath id="matcha_tea_svg__a">
      <path d="M0 0h32v32H0z" />
    </clipPath>
    <clipPath id="matcha_tea_svg__b">
      <ellipse cx={16} cy={10} rx={13} ry={3.905} />
    </clipPath>
    <path d="M0 0h32v32H0z" fill="none" />
    <g clipPath="url(#matcha_tea_svg__a)">
      <path
        d="M2 10c0-2.76 6.273-5 14-5s14 2.24 14 5c0 2.067-.347 9.855-6 13.751V26h-.01c.007.047.01.095.01.143C24 27.72 20.415 29 16 29s-8-1.28-8-2.857c0-.048.003-.096.01-.143H8v-2.249C2.347 19.855 2 12.067 2 10z"
        fill="none"
        stroke="#000"
        strokeWidth={4}
      />
      <path
        d="M8 26.143v-4h16v4C24 27.72 20.415 29 16 29s-8-1.28-8-2.857z"
        fill="#4b4a56"
      />
      <path
        d="M11.272 25.325C2.472 22.595 2 12.41 2 10h28c0 2.784-.63 15.943-14 16a18.054 18.054 0 0 1-2.564-.187c-1.531-.426-3.406-1.535-4.757-4.813-1.12-2.718-1.486-7.645-1.486-7.645l-2.78-1.076c2.225.991.719 4.058 1.931 6.843 1.542 3.544 4.491 5.967 4.928 6.203z"
        fill="#6e6c7e"
      />
      <path
        d="M11.272 25.325c-.803-.433-1.717-1.122-2.649-2.217-1.462-1.719-2.721-3.483-3.615-6.524-.713-2.423-.595-4.305-.595-4.305l3.328 1.1s.132 2.424.59 4.678c1.079 5.31 3.895 7.183 5.105 7.756a14.564 14.564 0 0 1-2.164-.488z"
        fill="#9087a0"
      />
      <ellipse cx={16} cy={10} fill="#4b4a56" rx={13} ry={3.905} />
      <g clipPath="url(#matcha_tea_svg__b)">
        <ellipse cx={16} cy={13.214} fill="#abe572" rx={11.8} ry={4.214} />
      </g>
      <path
        d="m16.181 5 .18.002.18.002.179.003.179.003.178.005.177.005.177.006.176.007.175.007.175.009.174.009.173.01.173.01.172.012.171.012.17.013.17.013.169.014.168.016.167.015.167.017.165.017.165.018.164.019.163.019.162.02.162.021.16.021.159.022.159.023.157.023.157.024.155.025.155.025.153.026.153.027.151.027.151.028.149.029.148.029.147.03.146.03.145.031.144.032.143.032.141.033.14.033.139.034.138.035.137.035.135.036.134.036.133.037.132.037.13.038.129.039.128.039.126.039.125.041.124.04.122.041.121.042.12.042.118.043.116.043.115.044.114.044.113.044.11.046.11.045.107.046.107.047.104.047.104.047.101.048.1.049.099.048.096.05.096.049.093.05.092.051.09.051.089.051.087.052.085.052.084.053.081.053.08.053.078.054.077.054.075.054.072.055.071.055.07.056.067.056.066.056.063.056.062.057.06.058.058.057.056.058.054.058.052.059.05.059.049.059.046.059.044.06.042.06.04.06.038.061.036.061.034.061.032.061.03.062.028.062.025.062.023.063.022.062.019.063.017.063.014.064.013.063.01.064.008.064.005.064.004.064L30 10l-.001.065-.004.064-.005.064-.008.064-.01.064-.013.063-.014.064-.017.063-.019.063-.022.062-.023.063-.025.062-.028.062-.03.062-.032.061-.034.061-.036.061-.038.061-.04.06-.042.06-.044.06-.046.059-.049.059-.05.059-.052.059-.054.058-.056.058-.058.057-.06.058-.062.057-.063.056-.066.056-.067.056-.07.056-.071.055-.072.055-.075.054-.077.054-.078.054-.08.053-.081.053-.084.053-.085.052-.087.052-.089.051-.09.051-.092.051-.093.05-.096.049-.096.05-.099.048-.1.049-.101.048-.104.047-.104.047-.107.047-.107.046-.11.045-.11.046-.113.044-.114.044-.115.044-.116.043-.118.043-.12.042-.121.042-.122.041-.124.04-.125.041-.126.039-.128.039-.129.039-.13.038-.132.037-.133.037-.134.036-.135.036-.137.035-.138.035-.139.034-.14.033-.141.033-.143.032-.144.032-.145.031-.146.03-.147.03-.148.029-.149.029-.151.028-.151.027-.153.027-.153.026-.155.025-.155.025-.157.024-.157.023-.159.023-.159.022-.16.021-.162.021-.162.02-.163.019-.164.019-.165.018-.165.017-.167.017-.167.015-.168.016-.169.014-.17.013-.17.013-.171.012-.172.012-.173.01-.173.01-.174.009-.175.009-.175.007-.176.007-.177.006-.177.005-.178.005-.179.003-.179.003-.18.002-.18.002h-.362l-.18-.002-.18-.002-.179-.003-.179-.003-.178-.005-.177-.005-.177-.006-.176-.007-.175-.007-.175-.009-.174-.009-.173-.01-.173-.01-.172-.012-.171-.012-.17-.013-.17-.013-.169-.014-.168-.016-.167-.015-.167-.017-.165-.017-.165-.018-.164-.019-.163-.019-.162-.02-.162-.021-.16-.021-.159-.022-.159-.023-.157-.023-.157-.024-.155-.025-.155-.025-.153-.026-.153-.027-.151-.027-.151-.028-.149-.029-.148-.029-.147-.03-.146-.03-.145-.031-.144-.032-.143-.032-.141-.033-.14-.033-.139-.034-.138-.035-.137-.035-.135-.036-.134-.036-.133-.037-.132-.037-.13-.038-.129-.039-.128-.039-.126-.039-.125-.041-.124-.04-.122-.041-.121-.042-.12-.042-.118-.043-.116-.043-.115-.044-.114-.044-.113-.044-.11-.046-.11-.045-.107-.046-.107-.047-.104-.047-.104-.047-.101-.048-.1-.049-.099-.048-.096-.05-.096-.049-.093-.05-.092-.051-.09-.051-.089-.051-.087-.052-.085-.052-.084-.053-.081-.053-.08-.053-.078-.054-.077-.054-.075-.054-.072-.055-.071-.055-.07-.056-.067-.056-.066-.056-.063-.056-.062-.057-.06-.058-.058-.057-.056-.058-.054-.058-.052-.059-.05-.059-.049-.059-.046-.059-.044-.06-.042-.06-.04-.06-.038-.061-.036-.061-.034-.061-.032-.061-.03-.062-.028-.062-.025-.062-.023-.063-.022-.062-.019-.063-.017-.063-.014-.064-.013-.063-.01-.064-.008-.064-.005-.064-.004-.064L2 10l.001-.065.004-.064.005-.064.008-.064.01-.064.013-.063.014-.064.017-.063.019-.063.022-.062.023-.063.025-.062.028-.062.03-.062.032-.061.034-.061.036-.061.038-.061.04-.06.042-.06.044-.06.046-.059.049-.059.05-.059.052-.059.054-.058.056-.058.058-.057.06-.058.062-.057.063-.056.066-.056.067-.056.07-.056.071-.055.072-.055.075-.054.077-.054.078-.054.08-.053.081-.053.084-.053.085-.052.087-.052.089-.051.09-.051.092-.051.093-.05.096-.049.096-.05.099-.048.1-.049.101-.048.104-.047.104-.047.107-.047.107-.046.11-.045.11-.046.113-.044.114-.044.115-.044.116-.043.118-.043.12-.042.121-.042.122-.041.124-.04.125-.041.126-.039.128-.039.129-.039.13-.038.132-.037.133-.037.134-.036.135-.036.137-.035.138-.035.139-.034.14-.033.141-.033.143-.032.144-.032.145-.031.146-.03.147-.03.148-.029.149-.029.151-.028.151-.027.153-.027.153-.026.155-.025.155-.025.157-.024.157-.023.159-.023.159-.022.16-.021.162-.021.162-.02.163-.019.164-.019.165-.018.165-.017.167-.017.167-.015.168-.016.169-.014.17-.013.17-.013.171-.012.172-.012.173-.01.173-.01.174-.009.175-.009.175-.007.176-.007.177-.006.177-.005.178-.005.179-.003.179-.003.18-.002.18-.002H16zm-.355 1.5-.174.002-.172.002-.173.002-.172.004-.171.004-.17.005-.17.006-.169.006-.169.008-.168.008-.167.008-.167.01-.165.01-.165.011-.165.012-.163.012-.163.013-.162.014-.161.014-.16.015-.159.016-.159.017-.157.017-.157.018-.156.018-.155.019-.154.02-.153.02-.152.021-.151.022-.15.022-.149.023-.148.024-.147.024-.146.025-.145.025-.143.026-.143.026-.141.027-.14.028-.139.028-.138.029-.137.029-.135.03-.135.03-.133.031-.131.032-.131.031-.129.033-.128.033-.126.033-.125.034-.124.034-.122.035-.121.035-.119.036-.118.036-.117.036-.115.037-.114.038-.112.037-.11.038-.109.039-.107.039-.106.039-.104.039-.103.04-.1.04-.1.04-.097.041-.096.041-.094.041-.092.041-.09.042-.089.042-.087.042-.085.042-.083.042-.081.042-.079.043-.077.042-.076.043-.073.042-.071.043-.07.042-.067.043-.065.042-.064.042-.061.042-.059.042-.057.041-.054.042-.053.04-.05.041-.049.04-.046.039-.044.04-.041.038-.04.038-.037.037-.035.036-.033.036-.031.034-.029.034-.027.033-.024.032-.023.03-.021.03-.019.028-.017.027-.015.026-.014.025-.012.023-.01.022-.01.021-.007.019-.007.018-.006.017-.005.016-.004.015-.003.013-.002.014-.002.012-.002.012-.001.011-.001.012v.022l.001.012.001.011.002.012.002.012.002.014.003.013.004.015.005.016.006.017.007.018.007.019.01.021.01.022.012.023.014.025.015.026.017.027.019.028.021.03.023.03.024.032.027.033.029.034.031.034.033.036.035.036.037.037.04.038.041.038.044.039.046.04.049.04.05.041.053.04.054.042.057.041.059.042.061.042.064.042.065.042.067.043.07.042.071.043.073.042.076.043.077.042.079.043.081.042.083.042.085.042.087.042.089.042.09.042.092.041.094.041.096.041.097.041.1.04.1.04.103.04.104.039.106.039.107.039.109.039.11.038.112.037.114.038.115.037.117.036.118.036.119.036.121.035.122.035.124.034.125.034.126.033.128.033.129.033.131.031.131.032.133.031.135.03.135.03.137.029.138.029.139.028.14.028.141.027.143.026.143.026.145.025.146.025.147.024.148.024.149.023.15.022.151.022.152.021.153.02.154.02.155.019.156.018.157.018.157.017.159.017.159.016.16.015.161.014.162.014.163.013.163.012.165.012.165.011.165.01.167.01.167.008.168.008.169.008.169.006.17.006.17.005.171.004.172.004.173.002.172.002.174.002h.348l.174-.002.172-.002.173-.002.172-.004.171-.004.17-.005.17-.006.169-.006.169-.008.168-.008.167-.008.167-.01.165-.01.165-.011.165-.012.163-.012.163-.013.162-.014.161-.014.16-.015.159-.016.159-.017.157-.017.157-.018.156-.018.155-.019.154-.02.153-.02.152-.021.151-.022.15-.022.149-.023.148-.024.147-.024.146-.025.145-.025.143-.026.143-.026.141-.027.14-.028.139-.028.138-.029.137-.029.135-.03.135-.03.133-.031.131-.032.131-.031.129-.033.128-.033.126-.033.125-.034.124-.034.122-.035.121-.035.119-.036.118-.036.117-.036.115-.037.114-.038.112-.037.11-.038.109-.039.107-.039.106-.039.104-.039.103-.04.1-.04.1-.04.097-.041.096-.041.094-.041.092-.041.09-.042.089-.042.087-.042.085-.042.083-.042.081-.042.079-.043.077-.042.076-.043.073-.042.071-.043.07-.042.067-.043.065-.042.064-.042.061-.042.059-.042.057-.041.054-.042.053-.04.05-.041.049-.04.046-.04.044-.039.041-.038.04-.038.037-.037.035-.036.033-.036.031-.034.029-.034.027-.033.024-.032.023-.03.021-.03.019-.028.017-.027.015-.026.014-.025.012-.023.01-.022.01-.021.007-.019.007-.018.006-.017.005-.016.004-.015.003-.013.002-.014.002-.012.002-.012.001-.011.001-.012v-.022l-.001-.012-.001-.011-.002-.012-.002-.012-.002-.014-.003-.013-.004-.015-.005-.016-.006-.017-.007-.018-.007-.019-.01-.021-.01-.022-.012-.023-.014-.025-.015-.026-.017-.027-.019-.028-.021-.03-.023-.03-.024-.032-.027-.033-.029-.034-.031-.034-.033-.036-.035-.036-.037-.037-.04-.038-.041-.038-.044-.04-.046-.039-.049-.04-.05-.041-.053-.04-.054-.042-.057-.041-.059-.042-.061-.042-.064-.042-.065-.042-.067-.043-.07-.042-.071-.043-.073-.042-.076-.043-.077-.042-.079-.043-.081-.042-.083-.042-.085-.042-.087-.042-.089-.042-.09-.042-.092-.041-.094-.041-.096-.041-.097-.041-.1-.04-.1-.04-.103-.04-.104-.039-.106-.039-.107-.039-.109-.039-.11-.038-.112-.037-.114-.038-.115-.037-.117-.036-.118-.036-.119-.036-.121-.035-.122-.035-.124-.034-.125-.034-.126-.033-.128-.033-.129-.033-.131-.031-.131-.032-.133-.031-.135-.03-.135-.03-.137-.029-.138-.029-.139-.028-.14-.028-.141-.027-.143-.026-.143-.026-.145-.025-.146-.025-.147-.024-.148-.024-.149-.023-.15-.022-.151-.022-.152-.021-.153-.02-.154-.02-.155-.019-.156-.018-.157-.018-.157-.017-.159-.017-.159-.016-.16-.015-.161-.014-.162-.014-.163-.013-.163-.012-.165-.012-.165-.011-.165-.01-.167-.01-.167-.008-.168-.008-.169-.008-.169-.006-.17-.006-.17-.005-.171-.004-.172-.004-.173-.002-.172-.002-.174-.002H16z"
        fill="#9087a0"
      />
    </g>
  </svg>
);

export default SvgMatchaTea;
