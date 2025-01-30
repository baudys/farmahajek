import { Hero } from '@/containers/home/hero'
import { Timeline } from '@/containers/home/timeline'
import { Outlets } from '@/containers/home/outlets'
import { Franchise } from '@/containers/home/franchise'
import { Blog } from '@/containers/home/blog'
import { posts } from '@/database/posts'

export default async function Home() {
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
