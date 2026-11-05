import type { Handle } from 'remix/component'

import type { Locale } from '../i18n.ts'
import { DashboardPage } from './dashboard-page.tsx'

export function PdfsPage(handle: Handle<{ locale: Locale; showLoading?: boolean }>) {
  return () => (
    <DashboardPage locale={handle.props.locale} showLoading={handle.props.showLoading} />
  )
}
