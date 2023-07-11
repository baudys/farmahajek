'use client'

import Companies from '@/components/Companies'
import Hero from '@/components/Hero'
import Map from '@/components/Map'
import Timeline from '@/components/Timeline'

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <Timeline />
      <Companies />
      <Map />
    </div>
  )
}
