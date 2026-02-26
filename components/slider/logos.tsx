import Image from 'next/image'
import React from 'react'
import { SliderContainer, SliderItem } from './slider'

export const Logos: React.FC = () => (
  <SliderContainer
    className='flex items-center'
    contentWidth={1290}
    initialOffsetX={0}
  >
    <SliderItem width={200} href='https://krmiva-ecofeed.cz/'>
      <Image
        src='/obchody/ecofeed.webp'
        width={150}
        height={150}
        alt='Ecofeed'
      />
    </SliderItem>
    <SliderItem width={220} href='https://www.tespra.cz/'>
      <h3 className='text-base font-bold xl:text-2xl'>TESPRA Kdyně</h3>
    </SliderItem>
    <SliderItem width={200} href='https://www.krmnesmesikvidera.cz/'>
      <Image
        src='/obchody/kvidera.webp'
        width={150}
        height={150}
        alt='Krmné směsi Kvídera'
      />
    </SliderItem>
    <SliderItem
      width={500}
      href='https://rejstrik-firem.kurzy.cz/zivnostnik/a3GTo5mdk6U='
    >
      <h3 className='text-base font-bold xl:text-2xl'>
        Jitka Šilhánková – přebytky Kdyně
      </h3>
    </SliderItem>
    <SliderItem width={200} href='https://www.farmavicenice.cz/'>
      <Image
        src='/obchody/vicenice.webp'
        width={150}
        height={150}
        alt='Farma Vícenice'
      />
    </SliderItem>
    <SliderItem
      width={400}
      href='https://www.firmy.cz/detail/2031327-lubos-ourada-domazlice-mesto.html'
    >
      <h3 className='text-base font-bold xl:text-2xl'>
        Luboš Ouřada Domažlice
      </h3>
    </SliderItem>
    <SliderItem width={150} href='https://zodmrakov.cz/'>
      <Image
        src='/obchody/zod-mrakov.webp'
        width={100}
        height={100}
        alt='ZOD Mrákov'
      />
    </SliderItem>
    <SliderItem width={300} href='http://farmarsketrhy.strakonice.eu/'>
      <h3 className='text-base font-bold xl:text-2xl'>
        Trhy ve Strakonicích
      </h3>
    </SliderItem>
  </SliderContainer>
)
