import Link from 'next/link'

interface NavLinkProps {
  label: string
  href: string
  isTopOfPage: boolean
  handleClick?: () => void
}

const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
  isTopOfPage,
  handleClick,
}) => {
  return (
    <li>
      <Link
        className={`hover:underline hover:underline-offset-4
      ${isTopOfPage ? 'text-white' : 'text-white lg:text-brown'}`}
        href={href}
        onClick={handleClick}
      >
        {label}
      </Link>
    </li>
  )
}

export default NavLink
