'use client'

import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface ExpandableNavLinkProps {
  label: string
  links: {
    label: string
    href: string
  }[]
  isTopOfPage: boolean
}

export const ExpandableNavLink = ({
  label,
  links,
  isTopOfPage,
}: ExpandableNavLinkProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onClick={() => setIsOpen(true)}
      onMouseOver={() => setIsOpen(true)}
      onMouseDown={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className='relative'
    >
      <p
        className={cn(
          'flex cursor-pointer items-center gap-1 transition duration-300',
          isTopOfPage ? 'text-white' : 'text-white lg:text-brown',
        )}
      >
        {label}
        <ChevronDown size={20} />
      </p>
      {isOpen && (
        <div className='absolute left-1/2 top-6 z-[9999] flex translate-x-[-50%] flex-col gap-2 rounded-md border border-zinc-300 bg-white p-4'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='whitespace-nowrap hover:underline hover:underline-offset-4'
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
