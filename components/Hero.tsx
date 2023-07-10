'use client'

import Link from 'next/link'
import Container from './Container'
import Video from './Video'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Hero = () => {
  const router = useRouter()

  return (
    <header>
      <div className='sticky top-0 flex h-[90vh] lg:min-h-screen'>
        <Video />

        <div className='absolute bg-black/70 top-0 left-0 w-full h-full flex pt-32 lg:pt-0 lg:items-center lg:justify-center'>
          <Container>
            <div className='flex flex-col justify-center items-center gap-8 lg:gap-12 p-1'>
              <div className='flex flex-col justify-center'>
                <h1 className='text-white text-2xl xl:text-5xl 2xl:text-7xl font-black uppercase text-center'>
                  Ryze čeští chovatelé
                  <br /> a farmáři
                </h1>
                <span className='text-3xl xl:text-5xl 2xl:text-7xl text-center'>
                  🙏🇨🇿🐣🐔🥚🥔
                </span>
              </div>
              <h2 className='text-zinc-300 text-lg xl:text-xl 2xl:text-2xl text-center font-light'>
                Našemu oboru se věnujeme{' '}
                <span className='font-semibold'>již od roku 2000</span>, můžeme
                Vám zajistit kvalitu a poctivost
              </h2>

              <Link
                href='https://eshop-farmahajek.vercel.app'
                target='_blank'
                className='text-brown font-bold p-4 text-xl xl:text-2xl 2xl:text-3xl -mt-7 md:mt-4 xl:mt-0 xl:pb-10 cursor-pointer'
              >
                <div className='relative'>
                  <Image
                    src='/hen.png'
                    width={300}
                    height={300}
                    alt='hen'
                    className='w-[170px] h-[170px] lg:w-[220px] lg:h-[220px] 2xl:h-[270px] 2xl:w-[270px]'
                  />
                  <p className='absolute top-1/2 left-1/2 translate-x-[-50%]'>
                    E-SHOP
                  </p>
                </div>
              </Link>
              <div
                className='flex flex-col bottom-5 absolute items-center cursor-pointer'
                onClick={() => router.push('#timeline')}
              >
                <h3 className='xl:text-lg text-white pb-2'>
                  zkoukni životní cestu slepičky
                </h3>
                <FaLongArrowAltDown
                  size={40}
                  className='text-white animate-bounce'
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}

export default Hero
