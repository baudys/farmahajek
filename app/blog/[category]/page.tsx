import { getPostsByCategory } from '@/actions/get-posts-by-category'
import { Categories } from '@/components/blog/categories'
import { Title } from '@/components/title'
import { categories } from '@/database/categories'
import type { Category } from '@/types/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Container from '@/components/container'
import { Posts } from '@/containers/blog/posts'

export default async function CategoryPage({
  params,
}: {
  params: { category: Category }
}) {
  const { category } = params

  console.log('CATEGORY', category)

  const posts = await getPostsByCategory({ category })

  return (
    <div className='space-y-20 lg:space-y-40'>
      <Container>
        <Link href='/blog' className='flex items-center gap-1'>
          <ArrowLeft size={18} /> Blog
        </Link>
        <Title
          textCs={category}
          textEn={
            category === 'rekapitulace'
              ? 'recap'
              : category === 'novinka'
                ? 'news'
                : category === 'eshop'
                  ? 'eshop'
                  : 'strongman'
          }
          textDe={
            category === 'rekapitulace'
              ? 'rekapitulation'
              : category === 'novinka'
                ? 'nachrichten'
                : category === 'eshop'
                  ? 'eshop'
                  : 'strongman'
          }
        />
        <Categories />
        <Posts posts={posts} />
      </Container>
    </div>
  )
}
