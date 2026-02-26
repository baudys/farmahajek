import { cn } from '@/lib/utils'
import { Link } from '@/i18n/navigation'

interface NavLinkProps {
  label: string
  href: string
  isTopOfPage: boolean
  handleClick?: () => void
  prefetch?: boolean
}

export const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
  isTopOfPage,
  handleClick,
  prefetch,
}) => {
  const linkPrefetch = href.startsWith('/') ? prefetch : undefined

  return (
    <li>
      <Link
        className={cn(
          'transition duration-300 hover:underline hover:underline-offset-4',
          isTopOfPage ? 'text-white' : 'text-white lg:text-brown',
        )}
        href={href}
        onClick={handleClick}
        prefetch={linkPrefetch}
      >
        {label}
      </Link>
    </li>
  )
}
