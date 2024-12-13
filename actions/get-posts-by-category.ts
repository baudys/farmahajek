import type { Category, Post } from '@/types/blog'
import { getPosts } from './get-posts'

export async function getPostsByCategory({
  category,
}: {
  category: Category
}): Promise<Post[]> {
  const allPosts = await getPosts()

  const posts = allPosts.filter((post) => post?.categories?.includes(category))

  console.log(posts)

  return posts
}
