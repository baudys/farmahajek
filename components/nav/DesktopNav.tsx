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

interface DesktopNavProps {
  isTopOfPage: boolean
}

const DesktopNav: React.FC<DesktopNavProps> = ({ isTopOfPage }) => {
  const { language, setLanguage } = useLanguage(state => state)

  const handleChange = (e: any) => {
    setLanguage(e.target.value)
  }

  return (
    <div
      className={`hidden xl:block fixed w-full py-4 transition z-10 whitespace-nowrap 
      ${
        isTopOfPage
          ? 'bg-transparent'
          : 'bg-green/70 backdrop-blur-xl drop-shadow'
      }`}
    >
      <Container>
        <div className='grid grid-cols-3 justify-between items-center'>
          <Link href='/'>
            <Image
              src={`${isTopOfPage ? '/logo/3.png' : '/logo/2.png'}`}
              width={130}
              height={130}
              alt='logo'
            />
          </Link>

          <ul className='flex gap-3 text-lg uppercase font-medium'>
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

          <ul className='flex gap-3 text-lg uppercase font-medium items-center justify-self-end'>
            <li className='mr-6 cursor-pointer'>
              <select
                value={language}
                onChange={handleChange}
                className={`bg-transparent text-2xl cursor-pointer ${
                  isTopOfPage ? 'text-white' : 'text-brown'
                }`}
              >
                <option value='cs' className='cursor-pointer'>
                  🇨🇿
                </option>
                <option value='en' className='cursor-pointer'>
                  🇬🇧
                </option>
                <option value='de' className='cursor-pointer'>
                  🇩🇪
                </option>
              </select>
            </li>
            <NavLink
              href='https://eshop-farmahajek.vercel.app'
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
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default DesktopNav
