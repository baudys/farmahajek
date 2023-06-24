import Link from 'next/link'

interface NavLinkProps {
  label: string
  href: string
  isEshop?: boolean
  isTopOfPage: boolean
  handleClick?: () => void
}

const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
  isEshop,
  isTopOfPage,
  handleClick,
}) => {
  return (
    <li>
      <Link
        className={`hover:underline hover:underline-offset-4
      ${!isEshop && isTopOfPage && 'text-white'} 
      ${!isEshop && !isTopOfPage && 'text-white lg:text-brown'} 
      ${isEshop && 'text-white lg:text-brown '}`}
        href={href}
        onClick={handleClick}
      >
        {label}
      </Link>
    </li>
  )
}

export default NavLink
