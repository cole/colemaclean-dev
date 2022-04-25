export default function About() {
  return (
    <>
      <h2 id="about-me">About me</h2>
      <p>I'm a software developer living and working in Vancouver, Canada.</p>
      <p>
        You can find some of my work on{' '}
        <a href="https://github.com/cole/" rel="me">
          GitHub
        </a>
        . My most popular project is{' '}
        <a href="https://pypi.org/project/aiosmtplib/">aiosmtplib</a>, a library
        for sending email asynchronously in Python.
      </p>
      <h2 id="about-this-site">About this site</h2>
      <p>
        This site is built with <a href="https://remix.run">Remix</a>. It runs
        on <a href="https://workers.cloudflare.com/">Cloudflare Workers</a>.
      </p>
      <p>
        Type is set in Georg Seifert's{' '}
        <a href="https://www.fontshop.com/families/azuro">Azuro</a>.
      </p>
      <p>
        This site uses <a href="https://mutant.tech">Mutant Standard emoji</a>,
        which are licensed under a{' '}
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
          Creative Commons Attribution-NonCommercial-ShareAlike 4.0
          International License
        </a>
        .
      </p>
    </>
  );
}
