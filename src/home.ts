import html from '../assets/index.html';
import css from '../assets/css/style.css';

class InlineStyleReplacer implements ElementHandlerOptionals {
  element(element: Element) {
    const path = element.getAttribute('href');
    if (!(path && path === '/css/style.css')) {
      return;
    }

    const styleData = css.toString();
    if (styleData) {
      element.replace(`<style>\n${styleData}\n    </style>`, { html: true });
    }
  }
}

class CurrentTimeHandler implements ElementHandlerOptionals {
  element(element: Element) {
    const date = new Date();
    element.setInnerContent(date.toLocaleTimeString());
  }
}

export async function getHome(): Promise<Response> {
  const response = new Response(html, {
    headers: {
      'Content-Type': 'text/html',
      'X-XSS-Protection': '1; mode=block',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'unsafe-url',
      'Feature-Policy': 'none',
      Link: '</js/main.js>; rel=preload; as=script',
    },
  });

  const rewriter = new HTMLRewriter();
  rewriter.on('link[rel=stylesheet]', new InlineStyleReplacer());
  rewriter.on('span#current-time', new CurrentTimeHandler());

  return rewriter.transform(response);
}
