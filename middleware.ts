import { NextResponse, type NextRequest } from 'next/server'
import { posts } from '@/database/posts'

const NUMERIC_SLUG_PATTERN = /^\d+$/
const BLOCKED_RESPONSE_HEADERS = {
  'cache-control': 'public, max-age=3600, s-maxage=3600',
}
const ALLOWED_NUMERIC_BLOG_SLUGS = new Set(
  posts
    .map((post) => post.slug.replace(/^\/+/, ''))
    .filter((slug) => NUMERIC_SLUG_PATTERN.test(slug)),
)

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl

  if (pathname === '/api' || pathname.startsWith('/api/')) {
    return new NextResponse(null, {
      status: 404,
      headers: BLOCKED_RESPONSE_HEADERS,
    })
  }

  if (pathname.startsWith('/blog/')) {
    const slug = pathname.replace(/^\/blog\/+|\/+$/g, '')

    if (
      NUMERIC_SLUG_PATTERN.test(slug) &&
      !ALLOWED_NUMERIC_BLOG_SLUGS.has(slug)
    ) {
      return new NextResponse(null, {
        status: 404,
        headers: BLOCKED_RESPONSE_HEADERS,
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*', '/blog/:slug'],
}
