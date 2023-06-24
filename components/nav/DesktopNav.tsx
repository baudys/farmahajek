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
  isEshop: boolean
  numOfItems: number
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  isTopOfPage,
  isEshop,
  numOfItems,
}) => {
  return (
    <div
      className={`hidden lg:block fixed w-full py-5 transition z-10 
      ${
        isTopOfPage
          ? 'bg-transparent'
          : 'bg-green/70 backdrop-blur-xl drop-shadow'
      }`}
    >
      <Container>
        <div className='flex justify-between items-center'>
          <Link href='/'>
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
            <NavIcon
              href='https://www.youtube.com/@miloslavpolak4880'
              icon={AiFillYoutube}
              isTopOfPage={isTopOfPage}
              isEshop={isEshop}
            />
          </ul>

          <ul className='flex gap-3 text-lg uppercase font-medium items-center'>
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
            {isEshop && (
              <Link
                href='/eshop/kosik/'
                className={`ml-4 rounded-full p-2 relative overflow-visible
                ${isTopOfPage ? 'bg-green' : 'bg-brown'}`}
              >
                <FaShoppingCart
                  size={24}
                  className={`${isTopOfPage ? 'fill-brown' : 'fill-green'}`}
                />
                {numOfItems >= 1 && (
                  <div className='absolute flex items-center justify-center -top-2 -right-2 overflow-visible bg-red-500 rounded-full p-1 h-6 w-6'>
                    <p className='text-sm'>{numOfItems}</p>
                  </div>
                )}
              </Link>
            )}
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default DesktopNav
