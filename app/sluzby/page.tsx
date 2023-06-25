'use client'

import Container from '@/components/Container'
import { useState } from 'react'

const SluzbyPage = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <div className='py-28 bg-brown'>
      <Container></Container>
    </div>
  )
}

export default SluzbyPage
