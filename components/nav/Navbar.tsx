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

interface NavbarProps {
  isEshop?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ isEshop }) => {
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
          <Link
            href='/'
            className={`text-3xl font-bold ${
              isEshop ? 'text-black' : 'text-white'
            }`}
          >
            <Image src='/logo.png' width={40} height={40} alt='logo' />
          </Link>

          <ul className='flex gap-3 text-lg uppercase font-medium'>
            <NavIcon
              href='https://www.instagram.com/farmahajek/'
              icon={AiOutlineInstagram}
              isTopOfPage={isTopOfPage}
              isEshop={isEshop}
            />
            <NavIcon
              href='https://www.tiktok.com/@farmahajek'
              icon={IoLogoTiktok}
              isTopOfPage={isTopOfPage}
              isEshop={isEshop}
            />
            <NavIcon
              href='https://www.facebook.com/people/Farma-H%C3%A1jek/100092479713291/'
              icon={FaFacebook}
              isTopOfPage={isTopOfPage}
              isEshop={isEshop}
            />
          </ul>

          <ul className='flex gap-3 text-lg uppercase font-medium'>
            <NavLink
              href='/eshop'
              label='E-Shop'
              isTopOfPage={isTopOfPage}
              isEshop={isEshop}
            />
            <NavLink
              href='/informace'
              label='Informace'
              isTopOfPage={isTopOfPage}
              isEshop={isEshop}
            />
            <NavLink
              href='/kontakt'
              label='Kontakt'
              isTopOfPage={isTopOfPage}
              isEshop={isEshop}
            />
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
