import type { Post } from '@/types/blog'
import { readdir } from 'fs/promises'

export async function getPosts(): Promise<Post[]> {
  const posts: Post[] = []
  const languages = ['cs', 'de', 'en']

  for (const lang of languages) {
    const slugs = (
      await readdir(`./app/blog/(posts)/(${lang})`, { withFileTypes: true })
    ).filter((dirent) => dirent.isDirectory())

    const langPosts = await Promise.all(
      slugs.map(async ({ name }) => {
        const { metadata } = await import(
          `../app/blog/(posts)/(${lang})/${name}/page.mdx`
        )
        return { slug: name, language: lang, ...metadata }
      }),
    )

    posts.push(...langPosts)
  }

  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate))

  return posts
}
