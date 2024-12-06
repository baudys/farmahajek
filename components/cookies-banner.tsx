'use client'

import { useCookies } from '@/hooks/useCookies'
import { useLanguage } from '@/hooks/useLanguage'
import { Button } from './ui/button'
import { useEffect } from 'react'
import { Container } from './container'

export const CookiesBanner = () => {
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
        <div className='fixed bottom-0 left-0 z-[1112] w-screen origin-bottom bg-green'>
          <Container className='relative flex flex-col gap-8 py-4 lg:py-12'>
            <h3>
              {language === 'cs' && 'Povolit cookies pro analytické účely?'}
              {language === 'en' && 'Allow cookies for analytical purposes?'}
              {language === 'de' && 'Cookies für Analysezwecke zulassen?'}
            </h3>
            <div className='flex flex-col gap-4 md:flex-row'>
              <Button
                onClick={() => {
                  setCookiesEnabled()
                  closeCookiesPermanently()
                }}
                className='w-full rounded-2xl bg-white py-6 text-lg font-bold text-black hover:bg-zinc-100'
              >
                {language === 'cs' && 'Souhlasím'}
                {language === 'en' && 'Agree'}
                {language === 'de' && 'Zustimmen'}
              </Button>
              <Button
                onClick={closeCookiesPermanently}
                className='w-full rounded-2xl bg-white py-6 text-lg font-bold text-black hover:bg-zinc-100'
              >
                {language === 'cs' && 'Nesouhlasím'}
                {language === 'en' && 'Disagree'}
                {language === 'de' && 'Nicht einverstanden'}
              </Button>
              <Button
                onClick={closeCookies}
                className='w-full rounded-2xl bg-white py-6 text-lg font-bold text-black hover:bg-zinc-100'
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
