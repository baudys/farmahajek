'use client'

import Companies from '@/components/Companies'
import Hero from '@/components/Hero'
import { News } from '@/components/News'
import Timeline from '@/components/Timeline'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('@/components/Map'), { ssr: false })

export default function Home() {
  return (
    <div>
      <Hero />
      <News />
      <Timeline />
      <Companies />
      <Map />
    </div>
  )
}
