export const locales = ['cs', 'en', 'de'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'cs'

const localeSet = new Set<string>(locales)

export const isLocale = (value: string | undefined | null): value is Locale =>
  Boolean(value && localeSet.has(value))

const LANGUAGE_TO_LOCALE: Record<string, Locale> = {
  cs: 'cs',
  sk: 'cs',
  en: 'en',
  de: 'de',
}

export const detectLocaleFromAcceptLanguage = (
  headerValue: string | null,
): Locale | null => {
  if (!headerValue) {
    return null
  }

  const languageTags = headerValue
    .split(',')
    .map((part) => part.trim().toLowerCase().split(';')[0])
    .filter(Boolean)

  for (const tag of languageTags) {
    const base = tag.split('-')[0]
    const mapped = LANGUAGE_TO_LOCALE[base]

    if (mapped) {
      return mapped
    }
  }

  return null
}

export const stripLocaleFromPathname = (
  pathname: string,
): { locale: Locale | null; pathnameWithoutLocale: string } => {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]

  if (!isLocale(firstSegment)) {
    return { locale: null, pathnameWithoutLocale: pathname }
  }

  const rest = segments.slice(1).join('/')
  const pathnameWithoutLocale = rest.length > 0 ? `/${rest}` : '/'

  return { locale: firstSegment, pathnameWithoutLocale }
}

export const withLocalePath = (pathname: string, locale: Locale): string => {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`
  const { pathnameWithoutLocale } = stripLocaleFromPathname(normalizedPath)

  return pathnameWithoutLocale === '/'
    ? `/${locale}`
    : `/${locale}${pathnameWithoutLocale}`
}
