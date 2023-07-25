'use client'

import { useState, useEffect } from 'react'
import Container from './Container'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { useLanguage } from '@/hooks/useLanguage'
import { timeline } from '@/database/timeline'
import Image from 'next/image'

interface CardProps {
  item: {
    titlecs: string
    titleen: string
    titlede: string
    textcs: string
    texten: string
    textde: string
    photo: string
  }
}

const Card: React.FC<CardProps> = ({ item }) => {
  const { language } = useLanguage(state => state)
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#BBD700',
        border: 'none',
        boxShadow: 'none',
      }}
      contentArrowStyle={{ borderRight: '7px solid #BBD700' }}
      iconStyle={{ background: '#BBD700' }}
    >
      <h1 className='text-2xl font-bold uppercase text-brown'>
        {language === 'cs' && <>{item.titlecs}</>}
        {language === 'en' && <>{item.titleen}</>}
        {language === 'de' && <>{item.titlede}</>}
      </h1>
      <p className='text-brown/80 !leading-5 !text-base'>
        {language === 'cs' && <>{item.textcs}</>}
        {language === 'en' && <>{item.texten}</>}
        {language === 'de' && <>{item.textde}</>}
      </p>
      <Image
        src={item.photo}
        className='mx-auto mt-4 max-h-52 lg:max-h-72'
        alt={item.titlecs}
        width={500}
        height={500}
      />
    </VerticalTimelineElement>
  )
}

const Timeline = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className='bg-brown' id='timeline'>
      <Container>
        <VerticalTimeline
          lineColor='#BBD700'
          className={`${
            !isLoading &&
            'before:content-none before:absolute before:top-0 before:h-full before:left-[18px] before:w-[4px] before:bg-green xl:before:left-1/2 xl:before:ml-[-2px] before:z-[1110]'
          }`}
        >
          {timeline.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </VerticalTimeline>
      </Container>
    </div>
  )
}

export default Timeline
