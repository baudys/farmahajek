import Link from 'next/link'

interface NavLinkProps {
  label: string
  href: string
}

const NavLink: React.FC<NavLinkProps> = ({ label, href }) => {
  return (
    <li>
      <Link className='hover:underline hover:underline-offset-4' href={href}>
        {label}
      </Link>
    </li>
  )
}

export default NavLink
