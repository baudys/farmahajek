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
        padding: 0,
        borderRadius: '20px 20px 0 0',
        height: '300px',
      }}
      contentArrowStyle={{ borderRight: '7px solid #BBD700' }}
      iconStyle={{ background: '#BBD700' }}
      className='relative h-[400px]'
    >
      <div className='bg-[url(/textures/grass.webp)] rounded-[20px] relative'>
        <div className='p-3 bg-green/70 rounded-t-[20px]'>
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
        </div>
        <div className='relative h-52 lg:h-72'>
          <Image
            src={item.photo}
            fill
            alt={item.titlecs}
            className='object-cover w-full'
          />
        </div>
      </div>
    </VerticalTimelineElement>
  )
}

const Timeline = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div
      className='bg-[url(/textures/soil.webp)] bg-cover relative'
      id='timeline'
    >
      <div className='absolute top-0 left-0 w-full h-full bg-brown/70' />
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
