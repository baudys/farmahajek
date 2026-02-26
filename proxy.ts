import createMiddleware from 'next-intl/middleware'
import { NextResponse, type NextRequest } from 'next/server'
import { posts } from '@/database/posts'
import { routing } from '@/i18n/routing'
import { stripLocaleFromPathname } from '@/i18n/config'

const handleI18nRouting = createMiddleware(routing)
const NUMERIC_SLUG_PATTERN = /^\d+$/
const BLOCKED_RESPONSE_HEADERS = {
  'cache-control': 'public, max-age=3600, s-maxage=3600',
}

const ALLOWED_NUMERIC_BLOG_SLUGS = new Set(
  posts
    .map((post) => post.slug.replace(/^\/+/, ''))
    .filter((slug) => NUMERIC_SLUG_PATTERN.test(slug)),
)

export default function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl
  const { locale, pathnameWithoutLocale } = stripLocaleFromPathname(pathname)

  if (
    pathnameWithoutLocale === '/api' ||
    pathnameWithoutLocale.startsWith('/api/')
  ) {
    return new NextResponse(null, {
      status: 404,
      headers: BLOCKED_RESPONSE_HEADERS,
    })
  }

  if (pathnameWithoutLocale.startsWith('/blog/')) {
    const slug = pathnameWithoutLocale.replace(/^\/blog\/+|\/+$/g, '')

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

  const response = handleI18nRouting(request)

  if (locale) {
    response.cookies.set('NEXT_LOCALE', locale, {
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365,
    })
  }

  return response
}

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
}
