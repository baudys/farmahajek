import Link from 'next/link'
import { IconType } from 'react-icons'

interface NavIconProps {
  href: string
  icon: IconType
  isTopOfPage: boolean
}

const NavIcon: React.FC<NavIconProps> = ({ href, icon: Icon, isTopOfPage }) => {
  return (
    <li
      className={`text-green rounded-full p-1.5 transition duration-300 ${
        isTopOfPage
          ? 'lg:text-white lg:hover:text-black hover:text-brown hover:bg-green lg:hover:bg-white'
          : 'lg:text-brown hover:text-brown hover:bg-green lg:hover:text-green lg:hover:bg-brown'
      } 
      `}
    >
      <Link href={href} target='_blank'>
        <Icon size={26} />
      </Link>
    </li>
  )
}

export default NavIcon
