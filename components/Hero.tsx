'use client'

import Link from 'next/link'
import Container from './Container'
import Video from './Video'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useLanguage } from '@/hooks/useLanguage'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = () => {
  const router = useRouter()
  const { language } = useLanguage(state => state)

  const henSrcs = [
    '/slepicky/D109.webp',
    '/slepicky/D159.webp',
    '/slepicky/D853.webp',
  ]

  const [currentHenIndex, setCurrentHenIndex] = useState(0)
  const [currentHenSrc, setCurrentHenSrc] = useState(henSrcs[0])

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImageIndex = (currentHenIndex + 1) % henSrcs.length
      setCurrentHenIndex(nextImageIndex)
      setCurrentHenSrc(henSrcs[nextImageIndex])
    }, 3000)

    return () => clearInterval(interval)
  }, [currentHenIndex, henSrcs])

  return (
    <header>
      <div className='sticky top-0 flex h-[90vh] lg:min-h-screen'>
        <Video />

        <div className='absolute top-0 left-0 flex w-full h-full pt-32 bg-black/60 lg:pt-0 lg:items-center lg:justify-center'>
          <Container>
            <div className='flex flex-col items-center justify-center p-1'>
              <motion.h1
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`text-white text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-3 font-black uppercase text-center pt-1`}
              >
                {language === 'cs' && <>Ryze čeští chovatelé a farmáři</>}
                {language === 'en' && <>PURELY CZECH BREEDERS AND FARMERS</>}
                {language === 'de' && (
                  <>REIN TSCHECHISCHE ZÜCHTER UND ZÜCHTER</>
                )}
              </motion.h1>

              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className='w-full mb-12 text-lg font-light text-center text-zinc-300 xl:text-xl lg:text-right 2xl:mb-28'
              >
                {language === 'cs' && (
                  <>
                    V oboru
                    <span className='font-semibold'> již od roku 2000</span>
                  </>
                )}
                {language === 'en' && (
                  <>
                    In the industry
                    <span className='font-semibold'> since 2000</span>
                  </>
                )}
                {language === 'de' && (
                  <>
                    <span className='font-semibold'>seit 2000</span> in der
                    Branche tätig
                  </>
                )}
              </motion.h2>

              <Link
                href='https://eshop-farmahajek.cz'
                target='_blank'
                className='mt-4 font-bold cursor-pointer text-brown lg:text-xl xl:text-2xl xl:mt-0 xl:pb-6'
              >
                <motion.div
                  initial={{ scale: '25%', opacity: 0 }}
                  animate={{ scale: '100%', opacity: 1 }}
                  className='relative group'
                >
                  <Image
                    src={currentHenSrc}
                    width={500}
                    height={500}
                    alt='hen'
                    className='min-h-full w-[230px] md:w-[300px] xl:w-[350px] group-hover:scale-105 group-hover:rotate-12 transition'
                  />
                  <p className='absolute bg-green rounded-md p-2 top-1/2 left-1/2 translate-x-[-60%] translate-y-[-50%] transition group-hover:scale-[99%] group-hover:rotate-12'>
                    E-SHOP
                  </p>
                </motion.div>
              </Link>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className='absolute flex flex-col items-center cursor-pointer bottom-5'
                onClick={() => router.push('#timeline')}
              >
                <h3 className='pb-2 text-white xl:text-lg'>
                  {language === 'cs' && <>zkoukni životní cestu slepičky</>}
                  {language === 'en' && (
                    <>explore the life journey of a chicken</>
                  )}
                  {language === 'de' && <>den Lebensweg eines Huhns erkunden</>}
                </h3>
                <FaLongArrowAltDown
                  size={40}
                  className='text-white animate-bounce'
                />
              </motion.div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}

export default Hero
