import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Montserrat } from 'next/font/google'
import type { Metadata } from 'next'
import { isLocale, locales, type Locale } from '@/i18n/config'
import { buildPageMetadata } from '@/lib/seo'
import { Navbar } from '@/components/nav/navbar'
import { Footer } from '@/components/footer/footer'
import { CookiesBanner } from '@/components/cookies-banner'
import { AnalyticsProvider } from '@/providers/AnalyticsProvider'
import { SklikProvider } from '@/providers/SklikProvider'
import { JsonLd } from '@/components/seo/json-ld'

const montserrat = Montserrat({ subsets: ['latin'] })

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const getLocaleFromParams = async (
  params: LocaleLayoutProps['params'],
): Promise<Locale> => {
  const resolvedParams = await params

  if (!isLocale(resolvedParams.locale)) {
    notFound()
  }

  return resolvedParams.locale
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const locale = await getLocaleFromParams(params)

  return buildPageMetadata({
    locale,
    path: '/',
    title: 'Farma Hájek | Rodinná farma',
    description:
      'Rodinná farma od roku 2000. Prodej kuřic, vajec, krmiv a farmářské služby.',
  })
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const locale = await getLocaleFromParams(params)

  setRequestLocale(locale)
  const messages = await getMessages()

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Farma Hájek',
    url: 'https://farmahajek.cz',
    email: 'farma.hajek@seznam.cz',
    telephone: '+420720566212',
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Farma Hájek',
    image: 'https://farmahajek.cz/opengraph-image.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hájek 36',
      postalCode: '34506',
      addressLocality: 'Všeruby - Hájek',
      addressCountry: 'CZ',
    },
    url: 'https://farmahajek.cz',
    telephone: '+420720566212',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Farma Hájek',
    url: 'https://farmahajek.cz',
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AnalyticsProvider />
      <SklikProvider />

      <div className={montserrat.className}>
        <JsonLd data={[organizationSchema, localBusinessSchema, websiteSchema]} />
        <CookiesBanner />
        <Navbar />
        {children}
        <Footer />
      </div>
    </NextIntlClientProvider>
  )
}
