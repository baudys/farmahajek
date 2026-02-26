import Container from '@/components/container'
import { ArrowLeft } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildPageMetadata } from '@/lib/seo'
import { isLocale } from '@/i18n/config'

interface BlogPostsLayoutProps {
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({
  params,
}: BlogPostsLayoutProps): Promise<Metadata> {
  const resolvedParams = await params

  if (!isLocale(resolvedParams.locale)) {
    notFound()
  }

  return buildPageMetadata({
    locale: resolvedParams.locale,
    path: '/blog',
    title: 'Blog článek | Farma Hájek',
    description:
      'Blogové články Farmy Hájek: chov slepic, novinky z farmy a praktické tipy.',
  })
}

export default async function Layout({ children }: BlogPostsLayoutProps) {
  return (
    <Container className='xl:max-w-screen-lg 2xl:max-w-screen-xl'>
      <Link href='/blog' className='flex items-center gap-1'>
        <ArrowLeft size={18} /> Blog
      </Link>
      {children}
    </Container>
  )
}
