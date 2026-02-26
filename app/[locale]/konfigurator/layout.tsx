import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildPageMetadata } from '@/lib/seo'
import { isLocale, type Locale } from '@/i18n/config'

interface KonfiguratorLayoutProps {
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}

const configuratorMetaByLocale: Record<
  Locale,
  { title: string; description: string }
> = {
  cs: {
    title: 'Konfigurátor slepiček | Farma Hájek',
    description:
      'Vyberte si ideální slepičku podle barvy skořápky v konfigurátoru Farmy Hájek.',
  },
  en: {
    title: 'Hen Configurator | Farma Hajek',
    description:
      'Find your ideal hen based on egg shell color in Farma Hajek configurator.',
  },
  de: {
    title: 'Hühner-Konfigurator | Farma Hajek',
    description:
      'Finden Sie Ihre ideale Henne nach Eierschalenfarbe im Konfigurator von Farma Hajek.',
  },
}

export async function generateMetadata({
  params,
}: KonfiguratorLayoutProps): Promise<Metadata> {
  const resolvedParams = await params

  if (!isLocale(resolvedParams.locale)) {
    notFound()
  }

  const locale = resolvedParams.locale
  const localeMeta = configuratorMetaByLocale[locale]

  return buildPageMetadata({
    locale,
    path: '/konfigurator',
    title: localeMeta.title,
    description: localeMeta.description,
  })
}

export default function KonfiguratorLayout({
  children,
}: KonfiguratorLayoutProps) {
  return children
}
