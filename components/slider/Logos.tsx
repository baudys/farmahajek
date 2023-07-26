import Image from 'next/image'
import React from 'react'
import SliderContainer, { SliderItem } from './Slider'

const Logos: React.FC = () => (
  <SliderContainer
    className='flex items-center'
    contentWidth={1290}
    initialOffsetX={0}
  >
    <SliderItem width={300} href='https://krmiva-ecofeed.cz/'>
      <Image
        src='/obchody/ecofeed.png'
        width={150}
        height={150}
        objectFit='contain'
        alt='Shopify'
      />
    </SliderItem>
    <SliderItem width={300} href='https://www.tespra.cz/'>
      <h1 className='text-base font-bold xl:text-2xl'>TESPRA Kdyně</h1>
    </SliderItem>
    <SliderItem width={300} href='https://www.krmnesmesikvidera.cz/'>
      <Image
        src='/obchody/kvidera.png'
        width={150}
        height={150}
        objectFit='contain'
        alt='Coinbase'
      />
    </SliderItem>
    <SliderItem
      width={500}
      href='https://rejstrik-firem.kurzy.cz/zivnostnik/a3GTo5mdk6U='
    >
      <h1 className='text-base font-bold xl:text-2xl'>
        Jitka Šilhánková – přebytky Kdyně
      </h1>
    </SliderItem>
    <SliderItem width={300} href='https://www.farmavicenice.cz/'>
      <Image
        src='/obchody/vicenice.png'
        width={150}
        height={150}
        objectFit='contain'
        alt='Rainbow'
      />
    </SliderItem>
    <SliderItem
      width={500}
      href='https://www.firmy.cz/detail/2031327-lubos-ourada-domazlice-mesto.html'
    >
      <h1 className='text-base font-bold xl:text-2xl'>
        Luboš Ouřada Domažlice
      </h1>
    </SliderItem>
    <SliderItem width={300} href='https://zodmrakov.cz/'>
      <Image
        src='/obchody/zod-mrakov.png'
        width={100}
        height={100}
        objectFit='contain'
        alt='Redbull'
      />
    </SliderItem>
    <SliderItem width={300} href='http://farmarsketrhy.strakonice.eu/'>
      <h1 className='text-base font-bold xl:text-2xl'>Trhy ve Strakonicích</h1>
    </SliderItem>
  </SliderContainer>
)

export default Logos
