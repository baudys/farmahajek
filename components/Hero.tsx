'use client'

import Link from 'next/link'
import Container from './Container'
import Video from './Video'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useLanguage } from '@/hooks/useLanguage'
import { Lobster } from 'next/font/google'
import { motion } from 'framer-motion'

const lobster = Lobster({ subsets: ['latin'], weight: '400' })

const Hero = () => {
  const router = useRouter()
  const { language } = useLanguage(state => state)

  return (
    <header>
      <div className='sticky top-0 flex h-[90vh] lg:min-h-screen'>
        <Video />

        <div className='absolute bg-black/70 top-0 left-0 w-full h-full flex pt-32 lg:pt-0 lg:items-center lg:justify-center'>
          <Container>
            <div className='flex flex-col justify-center items-center gap-8 2xl:gap-12 p-1'>
              <div className='flex flex-col justify-center'>
                <motion.h1
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  className={`text-white text-2xl xl:text-5xl 2xl:text-7xl font-black uppercase text-center pt-1 ${lobster.className}`}
                >
                  {language === 'cs' && (
                    <>
                      Ryze čeští chovatelé
                      <br /> a farmáři
                    </>
                  )}
                  {language === 'en' && (
                    <>
                      PURELY CZECH BREEDERS <br /> AND FARMERS
                    </>
                  )}
                  {language === 'de' && (
                    <>
                      REIN TSCHECHISCHE ZÜCHTER
                      <br />
                      UND ZÜCHTER
                    </>
                  )}
                </motion.h1>
                <motion.span
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  className='text-3xl xl:text-5xl 2xl:text-7xl text-center'
                >
                  🙏🇨🇿🐣🐔🥚🥔
                </motion.span>
              </div>
              <motion.h2
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                className='text-zinc-300 text-lg xl:text-xl 2xl:text-2xl text-center font-light'
              >
                {language === 'cs' && (
                  <>
                    Našemu oboru se věnujeme{' '}
                    <span className='font-semibold'>již od roku 2000</span>,
                    můžeme Vám zajistit kvalitu a poctivost
                  </>
                )}
                {language === 'en' && (
                  <>
                    We have been in business{' '}
                    <span className='font-semibold'>since 2000</span>, we can
                    assure you quality and honesty
                  </>
                )}
                {language === 'de' && (
                  <>
                    Wir sind <span className='font-semibold'>seit 2000</span> im
                    Geschäft und können Ihnen Qualität und Ehrlichkeit
                    versichern.
                  </>
                )}
              </motion.h2>

              <Link
                href='https://eshop-farmahajek.vercel.app'
                target='_blank'
                className='text-brown font-bold lg:text-xl xl:text-2xl mt-4 xl:mt-0 xl:pb-6 cursor-pointer'
              >
                <motion.div
                  initial={{ scale: '25%' }}
                  animate={{ scale: '100%' }}
                  className='relative group'
                >
                  <Image
                    src='/hen/green.png'
                    width={300}
                    height={300}
                    alt='hen'
                    className='min-h-full w-[130px] md:w-[200px] group-hover:scale-105 transition'
                  />
                  <p className='absolute top-1/2 left-1/2 translate-x-[-40%] translate-y-[-60%] group-hover:text-black transition'>
                    E-SHOP
                  </p>
                </motion.div>
              </Link>
              <div
                className='flex flex-col bottom-5 absolute items-center cursor-pointer'
                onClick={() => router.push('#timeline')}
              >
                <motion.h3
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  className='xl:text-lg text-white pb-2'
                >
                  {language === 'cs' && <>zkoukni životní cestu slepičky</>}
                  {language === 'en' && (
                    <>explore the life journey of a chicken</>
                  )}
                  {language === 'de' && <>den Lebensweg eines Huhns erkunden</>}
                </motion.h3>
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
