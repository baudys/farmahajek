import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildPageMetadata } from '@/lib/seo'
import { isLocale, type Locale } from '@/i18n/config'
import Map from '@/components/map'

interface VydejniMistaPageProps {
  params: Promise<{
    locale: string
  }>
}

const outletsMetaByLocale: Record<
  Locale,
  { title: string; description: string }
> = {
  cs: {
    title: 'Výdejní místa | Farma Hájek',
    description:
      'Aktuální výdejní místa, kde můžete koupit kuřice a další produkty Farmy Hájek.',
  },
  en: {
    title: 'Pickup Points | Farma Hajek',
    description:
      'Current pickup points where you can buy pullets and other Farma Hajek products.',
  },
  de: {
    title: 'Abholstellen | Farma Hajek',
    description:
      'Aktuelle Abholstellen für Junghennen und weitere Produkte von Farma Hajek.',
  },
}

export async function generateMetadata({
  params,
}: VydejniMistaPageProps): Promise<Metadata> {
  const resolvedParams = await params

  if (!isLocale(resolvedParams.locale)) {
    notFound()
  }

  const locale = resolvedParams.locale
  const localeMeta = outletsMetaByLocale[locale]

  return buildPageMetadata({
    locale,
    path: '/vydejni-mista',
    title: localeMeta.title,
    description: localeMeta.description,
  })
}

export default async function VydejniMistaPage({
  params,
}: VydejniMistaPageProps) {
  const resolvedParams = await params

  if (!isLocale(resolvedParams.locale)) {
    notFound()
  }

  return (
    <main className='pt-16 lg:pt-20'>
      <Map />
    </main>
  )
}
