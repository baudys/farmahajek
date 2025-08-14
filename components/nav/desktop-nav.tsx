'use client'

import Link from 'next/link'
import Container from '@/components/container'
import Image from 'next/image'
import { NavLink } from './nav-link'
import { NavIcon } from './nav-icon'
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { IoLogoTiktok } from 'react-icons/io5'
import { FaFacebook } from 'react-icons/fa'
import { useLanguage } from '@/hooks/useLanguage'
import { motion } from 'framer-motion'
import { LanguageSelector } from './language-selector'
import { ExpandableNavLink } from './expandable-nav-link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

interface DesktopNavProps {
  isTopOfPage: boolean
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ isTopOfPage }) => {
  const pathname = usePathname()
  const { language } = useLanguage((state) => state)

  return (
    <div
      className={cn(
        'fixed top-0 z-[1111] hidden h-20 w-full whitespace-nowrap py-4 transition lg:block',
        isTopOfPage
          ? 'bg-transparent'
          : 'bg-green/70 drop-shadow backdrop-blur-xl',
        isTopOfPage && pathname !== '/' && 'bg-black',
      )}
    >
      <Container>
        <div className='grid grid-cols-3 items-center justify-between'>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Link href='/'>
              <Image
                src={`${isTopOfPage ? '/logo/3.webp' : '/logo/2.webp'}`}
                width={130}
                height={130}
                alt='logo'
              />
            </Link>
          </motion.div>

          <motion.ul
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='flex gap-3 text-lg font-medium uppercase xl:place-content-start 2xl:place-content-center'
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

          <motion.ul
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className='flex items-center gap-3 justify-self-end font-medium'
          >
            <motion.li
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className='mr-6 cursor-pointer'
            >
              <LanguageSelector isTopOfPage={isTopOfPage} />
            </motion.li>
            <NavLink
              href='https://eshop-farmahajek.cz'
              label='E-Shop'
              isTopOfPage={isTopOfPage}
            />
            <NavLink href='/blog' label='Blog' isTopOfPage={isTopOfPage} />
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
            />
            <ExpandableNavLink
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
                          label: 'Strongman 2025',
                          href: '/galerie/strongman-2025',
                        },
                      ]
              }
              isTopOfPage={isTopOfPage}
            />
          </motion.ul>
        </div>
      </Container>
    </div>
  )
}
