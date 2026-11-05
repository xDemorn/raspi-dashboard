export const SUPPORTED_LOCALES = ['en', 'ca', 'es', 'pl'] as const

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export interface LocaleOption {
  code: Locale
  label: string
  flag: string
}

const FALLBACK_LOCALE: Locale = 'en'

const FLAGS: Record<Locale, string> = {
  en: '/i18n/us.svg',
  ca: '/i18n/ca.svg',
  es: '/i18n/es.svg',
  pl: '/i18n/pl.svg',
}

const MESSAGES: Record<Locale, Record<string, unknown>> = {
  en: {
    loading: 'Loading, please wait...',
    header: {
      title: 'HomeServer',
      cpu: 'CPU',
      ram: 'RAM',
      'language-selector': {
        en: 'English',
        ca: 'Catalan',
        es: 'Spanish',
        pl: 'Polish',
      },
    },
    services: {
      'pi-hole': 'Pi-hole',
      launch: 'Launch',
    },
  },
  ca: {
    loading: "S'està carregant, espereu...",
    header: {
      title: 'Servidor domèstic',
      cpu: 'CPU',
      ram: 'RAM',
      'language-selector': {
        en: 'Anglès',
        ca: 'Català',
        es: 'Castellà',
        pl: 'Polonès',
      },
    },
    services: {
      'pi-hole': 'Pi-hole',
      launch: 'Obrir',
    },
  },
  es: {
    loading: 'Cargando, espere...',
    header: {
      title: 'Servidor doméstico',
      cpu: 'CPU',
      ram: 'RAM',
      'language-selector': {
        en: 'Inglés',
        ca: 'Catalán',
        es: 'Español',
        pl: 'Polaco',
      },
    },
    services: {
      'pi-hole': 'Pi-hole',
      launch: 'Abrir',
    },
  },
  pl: {
    loading: 'Ładowanie, proszę czekać...',
    header: {
      title: 'Serwer domowy',
      cpu: 'CPU',
      ram: 'RAM',
      'language-selector': {
        en: 'Angielski',
        ca: 'Kataloński',
        es: 'Hiszpański',
        pl: 'Polski',
      },
    },
    services: {
      'pi-hole': 'Pi-hole',
      launch: 'Otwórz',
    },
  },
}

function normalizeLocale(value: string): Locale | undefined {
  let base = value.trim().toLowerCase().split('-')[0]

  return SUPPORTED_LOCALES.find((locale) => locale === base)
}

export function resolveLocale(request: Request): Locale {
  let requested = new URL(request.url).searchParams.get('lang')

  if (requested) {
    return normalizeLocale(requested) ?? FALLBACK_LOCALE
  }

  for (let part of request.headers.get('accept-language')?.split(',') ?? []) {
    let locale = normalizeLocale(part.split(';')[0] ?? '')

    if (locale) return locale
  }

  return FALLBACK_LOCALE
}

export function translate(locale: Locale, key: string): string {
  let value = key
    .split('.')
    .reduce<unknown>((current, part) => (current as Record<string, unknown> | undefined)?.[part], MESSAGES[locale])

  return typeof value === 'string' ? value : key
}

export function getLocaleOptions(locale: Locale): LocaleOption[] {
  return SUPPORTED_LOCALES.map((code) => ({
    code,
    label: translate(locale, `header.language-selector.${code}`),
    flag: FLAGS[code],
  }))
}
