'use client'

import Link from 'next/link'
import Container from '@/components/Container'
import Image from 'next/image'
import NavLink from './NavLink'
import NavIcon from './NavIcon'
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { IoLogoTiktok } from 'react-icons/io5'
import { FaFacebook } from 'react-icons/fa'
import { useLanguage } from '@/hooks/useLanguage'
import { motion } from 'framer-motion'
import LanguageSelector from './LanguageSelector'

interface DesktopNavProps {
  isTopOfPage: boolean
}

const DesktopNav: React.FC<DesktopNavProps> = ({ isTopOfPage }) => {
  const { language } = useLanguage(state => state)

  return (
    <div
      className={`hidden xl:block fixed w-full py-4 transition z-[1111] whitespace-nowrap 
      ${
        isTopOfPage
          ? 'bg-transparent'
          : 'bg-green/70 backdrop-blur-xl drop-shadow'
      }`}
    >
      <Container>
        <div className='grid items-center justify-between grid-cols-3'>
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
            className='flex items-center gap-3 text-lg font-medium uppercase justify-self-end'
          >
            <motion.li
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className='mr-6 cursor-pointer'
            >
              <LanguageSelector />
            </motion.li>
            <NavLink
              href='https://eshop-farmahajek.cz'
              label='E-Shop'
              isTopOfPage={isTopOfPage}
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
            />
            <NavLink
              href='/strongman'
              label={
                language === 'cs'
                  ? 'Strongman'
                  : language === 'en'
                  ? 'Strongman'
                  : language === 'de'
                  ? 'Strongman'
                  : ''
              }
              isTopOfPage={isTopOfPage}
            />
          </motion.ul>
        </div>
      </Container>
    </div>
  )
}

export default DesktopNav
