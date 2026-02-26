import Container from '@/components/container'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { farma } from '@/database/gallery'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildPageMetadata } from '@/lib/seo'
import { isLocale } from '@/i18n/config'

interface GaleriePageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({
  params,
}: GaleriePageProps): Promise<Metadata> {
  const resolvedParams = await params

  if (!isLocale(resolvedParams.locale)) {
    notFound()
  }

  return buildPageMetadata({
    locale: resolvedParams.locale,
    path: '/galerie/farma',
    title: 'Galerie farmy | Farma Hájek',
    description:
      'Fotogalerie z prostředí Farmy Hájek. Prohlédněte si život na farmě a naše chovatelské zázemí.',
  })
}

export default async function GaleriePage({ params }: GaleriePageProps) {
  const resolvedParams = await params

  if (!isLocale(resolvedParams.locale)) {
    notFound()
  }

  return (
    <div className='pb-28 pt-24'>
      <Container className='mt-10'>
        <section>
          <GalleryGrid photos={farma} />
        </section>
      </Container>
    </div>
  )
}
