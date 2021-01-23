const template = (request: Request): string => {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <script>performance.mark('head start');</script>
    <title>Cole Maclean</title>
    <meta name="author" content="Cole Maclean">
    <meta name="description" content="" />

    <link rel="preload" href="/fonts/azuro-regular.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/azuro-bold.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/azuro-italic.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/azuro-bolditalic.woff2" as="font" type="font/woff2" crossorigin>
    <link href="/css/normalize.css" rel="stylesheet" type="text/css">
    <link href="/css/style.css" rel="stylesheet" type="text/css">
    <link rel="canonical" href="https://colemaclean.dev/">
    <script>performance.mark('head end'); performance.measure('head time', 'head start', 'head end');</script>
  </head>
  <body>
    <script>performance.mark('body start');</script>
    <header id="main-header">
      <h1>Hi, I'm <b>Cole Maclean</b>.</h1>
    </header>
    <main id="main-content" role="main">
      <p>Find me around the web:</p>
      <ul class="linklist">
        <li class="github">code on <a href="https://github.com/cole/" rel="me">github</a></li>
        <li class="twitter">occasional updates on <a href="https://twitter.com/cole/" rel="me">twitter</a></li>
        <li class="stack-overflow">programming Q &amp; A on <a href="http://stackoverflow.com/users/751070/cole-maclean" rel="me">stack overflow</a></li>
        <li class="flickr">photos on <a href="https://www.flickr.com/photos/colemaclean/" rel="me">flickr</a></li>
        <li class="pinboard">bookmarks on <a href="https://pinboard.in/u:cole" rel="me">pinboard</a></li>
      </ul>
      <p>
        <a href="mailto:hi@colemaclean.dev?subject=Hello">Or, you can send me an email.</a>
      </p>
    </main>
    <script>performance.mark('body end');</script>
  </body>
</html>`;
};

const HTTP2_PUSH_HEADER =
  '</css/normalize.css>; rel=preload; as=style,</css/style.css>; rel=preload; as=style';

export async function handleRequest(request: Request): Promise<Response> {
  const response = new Response(template(request), {
    headers: {
      'content-type': 'text/html',
      Link: HTTP2_PUSH_HEADER,
    },
  });
  response.headers.set('Content-Type', 'text/html');

  return response;
}
