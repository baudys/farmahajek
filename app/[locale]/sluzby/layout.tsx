import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildPageMetadata } from '@/lib/seo'
import { isLocale, type Locale } from '@/i18n/config'

interface SluzbyLayoutProps {
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}

const servicesMetaByLocale: Record<
  Locale,
  { title: string; description: string }
> = {
  cs: {
    title: 'Služby | Farma Hájek',
    description:
      'Přehled služeb Farmy Hájek: drůbežárna, vejce, zemní práce, zahradnictví a další.',
  },
  en: {
    title: 'Services | Farma Hajek',
    description:
      'Overview of Farma Hajek services: poultry, eggs, earthworks, gardening and more.',
  },
  de: {
    title: 'Dienstleistungen | Farma Hajek',
    description:
      'Übersicht der Dienstleistungen von Farma Hajek: Geflügel, Eier, Erdarbeiten, Gartenbau und mehr.',
  },
}

export async function generateMetadata({
  params,
}: SluzbyLayoutProps): Promise<Metadata> {
  const resolvedParams = await params

  if (!isLocale(resolvedParams.locale)) {
    notFound()
  }

  const locale = resolvedParams.locale
  const localeMeta = servicesMetaByLocale[locale]

  return buildPageMetadata({
    locale,
    path: '/sluzby',
    title: localeMeta.title,
    description: localeMeta.description,
  })
}

export default function SluzbyLayout({
  children,
}: SluzbyLayoutProps) {
  return <div>{children}</div>
}
