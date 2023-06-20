'use client'

import Link from 'next/link'
import Container from '@/components/Container'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import NavIcon from './NavIcon'
import { AiOutlineInstagram } from 'react-icons/ai'
import { IoLogoTiktok } from 'react-icons/io5'
import { FaFacebook } from 'react-icons/fa'

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
            <NavIcon
              href='https://www.instagram.com/farmahajek/'
              icon={AiOutlineInstagram}
              isTopOfPage={isTopOfPage}
            />
            <NavIcon
              href='https://www.tiktok.com/@farmahajek'
              icon={IoLogoTiktok}
              isTopOfPage={isTopOfPage}
            />
            <NavIcon
              href='https://www.facebook.com/people/Farma-H%C3%A1jek/100092479713291/'
              icon={FaFacebook}
              isTopOfPage={isTopOfPage}
            />
          </ul>

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
