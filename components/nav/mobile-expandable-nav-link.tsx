'use client'

import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface MobileExpandableNavItemProps {
  label: string
  links: {
    label: string
    href: string
  }[]
  isTopOfPage: boolean
  handleClick?: () => void
}

export const MobileExpandableNavItem = ({
  label,
  links,
  isTopOfPage,
  handleClick,
}: MobileExpandableNavItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (isOpen && ref.current && !ref?.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isOpen])

  return (
    <div onClick={() => setIsOpen((prev) => !prev)} className='relative'>
      <p
        className={cn(
          'flex cursor-pointer items-center justify-center gap-2 transition',
          isTopOfPage ? 'text-white' : 'text-white lg:text-brown',
        )}
      >
        {label}
        <ChevronDown size={20} />
      </p>
      {isOpen && (
        <div
          ref={ref}
          className='absolute left-1/2 top-9 z-40 flex h-min translate-x-[-50%] flex-col gap-2 rounded-md border border-zinc-300 bg-white p-4'
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleClick}
              className='whitespace-nowrap text-2xl hover:underline hover:underline-offset-4'
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
