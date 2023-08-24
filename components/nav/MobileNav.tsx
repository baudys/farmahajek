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
import { useLanguage } from '@/hooks/useLanguage'
import { motion } from 'framer-motion'
import LanguageSelector from './LanguageSelector'

interface MobileNavProps {
  isTopOfPage: boolean
}

const MobileNav: React.FC<MobileNavProps> = ({ isTopOfPage }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { language } = useLanguage(state => state)

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
      className={`block xl:hidden fixed w-full py-3 transition z-[1111] 
      ${
        isTopOfPage
          ? 'bg-transparent'
          : 'bg-green/70 backdrop-blur-xl drop-shadow'
      }`}
    >
      <Container>
        <div className='flex items-center justify-between'>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link href='/'>
              <Image
                src={`${isTopOfPage ? '/logo/3.webp' : '/logo/2.webp'}`}
                width={115}
                height={115}
                alt='logo'
              />
            </Link>
          </motion.div>

          <div className='flex items-center'>
            <div className='mr-5'>
              <LanguageSelector />
            </div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <IoMenu
                onClick={handleOpen}
                size={35}
                className={`${isTopOfPage ? 'text-white' : 'text-brown'}`}
              />
            </motion.div>
          </div>

          {isOpen && (
            <div className='absolute top-0 left-0 min-w-[100vw] min-h-[100vh] bg-brown'>
              <motion.div
                initial={{ x: 50, y: -50, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
              >
                <AiOutlineClose
                  className='absolute text-white right-3 top-3'
                  onClick={handleClose}
                  size={40}
                />
              </motion.div>

              <motion.ul
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className='grid gap-4 text-2xl font-medium text-center uppercase mt-52'
              >
                <NavLink
                  href='/'
                  label={
                    language === 'cs'
                      ? 'Domů'
                      : language === 'en'
                      ? 'Home'
                      : language === 'de'
                      ? 'Startseite'
                      : ''
                  }
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
                  label={
                    language === 'cs'
                      ? 'Služby'
                      : language === 'en'
                      ? 'Services'
                      : language === 'de'
                      ? 'Dienstleistungen'
                      : ''
                  }
                  isTopOfPage={isTopOfPage}
                  handleClick={handleClick}
                />
                <NavLink
                  href='/kontakt'
                  label={
                    language === 'cs'
                      ? 'Kontakt'
                      : language === 'en'
                      ? 'Contact'
                      : language === 'de'
                      ? 'Kontakt'
                      : ''
                  }
                  isTopOfPage={isTopOfPage}
                  handleClick={handleClick}
                />
                <NavLink
                  href='/galerie'
                  label={
                    language === 'cs'
                      ? 'Galerie'
                      : language === 'en'
                      ? 'Gallery'
                      : language === 'de'
                      ? 'Gallerie'
                      : ''
                  }
                  isTopOfPage={isTopOfPage}
                  handleClick={handleClick}
                />
              </motion.ul>

              <motion.ul
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: '-50%', opacity: 1 }}
                className='absolute bottom-40 left-[50%] translate-x-[-50%] flex gap-2 text-lg uppercase font-medium'
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
                <NavIcon
                  href='https://www.youtube.com/@miloslavpolak4880'
                  icon={AiFillYoutube}
                  isTopOfPage={isTopOfPage}
                />
              </motion.ul>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default MobileNav
