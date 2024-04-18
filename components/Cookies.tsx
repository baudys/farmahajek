'use client'

import { useCookies } from '@/hooks/useCookies'
import { useLanguage } from '@/hooks/useLanguage'
import { Button } from './ui/button'
import { useEffect } from 'react'
import Container from './Container'

export const Cookies = () => {
  const { language } = useLanguage()
  const {
    isOpen,
    openCookies,
    closeCookies,
    closeCookiesPermanently,
    setCookiesEnabled,
  } = useCookies()

  useEffect(() => {
    if (!document.cookie.includes('cookiesClosed')) {
      openCookies()
    }
  }, [openCookies])

  return (
    <>
      {isOpen && (
        <div className='bg-green fixed w-screen left-0 bottom-0 z-[1112] origin-bottom'>
          <Container styles='relative flex flex-col gap-8 py-4 lg:py-12'>
            <h3>
              {language === 'cs' && 'Povolit cookies pro analytické účely?'}
              {language === 'en' && 'Allow cookies for analytical purposes?'}
              {language === 'de' && 'Cookies für Analysezwecke zulassen?'}
            </h3>
            <div className='flex flex-col md:flex-row gap-4'>
              <Button
                onClick={() => {
                  setCookiesEnabled()
                  closeCookiesPermanently()
                }}
                className='bg-white rounded-2xl py-6 text-lg text-black hover:bg-zinc-100 w-full font-bold'
              >
                {language === 'cs' && 'Souhlasím'}
                {language === 'en' && 'Agree'}
                {language === 'de' && 'Zustimmen'}
              </Button>
              <Button
                onClick={closeCookiesPermanently}
                className='bg-white rounded-2xl py-6 text-lg text-black hover:bg-zinc-100 w-full font-bold'
              >
                {language === 'cs' && 'Nesouhlasím'}
                {language === 'en' && 'Disagree'}
                {language === 'de' && 'Nicht einverstanden'}
              </Button>
              <Button
                onClick={closeCookies}
                className='bg-white rounded-2xl py-6 text-lg text-black hover:bg-zinc-100 w-full font-bold'
              >
                {language === 'cs' && 'Zavřít'}
                {language === 'en' && 'Close'}
                {language === 'de' && 'Schließen'}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </>
  )
}
