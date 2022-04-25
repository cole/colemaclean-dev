import { Link } from '@remix-run/react';
import { WaveHmnH5 } from '~/components/emoji';

export default function Index() {
  return (
    <>
      <h1 className="hero">
        <WaveHmnH5 name="wave_hmn_h5" className="emoji" title="hi there" />
        Hello!
      </h1>
      <h2>I'm Cole Maclean.</h2>
      <div>
        <Link to="/about" prefetch="render">
          about me →
        </Link>
      </div>
    </>
  );
}
