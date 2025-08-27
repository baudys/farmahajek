'use client'

import Link from 'next/link'
import Container from '@/components/container'
import Image from 'next/image'
import { NavLink } from './nav-link'
import { NavIcon } from './nav-icon'
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
import { LanguageSelector } from './language-selector'
import { MobileExpandableNavItem } from './mobile-expandable-nav-link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  isTopOfPage: boolean
}

export const MobileNav: React.FC<MobileNavProps> = ({ isTopOfPage }) => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { language } = useLanguage((state) => state)

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
      className={cn(
        'fixed z-[1111] block w-full py-3 transition lg:hidden',
        isTopOfPage
          ? 'bg-transparent'
          : 'bg-green/70 drop-shadow backdrop-blur-xl',
        isTopOfPage && pathname !== '/' && 'bg-black',
      )}
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
              <LanguageSelector isTopOfPage={isTopOfPage} />
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
            <div className='absolute left-0 top-0 min-h-[100vh] min-w-[100vw] bg-brown'>
              <motion.div
                initial={{ x: 50, y: -50, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
              >
                <AiOutlineClose
                  className='absolute right-3 top-3 text-white'
                  onClick={handleClose}
                  size={40}
                />
              </motion.div>

              <motion.ul
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className='mt-52 grid gap-4 text-center text-2xl font-medium uppercase'
              >
                <NavLink
                  href='https://eshop-farmahajek.cz'
                  label='E-Shop'
                  isTopOfPage={isTopOfPage}
                  handleClick={handleClick}
                />
                <NavLink
                  href='/blog'
                  label='Blog'
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
                <MobileExpandableNavItem
                  label={
                    language === 'cs'
                      ? 'Galerie'
                      : language === 'en'
                        ? 'Gallery'
                        : language === 'de'
                          ? 'Gallerie'
                          : ''
                  }
                  links={
                    language === 'cs'
                      ? [
                          {
                            label: 'Farma',
                            href: '/galerie/farma',
                          },
                          {
                            label: 'Strongman 2023',
                            href: '/galerie/strongman-2023',
                          },
                          {
                            label: 'Strongman 2024',
                            href: '/galerie/strongman-2024',
                          },
                          {
                            label: 'Strongman 2025',
                            href: '/galerie/strongman-2025',
                          },
                        ]
                      : language === 'en'
                        ? [
                            {
                              label: 'Farm',
                              href: '/galerie/farma',
                            },
                            {
                              label: 'Strongman 2023',
                              href: '/galerie/strongman-2023',
                            },
                            {
                              label: 'Strongman 2024',
                              href: '/galerie/strongman-2024',
                            },
                            {
                              label: 'Strongman 2025',
                              href: '/galerie/strongman-2025',
                            },
                          ]
                        : [
                            {
                              label: 'Farm',
                              href: '/galerie/farma',
                            },
                            {
                              label: 'Strongman 2023',
                              href: '/galerie/strongman-2023',
                            },
                            {
                              label: 'Strongman 2024',
                              href: '/galerie/strongman-2024',
                            },
                            {
                              label: 'Strongman 2025',
                              href: '/galerie/strongman-2025',
                            },
                          ]
                  }
                  isTopOfPage={isTopOfPage}
                  handleClick={handleClick}
                />
              </motion.ul>

              <motion.ul
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: '-50%', opacity: 1 }}
                className='absolute bottom-40 left-[50%] flex translate-x-[-50%] gap-2 text-lg font-medium uppercase'
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
