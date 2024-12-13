'use client'

import { Card } from '@/components/blog/card'
import { useLanguage } from '@/hooks/useLanguage'
import { Post } from '@/types/blog'
import { motion } from 'framer-motion'
import { Title } from '@/components/title'
import Container from '@/components/container'

interface Props {
  posts: Post[]
}

export const Blog = ({ posts }: Props) => {
  const { language } = useLanguage()

  const filteredPosts = posts.filter((post) => post.lang === language)

  return (
    <section className='py-20'>
      <Title
        textCs='co se děje na farmě'
        textEn="what's happening on the farm"
        textDe='was auf dem Bauernhof passiert'
      />

      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'
        >
          {filteredPosts.map(
            ({
              slug,
              title,
              image,
              publishDate,
              formattedDate,
              categories,
              lang,
            }) => (
              <Card
                key={slug}
                slug={slug}
                title={title}
                image={image}
                publishDate={publishDate}
                formattedDate={formattedDate}
                categories={categories}
                lang={lang}
              />
            ),
          )}
        </motion.div>
      </Container>
    </section>
  )
}
