import type { Metadata } from 'next'
import type { Locale } from '@/i18n/config'
import { locales } from '@/i18n/config'

const BASE_URL = 'https://farmahajek.cz'

export const toAbsoluteUrl = (path: string): string =>
  path.startsWith('http') ? path : `${BASE_URL}${path}`

const normalizePath = (path: string): string => {
  if (path.length === 0) {
    return '/'
  }

  return path.startsWith('/') ? path : `/${path}`
}

export const localePath = (locale: Locale, path: string): string => {
  const normalizedPath = normalizePath(path)
  return normalizedPath === '/' ? `/${locale}` : `/${locale}${normalizedPath}`
}

export const localeAlternates = (
  path: string,
): NonNullable<Metadata['alternates']>['languages'] =>
  locales.reduce<Record<string, string>>((acc, locale) => {
    acc[`${locale}-${locale === 'cs' ? 'CZ' : locale === 'en' ? 'US' : 'DE'}`] =
      toAbsoluteUrl(localePath(locale, path))
    return acc
  }, {})

interface BuildPageMetadataInput {
  locale: Locale
  path: string
  title: string
  description: string
  noIndex?: boolean
}

export const buildPageMetadata = ({
  locale,
  path,
  title,
  description,
  noIndex = false,
}: BuildPageMetadataInput): Metadata => {
  const canonicalPath = localePath(locale, path)
  const canonicalUrl = toAbsoluteUrl(canonicalPath)

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: localeAlternates(path),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Farma Hájek',
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
  }
}
