'use client'

import { useState } from 'react'
import { Categories } from '@/components/blog/categories'
import Container from '@/components/container'
import { Posts } from '@/containers/blog/posts'
import { posts } from '@/database/posts'

export const BlogPageClient = () => {
  const [categories, setCategories] = useState<string[]>([])

  const filteredPosts =
    categories.length === 0
      ? posts
      : posts.filter((post) =>
          post.categories.some((cat) => categories.includes(cat)),
        )

  return (
    <div className='space-y-20 lg:space-y-40'>
      <Container>
        <Categories categories={categories} setCategories={setCategories} />
        <Posts posts={filteredPosts} />
      </Container>
    </div>
  )
}
