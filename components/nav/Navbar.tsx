'use client'

import Link from 'next/link'
import Container from '@/components/Container'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import NavLink from './NavLink'

const Navbar = () => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed w-full py-5 transition ${
        isTopOfPage
          ? 'bg-transparent'
          : 'bg-green/70 backdrop-blur-xl drop-shadow'
      }`}
    >
      <Container>
        <div className='flex justify-between items-center'>
          <Link href='/' className='text-3xl font-bold text-white'>
            <h1>LOGO</h1>
          </Link>

          <ul
            className={`flex gap-3 text-lg uppercase font-medium ${
              isTopOfPage ? 'text-white' : 'text-brown'
            }`}
          >
            <NavLink href='/eshop' label='E-Shop' />
            <NavLink href='/informace' label='Informace' />
            <NavLink href='/kontakt' label='Kontakt' />
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
