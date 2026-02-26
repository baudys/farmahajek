import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import {
  defaultLocale,
  detectLocaleFromAcceptLanguage,
  isLocale,
} from '@/i18n/config'

export default async function RootRedirectPage() {
  const cookieStore = await cookies()
  const headerStore = await headers()

  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value
  const acceptLanguage = headerStore.get('accept-language')

  const locale = isLocale(localeCookie)
    ? localeCookie
    : detectLocaleFromAcceptLanguage(acceptLanguage) ?? defaultLocale

  redirect(`/${locale}`)
}
