'use client'

import { Title } from '@/components/title'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('@/components/map'), { ssr: false })

export const Franchise = () => {
  return (
    <section>
      <Title
        textCs='Jsme Vám blíž'
        textEn='We are closer to you'
        textDe='Wir sind näher bei Ihnen'
      />
      <Map />
    </section>
  )
}
