import './globals.css'
import { cookies } from 'next/headers'
import type { Metadata } from 'next'
import { defaultLocale, isLocale, type Locale } from '@/i18n/config'

export const metadata: Metadata = {
  metadataBase: new URL('https://farmahajek.cz'),
  title: 'Farma Hájek',
  description: 'Rodinná farma již od roku 2000.',
  icons: {
    icon: 'favicon.ico',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value
  const htmlLang: Locale = isLocale(localeCookie) ? localeCookie : defaultLocale

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
