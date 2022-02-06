import ThemeSwitch from '~/components/ThemeSwitch';
import greenHeartEmoji from '~/emoji/green_heart.svg';
import waveEmoji from '~/emoji/wave_hmn_h5.svg';

export default function Index() {
  const currentTime = new Date();
  return (
    <>
      <header id="main-header">
        <h1>
          <img
            className="emoji"
            src={waveEmoji}
            alt=":wave:"
            title="hi there"
          />
          Hi!
        </h1>
        <h2>I'm Cole Maclean.</h2>
      </header>
      <main id="main-content" role="main">
        <p>Find me around the web:</p>
        <ul className="linklist">
          <li className="github">
            code on{' '}
            <a href="https://github.com/cole/" rel="me">
              github
            </a>
          </li>
          <li className="twitter">
            occasional updates on{' '}
            <a href="https://twitter.com/cole/" rel="me">
              twitter
            </a>
          </li>
          <li className="stack-overflow">
            programming Q &amp; A on{' '}
            <a
              href="http://stackoverflow.com/users/751070/cole-maclean"
              rel="me"
            >
              stack overflow
            </a>
          </li>
          <li className="flickr">
            photos on{' '}
            <a href="https://www.flickr.com/photos/colemaclean/" rel="me">
              flickr
            </a>
          </li>
          <li className="pinboard">
            bookmarks on{' '}
            <a href="https://pinboard.in/u:cole" rel="me">
              pinboard
            </a>
          </li>
        </ul>
        <p>
          <a href="mailto:hi@colemaclean.dev?subject=Hello">
            Or, you can send me an email.
          </a>
        </p>
      </main>
      <footer id="main-footer">
        <p>
          Made with
          <img className="emoji" src={greenHeartEmoji} alt=":green_heart:" />
          in Vancouver using{' '}
          <a href="https://workers.cloudflare.com/">
            Cloudflare Workers
          </a> and <a href="https://mutant.tech">Mutant Standard</a> emoji.
        </p>
        <p style={{ display: 'none' }}>
          Current time:{' '}
          <span id="current-time">{currentTime.toLocaleString()}</span>
        </p>
      </footer>
      <div id="toggles">
        <ThemeSwitch />
      </div>
    </>
  );
}
