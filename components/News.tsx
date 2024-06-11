'use client'

import { useLanguage } from '@/hooks/useLanguage'
import Container from './Container'
import { InstagramEmbed } from 'react-social-media-embed'

export const News = () => {
  const { language } = useLanguage()

  return (
    <Container styles='my-10 lg:my-20'>
      <h2 className='uppercase font-bold text-3xl md:text-4xl lg:text-5xl text-center py-2 mb-6 lg:mb-12'>
        {language === 'cs' && 'co se děje na farmě'}
        {language === 'en' && "what's happening on the farm"}
        {language === 'de' && 'was auf dem Bauernhof passiert'}
      </h2>

      <div className='flex justify-center items-center gap-x-10 gap-y-10 flex-wrap'>
        <InstagramEmbed url='https://www.instagram.com/reel/C7yqHx7smLV/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==' />
        <InstagramEmbed url='https://www.instagram.com/p/C7bJT77Mls0/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==' />
        <InstagramEmbed url='https://www.instagram.com/reel/C7MzgKqMEb0/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==' />
      </div>

      {/* <div className='grid grid-cols-2 gap-20 lg:gap-10'>
        <div className='relative h-[500px] w-full overflow-hidden'>
          <img
            src='https://i.imgur.com/POrsDQ7.png'
            alt='image'
            className='absolute bottom-0'
          />
        </div>

        <div className='flex flex-col justify-between'>
          <div>
            <h2 className='uppercase text-xl md:text-2xl lg:text-3xl mb-2'>
              Strongman #3
            </h2>
            <p className='text-zinc-700'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
              error vero perspiciatis rem, facere rerum voluptas officiis velit
              sapiente maxime exercitationem iure nemo commodi explicabo sequi!
              Nobis repellat perspiciatis repellendus rerum ducimus odit
              similique cumque earum quos ex! Nulla corporis eligendi dolorem
              dolores, velit veritatis ullam. Provident unde fugiat delectus,
              odit ex aut quis quisquam ut repellendus eveniet hic id a
              perspiciatis? Distinctio non, illum, rerum tempore odit velit sunt
              soluta beatae rem dignissimos eveniet explicabo expedita?
              Blanditiis harum placeat laudantium ullam obcaecati consectetur
              explicabo, laboriosam ipsam cumque mollitia veritatis quo
              consequuntur dolorem atque dolore repellendus eius eos excepturi
              officia.
            </p>
          </div>
          <p className='font-semibold'>Sobota 25. září 2024, Farma Hájek</p>
        </div>
      </div> */}
    </Container>
  )
}
