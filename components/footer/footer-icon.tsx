import Link from 'next/link'
import { IconType } from 'react-icons'

interface NavIconProps {
  href: string
  icon: IconType
}

export const FooterIcon: React.FC<NavIconProps> = ({ href, icon: Icon }) => {
  return (
    <li
      className={`list-none rounded-full p-1.5 text-brown transition hover:bg-brown hover:text-green`}
    >
      <Link href={href} target='_blank'>
        <Icon size={26} />
      </Link>
    </li>
  )
}
