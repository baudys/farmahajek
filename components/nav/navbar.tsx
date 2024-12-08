'use client'

import { useEffect, useState } from 'react'
import { DesktopNav } from './desktop-nav'
import { MobileNav } from './mobile-nav'

export const Navbar = () => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <DesktopNav isTopOfPage={isTopOfPage} />
      <MobileNav isTopOfPage={isTopOfPage} />
    </>
  )
}
