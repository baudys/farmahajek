'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { useCart } from '@/hooks/useCart'

const Navbar = () => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const pathname = usePathname()
  const isEshop = pathname.includes('eshop')

  const numOfItems = useCart(state => state.cartItems).length

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
      <DesktopNav
        isTopOfPage={isTopOfPage}
        isEshop={isEshop}
        numOfItems={numOfItems}
      />
      <MobileNav
        isTopOfPage={isTopOfPage}
        isEshop={isEshop}
        numOfItems={numOfItems}
      />
    </>
  )
}

export default Navbar
