# Front

The Raspberry Pi home-server dashboard, built with Remix.

## App Shape

- `app/actions/controller.tsx` owns the top-level route actions.
- `app/actions/dashboard-page.tsx` and `app/actions/document.tsx` render the shared dashboard shell.
- `app/actions/home-page.tsx` and `app/actions/pdfs-page.tsx` render the route-owned pages.
- `app/i18n.ts` owns locale detection and translations; language switching uses `?lang=` links.
- `app/actions/public/` contains the browser runtime entry, language menu, and sidebar toggle.
- `app/routes.ts` defines the shared route contract used by server and browser modules for type-safe hrefs.
- `app/router.ts` wires routes to handlers and installs the standard Remix component renderer used by actions.
- `app/assets.ts` owns the server-side asset pipeline used by the asset route and render middleware.
- Root `public/` contains static files served unchanged from the app root.

## Growing The App

- Put top-level route actions in `app/actions/controller.tsx`.
- Add `app/actions/<route-key>/controller.tsx` when a nested route map needs its own actions or middleware.
- Add directories like `app/data/` or `test/` when the app actually needs them.
- Move shared UI into `app/ui/` once more than one route needs it.

## Commands

```sh
npm i
npm run dev
npm run hmr
npm run start
npm test
npm run typecheck
```
