'use client'

import { useState, useEffect } from 'react'
import Container from '../../components/container'
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
  const { language } = useLanguage((state) => state)

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
      <div className='relative rounded-[20px] bg-[url(/textures/grass.webp)]'>
        <div className='rounded-t-[20px] bg-green/80 p-3'>
          <h1 className='text-2xl font-bold uppercase text-brown'>
            {language === 'cs' && <>{item.titlecs}</>}
            {language === 'en' && <>{item.titleen}</>}
            {language === 'de' && <>{item.titlede}</>}
          </h1>
          <p className='!text-base !leading-5 text-brown/80'>
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
            className='w-full object-cover'
          />
        </div>
      </div>
    </VerticalTimelineElement>
  )
}

export const Timeline = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div
      className='relative bg-[url(/textures/soil.webp)] bg-cover'
      id='timeline'
    >
      <div className='absolute left-0 top-0 h-full w-full bg-brown/70' />
      <Container>
        <VerticalTimeline
          lineColor='#BBD700'
          className={`${
            !isLoading &&
            'before:absolute before:left-[18px] before:top-0 before:z-[1110] before:h-full before:w-[4px] before:bg-green before:content-none xl:before:left-1/2 xl:before:ml-[-2px]'
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
