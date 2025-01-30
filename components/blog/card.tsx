import { useLanguage } from '@/hooks/useLanguage'
import type { Post } from '@/types/blog'
import Link from 'next/link'

interface Props extends Post {}

export const Card = ({ slug, title, image, date, categories }: Props) => {
  const { language } = useLanguage()

  return (
    <Link href={`/blog/${slug}`} className='group'>
      <div className='relative aspect-square overflow-hidden rounded-2xl border border-zinc-400/40'>
        <img
          src={image}
          alt={title}
          className='absolute inset-0 h-full w-full object-cover object-center transition group-hover:scale-105'
        />

        <span className='absolute bottom-3 right-3 rounded-md bg-black/40 p-1 text-xs text-zinc-100'>
          {date}
        </span>
      </div>

      <div className='flex items-center justify-between'>
        <h2 className='mt-2 text-lg font-semibold md:text-xl'>{title}</h2>
        {/* <div className='flex gap-1'>
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={`/blog/${cat}`}
              className='rounded-md bg-green px-2 py-0.5 text-sm text-zinc-800'
            >
              {cat === 'novinka' && language === 'cs'
                ? 'novinka'
                : cat === 'novinka' && language === 'en'
                  ? 'news'
                  : cat === 'novinka' && language === 'de'
                    ? 'nachrichten'
                    : ''}
              {cat === 'rekapitulace' && language === 'cs'
                ? 'rekapitulace'
                : cat === 'rekapitulace' && language === 'en'
                  ? 'recap'
                  : cat === 'rekapitulace' && language === 'de'
                    ? 'rekapitulation'
                    : ''}
              {cat === 'strongman' && 'strongman'}
              {cat === 'eshop' && 'eshop'}
            </Link>
          ))}
        </div> */}
      </div>
    </Link>
  )
}
