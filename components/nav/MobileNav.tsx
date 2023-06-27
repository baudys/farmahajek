'use client'

import Link from 'next/link'
import Container from '@/components/Container'
import Image from 'next/image'
import NavLink from './NavLink'
import NavIcon from './NavIcon'
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineClose,
} from 'react-icons/ai'
import { IoLogoTiktok, IoMenu } from 'react-icons/io5'
import { FaFacebook } from 'react-icons/fa'
import { useState } from 'react'

interface MobileNavProps {
  isTopOfPage: boolean
}

const MobileNav: React.FC<MobileNavProps> = ({ isTopOfPage }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleClick = () => {
    setIsOpen(false)
  }

  return (
    <div
      className={`block lg:hidden fixed w-full py-3 transition z-10 
      ${
        isTopOfPage
          ? 'bg-transparent'
          : 'bg-green/70 backdrop-blur-xl drop-shadow'
      }`}
    >
      <Container>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <Image
              src={`${isTopOfPage ? '/logo/3.png' : '/logo/2.png'}`}
              width={115}
              height={115}
              alt='logo'
            />
          </Link>

          <div className='flex items-center'>
            <IoMenu
              onClick={handleOpen}
              size={35}
              className={`${isTopOfPage ? 'text-white' : 'text-brown'}`}
            />
          </div>

          {isOpen && (
            <div className='absolute top-0 left-0 min-w-[100vw] min-h-[100vh] bg-brown'>
              <AiOutlineClose
                className='text-white absolute right-3 top-3'
                onClick={handleClose}
                size={40}
              />

              <ul className='grid gap-4 text-2xl uppercase font-medium mt-52 text-center'>
                <NavLink
                  href='/'
                  label='Domů'
                  isTopOfPage={isTopOfPage}
                  handleClick={handleClick}
                />
                <NavLink
                  href='/eshop'
                  label='E-Shop'
                  isTopOfPage={isTopOfPage}
                  handleClick={handleClick}
                />
                <NavLink
                  href='/sluzby'
                  label='Služby'
                  isTopOfPage={isTopOfPage}
                  handleClick={handleClick}
                />
                <NavLink
                  href='/kontakt'
                  label='Kontakt'
                  isTopOfPage={isTopOfPage}
                  handleClick={handleClick}
                />
              </ul>

              <ul className='absolute bottom-40 left-[50%] translate-x-[-50%] flex  gap-2 text-lg uppercase font-medium'>
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
                <NavIcon
                  href='https://www.youtube.com/@miloslavpolak4880'
                  icon={AiFillYoutube}
                  isTopOfPage={isTopOfPage}
                />
              </ul>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default MobileNav
