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
        !isEshop && isTopOfPage && 'text-white hover:text-black hover:bg-white'
      } ${
        !isEshop && !isTopOfPage && 'text-brown hover:text-green hover:bg-brown'
      } ${
        isEshop && isTopOfPage && 'text-black hover:text-white hover:bg-black'
      } ${isEshop && !isTopOfPage && 'hover:text-green hover:bg-black'}`}
    >
      <Link href={href} target='_blank'>
        <Icon size={26} />
      </Link>
    </li>
  )
}

export default NavIcon
