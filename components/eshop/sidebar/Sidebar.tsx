'use client'

import useSearchBar from '@/hooks/useSearchBar'
import useSelectCategory from '@/hooks/useSelectCategory'
import Link from 'next/link'
import { useEffect } from 'react'

const Sidebar: React.FC = () => {
  const selectCategory = useSelectCategory(state => state.set)
  const selectedCategory = useSelectCategory(state => state.selected)

  const query = useSearchBar(state => state.query)
  const setQuery = useSearchBar(state => state.setQuery)

  useEffect(() => {
    const pathname = window.location.pathname

    if (pathname === '/eshop') selectCategory('vse')
    if (pathname === '/eshop/slepicky') selectCategory('slepicky')
    if (pathname === '/eshop/kurniky') selectCategory('kurniky')
    if (pathname === '/eshop/smesi') selectCategory('smesi')
    if (pathname === '/eshop/doplnky') selectCategory('doplnky')
  }, [selectCategory])

  return (
    <div className='flex flex-col gap-20 items-center mb-16'>
      <input
        type='text'
        placeholder='hledej'
        onChange={e => setQuery(e.target.value)}
        className='bg-zinc-200 p-1 border-2 border-zinc-400 w-full rounded-lg'
      />

      <ul className='flex flex-col self-start gap-2 w-full text-center'>
        <Link
          href='/eshop'
          onClick={() => selectCategory('vse')}
          className={`rounded-lg border-2 border-brown py-1 px-4 w-full ${
            selectedCategory === 'vse' && 'bg-brown text-white'
          }`}
        >
          Vše
        </Link>
        <Link
          href='/eshop/slepicky'
          onClick={() => selectCategory('slepicky')}
          className={`rounded-lg border-2 border-brown py-1 px-4 w-full ${
            selectedCategory === 'slepicky' && 'bg-brown text-white'
          }`}
        >
          Slepičky
        </Link>
        <Link
          href='/eshop/kurniky'
          onClick={() => selectCategory('kurniky')}
          className={`rounded-lg border-2 border-brown py-1 px-4 w-full ${
            selectedCategory === 'kurniky' && 'bg-brown text-white'
          }`}
        >
          Kurníky
        </Link>
        <Link
          href='/eshop/smesi'
          onClick={() => selectCategory('smesi')}
          className={`rounded-lg border-2 border-brown py-1 px-4 w-full ${
            selectedCategory === 'smesi' && 'bg-brown text-white'
          }`}
        >
          Směsi
        </Link>
        <Link
          href='/eshop/doplnky'
          onClick={() => selectCategory('doplnky')}
          className={`rounded-lg border-2 border-brown py-1 px-4 w-full ${
            selectedCategory === 'doplnky' && 'bg-brown text-white'
          }`}
        >
          Doplňky
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
