import type { Handle } from 'remix/component'

import { translate, type Locale } from '../i18n.ts'
import { routes } from '../routes.ts'
import { DashboardPage } from './dashboard-page.tsx'

export function HomePage(handle: Handle<{ locale: Locale; showLoading?: boolean }>) {
  return () => {
    let { locale, showLoading } = handle.props

    return (
      <DashboardPage locale={locale} showLoading={showLoading}>
        <ServiceCard
          icon="/icons/services/pi-hole.svg"
          name={translate(locale, 'services.pi-hole')}
          href="/admin"
          launchLabel={translate(locale, 'services.launch')}
        />
        <ServiceCard
          icon="/icons/services/pdf.svg"
          name="PDFs"
          href={routes.pdfs.href()}
          launchLabel={translate(locale, 'services.launch')}
        />
      </DashboardPage>
    )
  }
}

interface ServiceCardProps {
  icon: string
  name: string
  href: string
  launchLabel: string
}

function ServiceCard(handle: Handle<ServiceCardProps>) {
  return () => {
    let { icon, name, href, launchLabel } = handle.props

    return (
      <article class="card">
        <div class="content">
          <div class="image-container">
            <img alt={name} class="icon" src={icon} />
          </div>
          <p class="title">{name}</p>
        </div>
        <a class="launch" href={href} target="_blank" rel="noopener" data-rmx-document>
          {launchLabel}
        </a>
      </article>
    )
  }
}
