'use client'

import React from 'react'
import Container from './Container'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const timeline = [
  {
    title: 'Narození kuřátek v Líhni Studenec',
    text: 'Kuřátka si bereme hned první den narození.',
    photo: '/timeline/1.jpg',
  },
  {
    title: 'Výkrm kuřic u nás na farmě',
    text: 'Kuřice dostávají vyváženou stravu ve formě krmných směsí pocházející z České republiky.',
    photo: '/timeline/3.jpg',
  },
  {
    title: 'Chov je pod stálým veterinárním dohledem',
    text: 'Slepičkám se nemůže nic stát a vyrůstají v dobrém prostředí',
    photo: '/timeline/2.jpg',
  },
  {
    title: 'Chov na volné podestýlce',
    text: 'Kuřice jsou vhodné pro domácí chov na dvorech a zahradách (jsou zvyklé na pohyb)',
    photo: '/timeline/5.jpg',
  },
  {
    title: '100 % české',
    text: 'Kuřátka pochází z české líhně, vyrůstají u nás na české rodinné farmě a dostávají krmení z Česka',
    photo: '/timeline/6.png',
  },
]

interface CardProps {
  item: {
    title: string
    text: string
    photo: string
  }
}

const Card: React.FC<CardProps> = ({ item }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#BBD700', border: 'none', boxShadow: 'none' }}
    contentArrowStyle={{ borderRight: '7px solid #3D1A04' }}
    iconStyle={{ background: '#BBD700' }}
  >
    <h1 className='font-bold text-brown uppercase text-2xl'>{item.title}</h1>
    <p className='text-brown/80 !leading-5 !text-base'>{item.text}</p>
    <img
      className='mt-4 max-h-52 lg:max-h-72 w-auto mx-auto'
      src={item.photo}
    />
  </VerticalTimelineElement>
)

const Hen = () => {
  return (
    <div className='bg-brown pt-28'>
      <Container>
        <h2 className='text-zinc-300 font-semibold text-4xl text-center mb-4'>
          Jistě by vás zajímalo jaká byla životní cesta Vaší budoucí slepičky
          {/* Chov je prováděn od jednodenních kuřátek, které nakupujeme v Líhni Studenec, až po finální výkrm kuřic.
Kuřice dostávají vyváženou stravu ve formě krmných směsí.
Chov je pod stálým veterinárním dohledem. 
Chov je prováděn na volné podestýlce, tudíž kuřice jsou vhodné pro domácí chov na dvorech a zahradách (jsou zvyklé na pohyb).


*/}
        </h2>
        <VerticalTimeline lineColor='#BBD700'>
          {timeline.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </VerticalTimeline>
      </Container>
    </div>
  )
}

export default Hen
