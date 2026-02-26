import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildPageMetadata } from '@/lib/seo'
import { isLocale, type Locale } from '@/i18n/config'
import { BlogPageClient } from '@/components/blog/blog-page-client'

interface BlogPageProps {
  params: Promise<{
    locale: string
  }>
}

const blogMetaByLocale: Record<Locale, { title: string; description: string }> = {
  cs: {
    title: 'Blog | Farma Hájek',
    description:
      'Novinky z Farmy Hájek, tipy pro chov slepic a aktuální dění na farmě.',
  },
  en: {
    title: 'Blog | Farma Hajek',
    description:
      'Updates from Farma Hajek, poultry tips and latest farm activities.',
  },
  de: {
    title: 'Blog | Farma Hajek',
    description:
      'Neuigkeiten von Farma Hajek, Tipps zur Hühnerhaltung und aktuelle Themen.',
  },
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const resolvedParams = await params

  if (!isLocale(resolvedParams.locale)) {
    notFound()
  }

  const locale = resolvedParams.locale
  const localeMeta = blogMetaByLocale[locale]

  return buildPageMetadata({
    locale,
    path: '/blog',
    title: localeMeta.title,
    description: localeMeta.description,
  })
}

export default async function Page({ params }: BlogPageProps) {
  const resolvedParams = await params

  if (!isLocale(resolvedParams.locale)) {
    notFound()
  }

  return (
    <BlogPageClient />
  )
}
