import Link from 'next/link'
import { IconType } from 'react-icons'

interface NavIconProps {
  href: string
  icon: IconType
  isTopOfPage: boolean
}

export const NavIcon: React.FC<NavIconProps> = ({
  href,
  icon: Icon,
  isTopOfPage,
}) => {
  return (
    <li
      className={`rounded-full p-1.5 text-green transition duration-300 ${
        isTopOfPage
          ? 'hover:bg-green hover:text-brown lg:text-white lg:hover:bg-white lg:hover:text-black'
          : 'hover:bg-green hover:text-brown lg:text-brown lg:hover:bg-brown lg:hover:text-green'
      } `}
    >
      <Link href={href} target='_blank'>
        <Icon size={26} />
      </Link>
    </li>
  )
}
