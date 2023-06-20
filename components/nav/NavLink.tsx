import Link from 'next/link'

interface NavLinkProps {
  label: string
  href: string
  isEshop?: boolean
  isTopOfPage: boolean
}

const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
  isEshop,
  isTopOfPage,
}) => {
  return (
    <li>
      <Link
        className={`hover:underline hover:underline-offset-4
      ${!isEshop && isTopOfPage && 'text-white'} 
      ${!isEshop && !isTopOfPage && 'text-brown'} 
      ${isEshop && isTopOfPage && 'text-black '}`}
        href={href}
      >
        {label}
      </Link>
    </li>
  )
}

export default NavLink
