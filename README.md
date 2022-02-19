# colemaclean.dev

Early 2021 revision, using [Remix](https://remix.run/docs).

## Development

You will be running two processes during development:

- The Miniflare server (miniflare is a local environment for Cloudflare Workers)
- The Remix development server

```sh
# in one tab, start the remix dev server
$ yarn run dev

# in another, start the miniflare server
$ yarn start
```

Open up [http://127.0.0.1:8787](http://127.0.0.1:8787) and you should be ready to go!

## Deployment

```sh
$ yarn deploy
$ yarn deploy -e staging
$ yarn deploy -e production
```
