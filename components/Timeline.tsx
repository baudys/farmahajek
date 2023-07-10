'use client'

import React from 'react'
import Container from './Container'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { useLanguage } from '@/hooks/useLanguage'
import { timeline } from '@/database/timeline'

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
      <h1 className='font-bold text-brown uppercase text-2xl'>
        {language === 'cs' && <>{item.titlecs}</>}
        {language === 'en' && <>{item.titleen}</>}
        {language === 'de' && <>{item.titlede}</>}
      </h1>
      <p className='text-brown/80 !leading-5 !text-base'>
        {language === 'cs' && <>{item.textcs}</>}
        {language === 'en' && <>{item.texten}</>}
        {language === 'de' && <>{item.textde}</>}
      </p>
      <img
        className='mt-4 max-h-52 lg:max-h-72 w-auto mx-auto'
        src={item.photo}
      />
    </VerticalTimelineElement>
  )
}

const Timeline = () => {
  return (
    <div className='bg-brown' id='timeline'>
      <Container>
        <VerticalTimeline lineColor='#BBD700'>
          {timeline.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </VerticalTimeline>
      </Container>
    </div>
  )
}

export default Timeline
