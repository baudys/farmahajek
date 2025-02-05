'use client'

import { Card } from '@/components/blog/card'
import { Post } from '@/types/blog'
import { motion } from 'framer-motion'

interface Props {
  posts: Post[]
}

export const Posts = ({ posts }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'
    >
      {posts.map(({ slug, title, image, date, categories }) => (
        <Card
          key={slug}
          slug={slug}
          title={title}
          image={image}
          date={date}
          categories={categories}
        />
      ))}
    </motion.div>
  )
}
