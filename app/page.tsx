import { Hero } from '@/containers/home/hero'
import { Timeline } from '@/containers/home/timeline'
import { Outlets } from '@/containers/home/outlets'
import { Franchise } from '@/containers/home/franchise'
import { Blog } from '@/containers/home/blog'
import { getPosts } from '@/actions/get-posts'

export default async function Home() {
  const posts = await getPosts()

  return (
    <main>
      <Hero />
      <Blog posts={posts} />
      <Franchise />
      <Timeline />
      <Outlets />
    </main>
  )
}
