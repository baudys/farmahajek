import Link from 'next/link'
import Container from '@/components/Container'
import Image from 'next/image'
import NavLink from './NavLink'
import NavIcon from './NavIcon'
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { IoLogoTiktok } from 'react-icons/io5'
import { FaFacebook, FaShoppingCart } from 'react-icons/fa'

interface DesktopNavProps {
  isTopOfPage: boolean
}

const DesktopNav: React.FC<DesktopNavProps> = ({ isTopOfPage }) => {
  return (
    <div
      className={`hidden lg:block fixed w-full py-4 transition z-10 
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

          <ul className='flex gap-3 text-lg uppercase font-medium items-center'>
            <NavLink
              href='https://eshop-farmahajek.vercel.app'
              label='E-Shop'
              isTopOfPage={isTopOfPage}
            />
            <NavLink href='/sluzby' label='Služby' isTopOfPage={isTopOfPage} />
            <NavLink
              href='/kontakt'
              label='Kontakt'
              isTopOfPage={isTopOfPage}
            />
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default DesktopNav
