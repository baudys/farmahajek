'use client'

import { Categories } from '@/components/blog/categories'
import Container from '@/components/container'
import { Title } from '@/components/title'
import { Posts } from '@/containers/blog/posts'
import { posts } from '@/database/posts'
import { useState } from 'react'

export default async function Page() {
  //   const [categories, setCategories] = useState<string[]>([''])

  //   const filteredPosts = categories.length
  //     ? posts.filter((post) =>
  //         categories.some((cat) => post.categories.includes(cat)),
  //       )
  //     : posts

  return (
    <div className='space-y-20 lg:space-y-40'>
      <Container>
        <Title textCs='Blog' textDe='Blog' textEn='Blog' />
        {/* <Categories categories={categories} setCategories={setCategories} /> */}
        <Posts posts={posts.reverse()} />
      </Container>
    </div>
  )
}
