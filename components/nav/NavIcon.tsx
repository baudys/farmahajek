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
      className={`rounded-full p-1.5 transition ${
        isTopOfPage
          ? 'hover:text-black hover:bg-white'
          : 'hover:text-green hover:bg-brown'
      }`}
    >
      <Link href={href}>
        <Icon size={26} />
      </Link>
    </li>
  )
}

export default NavIcon
