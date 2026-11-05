import type { Handle, RemixNode } from 'remix/component'

import { getLocaleOptions, translate, type Locale } from '../i18n.ts'
import { Document } from './document.tsx'
import { LanguageSelector } from './public/language-selector.tsx'
import { SidebarToggle } from './public/sidebar-toggle.tsx'

interface DashboardPageProps {
  locale: Locale
  showLoading?: boolean
  children?: RemixNode
}

export function DashboardPage(handle: Handle<DashboardPageProps>) {
  return () => {
    let { locale, showLoading = true, children } = handle.props

    return (
      <Document lang={locale} title="Dashboard" head={<DashboardHead />}>
        {showLoading ? <LoadingScreen message={translate(locale, 'loading')} /> : null}
        <Header locale={locale} />
        <main id="services">{children}</main>
        <SidebarToggle />
        <aside>aside</aside>
      </Document>
    )
  }
}

function DashboardHead() {
  return () => (
    <>
      <link rel="stylesheet" href="/global.css" />
      <link rel="stylesheet" href="/components/service.component.css" />
    </>
  )
}

function LoadingScreen(handle: Handle<{ message: string }>) {
  return () => (
    <div id="loading-screen">
      <div class="spinner"></div>
      <p role="status">{handle.props.message}</p>
    </div>
  )
}

function Header(handle: Handle<{ locale: Locale }>) {
  return () => {
    let { locale } = handle.props

    return (
      <header>
        <div class="left">
          <img class="icon s-36" src="/icons/server.svg" alt="Server" />
          <h1>
            <a href="/">{translate(locale, 'header.title')}</a>
          </h1>
        </div>

        <div class="right">
          <meter id="cpu-meter" min="0" max="100" value={0}></meter>
          <p>{translate(locale, 'header.cpu')}</p>
          <p>{translate(locale, 'header.ram')}</p>
          <LanguageSelector locale={locale} options={getLocaleOptions(locale)} />
        </div>
      </header>
    )
  }
}
