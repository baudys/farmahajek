import Link from 'next/link'
import { IconType } from 'react-icons'

interface NavIconProps {
  href: string
  icon: IconType
}

const FooterIcon: React.FC<NavIconProps> = ({ href, icon: Icon }) => {
  return (
    <li className={`text-brown rounded-full p-1.5 transition list-none`}>
      <Link href={href} target='_blank'>
        <Icon size={26} />
      </Link>
    </li>
  )
}

export default FooterIcon
