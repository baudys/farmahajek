import Link from 'next/link'
import { IconType } from 'react-icons'

interface NavIconProps {
  href: string
  icon: IconType
  isTopOfPage: boolean
  isEshop?: boolean
}

const NavIcon: React.FC<NavIconProps> = ({
  href,
  icon: Icon,
  isTopOfPage,
  isEshop,
}) => {
  return (
    <li
      className={`rounded-full p-1.5 transition ${
        !isEshop &&
        isTopOfPage &&
        'text-green lg:text-white lg:hover:text-black hover:text-brown hover:bg-green lg:hover:bg-white'
      } ${
        !isEshop &&
        !isTopOfPage &&
        'text-green lg:text-brown hover:text-brown hover:bg-green lg:hover:text-green lg:hover:bg-brown'
      } ${
        isEshop &&
        isTopOfPage &&
        'text-green lg:text-brown hover:text-brown hover:bg-green lg:hover:text-white lg:hover:bg-brown'
      } ${
        isEshop &&
        !isTopOfPage &&
        'text-green lg:text-brown hover:text-brown hover:bg-green lg:hover:text-green lg:hover:bg-brown'
      }`}
    >
      <Link href={href} target='_blank'>
        <Icon size={26} />
      </Link>
    </li>
  )
}

export default NavIcon
