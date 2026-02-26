'use client'

import { useMemo } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { isLocale, type Locale, withLocalePath } from '@/i18n/config'

interface LanguageStore {
  language: Locale
  setLanguage: (value: Locale) => void
}

const createLanguageStore = (
  locale: Locale,
  pathname: string,
  replace: (href: string) => void,
): LanguageStore => ({
  language: locale,
  setLanguage: (value: Locale) => {
    if (!isLocale(value) || value === locale) {
      return
    }

    replace(withLocalePath(pathname, value))
  },
})

export function useLanguage(): LanguageStore
export function useLanguage<T>(selector: (store: LanguageStore) => T): T
export function useLanguage<T>(selector?: (store: LanguageStore) => T) {
  const localeFromRoute = useLocale()
  const pathname = usePathname() ?? '/'
  const router = useRouter()

  const locale: Locale = isLocale(localeFromRoute)
    ? localeFromRoute
    : 'cs'

  const store = useMemo(
    () => createLanguageStore(locale, pathname, router.replace),
    [locale, pathname, router.replace],
  )

  return selector ? selector(store) : store
}
