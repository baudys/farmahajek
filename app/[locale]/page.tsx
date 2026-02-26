import { Hero } from '@/containers/home/hero'
import { Timeline } from '@/containers/home/timeline'
import { Outlets } from '@/containers/home/outlets'
import { Franchise } from '@/containers/home/franchise'
import { Blog } from '@/containers/home/blog'
import { posts } from '@/database/posts'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo'
import { isLocale, type Locale } from '@/i18n/config'

interface LocalePageProps {
  params: Promise<{
    locale: string
  }>
}

const homeMetaByLocale: Record<Locale, { title: string; description: string }> = {
  cs: {
    title: 'Farma Hájek | Prodej kuřic, vajec a farmářské služby',
    description:
      'Ryze čeští chovatelé a farmáři. Sledujte novinky, služby a výdejní místa Farmy Hájek.',
  },
  en: {
    title: 'Farma Hajek | Pullets, Eggs and Farm Services',
    description:
      'Czech breeders and farmers. Explore updates, services and pickup points.',
  },
  de: {
    title: 'Farma Hajek | Junghennen, Eier und Hofdienstleistungen',
    description:
      'Tschechische Züchter und Landwirte. Neuigkeiten, Dienstleistungen und Abholstellen.',
  },
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params

  if (!isLocale(resolvedParams.locale)) {
    notFound()
  }

  const locale = resolvedParams.locale
  const localeMeta = homeMetaByLocale[locale]

  return buildPageMetadata({
    locale,
    path: '/',
    title: localeMeta.title,
    description: localeMeta.description,
  })
}

export default async function Home({ params }: LocalePageProps) {
  const resolvedParams = await params

  if (!isLocale(resolvedParams.locale)) {
    notFound()
  }

  const locale = resolvedParams.locale
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://farmahajek.cz/${locale}`,
      },
    ],
  }

  return (
    <main>
      <JsonLd data={breadcrumbSchema} />
      <Hero />
      <Blog posts={posts} />
      <Franchise />
      <Timeline />
      <Outlets />
    </main>
  )
}
