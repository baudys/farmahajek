import type { MetadataRoute } from 'next'
import { posts } from '@/database/posts'

const BASE_URL = 'https://farmahajek.cz'
const LAST_MODIFIED = new Date('2026-02-23T00:00:00.000Z')

const staticRoutes = [
  '/',
  '/blog',
  '/galerie/farma',
  '/galerie/strongman-2023',
  '/galerie/strongman-2024',
  '/galerie/strongman-2025',
  '/konfigurator',
  '/sluzby',
  '/vydejni-mista',
]

const blogRoutes = posts.map((post) => {
  const normalizedSlug = post.slug.startsWith('/') ? post.slug : `/${post.slug}`

  return `/blog${normalizedSlug}`
})

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Array.from(new Set([...staticRoutes, ...blogRoutes]))

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: LAST_MODIFIED,
  }))
}
