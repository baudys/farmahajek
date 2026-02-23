import type { Post } from '@/types/blog'
import Link from 'next/link'

interface Props extends Post {}

export const Card = ({ slug, title, image, date }: Props) => {
  const normalizedSlug = slug.startsWith('/') ? slug : `/${slug}`

  return (
    <Link href={`/blog${normalizedSlug}`} className='group'>
      <div className='relative aspect-square overflow-hidden rounded-2xl border border-zinc-400/40'>
        <img
          src={image}
          alt={title}
          loading='lazy'
          decoding='async'
          className='absolute inset-0 h-full w-full object-cover object-center transition group-hover:scale-105'
        />

        <span className='absolute bottom-3 right-3 rounded-md bg-black/40 p-1 text-xs text-zinc-100'>
          {date}
        </span>
      </div>

      <h2 className='mt-2 text-lg font-semibold md:text-xl'>{title}</h2>
    </Link>
  )
}
