import Container from '@/components/container'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { strongman2025 } from '@/database/gallery'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildPageMetadata } from '@/lib/seo'
import { isLocale } from '@/i18n/config'

interface StrongmanPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({
  params,
}: StrongmanPageProps): Promise<Metadata> {
  const resolvedParams = await params

  if (!isLocale(resolvedParams.locale)) {
    notFound()
  }

  return buildPageMetadata({
    locale: resolvedParams.locale,
    path: '/galerie/strongman-2025',
    title: 'Galerie Strongman 2025 | Farma Hájek',
    description: 'Fotogalerie z akce Strongman 2025 pořádané Farmou Hájek.',
  })
}

export default async function Strongman2025Page({
  params,
}: StrongmanPageProps) {
  const resolvedParams = await params

  if (!isLocale(resolvedParams.locale)) {
    notFound()
  }

  return (
    <div className='pb-28 pt-24'>
      <Container className='mt-10'>
        <section>
          <GalleryGrid photos={strongman2025} />
        </section>
      </Container>
    </div>
  )
}
