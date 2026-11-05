import { createController } from 'remix/router'

import { assets } from '../assets.ts'
import { resolveLocale } from '../i18n.ts'
import { routes } from '../routes.ts'
import { HomePage } from './home-page.tsx'
import { PdfsPage } from './pdfs-page.tsx'

const pageHeaders = { Vary: 'Accept-Language, X-Remix-Frame' }

export default createController(routes, {
  actions: {
    async assets(context) {
      return (await assets.fetch(context.request)) ?? new Response('Not Found', { status: 404 })
    },
    home(context) {
      return context.render(
        <HomePage
          locale={resolveLocale(context.request)}
          showLoading={!context.request.headers.has('X-Remix-Frame')}
        />,
        { headers: pageHeaders },
      )
    },
    pdfs(context) {
      return context.render(
        <PdfsPage
          locale={resolveLocale(context.request)}
          showLoading={!context.request.headers.has('X-Remix-Frame')}
        />,
        { headers: pageHeaders },
      )
    },
  },
})
