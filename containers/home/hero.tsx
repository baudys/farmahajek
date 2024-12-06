'use client'

import Link from 'next/link'
import { Container } from '../../components/container'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useLanguage } from '@/hooks/useLanguage'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export const Hero = () => {
  const router = useRouter()
  const { language } = useLanguage((state) => state)

  const henSrcs = [
    '/slepicky/D109.webp',
    '/slepicky/D159.webp',
    '/slepicky/D853.webp',
  ]

  const videoRef = useRef<HTMLVideoElement>(null)

  const [currentHenIndex, setCurrentHenIndex] = useState(0)
  const [currentHenSrc, setCurrentHenSrc] = useState(henSrcs[0])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true
    }
  }, [])

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
        <video
          autoPlay
          ref={videoRef}
          loop
          muted
          playsInline
          className='absolute h-full w-full object-cover'
        >
          <source src='https://i.imgur.com/1Ml98Cw.mp4' />
        </video>

        <div className='absolute left-0 top-0 flex h-full w-full bg-black/60 pt-32 lg:items-center lg:justify-center lg:pt-0'>
          <Container>
            <div className='flex flex-col items-center justify-center p-1'>
              <motion.h1
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`mb-3 pt-1 text-center text-4xl font-black uppercase text-white lg:text-5xl xl:text-6xl 2xl:text-7xl`}
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
                className='mb-12 w-full text-center text-lg font-light text-zinc-300 lg:text-right xl:text-xl 2xl:mb-28'
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
                className='mt-4 cursor-pointer font-bold text-brown lg:text-xl xl:mt-0 xl:pb-6 xl:text-2xl'
              >
                <motion.div
                  initial={{ scale: '25%', opacity: 0 }}
                  animate={{ scale: '100%', opacity: 1 }}
                  className='group relative'
                >
                  <Image
                    src={currentHenSrc}
                    width={500}
                    height={500}
                    alt='hen'
                    className='min-h-full w-[230px] transition group-hover:rotate-12 group-hover:scale-105 md:w-[300px] xl:w-[350px]'
                  />
                  <p className='absolute left-1/2 top-1/2 translate-x-[-60%] translate-y-[-50%] rounded-md bg-green p-2 transition group-hover:rotate-12 group-hover:scale-[99%]'>
                    E-SHOP
                  </p>
                </motion.div>
              </Link>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className='absolute bottom-5 flex cursor-pointer flex-col items-center'
                onClick={() => router.push('#blog')}
              >
                <h3 className='pb-2 text-white xl:text-lg'>
                  {language === 'cs' && <>sleduj novinky</>}
                  {language === 'en' && <>watch the news</>}
                  {language === 'de' && <>Verfolgen Sie die Nachrichten</>}
                </h3>
                <FaLongArrowAltDown
                  size={40}
                  className='animate-bounce text-white'
                />
              </motion.div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}
